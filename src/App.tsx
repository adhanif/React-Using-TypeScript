
import './App.css'
import DataTypes from "./components/DataTypes"
import Functions from "./components/Functions"
import Classes from "./components/Classes"
import Interfaces from "./components/Interfaces"

function App() {
  

  return (
    <>
      <div className="card">
      <DataTypes/>
      <Functions message="This is a simple message"/>
      <Classes/>
      <Interfaces name="Dani" message="This is a simple message"/>
      </div>
      
    </>
  )
}

export default App
