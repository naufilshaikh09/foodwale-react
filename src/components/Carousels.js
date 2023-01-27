import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { RESTAURANT_CAROUSELS_API } from '../utils/constant'
import Image from 'react-bootstrap/Image'

const Carousels = ({ creativeId }) => {
    return (
        <Image
            style={{ width: '16rem' }}
            src={RESTAURANT_CAROUSELS_API + creativeId}>
        </Image>

        // <Carousel>
        //     <Carousel.Item>
        //         <img
        //             className="d-block w-100"
        //             src={RESTAURANT_CAROUSELS_API + creativeId} //width={260} height={260}
        //             alt={alt}
        //         />
        //     </Carousel.Item>
        // </Carousel>
    );
}

export default Carousels;