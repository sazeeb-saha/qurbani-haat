# Qurbani Hat

A modern livestock booking platform built for the Qurbani season where users can explore animals, view detailed information, and book livestock through a secure authentication system.

Designed with a clean marketplace experience in mind, **Qurbani Hat** focuses on simplicity, responsiveness, and a smooth booking flow.

---

## Live Demo

🔗 **Live Site:** _[QurbaniHat](https://qurbani-hat-saz.vercel.app/)_

---

## Core Features

### Browse Livestock

Users can explore available animals from the homepage in a clean card-based layout.

### Detailed Animal View

Each animal has a dedicated details page with important information, images, and booking access.

### Secure Authentication

Users can register, log in, and access protected features through an authentication system.

### Booking Flow

Authenticated users can place bookings directly from the animal details page.

### Profile Management

Users can access their profile and update their information.

### Responsive Design

Optimized for mobile, tablet, and desktop devices.

---

## Available Pages

| Route           | Description                |
| --------------- | -------------------------- |
| `/`             | Homepage                   |
| `/animals`      | All livestock listings     |
| `/animals/[id]` | Single animal details page |
| `/login`        | Login page                 |
| `/registration` | User registration          |
| `/profile`      | User profile               |

---

## Features

- Browse available livestock for Qurbani
- View animal details with images and important information
- Authentication system for secure access
- Protected booking flow for logged-in users
- Responsive UI for mobile, tablet, and desktop
- Clean modern marketplace-style user experience

---

## Built With

### Frontend

- **Next.js**
- **React**
- **Tailwind CSS**
- **HeroUI**

### Backend / Authentication / Database

- **Better Auth**
- **MongoDB**

---

## UI Components

The project currently includes:

- `Navbar`
- `Banner`
- `AnimalCard`
- `BookingForm`
- `FeaturedAnimals`
- `SortSelect`
- `TipsAndTopBreeds`
- `UpdateProfileModal`
- `Footer`

---

## Project Structure

```bash
src
├── app
│   ├── animals
│   │   ├── [id]
│   │   └── page.jsx
│   ├── api
│   │   └── auth
│   ├── login
│   ├── profile
│   ├── registration
│   ├── layout.jsx
│   └── page.jsx
│
├── components
│   ├── AnimalCard.jsx
│   ├── Banner.jsx
│   ├── BookingForm.jsx
│   ├── FeaturedAnimals.jsx
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   ├── SortSelect.jsx
│   ├── TipsAndTopBreeds.jsx
│   └── UpdateProfileModal.jsx
│
└── lib
    ├── auth-client.js
    └── auth.js
```
