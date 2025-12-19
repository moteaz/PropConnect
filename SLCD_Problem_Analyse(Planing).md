# PropConnect - Rental Platform SDLC Analysis
## Tunisia National Rental Platform (MVP Scope)

---

## 1. Problem Analysis
Problem Definition
Many people struggle to find rental properties (houses, offices, shops) due to:

Fragmented property listings across multiple platforms and offline channels
Lack of centralized, searchable database
Difficulty verifying property authenticity and owner credibility
Inefficient communication between tenants and property owners
Limited filtering and search capabilities
Language barriers (Future: Arabic/French bilingual support)
No standardized rental process
Limited trust mechanisms without verification
Pain Points
For Tenants: Time-consuming search, unreliable listings, difficulty contacting owners, lack of property verification
For Property Owners: Limited reach, manual listing management, difficulty finding qualified tenants, no centralized management
Why Current Solutions Are Insufficient
Existing platforms may lack bilingual support
Limited property type coverage (residential-focused, ignoring commercial)
Poor user experience and outdated interfaces
Lack of trust mechanisms and verification systems
No unified national coverage
## 2. Stakeholders & Users

### User Types (Actors)

**1. Tenant/Client**
- Goals: Find suitable properties quickly, communicate with owners, save favorite listings, schedule viewings
- Can also list properties (dual role)
- Limitations: Max 20 favorites, 100 messages/day

**2. Property Owner/Landlord**
- Goals: List properties efficiently, reach qualified tenants, manage multiple listings, respond to inquiries, track listing performance
- Can also search for properties (dual role)
- Limitations: Max 3 listings per user (MVP)

**3. Property Lister (On Behalf)**
- Anyone can list properties on behalf of owners
- Must indicate "Listed by: On behalf of owner"
- Same limitations as regular owners

**4. Platform Administrator**
- Goals: Monitor platform health, moderate content, handle disputes, manage duplicate detection
- Full control: suspend users, delete listings, view messages, platform statistics

**5. Guest User (Unregistered)**
- Goals: Browse listings, view basic property information
- Can see: Images, location (city/region), basic info
- Cannot see: Full description, owner contact info
- Cannot: Contact owners, favorite properties, create listings
- Must register to unlock full features
## 3. Requirements Analysis

### 3.1 MVP Scope Decisions

**✅ IN SCOPE (MVP)**
- Both residential AND commercial properties
- Tunisia national coverage
- Free platform (no revenue model in MVP)
- Hand-to-hand payment (offline)
- No verification system (trust through community)
- Manual duplicate detection by admin
- Auto-approve listings (admin reviews later)
- Bilingual UI (Post-MVP)

**❌ OUT OF SCOPE (Post-MVP)**
- Payment processing
- Escrow services
- User/property verification
- AI content moderation
- Mobile apps
- Premium subscriptions
- Rating/review system
- Property manager accounts

### 3.2 Functional Requirements

#### User Management

- User registration and authentication (email + phone)
- Tunisian phone format: +216 XX XXX XXX
- Profile management (personal info, notification preferences)
- Unified role (every user can search AND list)
- Password reset and account recovery
- User limits: 3 listings, 100 messages/day, 20 favorites
#### Property Management

- Create, edit, delete property listings
- Upload 2-6 images (minimum 2, maximum 6)
- Complete property details required (no draft saving)
- Property types: Residential / Commercial / Mixed
- Categories: House / Apartment / Office / Shop / Land
- Price in TND (Tunisian Dinar)
- Price period: per month / year / day
- Negotiable: Yes/No checkbox
- Listed by: Owner / On behalf of owner
- Property status: Available / Rented / Hidden
- Auto-approve listings (admin can review later)
- Listing expiration: 30 days (auto-hide, owner can reactivate)
- Owner can manually hide/show listings
#### Search & Discovery

- Search by City (Tunisian cities dropdown)
- Search by Neighborhood/District
- GPS radius search (within X km)
- Map-based property browsing
- Filters: property type, category, price range, size, bedrooms, bathrooms, amenities, negotiable
- Sorting: price, date posted, size
- Saved searches with alerts (notify when matching properties added)
- Favorite/bookmark properties (max 20 per user)
- No results handling: suggest nearby alternatives
- Guest users: limited view (no full description, no contact info)
#### Communication

