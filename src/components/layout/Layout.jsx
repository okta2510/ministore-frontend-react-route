import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import MarqueeBar from './MarqueeBar'
import Footer from './Footer'
import MobileNav from './MobileNav'

export default function Layout({
  marqueeVariant = 'home',
  navbarVariant = 'home',
  showSearch = false,
  showFooterLogo = true,
  showMobileNav = false,
  showMarquee = true,
}) {
  return (
    <div className="bg-surface text-on-surface font-body-md overflow-x-hidden min-h-screen">
      <Navbar variant={navbarVariant} showSearch={showSearch} />
      {showMarquee && <MarqueeBar variant={marqueeVariant} />}
      <Outlet />
      <Footer showLogo={showFooterLogo} />
      {showMobileNav && <MobileNav />}
      {showMobileNav && <div className="h-16 md:hidden" />}
    </div>
  )
}
