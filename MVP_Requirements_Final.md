# PropConnect - MVP Requirements Document
## Rental Platform for Tunisia

---

## 1. Executive Summary

**Platform Name:** PropConnect  
**Target Market:** Tunisia (National Coverage)  
**Property Types:** Residential (houses, apartments) + Commercial (offices, shops)  
**MVP Goal:** Free platform connecting property owners with tenants - no revenue model in MVP  
**Payment Model:** Hand-to-hand (offline) - platform facilitates connections only  
**Language:** Bilingual support (Arabic/French) - Post-MVP feature

---

## 2. Problem Statement

### Core Problems
- Fragmented property listings across multiple platforms
- No centralized, searchable database for Tunisian rental market
- Difficulty in communication between tenants and property owners
- Lack of trust and verification mechanisms
- Limited coverage of commercial properties
- Time-consuming property search process

### Target Users
1. **Property Owners/Landlords** - Need to reach qualified tenants efficiently
2. **Tenants/Clients** - Need to find suitable properties quickly
3. **Property Listers** - Anyone can list properties on behalf of owners
4. **Platform Administrators** - Manage platform health and content moderation

---

## 3. MVP Scope & Features

### ✅ MUST HAVE (MVP Core Features)

#### 3.1 User Management
- **Registration & Authentication**
  - Email-based registration
  - Phone number (Tunisian format: +216 XX XXX XXX)
  - Password authentication with secure hashing
  - Email verification
  - Password reset functionality

- **User Roles**
  - Every user can be BOTH tenant AND owner simultaneously
  - Users can search for properties AND list properties
  - No separate role selection needed

- **User Limits (MVP)**
  - Maximum 3 property listings per user
  - Maximum 100 messages sent per day (spam prevention)
  - Maximum 20 favorite properties per user

#### 3.2 Property Listing Management

- **Create Listing**
  - Property type: Residential / Commercial / Mixed
  - Category: House / Apartment / Office / Shop / Land
  - Complete property details required (no draft saving in MVP)
  - Image upload: Minimum 2, Maximum 6 images
  - Images must be validated (format, size, content)
  - Auto-approve listings (admin can review and remove later)

- **Property Information Fields**
  - Title (required)
  - Description (required) - owner can include contact info here
  - Property type & category (required)
  - Address (required)
  - City (dropdown - Tunisian cities)
  - Region/Neighborhood (required)
  - GPS coordinates (latitude/longitude) - for map view
  - Price in TND (Tunisian Dinar)
  - Price period: per month / per year / per day
  - Negotiable: Yes / No checkbox
  - Size in square meters (required)
  - Bedrooms (for residential)
  - Bathrooms (for residential)
  - Availability date
  - Amenities (checklist)
  - Listed by: Owner / On behalf of owner

- **Edit/Delete Listing**
  - Owner can edit their listings anytime
  - Owner can delete listings
  - Owner can manually hide/show listings

- **Listing Status**
  - Available (visible in search)
  - Rented (auto-hidden from search)
  - Hidden (owner manually hides)

- **Listing Expiration**
  - Listings auto-hide after 30 days of inactivity
  - Owner receives notification before expiration
  - Owner can reactivate old listings (no need to recreate)

#### 3.3 Search & Discovery

- **Guest User Access (Unregistered)**
  - Can browse and search all listings
  - Can view: images, location (city/region), basic info
  - CANNOT view: full description, owner contact info
  - CANNOT: contact owners, favorite properties, create listings
  - Must register to unlock full features

- **Registered User Search**
  - View all property details including description
  - Access owner contact information from description

- **Search Methods**
  - Search by City (dropdown)
  - Search by Neighborhood/District
  - GPS radius search (within X km of location)
  - Map-based property browsing

- **Filters**
  - Property type (residential/commercial/mixed)
  - Category (house/apartment/office/shop)
  - Price range (min/max in TND)
  - Size range (square meters)
  - Number of bedrooms
  - Number of bathrooms
  - Amenities (multi-select)
  - Negotiable only

- **Sorting Options**
  - Price (low to high / high to low)
  - Date posted (newest first / oldest first)
  - Size (largest first / smallest first)

