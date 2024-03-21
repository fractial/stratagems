'use client';

import {
  getRandomStratagem,
  type Direction,
  type Stratagem,
} from '@/app/stratagems';
import { useEffect, useState } from 'react';

export default function Home() {
  const [stratagem, setStratagem] = useState<Stratagem>();
  const [stratagemIndex, setStratagemIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    setStratagem(getRandomStratagem());
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      event.preventDefault();

      if (stratagemIndex === stratagem?.keys.length) return; // Failsave

      const key = getDirection(event.key);
      const currentKey = stratagem?.keys?.[stratagemIndex];

      if (key !== currentKey) {
        setStratagemIndex(0);
        return;
      }

      setStratagemIndex((index) => index + 1);

      if (stratagemIndex + 1 !== stratagem?.keys.length) return;

      setTimeout(() => {
        setScore((score) =>
          Math.round(score + Math.pow(stratagemIndex, 2) / 2)
        ); // SCORE

        setStratagemIndex(0);

        setStratagem(getRandomStratagem());
      }, 100);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [stratagem, stratagemIndex]);

  const getDirection = (key: string): string | undefined =>
    ({
      ArrowDown: 'down',
      s: 'down',
      ArrowLeft: 'left',
      a: 'left',
      ArrowRight: 'right',
      d: 'right',
      ArrowUp: 'up',
      w: 'up',
    }[key]);

  const getRotation = (direction: Direction): string =>
    ({
      down: 'rotate(180deg)',
      left: 'rotate(-90deg)',
      right: 'rotate(90deg)',
      up: 'rotate(0deg)',
    }[direction]);

  // #f8df46 d6d7d6 32392d

  return (
    <main className="h-screen font-mono">
      <div className="w-screen absolute flex items-center justify-start gap-2 p-4">
        <div className="w-8 h-8 flex items-center justify-center bg-[--accent-hex] fill-[#32392d] rounded">
          <svg
            width="16"
            height="16"
            viewBox="0 0 78 78"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M28.7368 0L8.21053 13V46L0 56L17.4474 70L20.5263 68L28.7368 78H49.2632L57.4737 68L60.5526 70L78 56L69.7895 46V13L49.2632 0H28.7368ZM22 59C26.4183 59 30 55.4183 30 51C30 46.5817 26.4183 43 22 43C17.5817 43 14 46.5817 14 51C14 55.4183 17.5817 59 22 59ZM56 59C60.4183 59 64 55.4183 64 51C64 46.5817 60.4183 43 56 43C51.5817 43 48 46.5817 48 51C48 55.4183 51.5817 59 56 59ZM39 58L45 66L43 68L39 66L35 68L33 66L39 58Z"
            />
          </svg>
        </div>
        <h1>Stratagem Hero</h1>
        <p className="ml-auto">Score: {score}</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 h-screen">
        <div
          className="flex items-center gap-2 font-mono"
          style={{ fill: stratagem?.variant }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 26 26"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.9987 25.9472C15.4495 26.0056 15 25.5523 15 25V1.00001C15 0.447729 15.4495 -0.0055396 15.9987 0.0528709C21.6058 0.649234 26 6.21816 26 13C26 19.7819 21.6058 25.3508 15.9987 25.9472ZM10.0013 25.9472C10.5505 26.0056 11 25.5523 11 25V1.00003C11 0.447743 10.5505 -0.00552602 10.0013 0.0528845C4.39418 0.649247 0 6.21818 0 13C0 19.7819 4.39418 25.3508 10.0013 25.9472Z"
            />
          </svg>
          <p>{stratagem?.name}</p>
        </div>
        <div className="flex gap-2">
          {stratagem &&
            stratagem?.keys.map((direction, index) => (
              <div
                key={index}
                style={{
                  fill: index < stratagemIndex ? '#1a65c7' : '#d6d7d6',
                  transform: getRotation(direction),
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 9.5C4 9.22386 3.77614 9 3.5 9H0.5C0.223858 9 0 8.77614 0 8.5V7.45377C0 7.16541 0.12448 6.89108 0.341495 6.70119L7.3415 0.576191C7.71852 0.246293 8.28148 0.246294 8.6585 0.576192L15.6585 6.70119C15.8755 6.89108 16 7.16541 16 7.45377V8.5C16 8.77614 15.7761 9 15.5 9H12.5C12.2239 9 12 9.22386 12 9.5V15.5C12 15.7761 11.7761 16 11.5 16H4.5C4.22386 16 4 15.7761 4 15.5V9.5Z" />
                </svg>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
