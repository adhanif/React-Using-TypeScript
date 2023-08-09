
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DataTypes from "./components/DataTypes"
import Functions from "./components/Functions"


function App() {
  

  return (
    <>
      <div className="card">
      <DataTypes/>
      <Functions message="This is a simple message"/>
      </div>
      
    </>
  )
}

export default App
