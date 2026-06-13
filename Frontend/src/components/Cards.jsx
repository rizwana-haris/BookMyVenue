import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useListVenuesQuery } from '../redux/api/venueApiSlice';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router';


const Cards = () => {
    const navigate = useNavigate()
    const { data } = useListVenuesQuery()
    const venues = data?.venues

    return (
        <>
            <Row>
                {venues?.map((v) => (
                    <Col key={v._id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={v.image[0]} />
                            <Card.Body>
                                <Card.Title>{v.name}</Card.Title>
                                <Card.Text>
                                    {v.city},{v.district}
                                </Card.Text>
                                <Button variant="primary" onClick={()=>{navigate(`/venue-details/${v._id}`)}}>View</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Cards