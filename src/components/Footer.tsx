import Link from 'next/link'
import Image from 'next/image'
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo">
            <Image 
              src="/transparent logo.png" 
              alt="Corona Logo" 
              width={100} 
              height={100}
            />
          </div>
        </div>
        <div className="footer-center">
          <Link href="/contact" className="footer-button">Contact Us</Link>
        </div>
        <div className="footer-right">
          <div className="footer-info">
            <p>
              <HiLocationMarker className="footer-icon" />
              Based in Southern California
            </p>
            <p>
              <HiPhone className="footer-icon" />
              (951) 508-7490
            </p>
            <p>
              <HiMail className="footer-icon" />
              Coronaiw@gmail.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
