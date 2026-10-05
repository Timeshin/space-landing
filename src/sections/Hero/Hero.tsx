import { ButtonLink } from '@/components'

const Hero = () => (
  <section id='home' className='hero'>
    <div className='hero__inner'>
      <h1 className='hero__title'>
        Discover the vast expanses of <span className='hero__accent'>space</span>
      </h1>
      <p className='hero__subtitle'>
        Where the possibilities are <span className='hero__accent hero__accent--primary'>endless!</span>
      </p>
      <ButtonLink href='#offers' size={{ base: 'sm', tablet: 'lg' }}>
        Learn more
      </ButtonLink>
    </div>
  </section>
)

export default Hero
