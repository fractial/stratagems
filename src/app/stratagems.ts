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
  // DEFENSIVE
  {
    name: 'E/MG-101 HMG Emplacement',
    variant: variant.defensive,
    keys: ['down', 'up', 'left', 'right', 'right', 'left'],
  },
  {
    name: 'FX-12 Shield Generator Relay',
    variant: variant.defensive,
    keys: ['down', 'down', 'left', 'right', 'left', 'right'],
  },
  {
    name: 'A/ARC-3 Tesla Tower',
    variant: variant.defensive,
    keys: ['down', 'up', 'right', 'up', 'left', 'right'],
  },
  {
    name: 'MD-6 Anti-Personnel Minefield',
    variant: variant.defensive,
    keys: ['down', 'left', 'up', 'right'],
  },
  {
    name: 'MD-I4 Incendiary Mines',
    variant: variant.defensive,
    keys: ['down', 'left', 'left', 'down'],
  },
  {
    name: 'A/MG-43 Machine Gun Sentry',
    variant: variant.defensive,
    keys: ['down', 'up', 'right', 'right', 'up'],
  },
  {
    name: 'A/G-16 Gatling Sentry',
    variant: variant.defensive,
    keys: ['down', 'up', 'right', 'left'],
  },
  {
    name: 'A/M-12 Mortar Sentry',
    variant: variant.defensive,
    keys: ['down', 'up', 'right', 'right', 'down'],
  },
  {
    name: 'A/AC-8 Autocannon Sentry',
    variant: variant.defensive,
    keys: ['down', 'up', 'right', 'up', 'left', 'up'],
  },
  {
    name: 'A/MLS-4X Rocket Sentry',
    variant: variant.defensive,
    keys: ['down', 'up', 'right', 'right', 'left'],
  },
  {
    name: 'A/M-23 EMS Mortar Sentry',
    variant: variant.defensive,
    keys: ['down', 'up', 'right', 'down', 'right'],
  },
  // MISSION
  {
    name: 'Reinforce',
    variant: variant.mission,
    keys: ['up', 'down', 'right', 'left', 'up'],
  },
  {
    name: 'SOS Beacon',
    variant: variant.mission,
    keys: ['up', 'down', 'right', 'up'],
  },
  {
    name: 'Resupply',
    variant: variant.mission,
    keys: ['down', 'down', 'up', 'right'],
  },
  {
    name: 'NUX-223 Hellbomb',
    variant: variant.mission,
    keys: ['up', 'left', 'right', 'down', 'up', 'down'],
  },
  {
    name: 'SSSD Delivery',
    variant: variant.mission,
    keys: ['down', 'down', 'down', 'up', 'up'],
  },
  {
    name: 'Seismic Probe',
    variant: variant.mission,
    keys: ['up', 'up', 'left', 'right', 'down', 'down'],
  },
  {
    name: 'Upload Data',
    variant: variant.mission,
    keys: ['down', 'down', 'up', 'up', 'up'],
  },
  {
    name: 'Eagle Rearm',
    variant: variant.mission,
    keys: ['up', 'up', 'left', 'up', 'right'],
  },
  {
    name: 'Illumination Flare',
    variant: variant.mission,
    keys: ['right', 'right', 'left', 'left'],
  },
  {
    name: 'SEAF Artillery',
    variant: variant.mission,
    keys: ['right', 'up', 'up', 'down'],
  },
  {
    name: 'Super Earth Flag',
    variant: variant.mission,
    keys: ['down', 'up', 'down', 'up'],
  },
  // OFFENSIVE
  {
    name: 'Orbital Gatling Barrage',
    variant: variant.offensive,
    keys: ['right', 'down', 'left', 'up', 'up'],
  },
  {
    name: 'Orbital Airburst Strike',
    variant: variant.offensive,
    keys: ['right', 'right', 'right'],
  },
  {
    name: 'Orbital 120MM HE Barrage',
    variant: variant.offensive,
    keys: ['right', 'right', 'down', 'left', 'right', 'down'],
  },
  {
    name: 'Orbital 380MM HE Barrage',
    variant: variant.offensive,
    keys: ['right', 'down', 'up', 'up', 'left', 'down', 'down'],
  },
  {
    name: 'Orbital Walking Barrage',
    variant: variant.offensive,
    keys: ['right', 'down', 'right', 'down', 'right', 'down'],
  },
  {
    name: 'Orbital Laser',
    variant: variant.offensive,
    keys: ['right', 'down', 'up', 'right', 'down'],
  },
  {
    name: 'Orbital Railcannon Strike',
    variant: variant.offensive,
    keys: ['right', 'up', 'down', 'down', 'right'],
  },
  {
    name: 'Orbital Precision Strike',
    variant: variant.offensive,
    keys: ['right', 'right', 'up'],
  },
  {
    name: 'Orbital Gas Strike',
    variant: variant.offensive,
    keys: ['right', 'right', 'down', 'right'],
  },
  {
    name: 'Orbital EMS Strike',
    variant: variant.offensive,
    keys: ['right', 'right', 'left', 'down'],
  },
  {
    name: 'Orbital Smoke Strike',
    variant: variant.offensive,
    keys: ['right', 'right', 'down', 'up'],
  },
  {
    name: 'Eagle Strafing Run',
    variant: variant.offensive,
    keys: ['up', 'right', 'right'],
  },
  {
    name: 'Eagle Airstrike',
    variant: variant.offensive,
    keys: ['up', 'right', 'down', 'right'],
  },
  {
    name: 'Eagle Cluster Bomb',
    variant: variant.offensive,
    keys: ['up', 'right', 'down', 'down', 'right'],
  },
  {
    name: 'Eagle Napalm Airstrike',
    variant: variant.offensive,
    keys: ['up', 'right', 'down', 'up'],
  },
  {
    name: 'Eagle Smoke Strike',
    variant: variant.offensive,
    keys: ['up', 'right', 'up', 'down'],
  },
  {
    name: 'Eagle 110MM Rocket Pods',
    variant: variant.offensive,
    keys: ['up', 'right', 'up', 'left'],
  },
  {
    name: 'Eagle 500kg Bomb',
    variant: variant.offensive,
    keys: ['up', 'right', 'down', 'down', 'down'],
  },
  // SUPPLY
  {
    name: 'LIFT-850 Jump Pack',
    variant: variant.supply,
    keys: ['down', 'up', 'up', 'down', 'up'],
  },
  {
    name: 'B-1 Supply Pack',
    variant: variant.supply,
    keys: ['down', 'left', 'down', 'up', 'up', 'down'],
  },
  {
    name: 'AX/LAS-5 "Guard Dog" Rover',
    variant: variant.supply,
    keys: ['down', 'up', 'left', 'up', 'right', 'right'],
  },
  {
    name: 'SH-20 Ballistic Shield Backpack',
    variant: variant.supply,
    keys: ['down', 'left', 'down', 'down', 'up', 'left'],
  },
  {
    name: 'SH-32 Shield Generator Pack',
    variant: variant.supply,
    keys: ['down', 'up', 'left', 'right', 'left', 'right'],
  },
  {
    name: 'AX/AR-23 "Guard Dog"',
    variant: variant.supply,
    keys: ['down', 'up', 'left', 'up', 'right', 'down'],
  },
  {
    name: 'MG-43 Machine Gun',
    variant: variant.supply,
    keys: ['down', 'left', 'down', 'up', 'right'],
  },
  {
    name: 'APW-1 Anti-Materiel Rifle',
    variant: variant.supply,
    keys: ['down', 'left', 'right', 'up', 'down'],
  },
  {
    name: 'M-105 Stalwart',
    variant: variant.supply,
    keys: ['down', 'left', 'down', 'up', 'up', 'left'],
  },
  {
    name: 'EAT-17 Expendable Anti-tank',
    variant: variant.supply,
    keys: ['down', 'down', 'left', 'up', 'right'],
  },
  {
    name: 'GR-8 Recoilless Rifle',
    variant: variant.supply,
    keys: ['down', 'left', 'right', 'right', 'left'],
  },
  {
    name: 'FLAM-40 Flamethrower',
    variant: variant.supply,
    keys: ['down', 'left', 'up', 'down', 'up'],
  },
  {
    name: 'AC-8 Autocannon',
    variant: variant.supply,
    keys: ['down', 'left', 'down', 'up', 'up', 'right'],
  },
  {
    name: 'RS-422 Railgun',
    variant: variant.supply,
    keys: ['down', 'right', 'down', 'up', 'left', 'right'],
  },
  {
    name: 'FAF-14 SPEAR Launcher',
    variant: variant.supply,
    keys: ['down', 'down', 'up', 'down', 'down'],
  },
  {
    name: 'GL-21 Grenade Launcher',
    variant: variant.supply,
    keys: ['down', 'left', 'up', 'left', 'down'],
  },
  {
    name: 'LAS-98 Laser Cannon',
    variant: variant.supply,
    keys: ['down', 'left', 'down', 'up', 'left'],
  },
  {
    name: 'ARC-3 Arc Thrower',
    variant: variant.supply,
    keys: ['down', 'right', 'down', 'up', 'left', 'left'],
  },
];

export function getRandomStratagem(): Stratagem {
  const index: number = Math.floor(Math.random() * stratagems.length);
  return stratagems[index];
}
