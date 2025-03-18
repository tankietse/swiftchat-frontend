import { NextRequest, NextResponse } from 'next/server';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function GET(
  request: NextRequest,
  { params }: { params: { provider: string } }
) {
  // Await the params object before accessing its properties
  const { provider } = await params;
  
  if (!provider) {
    return NextResponse.json(
      { error: 'Provider is required' },
      { status: 400 }
    );
  }

  // Instead of making an API call, redirect directly to the backend OAuth endpoint
  // This lets the browser handle all redirects naturally
  const authUrl = `${API_BASE_URL}/auth/oauth2/${provider}`;
  
  // Redirect the browser directly to the backend OAuth endpoint
  return NextResponse.redirect(authUrl);
}
