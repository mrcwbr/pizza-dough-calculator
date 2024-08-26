import { component$ } from '@builder.io/qwik';
import Section from '~/components/section';
import Link from '~/components/link';
import Kbd from '~/components/kbd';
import Time from '~/components/time';

export default component$(() => {
  return (
    <Section
      title="📝 Procedure"
      subtitle="How to make the perfect pizza dough step by step."
    >
      <ol class="mt-4 list-inside list-decimal space-y-1">
        <li>
          Mix <Kbd content="🌾 flour" /> and <Kbd content="💦 water" /> and
          knead lightly
        </li>
        <li>
          Let it sit covered at room temperature for <Time hours={3} />
        </li>
        <li>
          Add <Kbd content="🧂 sea salt" /> and <Kbd content="📦 yeast" /> and
          knead for <Time hours={1 / 6} />
        </li>
        <li>
          Let it rest at room temperature for <Time hours={16} />
        </li>
        <li>
          Shape into pizza balls and let them rest for <Time hours={10} />
        </li>
        <li>
          Wrap the balls with <Kbd content="🍞 Semola" />
        </li>
        <li>Form the pizza</li>
        <li>
          Bake the pizza in the oven (e.g.{' '}
          <Link
            href="https://de.ooni.com/collections/ovens/products/ooni-koda-16"
            blank
          >
            Ooni Koda 16
          </Link>
          )
        </li>
      </ol>
    </Section>
  );
});
