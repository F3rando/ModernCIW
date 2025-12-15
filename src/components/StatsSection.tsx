'use client'

import { useFadeIn } from '@/hooks/useFadeIn'
import { HiOfficeBuilding, HiCheckCircle, HiUsers } from 'react-icons/hi'

export default function StatsSection() {
  const statsRef = useFadeIn()

  return (
    <section className="stats-section fade-in-section" ref={statsRef}>
      <div className="stats-container">
        <div className="stat-card">
          <div className="stat-icon">
            <HiOfficeBuilding />
          </div>
          <div className="stat-number">25+</div>
          <div className="stat-label">Years in Business</div>
          <div className="stat-subtext">Since 1999</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <HiCheckCircle />
          </div>
          <div className="stat-number">500+</div>
          <div className="stat-label">Projects Completed</div>
          <div className="stat-subtext">Satisfied Customers</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <HiUsers />
          </div>
          <div className="stat-number">Family</div>
          <div className="stat-label">Owned & Operated</div>
          <div className="stat-subtext">Craftsmanship That Runs in the Family</div>
        </div>
      </div>
    </section>
  )
}

