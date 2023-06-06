import { Container } from 'react-bootstrap';

const Principal = ({clima}) => {
    
    console.log(clima.weather[0].description);
    const temperatura = (clima.main.temp)-(273.15);
    const temperaturaMin = (clima.main.temp_min)-(273.15);
    const temperaturaMax = (clima.main.temp_max)-(273.15);

    return (
        <div className='d-flex justify-content-center border circle-border'>
        <Container>
        </Container>
        <Container>
        <p>{clima.weather[0].description}</p>
        <p>Temperatura: <strong>{temperatura}°</strong></p>
        <p>Temperatura Minima: <strong>{temperaturaMin}°</strong></p>
        <p>Temperatura Minima: <strong>{temperaturaMax}°</strong></p>
        <p>Humedad: <strong>{clima.main.humidity}%</strong></p>
        <p>Viento: <strong>{clima.wind.speed}m/s</strong></p>
        </Container>
        </div>
    );
};

export default Principal;