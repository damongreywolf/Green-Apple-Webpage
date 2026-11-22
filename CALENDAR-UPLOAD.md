# Calendar redesign — upload instructions

Upload the ZIP's contents to the ROOT of damongreywolf/Green-Apple-Webpage. Replace files when prompted. Do not upload the ZIP itself or put everything in another subfolder. No GitHub push or deployment was performed by this task.

The existing repository uses Vercel. Keep that deployment connected to GitHub: Vercel installs the locked ical.js dependency and serves `api/calendar.js` as a serverless function. This package needs Vercel (or an equivalent Node server); GitHub Pages alone cannot run the live calendar endpoint. No Google API key, OAuth login, or private iCal URL is required.

The original menu, photos, reviews, ordering iframe, forms, catering, gallery behavior, navigation, and other non-calendar content are preserved. New calendar styles are scoped to the route section. The supplied Green Apple lettering remains in the calendar header, alongside “Fresh stops. Bold sandwiches.” The apple basket has been removed from the design.

The server reads only this calendar's PUBLIC basic.ics feed:
c_db3603520df867dbe682a2586e6c7b0a0d377f070e0289ec2a7238141104c5ed@group.calendar.google.com

Keep the calendar publicly readable with public event details visible. Mark individual private bookings Private in Google Calendar. Explicit PRIVATE/CONFIDENTIAL events and redacted Busy entries are reduced to Busy, with no location or description, before being sent to visitors. Google may omit some private events entirely from a public feed; omitted entries cannot be displayed. No private calendar credentials are used or exposed.

Public events open an accessible detail dialog with time, location, plain-text description, and directions. Recurring events, cancellations, exceptions, all-day events, and Eastern time are handled. Small phones show the next five upcoming stops in the selected month. View full month expands all that month's stops, including earlier dates; Show fewer collapses back to five. Desktop retains the full monthly grid. Loading, empty, retry, and unavailable states are included. Google feed propagation plus short server caching can delay recent edits. Calendar data loads on page load, month navigation, and Refresh; an already-open idle page does not poll for updates.

After Vercel redeploys, hard-refresh the site and check the schedule, month controls, public details, a private booking, EasyEats ordering, photo enlargement, and catering/contact forms. Tests do not submit real forms or place orders.

For local preview: install dependencies with pnpm install, then pnpm dev. For automated tests: pnpm test. Local preview uses port 4173.
