import { NextResponse } from 'next/server';

const signinPages = ['/', '/playlist', '/library'];

export default function middleware(req) {
  if (signinPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.TRAX_ACCESS_TOKEN;
    const url = req.nextUrl.clone();
    url.pathname = '/signin';
    if (!token) {
      return NextResponse.redirect(url);
    }
  }
}
