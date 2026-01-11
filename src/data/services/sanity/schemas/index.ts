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
import { PromoBannerSchema } from './promo-banner';
import { RightnowMediaSchema } from './rightnow-media';
import { MeetingDetailsSchema } from './types/meeting-details';
import { NextGenRosterSignupGuardianSchema } from './types/next-gen-roster-signup-guardian';
import { ScriptureSchema } from './types/scripture';
import { TimeSchema } from './types/time';
import { VisitorFeedbackSchema } from './visitor-feedback';

export const SanitySchema = [
  // Forms
  EventRentalSchema,
  PrayerRequestSchema,
  RightnowMediaSchema,
  GiftAssessmentSchema,
  VisitorFeedbackSchema,
  MinistryConnectionSchema,
  NextGenRosterSignupSchema,
  // Website
  ContactSchema,
  EventSchema,
  LeaderSchema,
  DeepDiveSchema,
  MinistrySchema,
  NextGenPageSchema,
  PromoBannerSchema,
  // Misc Schemas
  TimeSchema,
  ScriptureSchema,
  MeetingDetailsSchema,
  NextGenRosterSignupGuardianSchema,
];
