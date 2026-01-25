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
import { LinkSchema } from './types/link';
import { MeetingDetailsSchema } from './types/meeting-details';
import { ScriptureSchema } from './types/scripture';
import { TimeSchema } from './types/time';
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
  // Misc Schemas
  LinkSchema,
  TimeSchema,
  ScriptureSchema,
  MeetingDetailsSchema,
];
