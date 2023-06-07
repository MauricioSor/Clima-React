import React from 'react';
import { Container } from 'react-bootstrap';
import CieloNuboso from "../assets/377769.png"
import lluvia from "../assets/fondo-natural-con-el-cielo-lluvioso-31994020.png"
import sol from "../assets/a.png"

const Principal = ({ clima }) => {
    if (Object.keys(clima).length === 0) {
        return <p>Cargando...</p>;
    }

    const temperatura = clima.main.temp - 273.15;
    const temperaturaMin = clima.main.temp_min - 273.15;
    const temperaturaMax = clima.main.temp_max - 273.15;

    const cielo = (descripcion) => {
        switch (descripcion) {
            case 'cielo nuboso':
                return (
                    <img
                        src={CieloNuboso} className='img-fluid'
                        alt="Cielo Nuboso" 
                    />
                );
            case 'cielo claro':
                return (
                    <img
                        src={sol}
                        alt="Cielo Claro" className='img-fluid'
                    />
                );
            case 'muy nuboso':
                return (
                    <img
                        src={CieloNuboso}
                        alt="Muy Nuboso" className='img-fluid'
                    />
                );
            case 'nubes':
                return (
                    <img
                        src={CieloNuboso}
                        alt="Nubes" className='img-fluid'
                    />
                );
            case 'lluvia moderada':
                return (
                    <img
                        src={lluvia} className='img-fluid'
                        alt="Lluvia Moderada"
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div>
            <Container className="d-flex justify-content-center border my-3">
                <Container className="text-center my-2">{cielo(clima.weather[0].description)}</Container>
                <Container className="my-2">
                    <h2>{clima.name}</h2>
                    <p>Cielo: <strong>{clima.weather[0].description}</strong></p>
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
