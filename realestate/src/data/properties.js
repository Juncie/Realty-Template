import { Link } from 'react-router-dom';
import PropertyCard from '../components/Home/PropertyCard';

export const Properties = [
	{
		index: 1,
		source:
			'https://images1.forrent.com/i2/RjwZy9t_AdxvrisYzpeDuZ1c45aNAwRRHhEHAW-yYkU/112/image.jpg',
		title: '2 Bedroom Apartment',
		price: '$1,350',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		index: 2,
		source:
			'https://www.carsonhills.com/wp-content/uploads/2020/08/Carson-Hills-Apartments-Carson-City-NV-Two-Bedroom-Governor-Kitchen.jpg',
		title: '3 Bedroom Apartment',
		price: '$3,000',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		index: 3,
		source:
			'https://www.irvinecompanyapartments.com/rental-living/wp-content/uploads/2020/04/apartment-kitchen-decorating.jpg',
		title: '2 Bedroom Apartment',
		price: '$2,100',
		description: 'A beautiful apartment with spacious living room, kitchen and bathroom.',
	},
	{
		index: 4,
		source: 'http://cdn.home-designing.com/wp-content/uploads/2019/08/modern-sofa.jpg',
		title: '1 Bedroom Apartment',
		price: '$1,100',
	},
	{
		index: 5,
		source:
			'https://images1.apartments.com/i2/zS8PLR5IiIIx2127fX8eLJq6gms1wTss-3DMew1qM8E/111/hawthorn-luxury-apartments-kenosha-wi-primary-photo.jpg',
		title: '2 Bedroom Apartment',
		price: '$1,400',
	},
];

export const PropertyList = Properties.map((property, index) => {
	return (
		<PropertyCard
			key={index}
			id={property.index}
			src={property.source}
			title={property.title}
			price={property.price}
			description={property.description}
			className='property-card'
		/>
	);
});
