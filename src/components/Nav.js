import React from 'react';
import PropTypes from 'prop-types';
import './Nav.scss';
import avatar from '../img/brand.png';

const Nav = ({ options }) => {
	Nav.defaultProps = {
		options: {
			href: '#',
			name: 'example',
		},
	};

	Nav.propTypes = {
		options: { href: PropTypes.string, name: PropTypes.string },
	};

	const renderOptions = options.map(({ href, name }) => {
		return (
			<div className="">
				<a className="nav-link nav-option" href={href} key={name}>
					<strong>{name}</strong>
				</a>
			</div>
		);
	});

	return (
		<div className="layer-1 sticky container-fluid bg-white">
			<div className="row navbar">
				<div className="col-1">
					<img
						className="img-responsive"
						width="50%"
						src={avatar}
						alt="avatar"
					/>
				</div>
				<div className="col-11 pt-2">
					<div className="nav justify-content-end">{renderOptions}</div>
				</div>
			</div>
		</div>
	);
};

export default Nav;
