import Card from 'react-bootstrap/Card';
import { CardSubtitle } from 'react-bootstrap';
import './CardCom.css'

function CardCom({ data }) {
    return (
        <>
            <Card className='card-shadow' style={{ width: '30rem', padding: '30px' }}>
                <Card.Img variant="top" src={data?.imageURL} style={{ marginTop: '10px' }} />
                <Card.Body style={{ textAlign: 'center' }}>
                    <Card.Title style={{ fontSize: '24px' }}>{data?.name}</Card.Title>
                    <Card.Text style={{ fontSize: '18px', color: '#555' }}>
                        {data?.textkg}
                    </Card.Text>
                    <CardSubtitle style={{ fontSize: '24px' }}>
                        {data?.price}
                    </CardSubtitle>
                    <div className='cart-button'>
                        <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
}

export default CardCom;
