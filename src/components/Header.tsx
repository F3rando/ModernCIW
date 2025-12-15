import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="topbar">
      <div className="logo-left">
        <Link href="/">
          <Image 
            src="/logo_corona2.png" 
            alt="Corona Logo" 
            width={180} 
            height={50}
            priority
            className="logo-image"
          />
        </Link>
      </div>
      <nav className="nav-right">
        <Link href="/">Home</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/products">Products</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  )
}

