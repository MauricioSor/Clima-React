import Footer from './components/Footer'
import './App.css'
import Principal from './components/Principal'
import { useEffect, useState } from 'react'

function App() {
const [clima,setClima]= useState([]);

const consultarAPI = async(e)=>{
  if(e&& e!=='Tucuman'){
    const consultar = await fetch(`https://api.openweathermap.org/data/2.5/weather?country=Argentina&q=${e.target.value}&lang=sp&appid=${apikey}`);

  }else{
    try{
      let apikey='1f998e9fb087014c08d45fe5301f583a'
      const consultar = await fetch(`https://api.openweathermap.org/data/2.5/weather?country=Argentina&q=Tucuman&lang=sp&appid=${apikey}`);
      const respuesta = await consultar.json();
      const respuestaArray= Object.values(respuesta);
      setClima(respuestaArray);
      console.log(respuestaArray);
    }catch(error){
      throw(Error);
    }
  }

}
useEffect(()=>{
consultarAPI();
},[])
  return (
    <>
    <Principal clima={clima}></Principal>
    <Footer></Footer>
    </>
  )
}

export default App
