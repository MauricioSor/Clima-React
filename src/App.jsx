import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Principal from './components/Principal'
import { useEffect, useState } from 'react'

function App() {
const [clima,setClima]= useState([]);
useEffect(()=>{
  consultarAPI();
  },[]);
const consultarAPI = async(e)=>{
  if(e&& e!=='Tucuman'){
    let apikey='1f998e9fb087014c08d45fe5301f583a'
    const consultar = await fetch(`https://api.openweathermap.org/data/2.5/weather?country=Argentina&q=${e.target.value}&lang=sp&appid=${apikey}`);
    const respuesta = await consultar.json();
    setClima(respuesta);
    console.log(respuesta);
    console.log(clima);
  }else{
    try{
      let apikey='1f998e9fb087014c08d45fe5301f583a'
      const consultar = await fetch(`https://api.openweathermap.org/data/2.5/weather?country=Argentina&q=Tucuman&lang=es&appid=${apikey}`);
      const respuesta = await consultar.json();
      setClima(respuesta);
      console.log(respuesta);
      console.log(clima);
    }catch(error){
      throw(Error);
    }
  }

}

  return (
    <>
    <Principal clima={clima}></Principal>
    <Footer></Footer>
    </>
  )
}

export default App
