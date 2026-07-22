# 3. Complete Screen Inventory

## 1. Landing Page
### Purpose
Introduce the product, show value proposition, highlight station discovery, and encourage sign-up or booking.
### Layout
- Hero section with headline, CTA, and visual illustration
- Featured stations section
- Benefits section
- Trust indicators and testimonials
### Components Used
- Hero section, feature cards, station cards, CTA buttons, footer
### Navigation
- Header with Home, Explore, Login, Sign Up
### User Actions
- Explore stations, sign up, view features
### Validation
- None required
### Loading State
- Minimal; hero content loads immediately
### Empty State
- N/A
### Error State
- Friendly fallback if content fails to load
### Responsive Behaviour
- Mobile-first hero stack, desktop two-column layout

## 2. Login
### Purpose
Allow returning users to access their account securely.
### Layout
- Centered card with email/password fields and CTA
- Forgot Password link and support link
### Components Used
- Auth card, input fields, button, link, divider
### Navigation
- Redirect to dashboard after success
### User Actions
- Submit credentials, recover password, navigate to register
### Validation
- Email format, required fields, password length
### Loading State
- Spinner on submit
### Empty State
- N/A
### Error State
- Inline error for invalid credentials
### Responsive Behaviour
- Single-column card on mobile, wider centered card on desktop

## 3. Register
### Purpose
Create a new user account.
### Layout
- Multi-step or single-card form with profile information and password setup
### Components Used
- Form card, input fields, password strength meter, checkbox, button
### Navigation
- Navigate to dashboard or verification step
### User Actions
- Fill form, create account, agree to terms
### Validation
- Email uniqueness, password strength, required fields, consent
### Loading State
- Submit spinner
### Empty State
- N/A
### Error State
- Inline error messages and server feedback
### Responsive Behaviour
- Stack fields vertically on mobile

## 4. Forgot Password
### Purpose
Help users recover access to their account.
### Layout
- Form card with email field and confirmation message state
### Components Used
- Form card, input, button, success state illustration
### Navigation
- Back to login
### User Actions
- Submit email, receive reset instructions
### Validation
- Email format
### Loading State
- Spinner on submit
### Empty State
- N/A
### Error State
- Unknown email or request failure
### Responsive Behaviour
- Compact centered card

## 5. User Dashboard
### Purpose
Serve as the main personal hub for bookings, favourites, and account overview.
### Layout
- Summary cards, upcoming bookings, quick actions, saved stations
### Components Used
- Dashboard cards, booking list, quick action buttons, profile summary
### Navigation
- Sidebar or top nav with Dashboard, Search, Bookings, Profile
### User Actions
- View upcoming sessions, manage favourites, open booking history
### Validation
- N/A
### Loading State
- Skeleton cards and list items
### Empty State
- Show onboarding or empty booking state
### Error State
- Error banner if data fails to load
### Responsive Behaviour
- Stacked cards on mobile; grid layout on desktop

## 6. Search Stations
### Purpose
Help users discover and narrow down EV charging stations.
### Layout
- Search and filter controls at top
- Station list or map panel
### Components Used
- Search bar, filters, chips, station cards, map toggle
### Navigation
- From dashboard or main nav
### User Actions
- Search by location, apply filters, select station
### Validation
- No invalid input; search can be empty but default results shown
### Loading State
- Skeleton station cards
### Empty State
- No results found state with suggestions
### Error State
- Retry action if search fails
### Responsive Behaviour
- List-first on mobile; split view on larger screens

## 7. Station Details
### Purpose
Give users full information about a station before booking.
### Layout
- Header with image, name, rating, availability
- Amenities, charger types, booking controls
### Components Used
- Hero header, gallery, info card, chips, pricing summary, CTA button
### Navigation
- From search results
### User Actions
- View amenities, select slot, add to favourites
### Validation
- Availability checks before slot selection
### Loading State
- Skeleton for gallery and detail panel
### Empty State
- No available time slots state
### Error State
- Station unavailable or network issue state
### Responsive Behaviour
- Single column on mobile; two-column layout on desktop

