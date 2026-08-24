import { redirect } from 'next/navigation'

// The root URL is rewritten to the static dashboard (public/index.html).
// This page only runs if that rewrite is bypassed.
export default function Page() {
  redirect('/index.html')
}
