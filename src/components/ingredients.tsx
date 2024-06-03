import { component$ } from "@builder.io/qwik";
import { round } from "~/utils";
import Section from "~/components/section";

type Props = {
  pizzas: number;
  gram: number;
};

export default component$<Props>((props) => {
  const ingredients = [
    {
      title: "Pizzamehl Nuvola Caputo",
      amountPer240gPizza: 1000 / 7,
      unit: "g",
      precision: 0,
      url: "https://www.gustini.de/caputo-pizzamehl-nuvola.html",
      image:
        "https://www.waldispizza.de/media/image/product/34/lg/pizzamehl-caputo-nuvola1kg.webp",
    },
    {
      title: "Ice Cold Water", // todo translate
      amountPer240gPizza: 660 / 7,
      unit: "ml",
      precision: 0,
      url: "https://www.gustini.de/caputo-pizzamehl-nuvola.html", // todo remove
      image:
        "https://previews.123rf.com/images/urfingus/urfingus1712/urfingus171200320/91788220-ice-cubes-falling-into-the-water-isolated-on-a-white-background.jpg",
    },
    {
      title: "Sea Salt",
      amountPer240gPizza: 30 / 7,
      precision: 0,
      unit: "g",
      url: "https://www.gustini.de/caputo-pizzamehl-nuvola.html", // todo change
      image:
        "https://m.media-amazon.com/images/I/71jYEeBsTrL._AC_UF894,1000_QL80_.jpg",
    },
    {
      title: "Fresh Yeast",
      amountPer240gPizza: 1 / 7,
      precision: 2,
      unit: "g",
      url: "https://www.gustini.de/caputo-pizzamehl-nuvola.html", // todo change
      image:
        "https://images.services.kitchenstories.io/NfbFfgTtu7L5a3xshbz567RsceI=/3840x0/filters:quality(80)/images.kitchenstories.io/wagtailOriginalImages/A650-photo-content-2.jpg",
    },
  ] as const;

  return (
    <div class="bg-gray-100">
      <div class="mx-auto max-w-7xl px-4 py-12">
        <Section
          title="🛒 Shopping List"
          subtitle="Don't forget to pick up these items!"
        />
        <div class="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ingredients.map((ingredient, index) => (
            <div
              class="flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm"
              key={index}
            >
              <div class="flex-shrink-0">
                <img
                  src={ingredient.image}
                  alt={ingredient.title}
                  width={64}
                  height={64}
                  class="rounded mix-blend-multiply"
                />
              </div>
              <div class="flex-1 space-y-1">
                <a
                  href={ingredient.url}
                  target="_blank"
                  class="font-semibold hover:underline"
                >
                  {ingredient.title}
                </a>
                <div class="text-muted-foreground text-sm">
                  {`${round((ingredient.amountPer240gPizza / 240) * props.gram * props.pizzas, ingredient.precision)} ${ingredient.unit}`}
                </div>
              </div>
              {/*todo handle id and checked */}
              <input
                checked
                id="checked-checkbox"
                type="checkbox"
                value=""
                class="flex-shrink-0"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});
