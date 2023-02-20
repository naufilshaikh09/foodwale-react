import { IMG_CDN_URL } from "../utils/constant"
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MdOutlineLocalOffer } from "react-icons/md";

const MenuBanner = (
    {
        cloudinaryImageId,
        name,
        cuisines,
        locality,
        area,
        avgRating,
        totalRatingsString,
        sla,
        costForTwo,
        aggregatedDiscountInfo
    }
) => {
    return (
        <Card
            style={{ width: '19rem' }}
            className="restroBanner">
            <Row>
                <Col
                    style={{ margin: "auto", textAlign: "right" }}>
                    <Card.Img
                        className="restroImage"
                        variant="top"
                        src={IMG_CDN_URL + cloudinaryImageId} />
                </Col>
                <Col style={{ margin: "auto" }}>
                    <Card.Body>
                        <Card.Title>
                            {name}
                        </Card.Title>
                        <Card.Text
                            className="small-text"
                            style={{ color: "#a19a9a" }}>
                            {cuisines?.join(", ")}
                        </Card.Text>
                        <Card.Text
                            className="small-text"
                            style={{ color: "#a19a9a" }}>
                            {locality + ", " + area}
                        </Card.Text>
                        <Row>
                            <Col style={{ borderRight: "1px solid white" }}>
                                <Card.Subtitle>
                                    <i className="star"></i>{avgRating}
                                </Card.Subtitle>
                                <Card.Text className='small-text'>
                                    {totalRatingsString}
                                </Card.Text>
                            </Col>
                            <Col style={{ borderRight: "1px solid white" }}>
                                <Card.Subtitle>
                                    {sla?.slaString}
                                </Card.Subtitle>
                                <Card.Text className='small-text'>
                                    Delivery Time
                                </Card.Text>
                            </Col>
                            <Col>
                                <Card.Subtitle>
                                    &#8377;{costForTwo / 100}
                                </Card.Subtitle>
                                <Card.Text className='small-text'>
                                    Cost for two
                                </Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                </Col>
                <Col style={{ margin: "auto" }}>
                    <div style={{ border: "1px solid white", width: "263px" }}>
                        {
                            aggregatedDiscountInfo?.descriptionList?.map((item, index) => {
                                return <p key={index} style={{ margin: "20px" }}>
                                    <MdOutlineLocalOffer /> {item.meta}
                                </p>
                            })
                        }
                    </div>
                </Col>
            </Row>
        </Card>
    )
}

export default MenuBanner