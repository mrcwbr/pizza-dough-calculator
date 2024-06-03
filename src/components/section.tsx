import { component$ } from "@builder.io/qwik";

type Props = {
  title: string;
  subtitle?: string;
};

export default component$<Props>((props) => {
  return (
    <>
      <h2 class="text-3xl font-bold">{props.title}</h2>
      <p class="-mt-1 text-sm text-gray-600">{props.subtitle}</p>
    </>
  );
});
