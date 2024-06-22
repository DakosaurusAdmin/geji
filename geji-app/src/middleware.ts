
import { NextResponse, type NextRequest } from 'next/server'
// import { getSession } from 'next-auth/react';


export async function middleware(request: NextRequest) {
    // const requestForNextAuth = {
    //     headers: {
    //         cookie: request.headers.get('cookie') || '',
    //     },
    // };
    const session = getSessionFromRequest(request);


    if (!session && request.nextUrl.pathname.startsWith('/secure')) {
        // ensure non authenticated users do not have permissions.
        return NextResponse.redirect(new URL('/', request.url))
    }
    if(session && request.nextUrl.pathname.startsWith('/signIn')){
        // after logging in move to logged in page.
        return NextResponse.redirect(new URL('/secure', request.url))
    }
}

// exclude this from protected routes.
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}


export const getSessionFromRequest = (request:NextRequest):string|undefined => {
    const token =   request.cookies.getAll().find(r=>r.name === "next-auth.session-token")?.value;
    // console.log(token)
    return token;
  
  }

