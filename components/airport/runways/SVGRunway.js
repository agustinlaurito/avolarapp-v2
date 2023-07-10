function SVGRunway({ runways, windDirection, isGrass, isClosed }) {

	let scalateArrow = 1;

	if (Math.abs(windDirection) > 70 && Math.abs(windDirection) < 110) {
		scalateArrow = 0.8;
	}
	const strokeColor = "#FFFFFF";
	const fillColor = isGrass ? "#60A561" : "#3A405A";
	const windColor = "#3C91E6";
	const rotated = {
		"transformBox": "fill-box",
		"transformOrigin": "center",
		"transform": `rotate(${windDirection - 180}deg) scale(${scalateArrow})`,
	};

	return (
		<svg viewBox="0 0 200 200" height="12vw" className='svg-runways' xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" version="1.0">
			<defs>
				<marker id='head' orient="auto" markerWidth='5' markerHeight='12' refX='2' refY='1.8'>
					<path d='M 0 0 V 4 L 6 2 Z' fill={windColor} />
				</marker>
			</defs>
			<g style={{ transformOrigin: "center center" }} transform={Math.abs(windDirection) < 30 ? "scale(0.9)" : "scale(1)"}>
				<title>Layer 1</title>
				<rect strokeWidth="2" id="svg_10" height="187.81609" width="38" y="5.86416" x="50%" transform="translate(-19)" stroke={fillColor} fill={fillColor} />
				{!isGrass ? (
					<>
						<line id="svg_21" y2="57.65088" x2="50%" y1="44.08766" x1="50%" strokeWidth="3" stroke={strokeColor} fill={fillColor} />
						<line id="svg_19" y2="105.12214" x2="50%" y1="91.55893" x1="50%" strokeWidth="3" stroke={strokeColor} fill={fillColor} />
						<line id="svg_20" y2="81.09915" x2="50%" y1="67.53594" x1="50%" strokeWidth="3" stroke={strokeColor} fill={fillColor} />
						<line id="svg_22" y2="128.68536" x2="50%" y1="115.12214" x1="50%" strokeWidth="3" stroke={strokeColor} fill={fillColor} />
						<line id="svg_23" y2="152.13364" x2="50%" y1="138.57042" x1="50%" strokeWidth="3" stroke={strokeColor} fill={fillColor} />
					</>
				) : null}

				<text strokeWidth="1" textAnchor="middle" fontSize="15" id="svg_24" y="177.5341" x="50%" stroke={strokeColor} fill="#FFFFFF">{isClosed ? "X" : runways[0]}</text>
				<text transform="rotate(180, 50, 10)" strokeWidth="1" textAnchor="middle" fontSize="15" id="svg_25" stroke={strokeColor} fill="#FFFFFF">{isClosed ? "X" : runways[1]}</text>
				<path id="cabecera1" d="m36.32184,100.22988" opacity="NaN" strokeWidth="3" stroke={strokeColor} fill="#3a405a" />
			</g>
			{
				windDirection !== undefined && <line style={rotated} x1="50%" y1="5%" x2="50%" y2="90%" stroke={windColor} strokeDasharray='5,5' strokeWidth="3" markerEnd="url(#head)" />
			}
		</svg>
	);
}

export default SVGRunway;
