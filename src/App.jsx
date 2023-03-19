import './App.css'
import { AppContext } from './context/context'
import AppRoutes from './routes/appRoutes'

const App = () => {
// Main Compenets 
  return (
    <AppContext.Provider>
      <AppRoutes/>
    </AppContext.Provider>
  )
}

export default App
