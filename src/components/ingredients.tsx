import { component$ } from '@builder.io/qwik';
import { round } from '~/utils';
import Section from '~/components/section';
import Ingredient from '~/components/ingredient';
import { FLOUR_URL, SEA_SALT_URL, SEMOLA_URL } from '~/constants';

type Props = {
  pizzas: number;
  gram: number;
};

export default component$<Props>((props) => {
  const ingredients: {
    title: string;
    image: string;
    amountPer240gPizza: number;
    unit: string;
    precision: number;
    url?: string;
  }[] = [
    {
      title: 'Pizzamehl Nuvola Caputo',
      amountPer240gPizza: 1000 / 7,
      unit: 'g',
      precision: 0,
      url: FLOUR_URL,
      image:
        'https://www.waldispizza.de/media/image/product/34/lg/pizzamehl-caputo-nuvola1kg.webp',
    },
    {
      title: 'Semola Caputo',
      amountPer240gPizza: 20,
      unit: 'g',
      precision: 0,
      url: SEMOLA_URL,
      image:
        'https://centro-italia.de/wp-content/uploads/2021/03/51440-Caputo-Semola-Grano-Duro-Mehl.png',
    },
    {
      title: 'Ice Cold Water',
      amountPer240gPizza: 660 / 7,
      unit: 'ml',
      precision: 0,
      image:
        'https://previews.123rf.com/images/urfingus/urfingus1712/urfingus171200320/91788220-ice-cubes-falling-into-the-water-isolated-on-a-white-background.jpg',
    },
    {
      title: 'Sea Salt',
      amountPer240gPizza: 30 / 7,
      precision: 0,
      url: SEA_SALT_URL,
      unit: 'g',
      image:
        'https://m.media-amazon.com/images/I/71jYEeBsTrL._AC_UF894,1000_QL80_.jpg',
    },
    {
      title: 'Fresh Yeast',
      amountPer240gPizza: 1 / 7,
      precision: 2,
      unit: 'g',
      image:
        'https://images.services.kitchenstories.io/NfbFfgTtu7L5a3xshbz567RsceI=/3840x0/filters:quality(80)/images.kitchenstories.io/wagtailOriginalImages/A650-photo-content-2.jpg',
    },
    {
      title: 'Tomato Sauce',
      amountPer240gPizza: 80,
      precision: 0,
      unit: 'g',
      url: 'https://www.gepps.de/de/sortiment/pesto-pasta/pastasaucen/bio+salsa+pronta+dattel+tomaten/?card=2297',
      image:
        'https://www.gepps.de/userdata/dcshop/images/thumb_3/881184_gepps_sugo_bio_datteltom.png',
    },
  ];

  return (
    <Section
      class="bg-gray-50"
      title="🛒 Shopping List"
      subtitle="Don't forget to pick up these items!"
    >
      <div class="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {ingredients.map((ingredient, index) => (
          <Ingredient
            key={index}
            url={ingredient.url}
            title={ingredient.title}
            image={ingredient.image}
            unit={ingredient.unit}
            value={round(
              (ingredient.amountPer240gPizza / 240) * props.gram * props.pizzas,
              ingredient.precision
            )}
          />
        ))}
      </div>
    </Section>
  );
});
