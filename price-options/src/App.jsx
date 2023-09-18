import './App.css'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'
import LineChart from './components/LineChart/LineChart'
import  Phones from './components/Phones/Phones'
// import DaisyNav from './components/DaisyNav/DaisyNav'

function App() {

  return (
    <>
    <NavBar> </NavBar>
    {/* <DaisyNav> </DaisyNav> */}
    <h1 className='text-7xl bg-rose-600'>Vite + React</h1>
    <PriceOptions></PriceOptions>
    <LineChart></LineChart>
    <Phones> </Phones>
    </>
  )
}

export default App