- **No Results Handling**
  - Suggest nearby alternatives (expand search radius)
  - Save search and notify when matching properties added

- **Favorites/Bookmarks**
  - Registered users can save up to 20 favorite properties
  - Quick access to saved properties

#### 3.4 Communication System

- **In-App Messaging**
  - Direct messaging between tenants and owners
  - Message thread per property inquiry
  - Real-time message notifications (optional for owner)
  - Message read/unread status
  - Message limit: 100 messages per user per day

- **Contact Methods**
  - In-app messaging (primary)
  - Owner can include phone/email in property description
  - Both methods available simultaneously

- **Viewing Appointments**
  - No built-in calendar system in MVP
  - Tenants message owners: "I want to view the property"
  - Arrange viewing time manually through chat

- **Owner Response Reminders**
  - Optional: Auto-reminder if owner doesn't respond within X hours
  - Owner can enable/disable this in settings

#### 3.5 Trust & Safety

- **No Verification System in MVP**
  - No ID verification required
  - No property ownership verification
  - Payment is hand-to-hand (offline)
  - Trust built through communication

- **Duplicate Detection**
  - System checks for potential duplicates when listing created
  - Detection criteria:
    - Address similarity (90%+ match)
    - Price range (within 10%)
    - Property size (within 10%)
    - Image similarity (hash comparison)
  - If 3+ factors match → Flag for admin review
  - Admin decides: keep both / delete duplicate / investigate

- **Reporting System**
  - Users can report suspicious listings
  - Users can report suspicious users
  - Block user functionality
  - Reports go to admin dashboard for review

#### 3.6 Owner Dashboard

- **Listing Management**
  - View all my listings (active/hidden/expired)
  - Edit/delete listings
  - View listing statistics:
    - Number of views
    - Number of inquiries
    - Number of favorites
    - Days since posted

- **Inquiry Management**
  - View all inquiries/messages
  - Respond to inquiries
  - Mark inquiries as responded/closed

- **Notification Settings**
  - Enable/disable email notifications
  - Enable/disable SMS notifications (future)
  - Enable/disable push notifications (future)

#### 3.7 Admin Dashboard

- **User Management**
  - View all users
  - Search users by email/phone/name
  - Suspend/unsuspend users
  - Delete users
  - Ban reported users
  - View user activity logs

- **Listing Management**
  - View all listings (active/hidden/flagged)
  - Search listings
  - Hide/unhide listings
  - Delete listings
  - Edit property details (if needed)
  - Review flagged duplicate listings

- **Content Moderation**
  - Review reported listings
  - Review reported users
  - View report details and take action

- **Messaging Oversight**
  - View all messages between users (for dispute resolution)
  - Search messages

- **Platform Statistics**
  - Total users (tenants/owners)
  - Total listings (by type, by city)
  - Total messages sent
  - Active users (daily/weekly/monthly)
  - New listings (daily/weekly/monthly)
  - Popular cities/neighborhoods
  - Average response time

- **Duplicate Detection Queue**
  - View flagged potential duplicates
  - Compare listings side-by-side
  - Take action: approve both / delete one / contact users

---

## 4. User Workflows

### 4.1 Guest User Workflow
```
1. Visit platform
2. Browse listings (limited view)
3. Search/filter properties
4. View property images and location
5. See "Register to view full details" prompt
6. Register to unlock features
```

### 4.2 Tenant Workflow
```
1. Register/Login
2. Search properties (city, filters, map)
3. View property details (full description, contact info)
4. Save favorites (up to 20)
5. Contact owner via in-app messaging
6. Arrange viewing through chat
7. Meet owner and view property (offline)
8. Negotiate and pay hand-to-hand (offline)
```

### 4.3 Owner Workflow
```
1. Register/Login
2. Create property listing
   - Fill all required fields
   - Upload 2-6 images
   - Set price and negotiability
   - Include contact info in description
3. Submit listing (auto-approved)
4. Receive inquiries from tenants
5. Respond to messages
6. Arrange viewings
7. Mark property as rented when done
8. Reactivate listing if tenant leaves
```

