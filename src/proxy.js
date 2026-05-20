

import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import { auth } from './auth'

export async function proxy(request) {

    const session=await auth.api.getSession({
  
        headers:await headers()
    })
        console.log('from proxy',session)
    if(!session){
        return NextResponse.redirect(new URL('/login',request.url))
    }
  

 return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard'],
}


