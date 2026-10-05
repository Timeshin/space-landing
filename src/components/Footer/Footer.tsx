import rocketAvif from '@/assets/images/rocket.avif'
import rocketWebp from '@/assets/images/rocket.webp'

const Footer = () => (
  <footer className='footer'>
    <picture>
      <source srcSet={rocketAvif} type='image/avif' />
      <img className='footer__image' src={rocketWebp} alt='' width={66} height={85} />
    </picture>
    <p>Exciting space adventure!</p>
  </footer>
)

export default Footer
