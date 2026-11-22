# Calendar validation — November 22, 2026

Source: damongreywolf/Green-Apple-Webpage, main branch, inspected before editing.

Passed 11 automated data/preservation checks: public details; private/confidential redaction; default public visibility; redacted Busy events; cancellations and date bounds; exclusive all-day end dates; recurrence exclusions and cancelled exceptions; private recurring exceptions; invalid month rejection; endpoint method/input validation; preservation of original non-route sections and gallery script.

Passed browser checks against the live public Google Calendar feed: month navigation, public detail modal, Escape dismissal, desktop and phone layouts, no calendar horizontal overflow at 320/390/768 pixels, private-event masking under deliberately hostile fixture data, empty and unavailable states, eight menu cards, original archive toggle and photo lightbox, unchanged EasyEats URL, and unchanged catering/contact form destinations. No JavaScript page errors occurred.

The live endpoint returned nine November grid-range entries (including early December dates in the trailing desktop row). Desktop and mobile screenshots were visually inspected. The public feed was reachable without authentication. Private-event behavior was tested with fixtures; Google may omit private events from its public feed entirely.

No real orders or form submissions were made. No repository changes were pushed. Deployment itself has not been tested; upload to the existing GitHub-connected Vercel project and follow CALENDAR-UPLOAD.md.
