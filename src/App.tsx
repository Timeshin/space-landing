import { Footer, Header } from '@/components'
import { Hero, Journey, Offers } from '@/sections'
import './App.scss'

const App = () => (
  <>
    <Header />
    <main>
      <Hero />
      <Offers />
      <Journey />
    </main>
    <Footer />
  </>
)

export default App
