export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface Mission extends CosmicObject {
  type: 'mission';
  metadata: {
    mission_statement?: string;
    vision?: string;
    core_values?: string;
    hero_image?: { url: string; imgix_url: string };
    youtube_url?: string;
    tiktok_url?: string;
  };
}

export interface Program extends CosmicObject {
  type: 'programs';
  metadata: {
    name?: string;
    short_description?: string;
    full_description?: string;
    category?: string;
    featured_image?: { url: string; imgix_url: string };
  };
}

export interface Event extends CosmicObject {
  type: 'events';
  metadata: {
    event_name?: string;
    description?: string;
    event_date?: string;
    location?: string;
    cover_image?: { url: string; imgix_url: string };
  };
}

export interface ImpactStory extends CosmicObject {
  type: 'impact-stories';
  metadata: {
    story_title?: string;
    author_name?: string;
    quote?: string;
    full_story?: string;
    image?: { url: string; imgix_url: string };
  };
}

export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    full_name?: string;
    role?: string;
    bio?: string;
    photo?: { url: string; imgix_url: string };
  };
}

export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}