import { component$ } from '@builder.io/qwik';

type Props = {
  title: string;
};

export default component$<Props>((props) => {
  return (
    <button
      class="rounded bg-blue-500 px-12 py-4 text-xl text-white shadow-md transition-colors hover:bg-blue-600"
      onClick$={async () => {
        function loadConfetti() {
          return new Promise<any>((resolve, reject) => {
            if ((globalThis as any).confetti) {
              return resolve((globalThis as any).confetti as any);
            }
            const script = document.createElement('script');
            script.src =
              'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js';
            script.onload = () => resolve((globalThis as any).confetti as any);
            script.onerror = reject;
            document.head.appendChild(script);
            script.remove();
          });
        }

        const confetti = await loadConfetti();

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
