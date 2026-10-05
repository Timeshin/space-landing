export interface Offer {
  id: 'reality' | 'planets' | 'dreamers' | 'dreams'
  title: string
  text: string
  compactText?: string
}

export const OFFERS: Offer[] = [
  {
    id: 'reality',
    title: 'Move the borders\nof reality!',
    text: "Go on a space adventure - it's possible with us!",
    compactText: 'Go on a space adventure'
  },
  {
    id: 'planets',
    title: 'Space is not\njust stars and\nplanets',
    text: 'Go on a space adventure',
    compactText: 'it is a majestic journey to'
  },
  {
    id: 'dreamers',
    title: 'For those\nwho dream\nof stars',
    text: 'Our offer: make your dream come true'
  },
  {
    id: 'dreams',
    title: 'Fulfill your\nfantastic dreams',
    text: 'Space has never been so close'
  }
]
