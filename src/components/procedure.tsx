import { component$ } from '@builder.io/qwik';
import Section from '~/components/section';
import Link from '~/components/link';
import { FLOUR_URL, SEA_SALT_URL, SEMOLA_URL } from '~/constants';

export default component$(() => {
  return (
    <Section
      title="📝 Procedure"
      subtitle="How to make the perfect pizza dough step by step."
    >
      <ol class="mt-4 list-inside list-decimal">
        <li>
          Mix{' '}
          <Link href={FLOUR_URL} blank>
            🌾 flour
          </Link>{' '}
          and 💦 water and knead lightly
        </li>
        <li>Let it sit covered at room temperature for ⏳ 3 hours</li>
        <li>
          Add{' '}
          <Link href={SEA_SALT_URL} blank>
            🧂 sea salt
          </Link>{' '}
          and 📦 yeast and knead for ⏳ 15 minutes
        </li>
        <li>Let it rest at room temperature for ⏳ 16 hours</li>
        <li>Shape into pizza balls and let them rest for ⏳ 10 hours</li>
        <li>
          Wrap the balls with{' '}
          <Link href={SEMOLA_URL} blank>
            Semola
          </Link>
        </li>
        <li>Form the pizza</li>
        <li>
          🧑‍🍳 Bake the pizza in the{' '}
          <Link
            href="https://de.ooni.com/collections/ovens/products/ooni-koda-16"
            blank
          >
            Ooni Koda 16
          </Link>
        </li>
      </ol>
    </Section>
  );
});
