import { PUSHPAY_URL } from "./constants";
import { NavbarItem } from "./types";

export const PageRoutes = {
  home: "/",
  about: "/about",
  planYourVisit: "/plan-your-visit",
  windLeaders: "/wind-leaders",
  ministries: "/ministries",
  giftAssessment: "/gift-assessment",
  youthService: "/youth-service",
  sermons: "/sermons",
  rightnowMedia: "/rightnowmedia",
  gallery: "/gallery",
  salvation: "/salvation",
  prayerRequests: "/prayer-requests",
  events: "/events",
  deepDive: "/deep-dive",
  bookstore: "/bookstore",
  cart: "/bookstore/cart",
  churchRental: "/church-rental",
  give: "/give",
  pushpay: PUSHPAY_URL,
};

export const DefaultPageRoutes = {
  english: {
    home: "/",
    about: "/about",
    planYourVisit: "/plan-your-visit",
    windLeaders: "/wind-leaders",
    ministries: "/ministries",
    giftAssessment: "/gift-assessment",
    youthService: "/youth-service",
    sermons: "/sermons",
    rightnowMedia: "/rightnowmedia",
    gallery: "/gallery",
    salvation: "/salvation",
    prayerRequests: "/prayer-requests",
    events: "/events",
    deepDive: "/deep-dive",
    bookstore: "/bookstore",
    cart: "/bookstore/cart",
    churchRental: "/church-rental",
    give: "/give",
    pushpay: PUSHPAY_URL,
  },
  spanish: {
    home: "/",
    about: "/acerca-de",
    planYourVisit: "/planifica-tu-visita",
    windLeaders: "/lideres-de-wind",
    ministries: "/ministerios",
    giftAssessment: "/evaluacion-de-dones",
    youthService: "/servicio-de-jovenes",
    sermons: "/sermones",
    rightnowMedia: "/rightnowmedia",
    gallery: "/galeria",
    salvation: "/salvacion",
    prayerRequests: "/peticiones-de-oracion",
    events: "/eventos",
    deepDive: "/estudio-profundo",
    bookstore: "/libreria",
    cart: "/libreria/carrito",
    churchRental: "/alquiler-de-iglesia",
    give: "/donar",
    pushpay: PUSHPAY_URL,
  },
};

export const NavbarMenu: NavbarItem[] = [
  {
    label: "about",
    submenu: [
      {
        label: "about us",
        link: PageRoutes.about,
      },
      {
        label: "plan your visit",
        link: PageRoutes.planYourVisit,
      },
      {
        label: "wind leaders",
        link: PageRoutes.windLeaders,
      },
    ],
  },
  {
    label: "media",
    submenu: [
      {
        label: "sermons",
        link: PageRoutes.sermons,
      },
      {
        label: "rightNow media",
        link: PageRoutes.rightnowMedia,
      },
      {
        label: "gallery",
        link: PageRoutes.gallery,
      },
    ],
  },
  {
    label: "ministries",
    submenu: [
      {
        label: "all ministries",
        link: PageRoutes.ministries,
      },
      {
        label: "youth service",
        link: PageRoutes.youthService,
      },
      {
        label: "gift assessment",
        link: PageRoutes.giftAssessment,
      },
    ],
  },
  {
    label: "jesus",
    submenu: [
      {
        label: "salvation",
        link: PageRoutes.salvation,
      },
      {
        label: "prayer requests",
        link: PageRoutes.prayerRequests,
      },
    ],
  },
  { label: "deep dive", link: PageRoutes.deepDive },
  { label: "events", link: PageRoutes.events },
  {
    label: "bookstore",
    submenu: [
      {
        label: "Shop Products",
        link: PageRoutes.bookstore,
      },
      {
        label: "Your Cart",
        link: PageRoutes.cart,
      },
    ],
  },
  { label: "rental", link: PageRoutes.churchRental },
  { label: "give", link: PageRoutes.give },
];
