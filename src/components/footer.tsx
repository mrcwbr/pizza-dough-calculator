import { component$ } from "@builder.io/qwik";
import QwikLogo from "~/media/qwik.svg";
import TailwindLogo from "~/media/tailwind.svg";
import GithubLogo from "~/media/github.svg";

export default component$(() => {
  const imageSize = 24;
  return (
    <footer class="bg-gray-50">
      <div class="mx-auto flex max-w-7xl gap-8 p-4">
        <a
          class="flex items-center gap-2 font-semibold underline transition-colors hover:text-blue-500"
          href="https://qwik.dev/"
          target="_blank"
        >
          <img
            src={QwikLogo}
            alt="Qwik Logo"
            width={imageSize}
            height={imageSize}
          />
          Build with Quick
        </a>

        <a
          class="flex items-center gap-2 font-semibold underline transition-colors hover:text-blue-500"
          href="https://tailwindcss.com/"
          target="_blank"
        >
          <img
            src={TailwindLogo}
            alt="Tailwind Logo"
            width={imageSize}
            height={imageSize}
          />
          Styled with Tailwind
        </a>

        <a
          class="flex items-center gap-2 font-semibold underline transition-colors hover:text-blue-500"
          href="https://github.com/mrcwbr/pizza-dough-calculator"
          target="_blank"
        >
          <img
            src={GithubLogo}
            alt="Github Logo"
            width={imageSize}
            height={imageSize}
          />
          Opensource on Github
        </a>
      </div>
    </footer>
  );
});
