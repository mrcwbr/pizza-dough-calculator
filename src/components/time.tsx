import { component$ } from '@builder.io/qwik';

type Props = {
  hours: number;
};

export default component$<Props>((props) => {
  return (
    <kbd class="rounded-md border border-gray-200 bg-gray-100 px-2 py-1 text-xs font-semibold">
      ⏱️{' '}
      {props.hours >= 1
        ? `${props.hours} hours`
        : `${props.hours * 60} minutes`}
    </kbd>
  );
});
