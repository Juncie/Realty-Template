import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const PropertyCard = props => {
	const { src, title, price, description, className, id } = props;

	const cardLink = e => {
		e.preventDefault();
		// window.scrollTo({ top: 0, behavior: 'smooth' });
		alert(e.target.id);
	};

	return (
		<Card className={className}>
			<Link to={`/properties/${id}`} className='property-card-links'>
				<Card.Img variant='top' src={src} className='property-image' />
			</Link>

			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>{description}</Card.Text>
				<Card.Text>{price}</Card.Text>
			</Card.Body>
			<Card.Footer>
				<small className='text-muted'>
					Last updated {Math.floor(Math.random() * 60)} mins ago
				</small>
			</Card.Footer>
		</Card>
	);
};

export default PropertyCard;
