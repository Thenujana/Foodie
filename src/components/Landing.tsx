// Landing.tsx
import Navbar from "./Navbar"
import Hero from "./Hero"
import Features from "./Features"

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <Navbar />
      <Hero  />
      <Features />
     
   
    </div>
  )
}

export default Landing
