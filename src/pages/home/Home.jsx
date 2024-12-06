import React, { useEffect, useState } from 'react'
import Hero from '../../components/hero/Hero'
import { useStateValue } from '../../context'
import Products from '../../components/products/Products'
import axios from '../../api'
import SoyWaxInfo from '../../components/soywaxinfo/SoyWaxInfo'

const Home = ({data:props}) => {
  const {count} = useStateValue()
  const [data, setData] = useState(null)

  useEffect(()=>{
    axios
      .get("/products")
      .then(res=> setData(res?.data))
  }, [])

  return (
    <div id='home'>
      <Hero data={props}/>
      <Products data={data?.products}/>
      <SoyWaxInfo/>
    </div>
  )
}

export default Home

