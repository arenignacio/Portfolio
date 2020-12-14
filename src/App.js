/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Nav from './components/Nav';
import Content from './components/Content';

import './components/Nav.scss';

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
			<div className="layer-0">
				<div className="greetings-container layer-0">
					<div className="hero-image"></div>
					<div className="hero-text">
						<div>
							<span style={{ fontSize: '60px' }}>H</span>
							ello, I&apos;m
							<span> A</span>
							ren.
						</div>
						<div>I make Web Applications.</div>
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
			</div>
		</div>
	);
};
