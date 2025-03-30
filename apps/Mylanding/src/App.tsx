import { Header } from "./components/Header"
import Hero from "./components/Hero"




function App() {
  

  return (
    <div className="bg-black  min-h-screen">
      <div>
          <Header></Header>
      </div>
      <div className="text-white">
        <Hero></Hero>
      </div>
    </div>
  )
}

export default App