## 8. Booking Flow
### Purpose
Guide the user through selecting a time slot and confirming the booking.
### Layout
- Stepper header with progress states
- Calendar or time slot panel
- Continue and back actions
### Components Used
- Stepper, date picker, time slot selector, summary panel, button group
### Navigation
- Forward to payment after slot selection
### User Actions
- Choose date, choose time, proceed, go back
### Validation
- Slot availability, required date selection, capacity limits
### Loading State
- Skeleton slot grid
### Empty State
- No slots available
### Error State
- Slot conflict or unavailable message
### Responsive Behaviour
- Horizontal stepper on desktop, compact stack on mobile

## 9. Booking Summary
### Purpose
Allow users to review the booking details before payment.
### Layout
- Summary cards with selected station, time, charger, amount, policies
### Components Used
- Summary card, checklist, CTA button, terms text
### Navigation
- Continue to payment
### User Actions
- Confirm booking, edit selection, cancel
### Validation
- Review required terms and booking constraints
### Loading State
- Minimal; summary renders immediately
### Empty State
- N/A
### Error State
- Error if booking data missing
### Responsive Behaviour
- Scrollable summary on mobile

## 10. UPI Payment Screen
### Purpose
Collect the payment information securely and complete the transaction.
### Layout
- Payment method selection, amount summary, secure confirmation block
### Components Used
- Payment method selector, payment form, security message, CTA button
### Navigation
- Return to success or failure state
### User Actions
- Select UPI, enter details, pay
### Validation
- Required fields, format, payment attempt handling
### Loading State
- Payment progress state
### Empty State
- N/A
### Error State
- Payment failure with retry option
### Responsive Behaviour
- Compact stacked form on mobile

## 11. Payment Success
### Purpose
Confidently confirm that the booking was completed successfully.
### Layout
- Success illustration, summary details, QR preview, next actions
### Components Used
- Success state card, QR card, primary buttons
### Navigation
- View booking history or return to dashboard
### User Actions
- View booking, share details, close
### Validation
- N/A
### Loading State
- N/A
### Empty State
- N/A
### Error State
- N/A
### Responsive Behaviour
- Vertical stack with prominent CTA

## 12. Booking History
### Purpose
Show all past and upcoming bookings.
### Layout
- List or table of bookings with filters and sorting
### Components Used
- Table, filter chips, status badges, action menu
### Navigation
- From dashboard or user profile
### User Actions
- View details, cancel, download receipt
### Validation
- N/A
### Loading State
- Skeleton rows
### Empty State
- Empty list state with helpful CTA
### Error State
- Failure state with retry
### Responsive Behaviour
- Card list on mobile, table on desktop

## 13. Favourite Stations
### Purpose
Let users save preferred charging stations for quick access.
### Layout
- Grid or list of saved stations with quick actions
### Components Used
- Station cards, action buttons, empty state card
### Navigation
- From dashboard or account menu
### User Actions
- Remove favourite, book again, view details
### Validation
- N/A
### Loading State
- Skeleton cards
### Empty State
- Empty state encouraging users to save stations
### Error State
- Retry or fallback message
### Responsive Behaviour
- Single-column mobile list

## 14. User Profile
### Purpose
Allow users to manage personal information and account preferences.
### Layout
- Profile overview, editable sections, account settings summary
### Components Used
- Profile card, input fields, toggle controls, buttons
### Navigation
- From account menu
### User Actions
- Edit profile, update preferences, change password
### Validation
- Required field validation, secure password rules
### Loading State
- Form skeleton
### Empty State
- N/A
### Error State
- Form error summary
### Responsive Behaviour
- Stacked sections mobile, side-by-side desktop

## 15. Notifications
### Purpose
Keep users informed about bookings, payment status, reminders, and system events.
### Layout
- List of notification items with status and timestamps
### Components Used
- Notification list, badges, empty state
### Navigation
- From top nav or account menu
### User Actions
- Mark read, clear, open detail
### Validation
- N/A
### Loading State
- Skeleton list
### Empty State
- No notifications yet state
### Error State
- Retry or refresh state
### Responsive Behaviour
- Full-width mobile list

## 16. Admin Login
### Purpose
Allow administrators access to operational tools.
### Layout
- Centered admin auth card
### Components Used
- Auth card, input fields, button
### Navigation
- Redirect to admin dashboard
### User Actions
- Sign in
### Validation
- Email and password required
### Loading State
- Spinner
### Empty State
- N/A
### Error State
- Invalid credentials message
### Responsive Behaviour
- Compact centered layout

