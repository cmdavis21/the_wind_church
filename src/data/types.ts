import { Price } from './format-price';

type Time = {
  hour: string;
  minute: string;
  time_of_day: string;
};

type Image = {
  src: string;
  alt: string;
};

export type Leader = {
  _id?: string;
  first_name: string;
  last_name: string;
  position: string;
  category: string;
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
    time: Time;
    location: string;
  }[];
  start_date: Date;
  end_date: Date;
  required_materials?: string[];
  accepting_new_students: boolean;
};

export type Event = {
  _id?: string;
  name: string;
  date: Date;
  time: Time;
  description?: string;
  location: string;
  ministry_event?: string;
  external_host?: string;
  contact?: {
    first_name: Leader['first_name'];
    last_name: Leader['last_name'];
    position: Leader['position'];
  };
  cost?: string;
  how_to_signup?: string;
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
  meeting_details: {
    day: string;
    time: Time;
    location: string;
  }[];
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

export interface PlanYourVisit extends PartialContact {
  attendance: number;
  day_of_visit: string;
}

export interface VisitorFeedback extends PartialContact {
  feedback: string;
}

export interface PrayerRequest extends PartialContact {
  request_email_back: YesNo;
  request: string;
}

export interface RightnowMediaSignup extends FullContact {
  wind_member: YesNo;
  has_access: YesNo;
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
  definition: string;
  scriptures: string[];
}

export enum FORM_TYPES {
  EVENT_RENTAL = 'eventRentalInquiries',
  CONTACT_SIGNUP = 'contactSignup',
  GIFT_ASSESSMENT = 'giftAssessments',
  MINISTRY_CONNECTION = 'ministryConnection',
  NEXT_GEN_SIGNUP = 'nextGenRosterSignup',
  PLAN_YOUR_VISIT = 'scheduledVisits',
  PRAYER_REQUEST = 'prayerRequests',
  RIGHTNOW_MEDIA = 'rightnowMediaSignups',
  VISITOR_FEEDBACK = 'visitorFeedback',
}

export interface YouTubeSnippet {
  title: string;
  published_at: string;
  thumbnail: string;
  videoUrl: string;
}

export interface ProductPreview {
  title: string;
  handle: string;
  minPrice: Price;
  maxPrice: Price;
  image: Image;
  total_inventory: number;
}

export interface Product {
  title: string;
  description_html: string;
  images: Image[];
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
    image?: Image;
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
  first_name: string;
  last_name: string;
  address1: string;
  address2?: string;
  city: string;
  province: string;
  country: string;
  zip: string;
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
