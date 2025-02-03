import { Ionicons } from "@expo/vector-icons";

interface MenuRoute {
  title: string,
  icon: keyof typeof Ionicons.glyphMap,
  name:string,
  link: string,
}


export const menuRoutes:MenuRoute[] = [
  {
    title: 'Pull to refresh',
    icon: 'refresh-outline',
    name: 'pull-to-refresh/index',
    link: '/pull-to-refresh'
  },
  {
    title: 'Section List',
    icon: 'list-outline',
    name: 'section-list/index',
    link: '/section-list'
  },
  {
    title: 'Modal',
    icon: 'copy-outline',
    name: 'modal/index',
    link: '/modal'
  },
  {
    title: 'InfiniteScroll',
    icon: 'download-outline',
    name: 'infinite-scroll/index',
    link: '/infinite-scroll'
  },
  {
    title: 'Slides',
    icon: 'flower-outline',
    name: 'slides/index',
    link: '/slides'
  },
  {
    title: 'Themes',
    icon: 'flask-outline',
    name: 'themes/index',
    link: '/themes'
  },
];

export const uiMenuRoutes:MenuRoute[] = [
  {
    title: 'Switches',
    icon: 'toggle-outline',
    name: 'switches/index',
    link: '/switches'
  },
  {
    title: 'Alerts',
    icon: 'alert-circle-outline',
    name: 'alerts/index',
    link: '/alerts'
  },
  {
    title: 'TextInputs',
    icon: 'document-text-outline',
    name: 'text-inputs/index',
    link: '/text-inputs'
  },
];

export const animationMenuRoutes:MenuRoute[] = [
  {
    title: 'Animation 101',
    icon: 'cube-outline',
    name: 'animation-101/index',
    link: '/animation-101'
  },
  {
    title: 'Animation 102',
    icon: 'albums-outline',
    name: 'animation-102/index',
    link: '/animation-102'
  },
];

export const allRoutes = [
  ...menuRoutes,
  ...uiMenuRoutes,
  ...animationMenuRoutes,
];
