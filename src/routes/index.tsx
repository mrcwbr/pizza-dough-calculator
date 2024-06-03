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
      <div class="mx-auto max-w-7xl px-4 py-12">
        <Section
          title="Setup"
          subtitle="For how many people do you want to make pizza and how much dough do you want to use per pizza?"
        />
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
      </div>
      <Ingredients pizzas={state.pizzas} gram={state.gram} />
      <Procedure />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
