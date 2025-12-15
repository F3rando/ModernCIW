'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useFadeIn } from '@/hooks/useFadeIn'

export default function Products() {
  const welcomeRef = useFadeIn()
  const productGridRef = useFadeIn()
  const galleryRef = useFadeIn()

  return (
    <>
      <main className="welcome-section fade-in-section" ref={welcomeRef}>
        <h1>Our Iron Door Styles</h1>
        <p>Explore our handcrafted styles — built to last and tailored to your taste.</p>
      </main>

      <section className="product-type-grid fade-in-section" ref={productGridRef}>
        <div className="product-card">
          <Image src="/doordesign4.png" alt="Modern Iron Door" width={240} height={300} quality={100} />
          <h2>Modern</h2>
          <p>Sleek lines, minimal design — perfect for clean, contemporary architecture.</p>
        </div>
        <div className="product-card">
          <Image src="/doordesign5.png" alt="Rustic Iron Door" width={240} height={300} quality={100} />
          <h2>Rustic</h2>
          <p>Hand-forged character with warm finishes and traditional materials.</p>
        </div>
        <div className="product-card">
          <Image src="/traditional.png" alt="Traditional Iron Door" width={240} height={300} quality={100} />
          <h2>Traditional</h2>
          <p>Classic scrollwork and timeless details rooted in craftsmanship.</p>
        </div>
      </section>

      <section className="gallery-section fade-in-section" ref={galleryRef}>
        <h1>Custom Design Examples</h1>
        <p>These are one-of-a-kind builds we've created for past clients.</p>

        <div className="gallery-grid">
          <Image src="/irondoor1.jpg" alt="Custom Design 1" width={800} height={800} quality={100} />
          <Image src="/irondoor2.jpg" alt="Custom Design 2" width={800} height={800} quality={100} />
          <Image src="/irondoor4.jpg" alt="Custom Design 3" width={800} height={800} quality={100} />
          <Image src="/door3.jpg" alt="Custom Design 4" width={800} height={800} quality={100} />
        </div>
      </section>
    </>
  )
}

