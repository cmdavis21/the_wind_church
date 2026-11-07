import { Price } from './format-price';

export const localizedFields = {
  en: true,
  es: true,
};

export const localizedFieldsRaw = {
  enRaw: true,
  esRaw: true,
};

export type Image = {
  src: string;
  alt: string;
};

export type Leader = {
  _id?: string;
  first_name: string;
  last_name: string;
  position: string;
  category: (typeof SanityLeaderCategories)[0]['value'];
  description: string;
  image: string;
  video?: string;
};

export type DeepDive = {
  _id?: string;
  name: string;
  slug: string;
  description: string;
  instructors: {
    first_name: Leader['first_name'];
    last_name: Leader['last_name'];
    position: Leader['position'];
    description: Leader['description'];
    image: Leader['image'];
    video: Leader['video'];
  }[];
  image: Image;
  meeting_details: {
    day: string;
    time: string;
    attendance_type: (typeof SanityAttendanceTypes)[0]['value'];
  }[];
  start_date: Date;
  end_date: Date;
  required_materials?: string[];
  accepting_new_students: boolean;
};

export type Event = {
  _id?: string;
  name: string;
  start_date_time: Date;
  end_date_time?: Date;
  description: string;
  location: {
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    sublocation?: string;
  };
  associated_ministry?: string;
  external_organizer?: string;
  cost?: string;
  categories?: (typeof SanityEventCategories)[0]['value'][];
  how_to_signup?: string;
  additional_notes?: string;
  help_needed?: string[];
  image: Image;
};

export type Ministry = {
  _id?: string;
  name: string;
  slug: string;
  scripture: { verse: string; passage: string };
  description: string;
  coordinators: {
    first_name: Leader['first_name'];
    last_name: Leader['last_name'];
    position: Leader['position'];
    description: Leader['description'];
    image: Leader['image'];
    video: Leader['video'];
  }[];
  coach: {
    first_name: Leader['first_name'];
    last_name: Leader['last_name'];
    position: Leader['position'];
    description: Leader['description'];
    image: Leader['image'];
    video: Leader['video'];
  };
  image: Image;
};

export interface NextGenPage {
  educators: {
    first_name: Leader['first_name'];
    last_name: Leader['last_name'];
    position: Leader['position'];
    description: Leader['description'];
    image: Leader['image'];
    video: Leader['video'];
  }[];
  cirriculum_file: string;
}

export interface PromoBannerDetails {
  header: string;
  title: string;
  description: string;
  link?: {
    label: string;
    href: string;
  };
  image: Image;
  video?: string;
}

export interface Testimonial {
  first_name: Leader['first_name'];
  last_name: Leader['last_name'];
  position: Leader['position'];
  main_point: string;
  statement: string;
  image: string;
}

export interface ResourceItem {
  title: string;
  type: (typeof SanityResourceTypes)[0];
  description?: string;
  file?: string;
  file_size?: string;
  url?: string;
  updated_at: Date;
}

export interface NavbarItem {
  label: string;
  link?: string;
  submenu?: {
    label: string;
    link: string;
  }[];
}

export type NavbarColumnItem = {
  label: string;
  submenu: {
    label: string;
    link: string;
  }[];
};

export type FooterColumnItem = {
  label: string;
  row: {
    label: string;
    link?: string;
  }[];
};

export interface GalleryCollection {
  title: string;
  urls: string[];
}

export enum YesNo {
  YES = 'Y',
  NO = 'N',
}

export enum Gender {
  MALE = 'M',
  FEMALE = 'F',
}

export interface FullContact {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
}

export interface PartialContact {
  first_name: string;
  last_name: string;
  phone?: string;
  email: string;
}

export interface VisitorFeedback extends PartialContact {
  feedback: string;
}

export interface PrayerRequest extends PartialContact {
  request_email_back: YesNo;
  request: string;
}

export interface NextGenGuardianInquiry extends FullContact {
  questions: string;
}

export interface MinistryConnection extends FullContact {
  ministry_interests: string[];
}

export interface EventRentalInquiry extends FullContact {
  company_name?: string;
  company_phone?: string;
  purpose_for_rental: string;
  describe_your_event: string;
  referred: YesNo;
  referred_by?: string;
}

export interface NextGenRosterSignup {
  children: {
    first_name: string;
    last_name: string;
    age: string;
    grade: string;
    gender: Gender;
    hobbies: string;
    allergies?: string;
    guardians: (FullContact & {
      relationship_to_child: string;
    })[];
  }[];
}

export interface GiftAssessmentReflectionQuestions {
  ministries_involved_in: string;
  change_in_ministry: string;
  lay_or_clergy: 'Lay' | 'Clergy';
}

