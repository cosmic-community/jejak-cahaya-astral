# Jejak Cahaya Astral

![App Preview](https://imgix.cosmicjs.com/f22528f0-4622-11f1-a3ff-65bbafb72c6d-autopilot-photo-1573496359142-b8d87734a5a2-1777725133042.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A mystical Next.js website for the Jejak Cahaya Astral YouTube and TikTok channel - sharing history, education, and mystery with stunning visualizations for open-minded explorers.

## Features

- 🌌 Cosmic-themed design with animated star field
- 🎯 Mission, vision & core values showcase
- 📺 Programs gallery with category filtering
- 🎬 Events timeline
- ⭐ Impact stories from the community
- 👥 Team members display
- 📱 Fully responsive design
- ⚡ Built with Next.js 16 App Router
- 🎨 Tailwind CSS for styling
- 🔒 Server-side Cosmic SDK integration

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69f5ee6ec27d356ff5004560&clone_repository=69f5efa9c27d356ff50045a5)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a nonprofit website with mission statement, programs, events, impact stories, and a team section. User instructions: Channel youtube dan tiktok Jejak Cahaya Astral, Membagikan sejarah, edukasi, misteri dengan tampian visualisasi yang memukau, dibantu dengan teknologi computer science, hanya untuk orang-orang yang open minded."

### Code Generation Prompt

> Build a Next.js application for a company website called "JEJAK CAHAYA ASTRAL". The content is managed in Cosmic CMS with the following object types: mission, programs, events, impact-stories, team-members. Create a beautiful, modern, responsive design with a homepage and pages for each content type. User instructions: Channel youtube dan tiktok Jejak Cahaya Astral, Membagikan sejarah, edukasi, misteri dengan tampian visualisasi yang memukau, dibantu dengan teknologi computer science, hanya untuk orang-orang yang open minded.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Cosmic SDK** - Content management
- **Bun** - Package manager and runtime

## Getting Started

### Prerequisites

- Bun installed (or Node.js 18+)
- A Cosmic account with the required content model

### Installation

1. Clone the repository
2. Install dependencies:
```bash
bun install
```

3. Create a `.env.local` file with your Cosmic credentials:
```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun run dev
```

## Cosmic SDK Examples

```typescript
// Fetch all programs with depth
const response = await cosmic.objects
  .find({ type: 'programs' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This app uses 5 content types from your Cosmic bucket:
- **Mission** - Company mission, vision, and values
- **Programs** - YouTube/TikTok program offerings
- **Events** - Upcoming and past events
- **Impact Stories** - Community testimonials
- **Team Members** - Team profile information

## Deployment Options

Deploy to Vercel, Netlify, or any platform supporting Next.js. Set the environment variables in your hosting platform's dashboard.
<!-- README_END -->