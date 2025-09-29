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
  roles: string[];
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
    roles: Leader['roles'];
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
};

export type Event = {
  _id?: string;
  name: string;
  date: Date;
  time: Time;
  categories?: string[];
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
    roles: Leader['roles'];
    description: Leader['description'];
    image: Leader['image'];
    video: Leader['video'];
  }[];
  coach: {
    first_name: Leader['first_name'];
    last_name: Leader['last_name'];
    position: Leader['position'];
    roles: Leader['roles'];
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
    roles: Leader['roles'];
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

export interface YouTubeSnippet {
  title: string;
  publishedAt: string;
  thumbnail: string;
  videoUrl: string;
}

export interface ProductPreview {
  title: string;
  handle: string;
  minPrice: Price;
  maxPrice: Price;
  image: Image;
  totalInventory: number;
  options?: {
    name: string;
    values: {
      name: string;
      color?: string;
    }[];
  }[];
}

export interface Product {
  title: string;
  descriptionHtml: string;
  images: Image[];
  firstVariant?: {
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
    compareAtPrice?: Price;
    quantityAvailable: number;
    selectedOptions?: {
      name: string;
      value: string;
    }[];
  }[];
}

export interface Cart {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  subtotalAmount: Price;
  lines: {
    id: string;
    title: string;
    image: Image;
    subtotalAmount: Price;
    variant: {
      id: string;
      price: Price;
      compareAtPrice?: Price;
      selectedOptions: {
        name: string;
        value: string;
      }[];
    };
    quantity: number;
  }[];
}

export type VariantPriceRange = {
  minVariantPrice?: number;
  maxVariantPrice?: number;
};

export type ShopifyDocumentProductVariant = {
  _id: `shopifyProductVariant-${string}`; // Shopify product ID
  _type: 'productVariant';
  store: {
    id: number;
    gid: `gid://shopify/ProductVariant/${string}`;
    compareAtPrice: number;
    createdAt: string;
    isDeleted: boolean;
    option1: string;
    option2: string;
    option3: string;
    previewImageUrl?: string;
    price: number;
    productGid: `gid://shopify/Product/${string}`;
    productId: number;
    sku: string;
    status: 'active' | 'archived' | 'draft' | 'unknown';
    title: string;
    updatedAt?: string;

    inventory: {
      policy: string;
      quantity?: number;
      management: string;
      isAvailable?: boolean;
    };
  };
};

export type ShopifyDocumentProduct = {
  _id: `shopifyProduct-${string}`; // Shopify product ID
  _type: 'product';
  store: {
    id: number;
    gid: `gid://shopify/Product/${string}`;
    priceRange: VariantPriceRange;
    productType: string;
    slug: { _type: string; current: string };
    status: 'active' | 'archived' | 'draft' | 'unknown';
    tags: string[];
    title: string;
    updatedAt?: string;
    previewImageUrl?: string;
    createdAt: string;
    isDeleted: boolean;
    variants?: { _key: string; _type: string; _ref: string; _weak: boolean }[];
    options: {
      _type: string;
      _key: string;
      name: string;
      values: string[];
    }[];
    vendor: string;
    descriptionHtml: string;
  };
};
