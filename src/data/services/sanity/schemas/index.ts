import { ContactSchema } from './contact';
import { DeepDiveSchema } from './deep-dive';
import { EventSchema } from './event';
import { EventRentalSchema } from './event-rental';
import { GiftAssessmentSchema } from './gift-assessment';
import { LeaderSchema } from './leader';
import { MeetingDetailsSchema } from './types/meeting-details';
import { MinistrySchema } from './ministry';
import { MinistryConnectionSchema } from './ministry-connection';
import { PrayerRequestSchema } from './prayer-request';
import { RightnowMediaSchema } from './rightnow-media';
import { ScheduledVisitSchema } from './scheduled-visit';
import { TimeSchema } from './types/time';
import { VisitorFeedbackSchema } from './visitor-feedback';
import { NextGenRosterSignupGuardianSchema } from './types/next-gen-roster-signup-guardian';
import { ScriptureSchema } from './types/scripture';
import { ProductSchema } from './product';
import { NextGenRosterSignupSchema } from './next-gen-roster-signup';
import { NextGenPageSchema } from './next-gen-page';

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
];
