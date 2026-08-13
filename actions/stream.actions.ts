'use server';

import { currentUser } from '@clerk/nextjs/server';
import { StreamClient } from '@stream-io/node-sdk';

export const tokenProvider = async () => {
  const user = await currentUser();

  if (!user) throw new Error('User is not authenticated');
  
  const STREAM_API_KEY = process.env.NEXT_PUBLIC_STREAM_API_KEY!;
  const STREAM_API_SECRET = process.env.STREAM_SECRET_KEY!;

  if (!STREAM_API_KEY) throw new Error('Stream API key missing');
  if (!STREAM_API_SECRET) throw new Error('Stream API secret missing');

  const client = new StreamClient(STREAM_API_KEY, STREAM_API_SECRET);
  const exp = Math.floor(Date.now() / 1000) + 3600;
  const issued = Math.floor(Date.now() / 1000) - 60;
  
  return client.createToken(user.id, exp, issued);
};