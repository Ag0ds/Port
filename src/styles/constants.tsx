import { Icon } from '@iconify/react';

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Início',
    path: '/',
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: 'Repositórios',
    path: '/dashboard',
    icon: <Icon icon="lucide:folder" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Todos', path: '/dashboard' },
      { title: 'Calculadora', path: '/dashboard/calculator' },
      { title: '#soon', path: '/projects/graphic-design' },
    ],
  },
  {
    title: 'Mensagens',
    path: '/Contatos',
    icon: <Icon icon="lucide:mail" width="24" height="24" />,
  },
  {
    title: 'Config',
    path: '/settings',
    icon: <Icon icon="lucide:settings" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Conta', path: '/settings/account' },
      { title: 'Privacy', path: '/settings/privacy' },
    ],
  },
  {
    title: 'Sobre mim',
    path: '/Contatos',
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
];