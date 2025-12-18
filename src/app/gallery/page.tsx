'use client'

import Image from 'next/image'
import { useFadeIn } from '@/hooks/useFadeIn'

export default function Gallery() {
  const galleryRef = useFadeIn()

  return (
    <main className="gallery-section fade-in-section" ref={galleryRef}>
      <h1>Inspiration Gallery</h1>

      <div className="gallery-grid">
        <Image src="/gate13.jpg" alt="Gate 13" width={800} height={800} quality={100} />
        <Image src="/gate14.jpg" alt="Gate 14" width={800} height={800} quality={100} />
        <Image src="/gate15.jpg" alt="Gate 15" width={800} height={800} quality={100} />
        <Image src="/gate16.jpg" alt="Gate 16" width={800} height={800} quality={100} />
        <Image src="/balcony1.jpg" alt="Balcony Ironwork" width={800} height={800} quality={100} />
        <Image src="/gate1.jpg" alt="Gate 1" width={800} height={800} quality={100} />
        <Image src="/gate2.jpg" alt="Gate 2" width={800} height={800} quality={100} />
        <Image src="/gate3.jpg" alt="Gate 3" width={800} height={800} quality={100} />
        <Image src="/irondoor1.jpg" alt="Iron Door 1" width={800} height={800} quality={100} />
        <Image src="/irondoor2.jpg" alt="Iron Door 2" width={800} height={800} quality={100} />
        <Image src="/irondoor4.jpg" alt="Iron Door 4" width={800} height={800} quality={100} />
        <Image src="/traditional door.jpg" alt="traditional door" width={800} height={800} quality={100} />
        <Image src="/staircase1.jpg" alt="staircase1" width={800} height={800} quality={100} />
        <Image src="/staircase2.jpg" alt="staircase2" width={800} height={800} quality={100} />
        <Image src="/enclosure.jpg" alt="enclosure" width={800} height={800} quality={100} />
        <Image src="/farmhousegate.jpg" alt="farmhousegate" width={800} height={800} quality={100} />
        <Image src="/gate4.jpg" alt="Gate 4" width={800} height={800} quality={100} />
        <Image src="/gate5.jpg" alt="Gate 5" width={800} height={800} quality={100} />
        <Image src="/gate6.jpg" alt="Gate 6" width={800} height={800} quality={100} />
        <Image src="/gate7.jpg" alt="Gate 7" width={800} height={800} quality={100} />
        <Image src="/gate8.jpg" alt="Gate 8" width={800} height={800} quality={100} />
        <Image src="/door3.jpg" alt="Iron Door 3" width={800} height={800} quality={100} />
        <Image src="/gate9.jpg" alt="gate9" width={800} height={800} quality={100} />
        <Image src="/gate10.JPEG" alt="gate10" width={800} height={800} quality={100} />
        <Image src="/gate11.jpg" alt="gate11" width={800} height={800} quality={100} />
        <Image src="/gate12.jpg" alt="gate12" width={800} height={800} quality={100} />
        <Image src="/rustic gate.jpg" alt="rustic gate" width={800} height={800} quality={100} />
        <Image src="/modern gate.jpg" alt="modern gate" width={800} height={800} quality={100} />

        <video controls muted playsInline className="gallery-video">
          <source src="/welding.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </main>
  )
}

