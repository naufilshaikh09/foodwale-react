import Card from 'react-bootstrap/Card';

const Shimmer = () => {
    return (
        <div className='restaurant-list'>
            {
                Array(20)
                    .fill("")
                    .map((e) => (
                        <Card style={{ width: '19rem' }} >
                            <Card.Body className='shimmer-card'></Card.Body>
                        </Card>
                    ))
            }
        </div>
    )
}

export default Shimmer;