export interface GiftAssessmentSubmission extends FullContact, GiftAssessmentReflectionQuestions {
  dominate_gifts: string;
  subordinate_gifts: string;
}

export interface GiftAssessmentQuestion {
  id: number;
  question: string;
  gift: string;
}

export interface GiftAssessmentDefinition {
  gift: string;
  label: string;
  definition: string;
  scriptures: string[];
}

export enum FORM_TYPES {
  EVENT_RENTAL = 'eventRentalInquiries',
  GIFT_ASSESSMENT = 'giftAssessments',
  MINISTRY_CONNECTION = 'ministryConnection',
  NEXT_GEN_GUARDIAN_INQUIRY = 'nextGenGuardianInquiry',
  PRAYER_REQUEST = 'prayerRequests',
  VISITOR_FEEDBACK = 'visitorFeedback',
}

export interface YouTubeVideo {
  title: string;
  published_at: string;
  thumbnail: string;
  videoUrl: string;
}

export interface YouTubePlaylist {
  id: string;
  title: string;
  videos: YouTubeVideo[];
}

export interface YouTubeSermonSnippet {
  kind: 'youtube';
  videoId: string;
  duration: number;
  title: string;
  link: string;
}

export interface FallbackSermonSnippet {
  kind: 'fallback';
  url: string;
  poster: string;
}

export interface ProductPreview {
  title: string;
  handle: string;
  minPrice: Price;
  maxPrice: Price;
  images: Image[];
  total_inventory: number;
  pickup_only: boolean;
}

export interface Product {
  title: string;
  description_html: string;
  images: Image[];
  pickup_only: boolean;
  first_variant?: {
    name: string;
    value: string;
  }[];
  options?: {
    name: string;
    values: {
      name: string;
      color?: string;
    }[];
  }[];
  variants: {
    id: string;
    image: Image;
    price: Price;
    compare_price?: Price;
    quantity_available: number;
    selected_options?: {
      name: string;
      value: string;
    }[];
  }[];
}

export interface Collection {
  title: string;
  handle: string;
  products: ProductPreview[];
}

export interface Cart {
  id: string;
  checkout_url: string;
  total_quantity: number;
  subtotal_amount: Price;
  lines: {
    id: string;
    title: string;
    image: Image;
    pickup_only: boolean;
    subtotal_amount: Price;
    variant: {
      id: string;
      price: Price;
      compare_price?: Price;
      selected_options: {
        name: string;
        value: string;
      }[];
    };
    quantity: number;
  }[];
}

export interface Address {
  address_id: string;
  first_name: string;
  last_name: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  country: string;
  zip: string;
  phone: string;
}

export interface Customer {
  customer_id: string;
  first_name: string;
  last_name: string;
  default_phone: string;
  default_email: string;
  default_address: Address;
}

export interface Order {
  order_name: string;
  created_date: Date;
  status_page_url: string;
  shipping_price: Price;
  subtotal_price: Price;
  total_tax: Price;
  total_price: Price;
  payment_details: {
    company: string;
    number: string;
    expiration_year: string;
    expiration_month: string;
  };
  shipping_address: Address;
  billing_address: Address;
  quantity: number;
  line_items: {
    title: string;
    image: Image;
    total_price: Price;
    quantity: number;
    variant: {
      id: string;
      price: Price;
      selected_options: {
        name: string;
        value: string;
      }[];
    };
  }[];
}

export interface CustomerData {
  profile: Customer | undefined;
  orders: Order[];
}

export const SanityEventCategories = [
  { title: 'Worship Service', value: 'worship-service' },
  { title: 'Prayer Meeting', value: 'prayer-meeting' },
  { title: 'Fasting & Prayer', value: 'fasting-and-prayer' },
  { title: 'Church Fellowship', value: 'church-fellowhsip' },
  { title: 'Community Outreach', value: 'community-outreach' },
  { title: 'Evangelism', value: 'evangelism' },
  { title: 'Fundraiser', value: 'fundraiser' },
  { title: 'Food / Clothing Drive', value: 'food-clothing-drive' },
  { title: 'Christian Life Development', value: 'cld-class' },
  { title: 'Next Gen', value: 'next-gen' },
  { title: 'Olive Branch (YA) Ministry', value: 'young-adults-ministry' },
  { title: "Women's (DOK) Ministry", value: 'womens-ministry' },
  { title: "Men's (LXG) Ministry", value: 'mens-ministry' },
  { title: 'Marriage (One Accord) Ministry', value: 'marriage-ministry' },
  { title: 'WE Experience', value: 'we-experience' },
  { title: 'Leadership Training', value: 'leaders-training' },
  { title: 'Guest Speaker / Concert', value: 'guest-speaker-or-concert' },
  { title: 'Baptism / Baby Dedication', value: 'baptism' },
  { title: 'Holiday Celebration', value: 'holiday-celebration' },
  { title: 'Revival / Crusade', value: 'revival-crusade' },
  { title: 'Friends and Family Gathering', value: 'friends-family-gathering' },
  { title: 'Potluck / Shared Meals', value: 'potluck' },
  { title: 'Game Night / Movie Night', value: 'game-movie-night' },
];

