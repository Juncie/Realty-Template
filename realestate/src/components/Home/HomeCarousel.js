import React from 'react';
import { Carousel } from 'react-bootstrap';

import SearchBar from './SearchBar';

function HomeCarousel() {
	return (
		<div className='home-carousel'>
			<SearchBar />
			<Carousel
				fade
				className='carousel-container'
				controls={false}
				indicators={false}
			>
				<Carousel.Item className='carousel-item' interval={4000}>
					<img
						alt='First Slide'
						src='https://www.aveliving.com/AVE/media/Property_Images/Florham%20Park/hero/flor-apt-living-(2)-hero.jpg?ext=.jpg'
					/>
				</Carousel.Item>

				<Carousel.Item interval={4000}>
					<img
						src='https://www.thepinnaclelist.com/wp-content/uploads/2020/12/002-SHINE-Luxury-Apartment-Interior-Design-Dnipro-Ukraine-Svoya-Studio.jpeg'
						alt='Second slide'
					/>
				</Carousel.Item>

				<Carousel.Item interval={4000}>
					<img
						src='https://www.aveliving.com/AVE/media/Property_Images/Florham%20Park/hero/flor-apt-kitchen-(1)-hero.jpg?ext=.jpg'
						alt='Third slide'
					/>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default HomeCarousel;
