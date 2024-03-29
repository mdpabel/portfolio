import { Redis } from '@upstash/redis';

export const redis = new Redis({
  url: 'https://major-gannet-34678.upstash.io',
  token: process.env.UPSTASH_TOKEN!,
});
