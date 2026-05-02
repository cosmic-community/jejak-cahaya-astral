import { createBucketClient } from '@cosmicjs/sdk';
import { Mission, Program, Event, ImpactStory, TeamMember, hasStatus } from '@/types';

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
});

export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return '';
  if (typeof field === 'string') return field;
  if (typeof field === 'number' || typeof field === 'boolean') return String(field);
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value);
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key);
  }
  return '';
}

export async function getMission(): Promise<Mission | null> {
  try {
    const response = await cosmic.objects
      .find({ type: 'mission' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    const objects = response.objects as Mission[];
    return objects[0] || null;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null;
    throw new Error('Failed to fetch mission');
  }
}

export async function getPrograms(): Promise<Program[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'programs' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects as Program[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw new Error('Failed to fetch programs');
  }
}

export async function getProgramBySlug(slug: string): Promise<Program | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'programs', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.object as Program;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null;
    throw new Error('Failed to fetch program');
  }
}

export async function getEvents(): Promise<Event[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'events' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    const events = response.objects as Event[];
    return events.sort((a, b) => {
      const dateA = new Date(a.metadata?.event_date || '').getTime();
      const dateB = new Date(b.metadata?.event_date || '').getTime();
      return dateB - dateA;
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw new Error('Failed to fetch events');
  }
}

export async function getEventBySlug(slug: string): Promise<Event | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'events', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.object as Event;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null;
    throw new Error('Failed to fetch event');
  }
}

export async function getImpactStories(): Promise<ImpactStory[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'impact-stories' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects as ImpactStory[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw new Error('Failed to fetch impact stories');
  }
}

export async function getStoryBySlug(slug: string): Promise<ImpactStory | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'impact-stories', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.object as ImpactStory;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null;
    throw new Error('Failed to fetch story');
  }
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'team-members' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects as TeamMember[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw new Error('Failed to fetch team members');
  }
}