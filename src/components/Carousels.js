import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const Carousels = ({ logo, alt, label, desc }) => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={logo} width={1400} height={340}
                    alt={alt}
                />
                <Carousel.Caption>
                    <h3>{label}</h3>
                    <p>{src}</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carousels;