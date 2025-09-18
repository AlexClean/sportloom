import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const oldUrls = [
    '/products/al-nassr-fc-home-kit-2022-23',
    '/products/cristiano-ronaldo-football-player-model-mini-size-building-blocks',
    '/products/white-and-pink-basketball-shoes-sneakers-building-block-bricks-pencil-office-supplies-holder-1',
    '/products/brick-soccer-base-court-goal',
    '/products/argentine-soccer-star-3d-model',
    '/products/world-famous-basketball-players-bricks',
    '/products/football-barcelona-minimalistic-stadium',
    '/products/football-black-and-red-mini-minimalistic-stadium'
]

export function middleware(req: NextRequest) {

    const pathname = req.nextUrl.pathname

    if (oldUrls.includes(pathname) && req.nextUrl.search) {
        return new NextResponse('Page removed', { status: 410 })
    }

    if (oldUrls.includes(req.nextUrl.pathname)) {
        
        return new NextResponse('Page removed', { status: 410 })
    }
    return NextResponse.next()
}
