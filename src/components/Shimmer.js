import Card from 'react-bootstrap/Card';

const Shimmer = () => {
    return (
        <div className='restaurant-list' style={{ marginLeft: "10%" }}>
            {
                Array(20)
                    .fill("")
                    .map((e, index) => (
                        <Card
                            key={index}
                            style={{ width: '19rem' }} >
                            <Card.Body
                                className='shimmer-card'>
                            </Card.Body>
                        </Card>
                    ))
            }
        </div>
    )
}

export default Shimmer;