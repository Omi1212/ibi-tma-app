import type { ComponentType, JSX } from 'react';


import { Send } from '@/pages/Send';
import Home from '@/pages/Home';
import { TransactionSection } from '@/components/TransactionSection/TransactionSection';
import { InitDataPage } from '@/pages/examples/InitDataPage';
import { ThemeParamsPage } from '@/pages/examples/ThemeParamsPage';
import { LaunchParamsPage } from '@/pages/examples/LaunchParamsPage';


interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
}

export const routes: Route[] = [
  { path: '/init-data', Component: InitDataPage, title: 'Init Data' },
  { path: '/theme-params', Component: ThemeParamsPage, title: 'Theme Params' },
  { path: '/launch-params', Component: LaunchParamsPage, title: 'Launch Params' },
  { path: '/', Component: Home, title: 'Home' },
  { path: '/send', Component: Send, title: 'Send' },
  { path: '/transaction', Component: TransactionSection, title: 'Transaction' },

];
