import { component$, Slot } from "@builder.io/qwik";

type Props = {
  href: string;
  blank?: boolean;
};

export default component$<Props>((props) => {
  return (
    <a
      class="inline-flex items-center gap-2 font-semibold underline transition-colors hover:text-blue-500"
      href={props.href}
      target={props.blank ? "_blank" : undefined}
    >
      <Slot />
    </a>
  );
});
