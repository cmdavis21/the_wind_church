import { ContactSchema } from './contact';
import { DeepDiveSchema } from './deep-dive';
import { EventSchema } from './event';
import { EventRentalSchema } from './event-rental';
import { GiftAssessmentSchema } from './gift-assessment';
import { LeaderSchema } from './leader';
import { MinistrySchema } from './ministry';
import { MinistryConnectionSchema } from './ministry-connection';
import { NextGenGuardianInquirySchema } from './next-gen-guardian-inquiry';
import { NextGenPageSchema } from './next-gen-page';
import { PrayerRequestSchema } from './prayer-request';
import { PromoBannerSchema } from './promo-banner';
import { ResourceSchema } from './resource';
import { TestimonialSchema } from './testimonial';
import { LinkSchema } from './types/link';
import { LocalizedPortableText } from './types/localized-portable-text';
import { LocalizedString } from './types/localized-string';
import { LocalizedText } from './types/localized-text';
import { LocationSchema } from './types/location';
import { MeetingDetailsSchema } from './types/meeting-details';
import { ScriptureSchema } from './types/scripture';
import { VisitorFeedbackSchema } from './visitor-feedback';

export const SanitySchema = [
  // Forms
  EventRentalSchema,
  PrayerRequestSchema,
  GiftAssessmentSchema,
  VisitorFeedbackSchema,
  MinistryConnectionSchema,
  NextGenGuardianInquirySchema,
  // Website
  ContactSchema,
  EventSchema,
  LeaderSchema,
  DeepDiveSchema,
  MinistrySchema,
  NextGenPageSchema,
  PromoBannerSchema,
  TestimonialSchema,
  ResourceSchema,
  // Misc Schemas
  LinkSchema,
  LocalizedText,
  LocationSchema,
  ScriptureSchema,
  LocalizedString,
  MeetingDetailsSchema,
  LocalizedPortableText,
];
