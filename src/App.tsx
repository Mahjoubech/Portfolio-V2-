import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import SocialIcon from './components/ui/SocialIcon'
import Book from './components/layouts/Book'
const socials = [
  { icon: "bx bxl-facebook", href: "#" },
  { icon: "bx bxl-twitter", href: "#" },
  { icon: "bx bxl-linkedin", href: "#" },
  { icon: "bx bxl-instagram", href: "#" },
];
function App() {
  const [count, setCount] = useState(0)

  return <Book />
}

export default App
