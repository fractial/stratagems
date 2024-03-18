export type Direction = 'down' | 'left' | 'right' | 'up';
export type Stratagem = {
  name: string;
  variant: (typeof variant)[keyof typeof variant];
  keys: Direction[];
};

const variant = {
  defensive: '#53823e',
  mission: '#ab8e45',
  offensive: '#cb4c3e',
  supply: '#4fb3d0',
};

export const stratagems: Stratagem[] = [
  {
    name: 'Reinforce',
    variant: variant.mission,
    keys: ['up', 'down', 'right', 'left', 'up'],
  },
  {
    name: 'NUX-223 Hellbomb',
    variant: variant.mission,
    keys: ['up', 'left', 'right', 'down', 'up', 'down'],
  },
  {
    name: 'ME-1 Sniffer Metal Detector',
    variant: variant.mission,
    keys: ['down', 'down', 'right', 'up'],
  },
  {
    name: 'Emergency Beacon',
    variant: variant.mission,
    keys: ['up', 'down', 'right', 'up'],
  },
];

export function getRandomStratagem(): Stratagem {
  const index: number = Math.floor(Math.random() * stratagems.length);
  return stratagems[index];
}
