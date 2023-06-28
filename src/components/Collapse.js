import React, { useState } from 'react';
import arrowUp from '../assets/img/arrowUp.png';
import arrowDown from '../assets/img/arrowDown.png';

export default function Collapse({ title, text }) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="collapse" onClick={() => setIsOpen(!isOpen)}>
			<div className="collapse_title">
				<div>{title}</div>
				<img
					src={isOpen ? arrowDown : arrowUp}
					alt="arrow"
					className="collapse_arrow"
				/>
			</div>
			{isOpen && <div className="collapse_text">{text}</div>}
		</div>
	);
}
