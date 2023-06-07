import React from 'react';
import { Container } from 'react-bootstrap';
import CieloClaro from "../assets/Lx0q.mp4";

const Principal = ({ clima }) => {
    if (Object.keys(clima).length === 0) {
        return <p>Cargando...</p>;
    }

    const temperatura = (clima.main.temp) - 273.15;
    const temperaturaMin = (clima.main.temp_min) - 273.15;
    const temperaturaMax = (clima.main.temp_max) - 273.15;
    
    return (
        <div >
            <Container className='d-flex justify-content-center border my-3'>
                <Container className='text-center my-2'>
                    <video src={CieloClaro} controls />
                </Container>
                <Container className='my-2'>
                    <h2>{clima.name}</h2>
                    <p>Estado: <strong>{clima.weather[0].description}</strong></p>
                    <p>Temperatura: <strong>{temperatura}°</strong></p>
                    <p>Temperatura Mínima: <strong>{temperaturaMin}°</strong></p>
                    <p>Temperatura Máxima: <strong>{temperaturaMax}°</strong></p>
                    <p>Humedad: <strong>{clima.main.humidity}%</strong></p>
                    <p>Viento: <strong>{clima.wind.speed} m/s</strong></p>
                </Container>
            </Container>
        </div>
    );
};

export default Principal;
