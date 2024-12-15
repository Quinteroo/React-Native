import { NavLink, Outlet } from "react-router-dom"
import "./App.css"


function App() {

  return (
    <div className="App" >
      <header>
        <h1>Hola Caracola</h1>
      </header>
      <div>
        <nav>
          <NavLink to="" >Home</NavLink>
          <NavLink to="heroes" >Heroes</NavLink>
          <NavLink to="about" >About</NavLink>
        </nav>
      </div>
      <main>
        <Outlet />
      </main>
      <footer>Created by Tusmulas</footer>

    </div>
  )

}

export default App