- In-app messaging between tenants and owners
- Message limit: 100 messages per user per day
- Message read/unread status
- Real-time notifications (optional for owner)
- Auto-reminder if owner doesn't respond (optional)
- Owner can include contact info in property description
- Both in-app messaging AND direct contact available
- Viewing appointments: arranged manually through chat (no calendar system in MVP)
- Block user functionality
#### Trust & Safety (MVP)

- NO verification system in MVP (hand-to-hand payment model)
- Duplicate detection system:
  - Check: address similarity, price range, size, image hash
  - Flag for admin review if 3+ factors match
  - Admin decides: keep both / delete / investigate
- User reporting system (report suspicious listings/users)
- Block user functionality
- Admin moderation and content review
- Future: User verification, rating/review system
#### Content Management

- Property image gallery (2-6 images)
- Image validation (format, size, content)
- Property description (single language in MVP, bilingual post-MVP)
- Tunisia-specific amenities checklist
- Location: City, Region, GPS coordinates
- Address details
- Owner can include contact info in description
Non-Functional Requirements
#### Owner Dashboard

- View all my listings (active/hidden/expired)
- Listing statistics: views, inquiries, favorites, days posted
- Edit/delete listings
- Manage inquiries and messages
- Notification settings (email/SMS/push)
- Reactivate expired listings

#### Admin Dashboard

- User management: view, search, suspend, delete, ban users
- Listing management: view, hide, delete, edit listings
- Content moderation: review reported listings/users
- Messaging oversight: view all messages for dispute resolution
- Platform statistics: users, listings, messages, activity metrics
- Duplicate detection queue: review flagged duplicates
- Take moderation actions

### 3.3 Non-Functional Requirements

#### Performance

- Search results load within 2 seconds
- Support 1,000+ concurrent users (MVP scale)
- Handle 10,000+ property listings
- Image optimization and CDN for fast loading
#### Security

- Secure authentication (JWT tokens, bcrypt password hashing)
- Data encryption in transit (HTTPS/TLS)
- Protection against SQL injection, XSS, CSRF attacks
- Secure file upload validation (type, size, content)
- Rate limiting: API calls, messages (100/day), listings (3 max)
- Privacy compliance for user data
#### Usability

- Intuitive interface (bilingual post-MVP)
- Responsive design (mobile, tablet, desktop)
- Fast onboarding (< 3 minutes to first listing)
- Clear error messages and loading indicators
#### Scalability

- Database optimization and indexing
- Redis caching for hot data
- Horizontal scaling capability
- CDN for static assets
- Architecture ready for future features
#### Reliability

- 99% uptime target (MVP)
- Daily automated backups
- Error logging and monitoring
- Graceful error handling
## 4. System Design (High-Level)

### 4.1 Technology Stack (Recommended)

**Frontend:**
- Web App: React.js or Vue.js
- Styling: Tailwind CSS
- Maps: Leaflet.js or Google Maps API
- State Management: Redux/Vuex

**Backend:**
- Framework: Node.js (Express) or Python (Django/FastAPI)
- API: RESTful
- Authentication: JWT

**Database:**
- Primary: PostgreSQL
- Cache: Redis
- Search: PostgreSQL Full-Text Search (MVP)

**Storage:**
- Images (MVP): Local disk storage (free)
  - Directory: `/uploads/properties/{property_id}/`
  - 3 sizes: original, medium, thumbnail
  - Max 5MB per image, 6 images per property
- Images (Future): AWS S3 or Cloudinary with CDN

**Infrastructure:**
- Hosting: VPS (DigitalOcean, Linode) or Heroku
- Email: SendGrid (free tier) or AWS SES
- Storage: Local disk (MVP) → Cloud storage (when scaling)

