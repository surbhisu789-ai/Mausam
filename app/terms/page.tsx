import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms that govern use of Mausam AI.',
}

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-medium text-muted-foreground">Mausam AI</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">Terms of Service</h1>
      <p className="mt-4 leading-7 text-muted-foreground">By using Mausam AI, you agree to use the service responsibly and understand that weather information is provided for planning purposes, not as a replacement for official emergency guidance.</p>
      <h2 className="mt-10 text-xl font-semibold">Using the service</h2>
      <p className="mt-3 leading-7 text-muted-foreground">Keep your account information accurate, protect your credentials, and do not misuse the service or attempt to disrupt its operation.</p>
      <h2 className="mt-8 text-xl font-semibold">Weather information</h2>
      <p className="mt-3 leading-7 text-muted-foreground">Forecasts can change and may contain uncertainty. For urgent conditions, follow local authorities and official emergency services.</p>
    </main>
  )
}