## 17. Admin Dashboard
### Purpose
Provide system oversight for bookings, stations, users, and revenue.
### Layout
- Dashboard cards, activity feed, charts, quick actions
### Components Used
- Statistic cards, chart cards, table, action buttons
### Navigation
- Sidebar navigation
### User Actions
- View metrics, open modules, filter data
### Validation
- N/A
### Loading State
- Skeleton dashboard widgets
### Empty State
- Guidance state when no data is present
### Error State
- Error banners for failed data loads
### Responsive Behaviour
- Grid-based on desktop, stacked cards on mobile

## 18. Manage Stations
### Purpose
Enable admins to create and manage charging stations.
### Layout
- Table plus action panel and modal forms
### Components Used
- Table, filter bar, modal, form inputs, badge status
### Navigation
- From admin sidebar
### User Actions
- Add station, edit, activate, deactivate, delete
### Validation
- Required location details, operating hours, status values
### Loading State
- Skeleton table rows
### Empty State
- Empty table with add station CTA
### Error State
- Inline form validation and server error states
### Responsive Behaviour
- Table becomes card list on mobile

## 19. Manage Chargers
### Purpose
Allow admins to manage installed chargers and their availability.
### Layout
- List or table grouped by station
### Components Used
- Table, chips, dropdowns, action buttons
### Navigation
- From admin sidebar
### User Actions
- Add charger, update status, assign to station
### Validation
- Required connector type, power level, station assignment
### Loading State
- Skeleton cards/table
### Empty State
- Empty state with add charger CTA
### Error State
- Validation and failure messaging
### Responsive Behaviour
- Compact stacked card layout on mobile

## 20. Manage Users
### Purpose
Support role management and user oversight.
### Layout
- Table of users with filters and action menu
### Components Used
- Table, badges, filters, modal, action buttons
### Navigation
- From admin sidebar
### User Actions
- View profile, assign role, suspend account
### Validation
- Permission-based actions
### Loading State
- Skeleton rows
### Empty State
- No users found state
### Error State
- Error state with retry
### Responsive Behaviour
- Table transforms into list on smaller screens

## 21. Manage Bookings
### Purpose
Provide operational visibility into all reservations.
### Layout
- Filterable booking table with quick status updates
### Components Used
- Table, filter chips, status badge, action menu
### Navigation
- From admin sidebar
### User Actions
- Update status, review booking, resolve issues
### Validation
- Booking status transition rules
### Loading State
- Skeleton table rows
### Empty State
- No bookings state
### Error State
- Failed state and retry guidance
### Responsive Behaviour
- List view on mobile

## 22. Revenue Analytics
### Purpose
Track revenue, utilization, and performance indicators.
### Layout
- Charts, KPI cards, trend filters, export actions
### Components Used
- Chart cards, KPI cards, filter controls, tables
### Navigation
- From admin sidebar
### User Actions
- Filter period, explore metrics, export reports
### Validation
- Date range validation
### Loading State
- Skeleton chart placeholders
### Empty State
- No analytics data state
### Error State
- Error banner and retry action
### Responsive Behaviour
- Charts stack vertically on mobile

## 23. Settings
### Purpose
Allow users and admins to configure preferences and account settings.
### Layout
- Sectioned settings panels with toggles and forms
### Components Used
- Settings cards, toggle switches, form inputs, buttons
### Navigation
- From account menu or admin sidebar
### User Actions
- Update preferences, notification settings, security settings
### Validation
- Input validation and confirmation flows
### Loading State
- Section skeleton
### Empty State
- N/A
### Error State
- Inline failure message
### Responsive Behaviour
- Collapsed accordion sections on mobile

## 24. 404 Page
### Purpose
Guide users when a page is missing or invalid.
### Layout
- Illustrative message with clear action buttons
### Components Used
- Empty state card, button, link
### Navigation
- Back to home or previous page
### User Actions
- Return home, back to previous page
### Validation
- N/A
### Loading State
- N/A
### Empty State
- N/A
### Error State
- Not found state
### Responsive Behaviour
- Centered single-column layout
