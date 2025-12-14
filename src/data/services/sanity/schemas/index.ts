import { ContactSchema } from './contact';
import { DeepDiveSchema } from './deep-dive';
import { EventSchema } from './event';
import { EventRentalSchema } from './event-rental';
import { GiftAssessmentSchema } from './gift-assessment';
import { LeaderSchema } from './leader';
import { MinistrySchema } from './ministry';
import { MinistryConnectionSchema } from './ministry-connection';
import { NextGenPageSchema } from './next-gen-page';
import { NextGenRosterSignupSchema } from './next-gen-roster-signup';
import { PrayerRequestSchema } from './prayer-request';
import { ProductSchema } from './product';
import { ProductVariant } from './product-variant';
import { RightnowMediaSchema } from './rightnow-media';
import { ScheduledVisitSchema } from './scheduled-visit';
import { MeetingDetailsSchema } from './types/meeting-details';
import { NextGenRosterSignupGuardianSchema } from './types/next-gen-roster-signup-guardian';
import { PriceRange } from './types/price-range';
import { ProductInventory } from './types/product-inventory';
import { ProductOption } from './types/product-option';
import { ScriptureSchema } from './types/scripture';
import { ShopifyProduct } from './types/shopify-product';
import { ShopifyProductVariant } from './types/shopify-product-variant';
import { TimeSchema } from './types/time';
import { VisitorFeedbackSchema } from './visitor-feedback';

export const SanitySchema = [
  // Forms
  EventRentalSchema,
  PrayerRequestSchema,
  RightnowMediaSchema,
  GiftAssessmentSchema,
  VisitorFeedbackSchema,
  ScheduledVisitSchema,
  MinistryConnectionSchema,
  NextGenRosterSignupSchema,
  // Website
  ContactSchema,
  EventSchema,
  LeaderSchema,
  DeepDiveSchema,
  MinistrySchema,
  NextGenPageSchema,
  // Shopify
  ProductSchema,
  // Misc Schemas
  TimeSchema,
  ScriptureSchema,
  MeetingDetailsSchema,
  NextGenRosterSignupGuardianSchema,
  ShopifyProduct,
  ShopifyProductVariant,
  PriceRange,
  ProductOption,
  ProductVariant,
  ProductInventory,
];
