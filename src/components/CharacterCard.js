import React from "react";
import { Link } from "react-router-dom";

export default function CharacterCard(props) {
	const { image, name, status, species, gender, id } = props.char;
	console.log(name);
	return (
		<Link to={`/characters/${id}`}>
			<span>
				<img src={image} alt="" />
				<h3>Name: {name}</h3>
				<ul>
					<li>Status: {status}</li>
					<li>Species: {species}</li>
					<li>Gender: {gender}</li>
				</ul>
			</span>
		</Link>
	);
}
