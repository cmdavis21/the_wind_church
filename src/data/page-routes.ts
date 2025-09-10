import { PUSHPAY_URL } from './constants';
import { NavbarItem } from './types';

export const PageRoutes = {
  home: '/',
  about: '/about',
  planYourVisit: '/plan-your-visit',
  windLeaders: '/wind-leaders',
  ministries: '/ministries',
  giftAssessment: '/gift-assessment',
  nextGen: '/next-gen',
  sermons: '/sermons',
  rightnowMedia: '/rightnowmedia',
  gallery: '/gallery',
  salvation: '/salvation',
  prayerRequests: '/prayer-requests',
  events: '/events',
  deepDive: '/deep-dive',
  bookstore: '/bookstore',
  cart: '/bookstore/cart',
  churchRental: '/church-rental',
  give: '/give',
  pushpay: PUSHPAY_URL,
};

export const NavbarMenu: NavbarItem[] = [
  {
    label: 'about',
    submenu: [
      {
        label: 'about us',
        link: PageRoutes.about,
      },
      {
        label: 'plan your visit',
        link: PageRoutes.planYourVisit,
      },
      {
        label: 'wind leaders',
        link: PageRoutes.windLeaders,
      },
    ],
  },
  {
    label: 'media',
    submenu: [
      {
        label: 'sermons',
        link: PageRoutes.sermons,
      },
      {
        label: 'rightNow media',
        link: PageRoutes.rightnowMedia,
      },
      {
        label: 'gallery',
        link: PageRoutes.gallery,
      },
    ],
  },
  {
    label: 'ministries',
    submenu: [
      {
        label: 'all ministries',
        link: PageRoutes.ministries,
      },
      {
        label: 'next gen',
        link: PageRoutes.nextGen,
      },
      {
        label: 'gift assessment',
        link: PageRoutes.giftAssessment,
      },
    ],
  },
  {
    label: 'jesus',
    submenu: [
      {
        label: 'salvation',
        link: PageRoutes.salvation,
      },
      {
        label: 'prayer requests',
        link: PageRoutes.prayerRequests,
      },
    ],
  },
  { label: 'deep dive', link: PageRoutes.deepDive },
  { label: 'events', link: PageRoutes.events },
  {
    label: 'bookstore',
    submenu: [
      {
        label: 'Shop Products',
        link: PageRoutes.bookstore,
      },
      {
        label: 'your cart',
        link: PageRoutes.cart,
      },
    ],
  },
  { label: 'rental', link: PageRoutes.churchRental },
  { label: 'give', link: PageRoutes.give },
];
