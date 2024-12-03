import type { ComponentType, JSX } from 'react';


import { Send } from '@/pages/Send';
import Home from '@/pages/Home';
import { TransactionSection } from '@/components/TransactionSection/TransactionSection';


interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
}

export const routes: Route[] = [

  { path: '/', Component: Home, title: 'Home' },
  { path: '/send', Component: Send, title: 'Send' },
  { path: '/transaction', Component: TransactionSection, title: 'Transaction' },

];
