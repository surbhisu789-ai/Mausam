import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Mausam AI handles account and location information.',
}

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-medium text-muted-foreground">Mausam AI</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">Privacy Policy</h1>
      <p className="mt-4 leading-7 text-muted-foreground">Mausam AI uses the information you provide to operate your account, personalize forecasts, and deliver the alerts you choose.</p>
      <h2 className="mt-10 text-xl font-semibold">Information we use</h2>
      <p className="mt-3 leading-7 text-muted-foreground">This may include your email address, profile preferences, saved locations, and notification settings. We use this information to provide and improve the service.</p>
      <h2 className="mt-8 text-xl font-semibold">Your choices</h2>
      <p className="mt-3 leading-7 text-muted-foreground">You can update your preferences or request account support through the Help Center. We do not use your information for purposes unrelated to providing Mausam AI without your consent.</p>
    </main>
  )
}
