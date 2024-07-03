import { component$ } from '@builder.io/qwik';
import QwikLogo from '~/media/qwik.svg';
import TailwindLogo from '~/media/tailwind.svg';
import GithubLogo from '~/media/github.svg';
import Link from '~/components/link';

export default component$(() => {
  const imageSize = 24;
  return (
    <footer class="bg-gray-50">
      <div class="mx-auto flex max-w-7xl gap-8 p-4">
        <Link href="https://qwik.dev/" blank>
          <img
            src={QwikLogo}
            alt="Qwik Logo"
            width={imageSize}
            height={imageSize}
          />
          Build with Quick
        </Link>

        <Link href="https://tailwindcss.com/" blank>
          <img
            src={TailwindLogo}
            alt="Tailwind Logo"
            width={imageSize}
            height={imageSize}
          />
          Styled with Tailwind
        </Link>

        <Link href="https://github.com/mrcwbr/pizza-dough-calculator" blank>
          <img
            src={GithubLogo}
            alt="Github Logo"
            width={imageSize}
            height={imageSize}
          />
          Opensource on Github
        </Link>
      </div>
    </footer>
  );
});
