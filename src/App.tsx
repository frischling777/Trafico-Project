import './App.css'
import { Header } from './components/header'
import { FAQSection } from './components/faqSection'
import { AboutSection } from './components/aboutSection'

function App() {
  return (
    <>
    <Header logo={'/logo.png'} h1={'Your awesome traffic permit consultant.'} buttonText={'Get Started →--> '}/>
    <FAQSection img="./" h2="Questions and Answers on Professional Traffic Permits:" />
    </>
  )
}

export default App