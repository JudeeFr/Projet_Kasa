import React, { useState } from 'react';
import arrowUp from '../assets/img/arrowUp.png';

export default function Collapse({ title, text }) {
	const [selected, setselected] = useState(false);
	return (
		<div className="collapse">
			<div className="collapse_title">
				<div>{title}</div>
				<img
					src={arrowUp}
					alt="arrow"
					className={`collapse_arrow ${selected ? 'rotate' : 'rotate2'}`}
					onClick={() => setselected(!selected)}
				/>
			</div>

			<div
				className={`collapse_text ${
					selected ? 'collapse_open' : 'collapse_close'
				}`}
			>
				{text}
			</div>
		</div>
	);
}
