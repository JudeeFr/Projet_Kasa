import React, { useState } from 'react';
import arrowUp from '../assets/img/arrowUp.png';
import arrowDown from '../assets/img/arrowDown.png';

export default function Collapse({ title, text }) {
	const [selected, setselected] = useState(false);

	return (
		<div className="collapse">
			<div className="collapse_title">
				<div>{title}</div>
				<img
					src={selected ? arrowDown : arrowUp}
					alt="arrow"
					className="collapse_arrow"
					onClick={() => setselected(!selected)}
				/>
			</div>
			{selected && <div className="collapse_text">{text}</div>}
		</div>
	);
}
