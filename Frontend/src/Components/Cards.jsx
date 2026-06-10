import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useListVenuesQuery } from '../redux/api/venueApiSlice';
import { Col, Row } from 'react-bootstrap';


const Cards = () => {

    const { data } = useListVenuesQuery()
    const venues = data?.venues

    return (
        <>
            <Row>
                {venues?.map((v) => (
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={v.image[0]} />
                            <Card.Body>
                                <Card.Title>{v.name}</Card.Title>
                                <Card.Text>
                                    {v.city},{v.district}
                                </Card.Text>
                                <Button variant="primary">View</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Cards