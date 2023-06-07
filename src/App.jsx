import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Principal from './components/Principal'
import { Container,Button } from 'react-bootstrap';
import { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';

function App() {
const [clima,setClima]= useState({});


const tomaDeDatos = (e)=>{
  e.preventDefault();
  const ciudad = e.target.elements[0].value;
  consultarAPI(ciudad);
  setClima('');
}
const consultarAPI = async(ciudad)=>{
  if(ciudad&& ciudad!=='Tucuman'){
    let apikey='1f998e9fb087014c08d45fe5301f583a'
    const consultar = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&lang=sp&appid=${apikey}`);
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
useEffect(()=>{
  consultarAPI();
  },[]);

  return (
    <>
    <h1 className='my-4 text-center'>Estado del Clima</h1>
    <hr />
    <Container fluid className='d-flex justify-content-center'>
            <h3 className='text-center me-2'>Ingresar nombre de ciudad</h3>
            <Form className="d-flex text-center" onSubmit={tomaDeDatos}>
                <Form.Control
                    type="search"
                    placeholder="Pj. Salta"
                    className="me-2"
                    aria-label="Search"
                />
                <Button type="submit"variant="outline-success">Buscar</Button>
            </Form>
            </Container>
    <Principal clima={clima}></Principal>
    <Footer></Footer>
    </>
  )
}

export default App
