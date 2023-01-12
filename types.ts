export interface TwilioMessage {
  account_sid: string;
  api_version: string;
  body: string;
  date_created: string;
  date_sent: string;
  date_updated: string;
  direction: string;
  error_code: null;
  error_message: null;
  from: string;
  messaging_service_sid: string;
  num_media: string;
  num_segments: string;
  price: null;
  price_unit: null;
  sid: string;
  status: string;
  subresource_uris: {
    media: string;
  };
  to: string;
  uri: string;
}

export type Time = {
  dateTime: string;
  timeZone: string;
};

export interface CalEvent {
  kind: string;
  etag: string;
  id: string;
  status: string;
  htmlLink: string;
  created: string;
  updated: string;
  summary: string;
  location?: string;
  creator: { email: string };
  organizer: { email: string; self: boolean };
  start: Time;
  end: Time;
  recurringEventId: string;
  originalStartTime: Time;
  iCalUID: string;
  sequence: number;
  reminders: { useDefault: boolean };
  eventType: string;
}

export type ParsedTime = {
  day: number;
  month: number;
  hour: number;
  minute: number;
};

export interface ParsedEvent {
  summary: string;
  start: ParsedTime;
  end: ParsedTime;
  location?: string | null;
}
