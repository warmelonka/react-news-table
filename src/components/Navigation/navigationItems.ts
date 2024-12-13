type FireType = 'red' | 'purple';
// подумать над типами
export enum Fires {
  red = 'red',
  purple = 'purple',
}

interface NavigationItem {
  id: number;
  label: string;
  soon?: boolean;
  link?: string;
  fire?: FireType;
}

export const navigationItems: NavigationItem[] = [
  { id: 1, label: 'Криптовалюта', link: '#' },
  { id: 2, label: 'Фондовый рынок', link: '#' },
  { id: 3, label: 'Earn', link: '#', fire: 'red' },
  { id: 4, label: 'P2P', link: '#' },
  { id: 5, label: 'Лаунч', link: '#', fire: 'purple' },
  { id: 6, label: 'Вознаграждения', soon: true },
];
