import type {NextRequest} from 'next/server'
import {NextResponse} from 'next/server'
import {sleep} from "@/helpers/sleep";


// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const url = new URL(request.url)

  if (externalRequest(request)) {
    await sleep(delayToApply(url))
  }

  return NextResponse.next()
}

function delayToApply(url: URL) {
  const defaultDemoDelay = 300
  const pathName = url.pathname

  if (pathName === "/") {
    return 0
  } else if (pathName === "/users_ssg") {
    return 0 // SSG
  } else if (pathName === "/products_ssg") {
    return 0 // SSG
  } else if (pathName === "/users_app") {
    return defaultDemoDelay // dynamic
  } else if (pathName === "/products_app") {
    return defaultDemoDelay // dynamic
  } else if (pathName === "/users") {
    return 0 // Static
  } else if (pathName === "/products") {
    return 0 // Static
  } else if (pathName === "/address_selector") {
    return 0 // Static
  } else if (pathName.startsWith("/details_panel")) {
    return defaultDemoDelay // SSR
  } else if (pathName.startsWith("/live_search")) {
    return 0 // Static
  } else if (pathName.startsWith("/modal")) {
    return 0 // Static
  } else if (pathName.startsWith("/popup")) {
    return 0 // Static
  } else if (pathName.startsWith("/tabbed_segments_app")) {
    return defaultDemoDelay // dynamic
  } else if (pathName.startsWith("/tabbed")) {
    return 0 // Static
  } else if (pathName.startsWith("/api")) {
    return defaultDemoDelay
  } else {
    return 0
  }
}

function externalRequest(request: NextRequest) {
  const userAgent = request.headers.get('user-agent')
  const url = request.url
  if (userAgent === "node") {
    console.log("internal API request: no delay")
    // If the userAgent is "node" then this request originated from
    // the Next.js server and is an internal connection. In this case,
    // we expect very low latency and will not add latency to the emulation.
    return false
  } else {
    return true
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/:path*'],
}
