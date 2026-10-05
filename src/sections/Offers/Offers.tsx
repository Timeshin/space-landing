import { ButtonLink } from '@/components'
import { OFFERS } from './offers.data'

const Offers = () => (
  <section id='offers' className='offers' aria-labelledby='offers-title'>
    <h2 id='offers-title' className='section-title'>
      Offers
    </h2>
    <ul className='offers__list'>
      {OFFERS.map(({ id, title, text, compactText }) => (
        <li key={id} className={`offers__item offer-card offer-card--${id}`}>
          <h3 className='offer-card__title'>{title}</h3>
          {compactText ? (
            <>
              <p className='offer-card__text offer-card__text--full'>{text}</p>
              <p className='offer-card__text offer-card__text--compact'>{compactText}</p>
            </>
          ) : (
            <p className='offer-card__text'>{text}</p>
          )}
          <ButtonLink href='#journey' variant='secondary' size={{ base: 'sm', desktop: 'lg' }}>
            Learn more
          </ButtonLink>
        </li>
      ))}
    </ul>
  </section>
)

export default Offers
