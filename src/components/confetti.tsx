import { component$ } from '@builder.io/qwik';
import confetti from 'canvas-confetti';

type Props = {
  title: string;
};

export default component$<Props>((props) => {
  return (
    <button
      class="rounded bg-blue-500 px-12 py-4 text-xl text-white shadow-md transition-colors hover:bg-blue-600"
      onClick$={async () => {
        const count = 200;
        const defaults = {
          origin: { y: 0.7 },
        };

        function fire(
          particleRatio: number,
          opts: {
            spread: number;
            scalar?: number;
            startVelocity?: number;
            decay?: number;
          }
        ) {
          confetti({
            ...defaults,
            ...opts,
            particleCount: Math.floor(count * particleRatio),
          });
        }

        fire(0.25, {
          spread: 26,
          startVelocity: 55,
        });
        fire(0.2, {
          spread: 60,
        });
        fire(0.35, {
          spread: 100,
          decay: 0.91,
          scalar: 0.8,
        });
        fire(0.1, {
          spread: 120,
          startVelocity: 25,
          decay: 0.92,
          scalar: 1.2,
        });
        fire(0.1, {
          spread: 120,
          startVelocity: 45,
        });
      }}
    >
      {props.title}
    </button>
  );
});
