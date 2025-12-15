'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useFadeIn } from '@/hooks/useFadeIn'
import StatsSection from '@/components/StatsSection'

export default function Home() {
  const feature1Ref = useFadeIn()
  const feature2Ref = useFadeIn()
  const feature3Ref = useFadeIn()
  const serviceAreasRef = useFadeIn()

  return (
    <>
      <main className="welcome-section">
        <h1>Welcome to Corona Custom Iron Works</h1>
        <p>Family-founded, family-owned and operated since 1999.</p>
        <p>Crafting gates, doors, and metalwork built to last — with craftsmanship that runs in the family.</p>
        <div className="hero-buttons">
          <Link href="/gallery" className="button">View Our Work</Link>
          <Link href="/contact" className="button secondary">Request a Quote</Link>
        </div>
      </main>

      <section className="hero-image-section">
        <Image 
          src="/irondoor1.jpg" 
          alt="Showcase Ironwork" 
          width={1200} 
          height={800}
          priority
          quality={100}
        />
      </section>

      <StatsSection />

      <section className="feature-section fade-in-section" ref={feature1Ref}>
        <div className="feature-image">
          <Image 
            src="/irondoor4.jpg" 
            alt="Custom Iron Door" 
            width={500} 
            height={600}
            quality={100}
          />
        </div>
        <div className="feature-text">
          <h2>Custom Iron Doors</h2>
          <p>
            Every iron door we create is hand-crafted with precision and durability in mind. From initial design to installation, we focus on aesthetics, strength, and security.
          </p>
          <p>
            Our doors not only elevate the entrance of your home or business but also offer long-lasting protection with a timeless look. Built with weather-resistant finishes and customizable patterns, our iron doors are as functional as they are beautiful.
          </p>
          <Link href="/contact" className="button">Request a Custom Quote</Link>
          <Link href="/products" className="button secondary">View Styles</Link>
        </div>
      </section>

      <section className="feature-section fade-in-section" ref={feature2Ref}>
        <div className="feature-image">
          <Image 
            src="/gate1.jpg" 
            alt="Custom Iron Gate" 
            width={500} 
            height={600}
            quality={100}
          />
        </div>
        <div className="feature-text">
          <h2>Custom Iron Gates</h2>
          <p>Our iron gates are handcrafted with precision, starting from detailed measurements to ensure a perfect fit. Every design is shaped, welded, and finished with care to ensure beauty and durability.</p>
          <p>Iron gates provide enhanced security, long-term weather resistance, and timeless curb appeal to your property — blending strength with artistry.</p>
          <Link href="/contact" className="button">Request a Custom Gate</Link>
        </div>
      </section>

      <section className="feature-section fade-in-section" ref={feature3Ref}>
        <div className="feature-image">
          <Image 
            src="/balcony1.jpg" 
            alt="Custom Staircase and Balcony" 
            width={500} 
            height={600}
            quality={100}
          />
        </div>
        <div className="feature-text">
          <h2>Custom Staircase | Balcony</h2>
          <p>Our staircases and balcony railings are carefully crafted with a focus on precision and aesthetic appeal. Every angle, curve, and weld is executed with attention to detail, ensuring seamless integration into your space.</p>
          <p>Beyond safety and functionality, our ironwork adds lasting value and visual elegance — blending structural integrity with timeless design that elevates your home.</p>
          <Link href="/contact" className="button">Request a Custom Design</Link>
        </div>
      </section>

      <section className="service-areas-section fade-in-section" ref={serviceAreasRef}>
        <div className="service-areas-container">
          <h2>Our Service Areas</h2>
          <p className="service-intro">
            Our tailored work sets us apart, offering custom-made doors designed to match any shape and size our clients can imagine. With affordable pricing and attentive service, we ensure a great customer experience.
          </p>
          <div className="areas-columns">
            <ul>
              <li>Agoura Hills</li>
              <li>Aliso Viejo</li>
              <li>Anaheim</li>
              <li>Beverly Hills</li>
              <li>Brea</li>
              <li>Buena Park</li>
              <li>Calabasas</li>
              <li>Canyon Lake</li>
              <li>Cathedral City</li>
              <li>Corona</li>
              <li>Costa Mesa</li>
              <li>Cypress</li>
              <li>Dana Point</li>
              <li>Diamond Bar</li>
              <li>Eastvale</li>
            </ul>
            <ul>
              <li>Fountain Valley</li>
              <li>Fullerton</li>
              <li>Garden Grove</li>
              <li>Hermosa Beach</li>
              <li>Huntington Beach</li>
              <li>Indian Wells</li>
              <li>Irvine</li>
              <li>Jurupa Valley</li>
              <li>La Habra</li>
              <li>La Habra Heights</li>
              <li>La Palma</li>
              <li>La Quinta</li>
              <li>Laguna Hills</li>
              <li>Laguna Niguel</li>
              <li>Laguna Woods</li>
            </ul>
            <ul>
              <li>Lake Elsinore</li>
              <li>Lake Forest</li>
              <li>Lomita</li>
              <li>Los Angeles</li>
              <li>Malibu</li>
              <li>Manhattan Beach</li>
              <li>Mission Viejo</li>
              <li>Murrieta</li>
              <li>New Port Beach</li>
              <li>Norco</li>
              <li>Palm Springs</li>
              <li>Palos Verdes Estates</li>
              <li>Placentia</li>
              <li>Rancho Mirage</li>
              <li>Rancho Santa Margarita</li>
            </ul>
            <ul>
              <li>Redondo Beach</li>
              <li>Riverside</li>
              <li>San Clemente</li>
              <li>San Juan Capistrano</li>
              <li>Santa Ana</li>
              <li>Santa Monica</li>
              <li>Seal Beach</li>
              <li>Stanton</li>
              <li>Tustin</li>
              <li>Villa Park</li>
              <li>West Lake Village</li>
              <li>Westminster</li>
              <li>Wildomar</li>
              <li>Yorba Linda</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
