import { useState } from 'react'
import './App.css'
import { AppContext } from './context/context'
import AppRoutes from './routes/appRoutes'

const App = () => {
CONST [count,setCount] = useState(0);

const plus =()=>{
  if(count>=10)setCount(0);
  else{setCount(+1);}
}
const minus =()=>{
  if(count>=10)setCount(0);
  else{setCount(-1);}
}
  return (
    <AppContext.Provider value={{count}}>
      <AppRoutes/>
    </AppContext.Provider>
  )
}

export default App