### 4.2 Main System Components
┌─────────────────────────────────────────────────────────┐
│                    Client Layer                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │
│  │  Web App     │  │  Mobile App  │  │  Admin Panel │ │
│  │ (React/Vue)  │  │ (React Native│  │  (Web)       │ │
│  └──────────────┘  └──────────────┘  └──────────────┘ │
└─────────────────────────────────────────────────────────┘
                         │
                         │ HTTPS/REST API
                         │
┌─────────────────────────────────────────────────────────┐
│                  API Gateway Layer                      │
│  ┌──────────────────────────────────────────────────┐  │
│  │  API Gateway (Authentication, Rate Limiting)     │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
                         │
         ┌───────────────┼───────────────┐
         │               │               │
┌────────┴────┐  ┌──────┴──────┐  ┌─────┴──────┐
│   User      │  │  Property   │  │  Search   │
│  Service    │  │   Service   │  │  Service  │
└─────────────┘  └─────────────┘  └───────────┘
         │               │               │
         │               │               │
┌────────┴────┐  ┌──────┴──────┐  ┌─────┴──────┐
│  Messaging  │  │ Notification│  │  Media     │
│   Service   │  │   Service   │  │  Service   │
└─────────────┘  └─────────────┘  └───────────┘
         │               │               │
         └───────────────┼───────────────┘
                         │
┌─────────────────────────────────────────────────────────┐
│                  Data Layer                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │
│  │  PostgreSQL  │  │    Redis     │  │   S3/Cloud   │ │
│  │  (Primary DB)│  │   (Cache)    │  │  (Storage)   │ │
│  └──────────────┘  └──────────────┘  └──────────────┘ │
└─────────────────────────────────────────────────────────┘
Component Interactions
User Service: Handles authentication, authorization, user profiles
Property Service: Manages property CRUD operations, listings
Search Service: Handles search queries, filtering, indexing
Messaging Service: Manages communication between users
Notification Service: Sends emails, push notifications, SMS
Media Service: Handles image uploads, storage, CDN delivery
Basic Workflow
Tenant Workflow:

Register/Login → 2. Search properties → 3. Filter results → 4. View property details → 5. Contact owner → 6. Schedule viewing → 7. Save favorites
Owner Workflow:

Register/Login → 2. Verify account → 3. Create property listing → 4. Upload images → 5. Publish listing → 6. Receive inquiries → 7. Respond to messages → 8. Manage listings
## 5. Data Design

### 5.1 Main Entities

#### User

**Attributes:**
- user_id (PK, UUID)
- email (unique, required)
- phone (unique, required, format: +216XXXXXXXX)
- password_hash (required)
- full_name (required)
- is_active (boolean, default: true)
- is_suspended (boolean, default: false)
- listing_count (integer, default: 0, max: 3)
- daily_message_count (integer, default: 0, resets daily)
- created_at, updated_at, last_login (timestamps)
#### Property

**Attributes:**
- property_id (PK, UUID)
- owner_id (FK → User)
- title (required)
- description (required, text)
- property_type (enum: residential/commercial/mixed)
- category (enum: house/apartment/office/shop/land)
- address, city, region (required)
- latitude, longitude (decimal)
- price (decimal, required, TND)
- price_period (enum: month/year/day)
- is_negotiable (boolean, default: false)
- size_sqm (decimal, required)
- bedrooms, bathrooms (integer, nullable)
- availability_date (date)
- status (enum: available/rented/hidden)
- listed_by (enum: owner/on_behalf)
- view_count, inquiry_count, favorite_count (integers)
- created_at, updated_at, last_activity_at (timestamps)
- expires_at (timestamp, created_at + 30 days)
#### PropertyImage

**Attributes:**
- image_id (PK, UUID)
- property_id (FK → Property)
- image_url (required)
- image_hash (for duplicate detection)
- image_order (integer, 1-6)
- is_primary (boolean)
- uploaded_at (timestamp)
#### Amenity

**Attributes:**
- amenity_id (PK, UUID)
- name_ar, name_en (required)
- icon (optional)
- category (enum: general/residential/commercial)
#### PropertyAmenity (Junction Table)

**Attributes:**
- property_id (FK → Property)
- amenity_id (FK → Amenity)
- PRIMARY KEY (property_id, amenity_id)
#### Message

**Attributes:**
- message_id (PK, UUID)
- sender_id (FK → User)
- receiver_id (FK → User)
- property_id (FK → Property)
- message_text (required, max 1000 chars)
- is_read (boolean, default: false)
- created_at (timestamp)
#### Report

**Attributes:**
- report_id (PK, UUID)
- reporter_id (FK → User)
- reported_user_id (FK → User, nullable)
- reported_property_id (FK → Property, nullable)
- report_type (enum: user/property)
- reason, description (text)
- status (enum: pending/reviewed/resolved)
- admin_notes (text, nullable)
- created_at, reviewed_at (timestamps)
- reviewed_by (FK → User, nullable)
#### DuplicateAlert

**Attributes:**
- alert_id (PK, UUID)
- property_id_1 (FK → Property)
- property_id_2 (FK → Property)
- similarity_score (decimal, 0-100)
- match_factors (JSON: address/price/size/images)
- status (enum: pending/approved/rejected)
- admin_notes (text, nullable)
- created_at, reviewed_at (timestamps)

#### Favorite

**Attributes:**
- favorite_id (PK, UUID)
- user_id (FK → User)
- property_id (FK → Property)
- created_at (timestamp)
- UNIQUE (user_id, property_id)
#### SavedSearch

**Attributes:**
- search_id (PK, UUID)
- user_id (FK → User)
- search_criteria (JSON)
- alert_enabled (boolean, default: true)
- created_at (timestamp)
#### BlockedUser

**Attributes:**
- block_id (PK, UUID)
- blocker_id (FK → User)
- blocked_id (FK → User)
- created_at (timestamp)
- UNIQUE (blocker_id, blocked_id)
### 5.2 Tunisia-Specific Data

#### Tunisian Cities (Dropdown)
Tunis, Sfax, Sousse, Kairouan, Bizerte, Gabès, Ariana, Gafsa, Monastir, Ben Arous, Kasserine, Médenine, Nabeul, Tataouine, Béja, Jendouba, Mahdia, Sidi Bouzid, Zaghouan, Siliana, Kébili, Tozeur, Manouba, Kef

#### Common Amenities
**Residential:** Climatisation, Chauffage, Meublé, Cuisine équipée, Balcon, Terrasse, Jardin, Parking, Ascenseur, Concierge, Sécurité 24/7, Internet/WiFi

**Commercial:** Vitrine, Climatisation, Parking clients, Sécurité, Accès handicapés, Salle de réunion, Internet haut débit
### 5.3 Entity Relationships

```
User (1) ────< (M) Property
User (1) ────< (M) Message (as sender)
User (1) ────< (M) Message (as receiver)
User (1) ────< (M) Favorite
User (1) ────< (M) SavedSearch
User (1) ────< (M) Report (as reporter)
User (1) ────< (M) BlockedUser (as blocker)

Property (1) ────< (M) PropertyImage
Property (1) ────< (M) Message
Property (1) ────< (M) Favorite
Property (1) ────< (M) Report
Property (1) ────< (M) DuplicateAlert
Property (M) ────< (M) Amenity (via PropertyAmenity)
```
## 6. User Workflows

### 6.1 Guest User Workflow
```
1. Visit platform
2. Browse listings (limited view: images, location, basic info)
3. Search/filter properties
4. Click "Contact Owner" → Redirect to registration
5. Register to unlock full features
```

### 6.2 Tenant Workflow
```
1. Register/Login
2. Search properties (city, filters, map, GPS radius)
3. View full property details (description, contact info)
4. Save favorites (max 20)
5. Contact owner via in-app messaging
6. Arrange viewing through chat
7. Meet owner offline, view property
8. Negotiate and pay hand-to-hand
```

### 6.3 Owner Workflow
```
1. Register/Login
2. Create property listing
   - Fill all required fields
   - Upload 2-6 images
   - Set price, negotiability
   - Include contact info in description
3. Submit (auto-approved)
4. Receive inquiries from tenants
5. Respond to messages
6. Arrange viewings
7. Mark as rented when done
8. Reactivate when available again
```

### 6.4 Admin Workflow
```
1. Login to admin panel
2. Monitor dashboard statistics
3. Review reported listings/users
4. Check duplicate detection queue
5. Take moderation actions (suspend, delete, hide)
6. View platform health metrics
```

---

## 7. Edge Cases & Business Rules

### 7.1 User Limits
- **3 listings max** → Show error: "Maximum 3 listings reached. Delete or hide one to create new."
- **100 messages/day** → Block sending, show remaining count
- **20 favorites max** → Show error: "Maximum 20 favorites. Remove one to add another."

### 7.2 Listing Expiration
- **Day 25** → Email: "Your listing expires in 5 days. Click to keep active."
- **Day 30** → Auto-hide listing
- Owner can reactivate anytime (resets timer)

### 7.3 Duplicate Detection
- **Same owner, same address** → Warning: "You have a listing here. Different unit? Add unit number."
- **Different users, similar property** → Flag for admin review
- **Detection criteria:** Address (90%+ match) + Price (±10%) + Size (±10%) + Image hash
- **If 3+ factors match** → Create DuplicateAlert for admin

### 7.4 Guest User Restrictions
- Cannot view full description
- Cannot see owner contact info
- Cannot contact owners
- Cannot favorite properties
- Cannot create listings
- All actions redirect to registration

### 7.5 Property Status
- **Rented** → Auto-hide from search
- **Hidden** → Owner manually hides, doesn't count toward 3-listing limit
- Owner can change status anytime

### 7.6 Blocked Users
- User A blocks User B → B cannot message A
- B cannot see A's listings in search

### 7.7 Suspended Users
- Cannot login
- Listings hidden
- Cannot send/receive messages
- Show: "Account suspended. Contact support."

---

## 8. Success Metrics (KPIs)

### User Acquisition
- Total registered users
- Daily/Weekly/Monthly active users
- Registration completion rate

### Engagement
- Average listings per owner
- Average searches per user
- Average messages per inquiry
- Time spent on platform

### Platform Health
- Reported listings (%)
- Suspended users (%)
- Duplicate detection accuracy
- Average admin response time

---

## 9. Development Roadmap

### Sprint 1-2 (Weeks 1-4): Foundation
- Database schema
- User authentication
- Basic property CRUD
- Image upload

### Sprint 3-4 (Weeks 5-8): Core Features
- Search and filtering
- Map integration
- Messaging system
- Favorites

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

## 10. Future Enhancements (Post-MVP)

### Phase 2
- ✨ Bilingual UI (Arabic RTL support)
- ✨ Mobile apps (iOS/Android)
- ✨ Premium subscriptions (unlimited listings)
- ✨ Advanced analytics
- ✨ Virtual tours
- ✨ SMS/Push notifications

### Phase 3
- ✨ User verification (ID, property ownership)
- ✨ Rating and review system
- ✨ In-app payment processing
- ✨ Escrow service
- ✨ Property manager accounts
- ✨ AI content moderation
- ✨ Chatbot support

---

## 11. Architecture Proposal

**Architecture Type:** Layered Monolithic (MVP) → Microservices (Future)

**Rationale:**
- Start simple with monolithic architecture for faster MVP development
- Scalability for Tunisia national coverage
- Easy to refactor into microservices later
Independent service scaling (search vs. messaging)
Technology flexibility per service
Easier maintenance and deployment
Frontend / Backend Separation
Frontend:

Web Application: React.js or Vue.js (SPA with SSR capability)
Mobile Application: React Native (cross-platform iOS/Android)
Admin Panel: React.js dashboard
Backend:

API Layer: Node.js (Express/NestJS) or Python (FastAPI/Django)
Database: PostgreSQL (primary), Redis (caching, sessions)
Search Engine: Elasticsearch or Algolia (for advanced search)
File Storage: AWS S3 or Cloudinary (for images)
Message Queue: RabbitMQ or AWS SQS (for async tasks)
Real-time: WebSocket (Socket.io) for messaging
Suggested Technology Stack
Backend:

Node.js + Express/NestJS (TypeScript) OR Python + FastAPI
PostgreSQL (relational data)
Redis (caching, sessions)
Elasticsearch (search)
AWS S3 (file storage)
Docker + Kubernetes (containerization, orchestration)
Frontend:

React.js + Next.js (web, SSR)
React Native (mobile)
Redux/Zustand (state management)
React Query (data fetching)
Infrastructure:

AWS/GCP/Azure (cloud hosting)
Nginx (reverse proxy, load balancing)
CI/CD: GitHub Actions or GitLab CI
7. Design Patterns
Recommended Patterns
Repository Pattern
Why: Abstracts data access logic, enables easy database switching, improves testability
Use: All service layers accessing database
Service Layer Pattern
Why: Separates business logic from controllers, promotes reusability
Use: Business logic in UserService, PropertyService, etc.
Factory Pattern
Why: Create different notification types (email, SMS, push) dynamically
Use: NotificationService creating notification handlers
Observer Pattern
Why: Notify users of new listings matching saved searches
Use: Search alert system
Strategy Pattern
Why: Different search strategies (text, map, filter-based)
Use: SearchService with multiple search algorithms
API Gateway Pattern
Why: Single entry point, authentication, rate limiting, routing
Use: API Gateway layer
CQRS (Command Query Responsibility Segregation) - Optional
Why: Separate read/write operations for better performance
Use: Search queries vs. property creation/updates
8. Edge Cases & Risks
Failure Scenarios
Data Loss
Risk: Database corruption, accidental deletion
Mitigation: Automated daily backups, point-in-time recovery
Scalability Issues
Risk: Sudden traffic spike, database overload
Mitigation: Load balancing, caching, database read replicas
Security Breaches
Risk: User data leaks, SQL injection, XSS attacks
Mitigation: Input validation, parameterized queries, security audits
Fake Listings
Risk: Scammers posting fake properties
Mitigation: Verification system, user reporting, AI-based fraud detection
Payment Disputes (when payment feature added)
Risk: Disputes between tenants and owners
Mitigation: Escrow system, clear terms of service, dispute resolution process
Language/Translation Issues
Risk: Poor Arabic RTL support, translation errors
Mitigation: Native Arabic speakers for testing, proper i18n libraries
Image Storage Costs
Risk: High storage costs with many property images
Mitigation: Image compression, CDN optimization, storage limits
Search Performance
Risk: Slow search with millions of listings
Mitigation: Elasticsearch indexing, search result pagination, caching
Constraints
Regulatory: Compliance with local rental laws, data protection regulations
Technical: Internet connectivity requirements, mobile device compatibility
Business: User adoption rate, competition from existing platforms
Resource: Development team size, budget constraints
9. MVP Scope
MVP Features (Phase 1 - 3-4 months)
Core Functionality:

User registration and authentication (email/phone)
Basic property listing creation (title, description, price, location, images)
Property search with basic filters (location, price, type)
Property detail page
Basic messaging between tenant and owner
User profiles
Bilingual support (Arabic/English) with RTL
Property Types: All types (residential, commercial, mixed-use)

Platform: Web application (responsive) - Mobile app in Phase 2

Excluded from MVP:

Payment integration
Advanced verification system (basic email verification only)
Review/rating system
Saved searches and alerts
Map-based search (text-based only)
Admin panel (manual moderation)
Advanced analytics
Phase 2 Features (Post-MVP - 2-3 months)
Mobile applications (iOS & Android)
Advanced search (map-based, more filters)
Saved searches and email alerts
Review and rating system
Enhanced verification (ID verification, property verification)
Admin dashboard
Analytics and reporting
Phase 3 Features (Future - 3-6 months)
Payment integration (rent, deposits, platform fees)
Escrow system
Document management (contracts, agreements)
Property management tools for owners
Advanced analytics and insights
AI-powered property recommendations
Virtual tour integration
Multi-language expansion
Phase 4 Features (Long-term)
Property manager role
Bulk listing import/export
API for third-party integrations
White-label solutions
International expansion
Advanced fraud detection
Machine learning for price prediction