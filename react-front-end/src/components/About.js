import React from 'react';
import mountainView from '../assets/mountainView1.jpg';
import './about.css';
const About = () => {
	return (
		<div className='aboutPage'>
			<img src={mountainView} alt='About Us' />
			<div className='aboutText'>
				<div className='headingTitle'>
					<h1>Who are we?</h1>
				</div>
				<div className='textblock'>
					<h3>
						We are a team of passionate individuals dedicated to providing
						quality products/services to our customers.
					</h3>
					<h3>
						Our mission is to make a positive impact on the world and we do this
						by constantly innovating and striving for excellence in everything
						we do.
					</h3>
					<h3>We look forward to assisting you in living a Better Life!</h3>
				</div>
			</div>
		</div>
	);
};

export default About;
