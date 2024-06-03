import { component$ } from "@builder.io/qwik";

type Props = {
  name: string;
  subtitle?: string;
  icon: string;
  value: number;
  onIncrement$: () => void;
  onDecrement$: () => void;
  min: number;
};

export default component$<Props>((props) => {
  return (
    <div class="inline-block rounded border p-2">
      <div class="flex items-center gap-2">
        <div class="text-2xl">{props.icon}</div>
        <div>
          <div class="text-lg font-semibold">{props.name}</div>
          {props.subtitle && (
            <div class="-mt-1.5 text-sm">{props.subtitle}</div>
          )}
        </div>
      </div>
      <div class="flex items-center justify-center text-3xl font-bold">
        <button
          class="px-4 py-1 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={props.value <= props.min}
          onClick$={props.onDecrement$}
        >
          -
        </button>
        <span class="mx-2">{props.value}</span>
        <button
          class="px-4 py-1 hover:bg-gray-100"
          onClick$={props.onIncrement$}
        >
          +
        </button>
      </div>
    </div>
  );
});
