import { NextRequest, NextResponse } from "next/server";


export default function proxy(request:NextRequest) {
    

    // console.log("running request");
    // const pathname = request.nextUrl.pathname
    // console.log(pathname);
    

    return NextResponse.next()
    
}


export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       * Feel free to modify this pattern to include more paths.
       */
      '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
  }
  