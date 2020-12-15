/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Nav from './components/Nav';
import Content from './components/Content';
import './components/Nav.scss';
import avatar from './img/avatar.jpg';

/* 
TODO:
#	Linting and formatting
	//-config eslint and jsx
	//-config eslint and airbnb
	//-configure eslint globally
	//-configure prettier
	//-configure bootstrap
 */

export default () => {
	const navLinks = [
		{
			name: 'Home',
			href: '#',
		},
		{
			name: 'About',
			href: '#',
		},
		{
			name: 'Projects',
			href: '#',
		},
		{
			name: 'Contact',
			href: '#',
		},
	];

	return (
		<div>
			<Nav options={navLinks} />
			<div className="header">
				<div className="hero-image">
					<div className="greeting-container hero-text">
						<p>Hello! I am Aren.</p>
						<p>I make web applications.</p>
						<hr className="bar"></hr>
						<button type="button">Hire Me</button>

						<a href="#about">
							<div className="arrow down exit arrow-spread"></div>
							<div className="arrow down exit-2 arrow-spread"></div>
						</a>
					</div>
				</div>
			</div>
			<div className="about" id="about">
				<div className="general-container">
					<div className="row">
						<div className="col-8 aboutme-container">
							<h1>About Me</h1>
							<p>
								My name is Aren Ignacio and I create web applications
								using modern tools.
							</p>
						</div>
						<img className="col-4 headshot" src={avatar} alt="headshot" />
					</div>
					<row>
						<div className="skills-container">
							<h1>Technical Skills</h1>
							<div className="card-row">
								<div className="card"></div>
								<div className="card"></div>
								<div className="card"></div>
								<div className="card"></div>
							</div>
						</div>
					</row>
				</div>
			</div>
			<div className="projects-contact">
				<div className="projects-container">
					<card></card>
					<card></card>
					<card></card>
				</div>
				<hr></hr>
				<row>
					<div className="contact-container">
						<h1>Contact Info</h1>
						<p>contact info</p>
						<p>contact info</p>
						<p>contact info</p>
					</div>
					<div className="form-container">
						<form action="">
							<field></field>
							<field></field>
							<field></field>
						</form>
					</div>
				</row>
			</div>
			{/* 
			<div className="layer-0">
				<div className="greetings-container layer-0">
					<div className="hero-image"></div>
					<div className="hero-text">
						<div>
							<p>
								<span style={{ fontSize: '60px' }}>H</span>
								ello, I&apos;m
								<span> A</span>
								ren.
							</p>
						</div>
						<div>
							<p>I make Web Applications.</p>
						</div>
						<button className="" type="button">
							Hire me
						</button>
					</div>
				</div>
				<div className="About">
					<div className="about-container">hello</div>
				</div>
				<div className=" border Projects px-sm-2">Projects</div>
				<div className="border Contact px-sm-2">Contact</div>
			</div> */}
		</div>
	);
};