### 4.4 Admin Workflow
```
1. Login to admin panel
2. Monitor dashboard statistics
3. Review reported listings/users
4. Check duplicate detection queue
5. Take moderation actions
6. View platform health metrics
```

---

## 5. Data Model

### 5.1 Core Entities

#### User
```
- user_id (PK, UUID)
- email (unique, required)
- phone (unique, required, format: +216XXXXXXXX)
- password_hash (required)
- full_name (required)
- created_at (timestamp)
- updated_at (timestamp)
- is_active (boolean, default: true)
- is_suspended (boolean, default: false)
- listing_count (integer, default: 0, max: 3)
- daily_message_count (integer, default: 0, resets daily)
- last_login (timestamp)
```

#### Property
```
- property_id (PK, UUID)
- owner_id (FK → User)
- title (required)
- description (required, text)
- property_type (enum: residential/commercial/mixed)
- category (enum: house/apartment/office/shop/land)
- address (required)
- city (required, dropdown)
- region (required)
- latitude (decimal)
- longitude (decimal)
- price (decimal, required)
- currency (default: TND)
- price_period (enum: month/year/day)
- is_negotiable (boolean, default: false)
- size_sqm (decimal, required)
- bedrooms (integer, nullable)
- bathrooms (integer, nullable)
- availability_date (date)
- status (enum: available/rented/hidden, default: available)
- listed_by (enum: owner/on_behalf)
- view_count (integer, default: 0)
- inquiry_count (integer, default: 0)
- favorite_count (integer, default: 0)
- created_at (timestamp)
- updated_at (timestamp)
- last_activity_at (timestamp)
- expires_at (timestamp, created_at + 30 days)
```

#### PropertyImage
```
- image_id (PK, UUID)
- property_id (FK → Property)
- image_url (required)
- image_hash (for duplicate detection)
- image_order (integer, 1-6)
- is_primary (boolean)
- uploaded_at (timestamp)
```

#### Amenity
```
- amenity_id (PK, UUID)
- name_ar (required)
- name_en (required)
- icon (optional)
- category (enum: general/residential/commercial)
```

#### PropertyAmenity (Junction Table)
```
- property_id (FK → Property)
- amenity_id (FK → Amenity)
- PRIMARY KEY (property_id, amenity_id)
```

#### Message
```
- message_id (PK, UUID)
- sender_id (FK → User)
- receiver_id (FK → User)
- property_id (FK → Property)
- message_text (required, max 1000 chars)
- is_read (boolean, default: false)
- created_at (timestamp)
```

#### Favorite
```
- favorite_id (PK, UUID)
- user_id (FK → User)
- property_id (FK → Property)
- created_at (timestamp)
- UNIQUE (user_id, property_id)
```

#### SavedSearch
```
- search_id (PK, UUID)
- user_id (FK → User)
- search_criteria (JSON)
- alert_enabled (boolean, default: true)
- created_at (timestamp)
```

#### Report
```
- report_id (PK, UUID)
- reporter_id (FK → User)
- reported_user_id (FK → User, nullable)
- reported_property_id (FK → Property, nullable)
- report_type (enum: user/property)
- reason (required)
- description (text)
- status (enum: pending/reviewed/resolved)
- admin_notes (text, nullable)
- created_at (timestamp)
- reviewed_at (timestamp, nullable)
- reviewed_by (FK → User, nullable)
```

#### DuplicateAlert
```
- alert_id (PK, UUID)
- property_id_1 (FK → Property)
- property_id_2 (FK → Property)
- similarity_score (decimal, 0-100)
- match_factors (JSON: address/price/size/images)
- status (enum: pending/approved/rejected)
- admin_notes (text, nullable)
- created_at (timestamp)
- reviewed_at (timestamp, nullable)
```

#### BlockedUser
```
- block_id (PK, UUID)
- blocker_id (FK → User)
- blocked_id (FK → User)
- created_at (timestamp)
- UNIQUE (blocker_id, blocked_id)
```

---

## 6. Technical Architecture

### 6.1 Technology Stack Recommendations

