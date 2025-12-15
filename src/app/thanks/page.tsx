import Link from 'next/link'

export default function Thanks() {
  return (
    <main className="welcome-section">
      <h1>Thank You for Your Inquiry</h1>
      <p>We appreciate your interest. Our team will get back to you shortly.</p>
      <div className="hero-buttons" style={{ marginTop: '30px' }}>
        <Link href="/" className="button">Return to Home</Link>
      </div>
    </main>
  )
}

