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

  useEffect(() => {
    setStratagem(getRandomStratagem());
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
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
        setStratagemIndex(0);

        let newStratagem = getRandomStratagem();
        while (newStratagem === stratagem) {
          newStratagem = getRandomStratagem();
        }
        setStratagem(newStratagem);
      }, 100);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [stratagem, stratagemIndex]);

  const getDirection = (key: string): string | undefined => {
    switch (key) {
      case 'ArrowDown':
        return 'down';
      case 'ArrowLeft':
        return 'left';
      case 'ArrowRight':
        return 'right';
      case 'ArrowUp':
        return 'up';
    }
  };

  const getRotation = (direction: Direction): string => {
    switch (direction) {
      case 'down':
        return 'rotate(180deg)';
      case 'left':
        return 'rotate(-90deg)';
      case 'right':
        return 'rotate(90deg)';
      case 'up':
        return 'rotate(0deg)';
    }
  };

  return (
    <main className="h-screen">
      <div className="absolute flex items-center justify-center gap-2 p-4">
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill={stratagem?.variant}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.6464 0.625618C12.8417 0.430355 13.1583 0.430355 13.3536 0.625618L25.3744 12.6464C25.5696 12.8417 25.5696 13.1583 25.3744 13.3535L20.4246 18.3033C20.2294 18.4985 19.9128 18.4985 19.7175 18.3033L7.6967 6.28247C7.50144 6.08721 7.50144 5.77063 7.6967 5.57536L12.6464 0.625618ZM12.6464 14.7678C12.8417 14.5725 13.1583 14.5725 13.3536 14.7678L18.3033 19.7175C18.4986 19.9128 18.4986 20.2293 18.3033 20.4246L13.3536 25.3744C13.1583 25.5696 12.8417 25.5696 12.6464 25.3744L7.6967 20.4246C7.50144 20.2293 7.50144 19.9128 7.6967 19.7175L12.6464 14.7678ZM6.28249 7.69669C6.08722 7.50142 5.77064 7.50142 5.57538 7.69669L0.625632 12.6464C0.43037 12.8417 0.430369 13.1583 0.625632 13.3535L5.57538 18.3033C5.77064 18.4985 6.08722 18.4985 6.28249 18.3033L11.2322 13.3535C11.4275 13.1583 11.4275 12.8417 11.2322 12.6464L6.28249 7.69669Z" />
        </svg>
        <h1>{stratagem?.name}</h1>
        <p>{stratagemIndex}</p>
      </div>
      <div className="flex flex-1 items-center justify-center gap-2 h-screen">
        {stratagem &&
          stratagem?.keys.map((direction, index) => (
            <div
              key={index}
              style={{
                fill: index < stratagemIndex ? 'green' : '#d6d7d6',
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
    </main>
  );
}
