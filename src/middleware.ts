import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    
    const token = request.cookies.get('nextauth.token');

    // Verifica se não há token e se a pathname da próxima URL começa com '/vollmed/user'
    if (!token && request.nextUrl.pathname.startsWith('/vollmed/user/dashboard')) {
        // Redireciona para a página de autenticação
        return NextResponse.redirect(new URL('/vollmed/user', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/vollmed/user/:path*'],
};
