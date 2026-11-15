'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { useFadeIn } from '@/hooks/useFadeIn'

type Category = 'door' | 'gate' | 'railing'

type GalleryItem = {
  src: string
  alt: string
  category: Category
}

const filters = [
  { id: 'all', label: 'All', href: '/gallery' },
  { id: 'doors', label: 'Doors', href: '/gallery?filter=doors' },
  { id: 'gates', label: 'Gates', href: '/gallery?filter=gates' },
  { id: 'railings', label: 'Railings', href: '/gallery?filter=railings' },
] as const

const items: GalleryItem[] = [
  { src: '/door-grid-transom.jpg', alt: 'Black grid-lite entry door with a transom', category: 'door' },
  { src: '/door-sidelight-transom.jpg', alt: 'Black entry door with sidelights and a transom', category: 'door' },
  { src: '/door-glass-pull.jpg', alt: 'Black glass entry door with a long pull handle', category: 'door' },
  { src: '/door-horizontal-glass.jpg', alt: 'Black entry door with horizontal glass panels', category: 'door' },
  { src: '/door-pivot-install.jpg', alt: 'Black multi-panel pivot door', category: 'door' },
  { src: '/door-paneled-sidelights.jpg', alt: 'Black paneled entry door with sidelights', category: 'door' },
  { src: '/door-transom-sidelights.jpg', alt: 'Dark entry door with sidelights and a divided-light transom', category: 'door' },
  { src: '/door-multi-panel-view.jpg', alt: 'Black multi-panel door system opening to a view', category: 'door' },
  { src: '/irondoor1.jpg', alt: 'Custom iron door', category: 'door' },
  { src: '/irondoor2.jpg', alt: 'Custom iron door with glass', category: 'door' },
  { src: '/irondoor4.jpg', alt: 'Custom iron entry door', category: 'door' },
  { src: '/door3.jpg', alt: 'Custom iron door', category: 'door' },
  { src: '/traditional door.jpg', alt: 'Traditional iron door', category: 'door' },
  { src: '/gate13.jpg', alt: 'Custom iron gate', category: 'gate' },
  { src: '/gate14.jpg', alt: 'Custom iron gate', category: 'gate' },
  { src: '/gate15.jpg', alt: 'Custom iron gate', category: 'gate' },
  { src: '/gate16.jpg', alt: 'Custom iron gate', category: 'gate' },
  { src: '/gate1.jpg', alt: 'Custom iron gate', category: 'gate' },
  { src: '/gate2.jpg', alt: 'Custom iron gate', category: 'gate' },
  { src: '/gate3.jpg', alt: 'Custom iron gate', category: 'gate' },
  { src: '/enclosure.jpg', alt: 'Covered iron gate enclosure', category: 'gate' },
  { src: '/farmhousegate.jpg', alt: 'Farmhouse iron gate', category: 'gate' },
  { src: '/gate4.jpg', alt: 'Custom iron gate', category: 'gate' },
  { src: '/gate5.jpg', alt: 'Custom iron gate', category: 'gate' },
  { src: '/gate6.jpg', alt: 'Custom iron gate', category: 'gate' },
  { src: '/gate7.jpg', alt: 'Custom iron gate', category: 'gate' },
  { src: '/gate8.jpg', alt: 'Custom iron gate', category: 'gate' },
  { src: '/gate9.jpg', alt: 'Custom iron gate', category: 'gate' },
  { src: '/gate10.JPEG', alt: 'Custom iron gate', category: 'gate' },
  { src: '/gate11.jpg', alt: 'Custom iron gate', category: 'gate' },
  { src: '/gate12.jpg', alt: 'Custom iron gate', category: 'gate' },
  { src: '/rustic gate.jpg', alt: 'Rustic iron gate', category: 'gate' },
  { src: '/modern gate.jpg', alt: 'Modern iron gate', category: 'gate' },
  { src: '/balcony1.jpg', alt: 'Balcony iron railing', category: 'railing' },
  { src: '/staircase1.jpg', alt: 'Iron staircase railing', category: 'railing' },
  { src: '/staircase2.jpg', alt: 'Iron staircase railing', category: 'railing' },
]

function GalleryContent() {
  const galleryRef = useFadeIn()
  const searchParams = useSearchParams()
  const requested = searchParams.get('filter')
  const active = filters.some((filter) => filter.id === requested) ? requested : 'all'
  const visible =
    active === 'doors'
      ? items.filter((item) => item.category === 'door')
      : active === 'gates'
        ? items.filter((item) => item.category === 'gate')
        : active === 'railings'
          ? items.filter((item) => item.category === 'railing')
          : items

  return (
    <main className="gallery-section fade-in-section" ref={galleryRef}>
      <h1>Inspiration Gallery</h1>

      <div className="gallery-filters" role="navigation" aria-label="Filter gallery">
        {filters.map((filter) => (
          <Link
            key={filter.id}
            href={filter.href}
            className={filter.id === active ? 'gallery-filter active' : 'gallery-filter'}
            aria-current={filter.id === active ? 'page' : undefined}
          >
            {filter.label}
          </Link>
        ))}
      </div>

      <div className="gallery-grid">
        {visible.map((item) => (
          <Image
            key={item.src}
            src={item.src}
            alt={item.alt}
            width={1200}
            height={900}
            quality={100}
            style={{ width: '100%', height: 'auto', aspectRatio: 'auto' }}
          />
        ))}

        {active === 'all' && (
          <video controls muted playsInline className="gallery-video">
            <source src="/welding.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </main>
  )
}

export default function Gallery() {
  return (
    <Suspense fallback={<main className="gallery-section"><h1>Inspiration Gallery</h1></main>}>
      <GalleryContent />
    </Suspense>
  )
}
