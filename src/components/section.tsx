import { component$, Slot } from '@builder.io/qwik';

type Props = {
  title: string;
  subtitle?: string;
  class?: string;
};

export default component$<Props>((props) => {
  return (
    <div class={props.class}>
      <div class="mx-auto max-w-7xl px-4 py-20">
        <h2 class="text-3xl font-bold">{props.title}</h2>
        <div class="-mt-1 text-sm text-gray-600">{props.subtitle}</div>
        <div>
          <Slot />
        </div>
      </div>
    </div>
  );
});
