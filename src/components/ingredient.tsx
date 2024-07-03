import { component$, useSignal } from '@builder.io/qwik';
import Link from '~/components/link';

type Props = {
  title: string;
  unit: string;
  image: string;
  url?: string;
  value: number;
};

export default component$<Props>((props) => {
  const checked = useSignal(false);

  return (
    <label class="flex cursor-pointer items-center gap-4 rounded-lg bg-white p-4 shadow-sm transition-all hover:shadow-md">
      <div class="flex-shrink-0">
        <img
          src={props.image}
          alt={props.title}
          width={64}
          height={64}
          class="rounded mix-blend-multiply"
        />
      </div>
      <div class="flex-1">
        {props.url ? (
          <Link href={props.url} blank>
            {props.title}
          </Link>
        ) : (
          <div class="font-semibold">{props.title}</div>
        )}
        <div class="text-muted-foreground text-sm">
          {`${props.value} ${props.unit}`}
        </div>
      </div>
      <input
        checked={checked.value}
        type="checkbox"
        class="h-5 w-5 flex-shrink-0 cursor-pointer"
      />
    </label>
  );
});