#### Frontend
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **State Management**: Zustand or React Context
- **Forms**: React Hook Form + Zod validation
- **Maps**: Leaflet.js (react-leaflet)
- **Image Upload**: react-dropzone
- **HTTP Client**: Axios or Fetch API
- **UI Components**: shadcn/ui, Radix UI

#### Backend
- **Framework**: NestJS (TypeScript)
- **API**: RESTful API
- **Authentication**: JWT tokens (@nestjs/jwt, @nestjs/passport)
- **Validation**: class-validator, class-transformer
- **ORM**: TypeORM or Prisma
- **File Upload**: Multer (@nestjs/platform-express)
- **Image Processing**: Sharp
- **Email**: Nodemailer or @nestjs-modules/mailer
- **Cron Jobs**: @nestjs/schedule (for listing expiration)

#### Database
- **Primary DB**: PostgreSQL 15+
- **ORM**: Prisma (recommended) or TypeORM
- **Caching**: Redis (ioredis)
- **Search**: PostgreSQL Full-Text Search (MVP) → Elasticsearch (future)
- **Migrations**: Prisma Migrate or TypeORM migrations

#### Storage
- **Images (MVP)**: Local disk storage (free, simple)
  - Store in `/uploads/properties/` directory
  - Serve via backend static file serving
  - Image optimization before saving (compress, resize)
- **Images (Future)**: AWS S3 or Cloudinary with CDN (when scaling needed)

#### Infrastructure
- **Hosting**: AWS, DigitalOcean, or Heroku
- **Email**: SendGrid or AWS SES
- **SMS**: Twilio (future feature)

### 6.2 System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Client Layer                         │
│  ┌──────────────┐                    ┌──────────────┐  │
│  │   Web App    │                    │ Admin Panel  │  │
│  │  (React/Vue) │                    │    (Web)     │  │
│  └──────────────┘                    └──────────────┘  │
└─────────────────────────────────────────────────────────┘
                         │
                         │ HTTPS/REST API
                         │
┌─────────────────────────────────────────────────────────┐
│                  API Gateway Layer                      │
│         (Authentication, Rate Limiting, CORS)           │
└─────────────────────────────────────────────────────────┘
                         │
         ┌───────────────┼───────────────┐
         │               │               │
┌────────┴────┐  ┌──────┴──────┐  ┌─────┴──────┐
│    Auth     │  │  Property   │  │   Search   │
│   Service   │  │   Service   │  │  Service   │
└─────────────┘  └─────────────┘  └────────────┘
         │               │               │
         │               │               │
┌────────┴────┐  ┌──────┴──────┐  ┌─────┴──────┐
│  Messaging  │  │    Admin    │  │   Media    │
│   Service   │  │   Service   │  │  Service   │
└─────────────┘  └─────────────┘  └────────────┘
         │               │               │
         └───────────────┼───────────────┘
                         │
