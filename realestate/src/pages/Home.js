import React, { useState } from 'react';

import '../styles/pages/Home.css';
import HomeCarousel from '../components/Home/HomeCarousel';
import { PropertyList } from '../data/properties';
import { Modal } from 'react-bootstrap';

function Home() {
	const [show, setShow] = useState(false);

	return (
		<main className='home-container'>
			<HomeCarousel />
			<section className='home-content'>
				<div className='property-section'>
					<h1 className='sec-title'>Featured Properties</h1>
					<div className='property-list'>{PropertyList}</div>
					<Modal show={show} className='property-modal'>
						<Modal.Header>
							<Modal.Title>Modal heading</Modal.Title>
						</Modal.Header>

						<Modal.Body>
							<p>Lorem ipsum dolor sit amet</p>
						</Modal.Body>

						<Modal.Footer>
							<button className='btn btn-primary'>Save changes</button>
							<button className='btn btn-secondary' onClick={() => setShow(!show)}>
								Close
							</button>
						</Modal.Footer>
					</Modal>
					<div className='property-sec-footer'>
						<button className='btn btn-primary property-button' onClick={() => setShow(!show)}>
							View More
						</button>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Home;
