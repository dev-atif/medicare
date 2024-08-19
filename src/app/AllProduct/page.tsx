import React from 'react'
import AllProduct from '../Components/AllProduct/AllProduct'

const page = (props:any) => {
  console.warn('props',props)
  return (
    <div>
       <AllProduct props={props}/>
    </div>
  )
}

export default page