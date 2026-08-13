'use server';

import { currentUser } from '@clerk/nextjs/server';
import { StreamClient } from '@stream-io/node-sdk';

export const tokenProvider = async () => {
  const user = await currentUser();
  if (!user) throw new Error('User not logged in');
  
  const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
  const apiSecret = process.env.STREAM_SECRET_KEY;
  
  if (!apiKey || !apiSecret) {
    throw new Error('Stream API keys missing');
  }

  // Create client here, not at top level
  const streamClient = new StreamClient(apiKey, apiSecret);

  const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;
  const issued = Math.floor(Date.now() / 1000) - 60;

  return streamClient.createToken(user.id, exp, issued);
};