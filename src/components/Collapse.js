import React, { useEffect, useState } from 'react';
import arrowUp from '../assets/img/arrowUp.png';

export default function Collapse({ title, text }) {
	const [selected, setSelected] = useState(false);
	const [firstClick, setFirstClick] = useState(false);

	useEffect(() => {
		// on initialise le firstClick a true au moment ou on detecte le premier click
		if (selected && !firstClick) {
			setFirstClick(true);
		}
	}, [selected]);

	return (
		<div className="collapse">
			<div className="collapse_title">
				<div>{title}</div>
				<img
					src={arrowUp}
					alt="arrow"
					className={`collapse_arrow ${selected ? 'rotate' : 'rotate2'}`}
					onClick={() => setSelected(!selected)}
				/>
			</div>

			<div
				style={{ display: !firstClick ? 'none' : '' }}
				// ajout d'une class selon l'etat
				className={`collapse_text ${
					selected ? 'collapse_open' : 'collapse_close'
				}`}
			>
				{text}
			</div>
		</div>
	);
}
