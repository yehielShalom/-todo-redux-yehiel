import React, { useContext } from 'react'
import { AppContext } from '../../context/context'

const Page1 = () => {
    const {count,plus,minus} = useContext(AppContext);
  return (
    <div>count: {count};
    
    </div>
  )
}

export default Page1