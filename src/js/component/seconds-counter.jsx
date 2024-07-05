import React from "react";
import PropTypes from "prop-types";

import { createRoot } from 'react-dom/client';



const Alert = () => {
	return (
		<>
			<h1 className="mx-4 my-4 alert alert-danger m-auto text-center" role="alert">
				The counter reached 10 seconds
			</h1>
		</>
	);
};

//La mejor solución que encontré para poder llenar todo con 0 y a su vez,
//tener los caracteres en un array para luego procesarlos individualmente

const DigitArray = ({ number, totalDigits }) => {
	const digits = Array.from(String(number), Number);
	console.log(number, totalDigits, digits)
	//buscar como hacer para llenar con 0
	const paddedDigits = Array(totalDigits).fill(0);
	const start = totalDigits - digits.length;
	for (let i = 0; i < digits.length; i++) {
		paddedDigits[start + i] = digits[i];
	}

	return (
		<div className="d-flex gap-2">
			{paddedDigits.map((digit, index) => (
				<span key={index} style={style}>{digit}</span>
			))}
		</div>
	);
};


//create your first component
// const SecondsCounter = (props) => {

// 	/* let digits = props.seconds.toString().split("").map(Number); */

// 	/* if (props.seconds >= 10) {
// 		return <Alert />;
// 	} */



// 	return (
// 		<>
// 			<div className="counter">
// 				<h1 className="d-flex p-4 gap-2 align-content-center justify-content-center"> <i style={style} className="fa-solid fa-clock line"></i>
// 					{DigitArray}
// 				</h1>
// 			</div>
// 			<button onClick={resetCounter}>Resetear contador</button>
// 			<button onClick={stopCounter}>{isActive ? "Stop Counter" : "Start Counter"}</button>
// 		</>
// 	);
// };


// Variables inicializadas
let seconds = 0;
let active = true;

const SecondsCounter = ({ seconds, isActive }) => {
	console.log(seconds, resetCounter, isActive)
	return (
		<>
			<div className="counter bg-black">
				<h1 className="d-flex p-4 gap-2 align-content-center justify-content-center">
					<i style={style} className="fa-solid fa-clock line"></i>
					<DigitArray number={seconds} totalDigits={6} />
				</h1>
			</div>
			<div className="container d-flex justify-content-center align-items-center gap-2">
				<button className="btn btn-success" onClick={resetCounter}>Reset Counter</button>
				{console.log('active???', active)}
				<button className="btn btn-primary" onClick={activate}>{active ? "Stop Counter" : "Start Counter"}</button>
			</div>
			{seconds >= 10 && <Alert />}
		</>
	);
};


let style = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	color: "white",
	fontSize: "50px",
	background: "#303030",
	height: "75px",
	width: "75px",
	borderRadius: "8px"
};


DigitArray.propTypes = {
	number: PropTypes.number,
	totalDigits: PropTypes.number,
	resetCounter: PropTypes.number,
	isActive: PropTypes.bool,
};



const container = document.getElementById('app');
const root = createRoot(container);


const renderCounter = () => {
	// seconds += 199; // para probar
	isActive();
	root.render(<SecondsCounter seconds={seconds} />);
};

const resetCounter = () => {
	// console.log('Clicked resetcounter')
	// isActive();
	seconds = 0;
};


const isActive = () => {
	console.log(isActive, active)
	if (active) {
		seconds++;
	} else {
		seconds += 0;
	}
}

const activate = () => {
	active = !active;
};

setInterval(() => {
	renderCounter();
}, 1000);

// console.log(seconds, resetCounter, stopCounter, isActive)






export default SecondsCounter;
