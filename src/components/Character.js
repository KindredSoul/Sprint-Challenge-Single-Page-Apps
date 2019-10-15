import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

const Character = props => {
	const [char, setChar] = useState();

	useEffect(() => {
		let id = props.id;

		axios
			.get(`https://rickandmortyapi.com/api/character/${id}`)
			.then(res => {
                let char = res.data.results
				setChar(char);
				console.log(id)
			})
			.catch(error => {
				console.error(error);
			});
	}, [props.id]);

	if (!char) {
		return <div>Loading character...</div>;
	}

	return (
			<CharacterCard char={char} />
	);
};

export default Character;