import './App.css'
import { Header } from './components/header'
import { FAQSection } from './components/faqSection'
import { AboutSection } from './components/aboutSection'
import { Footer } from './components/footer'

function App() {
  return (
    <>
      <Header logo={'/img/logo.png'} h1={'Your awesome traffic permit consultant.'} buttonText={'Get Started →--> '}/>
      <FAQSection img="./" h2="Questions and Answers on Professional Traffic Permits:" />
      <AboutSection h2="Our Awesome Clients"/>
      <Footer text="We provide traffic management consultants so you get started quickly, contact us for a quote today!" logo="./img/logo.png"/>
    </>
  )
}

export default App