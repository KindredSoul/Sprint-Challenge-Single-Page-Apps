import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function CharacterCard(props) {
	const { image, name, status, species, gender, id } = props.char;

	const MyDiv = styled.div`
		border: 3px solid skyblue;
		decoration: none;
		width: auto;
		margin: 2%;
		padding: 2%;
		background-color: limegreen;
	`;

	return (
		<Link to={`/characters/${id}`}>
			<MyDiv>
				<img src={image} alt="" />
				<h3>Name: {name}</h3>
				<ul>
					<li>Status: {status}</li>
					<li>Species: {species}</li>
					<li>Gender: {gender}</li>
				</ul>
			</MyDiv>
		</Link>
	);
}
