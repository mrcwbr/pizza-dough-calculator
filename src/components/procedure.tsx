import { component$ } from "@builder.io/qwik";
import Section from "~/components/section";

export default component$(() => {
  return (
    <Section
      title="📝 Procedure"
      subtitle="How to make the perfect pizza dough step by step."
    >
      <ol class="mt-4 list-inside list-decimal">
        <li>Mix flour and water and knead lightly</li>
        <li>Let it sit covered at room temperature for 3-4 hours</li>
        <li>Add salt and yeast and knead for 15 minutes</li>
        <li>Let it rest at room temperature for 16 hours</li>
        <li>Shape into pizza balls and let them rest for 10 hours</li>
        <li>Wrap the balls with Semola</li>
        <li>Form the pizza</li>
        <li>Bake the pizza in the oven</li>
        <li>Enjoy ❤️</li>
      </ol>
    </Section>
  );
});
