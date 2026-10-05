import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { BREAKPOINTS } from '@/consts'
import { CartIcon, Logo } from '@/icons'
import { NAV_LINKS } from './header.data'

const TABLET_MEDIA_QUERY = `(min-width: ${BREAKPOINTS.tablet}px)`

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMenuOpen) return

    const tabletMedia = window.matchMedia(TABLET_MEDIA_QUERY)

    const handleMediaChange = (event: MediaQueryListEvent) => {
      if (event.matches) setIsMenuOpen(false)
    }

    tabletMedia.addEventListener('change', handleMediaChange)

    return () => tabletMedia.removeEventListener('change', handleMediaChange)
  }, [isMenuOpen])

  const toggleMenu = () => setIsMenuOpen((isOpen) => !isOpen)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className='header'>
      <div className='header__inner'>
        <a className='header__logo' href='#home' aria-label='GO' onClick={closeMenu}>
          <Logo className='header__logo-image' />
        </a>

        <button
          type='button'
          className='header__burger'
          aria-label='Menu'
          aria-expanded={isMenuOpen}
          aria-controls='main-nav'
          onClick={toggleMenu}
        >
          <span className='header__burger-line' />
          <span className='header__burger-line' />
          <span className='header__burger-line' />
        </button>

        <nav id='main-nav' className={clsx('header__nav', isMenuOpen && 'header__nav--open')} aria-label='Main'>
          <ul className='header__list'>
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a className='header__link' href={href} onClick={closeMenu}>
                  {label}
                </a>
              </li>
            ))}
            <li>
              <button type='button' className='header__cart' aria-label='Cart' onClick={closeMenu}>
                <CartIcon />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
