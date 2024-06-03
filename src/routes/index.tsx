import { component$, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Ingredients from "~/components/ingredients";
import Counter from "~/components/counter";
import Procedure from "~/components/procedure";
import Section from "~/components/section";

export default component$(() => {
  const state = useStore({ pizzas: 2, gram: 240 });

  return (
    <>
      <Section
        title="🎉 Party"
        subtitle="For how many people do you want to make pizza and how much dough do you want to use per pizza?"
      >
        <div class="mt-4 flex gap-4">
          <Counter
            name="Pizzas"
            icon="🍕"
            value={state.pizzas}
            subtitle="for your Party"
            onDecrement$={() => (state.pizzas -= 1)}
            onIncrement$={() => (state.pizzas += 1)}
            min={1}
          />
          <Counter
            name="Gramm"
            icon="⚖️"
            value={state.gram}
            subtitle="per Pizza"
            min={10}
            onDecrement$={() => (state.gram -= 10)}
            onIncrement$={() => (state.gram += 10)}
          />
        </div>
      </Section>

      <Ingredients pizzas={state.pizzas} gram={state.gram} />

      <Procedure />
    </>
  );
});

export const head: DocumentHead = {
  title: "My Pizza Calculator",
  meta: [
    {
      name: "description",
      content: "Calculate the ingredients for your pizza dough.",
    },
  ],
};
