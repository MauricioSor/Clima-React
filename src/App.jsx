import React, { useEffect, useState } from 'react';
import { Container, Button, Spinner } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Footer from './components/Footer';
import Row from 'react-bootstrap/Row';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Principal from './components/Principal';
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const [clima, setClima] = useState({});
  const [mostrarSpinner, setMostrarSpinner] = useState(true);

  const tomaDeDatos = (e) => {
    e.preventDefault();
    const ciudad = e.target.elements[0].value;
    consultarAPI(ciudad);
    setClima({});
  }

  const consultarAPI = async (ciudad) => {
    if (ciudad && ciudad !== 'Tucuman') {
      setMostrarSpinner(true);
      let apikey = '1f998e9fb087014c08d45fe5301f583a'
      const consultar = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&lang=es&appid=${apikey}`);
      const respuesta = await consultar.json();
      setClima(respuesta);
      setMostrarSpinner(false); // Agregar esta línea
      console.log(respuesta);
      console.log(clima);
    } else {
      try {
        setMostrarSpinner(true);
        let apikey = '1f998e9fb087014c08d45fe5301f583a'
        const consultar = await fetch(`https://api.openweathermap.org/data/2.5/weather?country=Argentina&q=Tucuman&lang=es&appid=${apikey}`);
        const respuesta = await consultar.json();
        setClima(respuesta);
        setMostrarSpinner(false); // Agregar esta línea
        console.log(respuesta);
        console.log(clima);
      } catch (error) {
        throw (Error);
      }
    }
  }
  

  useEffect(() => {
    consultarAPI();
  }, []);

  return (
    <>
      <h1 className='my-4 text-center'>Estado del Clima</h1>
      <hr />
      <Row xs={1} md={1} lg={3} className='d-flex justify-content-start align-items-center mx-2'>
      <Container>
      <h3 className='text-center'>Ingresar nombre de ciudad</h3>
      </Container>
      <Container className=''>
        <Form className="d-flex" onSubmit={tomaDeDatos}>
          <Form.Control
            type="search"
            placeholder="Pj. Salta"
            className="me-2"
            aria-label="Search"
          />
          <Button type="submit" variant="outline-success" className='bg-info text-dark'><i className="bi bi-search"></i>Buscar</Button>
        </Form>
      </Container>
      </Row>
      {mostrarSpinner ? (
        <div className="my-5 d-flex justify-content-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Principal clima={clima} />
      )}
      <Footer />
    </>
  )
}

export default App;
