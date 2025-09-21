import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, token } = body;
    
    if (!username || !token) {
      return NextResponse.json(
        { message: 'Username and token are required' },
        { status: 400 }
      );
    }
    
    const response = await fetch('https://integrationcontent-production.up.railway.app/IntegrationRuntimeArtifacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        token: token,
      }),
    });

    const xmlData = await response.text();
    
    return new NextResponse(xmlData, {
      status: response.status,
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  } catch (error) {
    console.error('Integration artifacts API error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}