
import { getSession } from 'next-auth/react'
import type { NextRequest } from 'next/server'





export async function middleware(request: NextRequest) {
    const requestForNextAuth = {
        headers: {
            cookie: request.headers.get('cookie') || '',
        },
    };

    const session = await getSession({ req: requestForNextAuth });


    if (!session && request.nextUrl.pathname.startsWith('/secure')) {
        // ensure non authenticated users do not have permissions.
        return Response.redirect(new URL('/', request.url))
    }
    if(session && request.nextUrl.pathname.startsWith('/signIn')){
        // after logging in move to logged in page.
        return Response.redirect(new URL('/secure', request.url))
    }
}

// exclude this from protected routes.
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}