export const SanityLeaderCategories = [
  { title: 'Pastoral Team', value: 'pastors' },
  { title: 'Church Council', value: 'council' },
  { title: 'Church Staff', value: 'staff' },
  { title: 'Elders', value: 'elders' },
  { title: 'Deacons and Deaconesses', value: 'deacons' },
  { title: 'Ministry Leaders', value: 'ministry-leaders' },
  { title: 'Guest Connect', value: 'guest-connect' },
  { title: 'Outreach & Evangelism', value: 'outreach' },
  { title: 'Production & Media', value: 'media' },
];

export const SanityResourceTypes = ['File', 'Link', 'Video'];

export const SanityDaysOfTheWeekTypes = [
  { title: 'Sunday', value: 'sunday' },
  { title: 'Monday', value: 'monday' },
  { title: 'Tuesday', value: 'tuesday' },
  { title: 'Wednesday', value: 'wednesday' },
  { title: 'Thursday', value: 'thursday' },
  { title: 'Friday', value: 'friday' },
  { title: 'Saturday', value: 'saturday' },
];

export const SanityAttendanceTypes = [
  { title: 'In-Person and Online', value: 'hybrid' },
  { title: 'In-Person', value: 'in-person' },
  { title: 'Online', value: 'online' },
];

export const SanityResourceCategories = [
  { title: 'Visitor Resources', value: 'visitor-resource' },
  { title: 'Member Resources', value: 'member-resource' },
  { title: 'Leader Resources', value: 'leader-resource' },
  { title: 'General Resources', value: 'general-resource' },
  { title: 'Teaching Materials Resources', value: 'teaching-materials' },
  { title: 'Announcements', value: 'announcements' },
];

export const SanityTestimonialPersonType = [
  { title: 'Leader', value: 'leader' },
  { title: 'Staff', value: 'staff' },
  { title: 'Member', value: 'member' },
  { title: 'Visitor', value: 'visitor' },
];

// TANSTACK QUERY + MUTATION KEYS
export const GET_ALL_EVENTS = 'SANITY QUERY GET ALL EVENTS';
export const GET_ALL_LEADERS = 'SANITY QUERY GET ALL LEADERS';
export const GET_ALL_RESOURCES = 'SANITY QUERY GET ALL RESOURCES';
export const GET_ALL_MINISTRIES = 'SANITY QUERY GET ALL MINISTRIES';
export const GET_ALL_DEEP_DIVES = 'SANITY QUERY GET ALL DEEP DIVES';
export const EVENT_RENTAL_KEY = 'SANITY MUTATION CREATE EVENT RENTAL INQUIRY';
export const GIFT_ASSESSMENT_KEY = 'SANITY MUTATION CREATE GIFT ASSESSMENT';
export const MINISTRY_CONNECT_KEY = 'SANITY MUTATION CREATE MINISTRY CONNECTION';
export const PRAYER_REQUEST_KEY = 'SANITY MUTATION CREATE PRAYER REQUEST';
export const VISITOR_FEEDBACK_KEY = 'SANITY MUTATION CREATE CONTACT';
export const NEXT_GEN_GUARDIAN_KEY = 'SANITY MUTATION CREATE NEXT GEN GUARDIAN INQUIRY';
export const GET_CART_KEY = 'SHOPIFY QUERY GET CART';
export const GET_ADMIN_CUSTOMER_KEY = 'SHOPIFY QUERY GET ADMIN CUSTOMER';
export const GET_STOREFRONT_COLLECTIONS_KEY = 'SHOPIFY QUERY GET ALL COLLECTIONS';
export const GET_STOREFRONT_PRODUCT_BY_HANDLE_KEY = 'SHOPIFY QUERY GET PRODUCT BY HANDLE';
export const ADD_TO_CART_KEY = 'SHOPIFY MUTATION ADD TO CART';
export const UPDATE_CART_ITEMS_KEY = 'SHOPIFY MUTATION UPDATE CART ITEMS';
export const REMOVE_CART_ITEMS_KEY = 'SHOPIFY MUTATION DELETE CART ITEMS';