┌─────────────────────────────────────────────────────────┐
│                    Data Layer                           │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │
│  │  PostgreSQL  │  │    Redis     │  │Local Storage │ │
│  │  (Main DB)   │  │   (Cache)    │  │  (Images)    │ │
│  └──────────────┘  └──────────────┘  └──────────────┘ │
└─────────────────────────────────────────────────────────┘
```

---

## 7. Non-Functional Requirements

### 6.3 Image Storage Strategy (MVP)

**Local Disk Storage Implementation:**

1. **Directory Structure:**
   ```
   /uploads/
     /properties/
       /{property_id}/
         /original/
           - image1.jpg
           - image2.jpg
         /thumbnails/
           - image1_thumb.jpg
           - image2_thumb.jpg
         /medium/
           - image1_medium.jpg
           - image2_medium.jpg
   ```

2. **Image Processing on Upload:**
   - Validate: file type (jpg, png, webp), max size (5MB)
   - Generate 3 versions:
     - **Original**: Max 1920x1080px, compressed 85% quality
     - **Medium**: 800x600px for listing cards
     - **Thumbnail**: 300x200px for search results
   - Generate image hash for duplicate detection
   - Store metadata in database (PropertyImage table)

3. **Serving Images:**
   - Backend serves via static file route: `/api/images/{property_id}/{size}/{filename}`
   - Add caching headers (Cache-Control: max-age=31536000)
   - Use nginx/Apache for production static file serving

4. **Storage Limits (MVP):**
   - Max 6 images per property
   - Max 5MB per image
   - Estimated storage: 10,000 properties × 6 images × 2MB avg = ~120GB

5. **Backup Strategy:**
   - Daily backup of `/uploads/` directory
   - Keep 7 days of backups

6. **Migration Path (Future):**
   - When storage exceeds 500GB or traffic increases
   - Migrate to AWS S3 or Cloudinary
   - Update image_url in database
   - Keep same API endpoints

---

## 7. Non-Functional Requirements

### 7.1 Performance
- Search results load within 2 seconds
- Image loading optimized (compressed, multiple sizes)
- Support 1,000+ concurrent users (MVP scale)
- Handle 10,000+ property listings

### 7.2 Security
- HTTPS/TLS encryption for all traffic
- Password hashing (bcrypt)
- JWT token authentication
- SQL injection prevention (parameterized queries)
- XSS protection
- CSRF protection
- File upload validation (type, size, content)
- Rate limiting (API calls, messages, listings)

### 7.3 Usability
- Responsive design (mobile, tablet, desktop)
- Fast onboarding (< 3 minutes to first listing)
- Intuitive navigation
- Clear error messages
- Loading indicators

### 7.4 Scalability
- Database indexing on frequently queried fields
- Redis caching for hot data
- Horizontal scaling capability
- CDN for static assets

### 7.5 Reliability
- 99% uptime target
- Daily automated backups
- Error logging and monitoring
- Graceful error handling

---

## 8. Edge Cases & Business Rules

### 8.1 Listing Limits
- User reaches 3 listings → Show message: "You've reached the maximum of 3 listings. Delete or hide an existing listing to create a new one."
- Future: Offer premium subscription for unlimited listings

### 8.2 Message Limits
- User sends 100 messages in a day → Block sending until next day
- Show remaining message count in UI
- Admin can adjust limits per user if needed

### 8.3 Favorite Limits
- User reaches 20 favorites → Show message: "Maximum 20 favorites. Remove one to add another."

### 8.4 Listing Expiration
- 25 days after posting → Send email: "Your listing expires in 5 days. Click to keep it active."
- 30 days → Auto-hide listing
- Owner can reactivate anytime (resets expiration timer)

### 8.5 Duplicate Detection
- Same owner, same address → Show warning: "You have a listing at this address. Is this a different unit? Add unit number to differentiate."
- Different users, similar property → Flag for admin review
- Admin reviews within 48 hours

### 8.6 Property Status Changes
- Owner marks as "Rented" → Auto-hide from search
- Owner can change back to "Available" anytime
- Hidden listings don't count toward 3-listing limit

### 8.7 Guest User Restrictions
- Guest clicks "Contact Owner" → Redirect to registration
- Guest clicks "Add to Favorites" → Redirect to registration
- Guest tries to create listing → Redirect to registration

### 8.8 Blocked Users
- User A blocks User B → B cannot message A
- B's messages to A are rejected with error
- B cannot see A's listings in search results

### 8.9 Suspended Users
- Admin suspends user → Cannot login
- Existing listings hidden
- Cannot send/receive messages
- Show message: "Your account has been suspended. Contact support."

### 8.10 Deleted Listings
- Owner deletes listing → Soft delete (keep in DB)
- Hide from search immediately
- Associated messages remain accessible
- Can be restored by admin if needed

---

## 9. Tunisian-Specific Features

### 9.1 Cities Dropdown
Major Tunisian cities:
- Tunis
- Sfax
- Sousse
- Kairouan
- Bizerte
- Gabès
- Ariana
- Gafsa
- Monastir
- Ben Arous
- Kasserine
- Médenine
- Nabeul
- Tataouine
- Béja
- Jendouba
- Mahdia
- Sidi Bouzid
- Zaghouan
- Siliana
- Kébili
- Tozeur
- Manouba
- Kef

### 9.2 Phone Number Format
- Format: +216 XX XXX XXX
- Validation: Must start with +216
- Length: 12 characters (including +216)

### 9.3 Currency
- Default: TND (Tunisian Dinar)
- Display format: 1,500 TND / month

### 9.4 Common Amenities (Tunisia-specific)
**Residential:**
- Climatisation (Air Conditioning)
- Chauffage (Heating)
- Meublé (Furnished)
- Cuisine équipée (Equipped Kitchen)
- Balcon (Balcony)
- Terrasse (Terrace)
- Jardin (Garden)
- Parking
- Ascenseur (Elevator)
- Concierge
- Sécurité 24/7 (24/7 Security)
- Internet/WiFi

**Commercial:**
- Vitrine (Storefront)
- Climatisation
- Parking clients (Customer Parking)
- Sécurité
- Accès handicapés (Disabled Access)
- Salle de réunion (Meeting Room)
- Internet haut débit (High-speed Internet)

---

## 10. Future Enhancements (Post-MVP)

### Phase 2 Features
- ✨ Bilingual UI (Arabic RTL support)
- ✨ Mobile apps (iOS/Android)
- ✨ Premium subscriptions (unlimited listings, featured listings)
- ✨ Advanced analytics for owners
- ✨ Property comparison tool
- ✨ Virtual tours (360° images)
- ✨ SMS notifications
- ✨ Push notifications

### Phase 3 Features
- ✨ User verification system (ID, property ownership)
- ✨ Rating and review system
- ✨ In-app payment processing
- ✨ Escrow service for deposits
- ✨ Property manager accounts
- ✨ Agency accounts (manage multiple owners)
- ✨ AI-based content moderation
- ✨ Chatbot for common questions
- ✨ Rental agreement templates

---

## 11. Success Metrics (KPIs)

### User Acquisition
- Total registered users
- Daily/Weekly/Monthly active users
- User retention rate
- Registration completion rate

### Engagement
- Average listings per owner
- Average searches per user
- Average messages per inquiry
- Time spent on platform

### Listing Quality
- Listings with complete information (%)
- Listings with 4+ images (%)
- Average time to first inquiry
- Listing-to-rental conversion rate

### Platform Health
- Reported listings (%)
- Suspended users (%)
- Duplicate detection accuracy
- Average admin response time

---

## 12. Development Roadmap

### Sprint 1-2 (Weeks 1-4): Foundation
- Database schema design
- User authentication system
- Basic property CRUD operations
- Image upload functionality

### Sprint 3-4 (Weeks 5-8): Core Features
- Search and filtering
- Map integration
- Messaging system
- Favorites functionality

### Sprint 5-6 (Weeks 9-12): Admin & Polish
- Admin dashboard
- Duplicate detection
- Reporting system
- Owner dashboard

### Sprint 7-8 (Weeks 13-16): Testing & Launch
- End-to-end testing
- Performance optimization
- Security audit
- Beta launch
- Bug fixes
- Public launch

---

## 13. Risk Analysis

### Technical Risks
- **Image storage costs** → Use compression, CDN caching
- **Database performance** → Proper indexing, query optimization
- **Spam/abuse** → Rate limiting, reporting system

### Business Risks
- **Low user adoption** → Marketing, referral program
- **Fake listings** → Duplicate detection, user reports, admin moderation
- **Competition** → Focus on Tunisia-specific features, better UX

### Mitigation Strategies
- Start with MVP, iterate based on feedback
- Monitor metrics closely
- Build community trust through transparency
- Responsive customer support

---

## 14. Conclusion

This MVP focuses on core functionality to validate the market need for a centralized Tunisian rental platform. By keeping the scope minimal and avoiding complex features like verification and payment processing, we can launch quickly and gather real user feedback.

**Key MVP Principles:**
- ✅ Simple and fast
- ✅ Free for all users
- ✅ Both residential and commercial
- ✅ Tunisia-focused
- ✅ Trust through transparency
- ✅ Room to grow

**Next Steps:**
1. Review and approve this requirements document
2. Create detailed technical specifications
3. Design UI/UX mockups
4. Set up development environment
5. Begin Sprint 1 development

---

**Document Version:** 1.0  
**Last Updated:** 2024  
**Status:** Ready for Development
