import React, { useEffect, useState } from "react";
import axios from "axios";

import CharacterCard from "./CharacterCard";

export default function CharacterList() {
	// TODO: Add useState to track data from useEffect
	const [chars, setChars] = useState([]);

	useEffect(() => {
		// TODO: Add API Request here - must run in `useEffect`
		//  Important: verify the 2nd `useEffect` parameter: the dependancies array!
		const getChars = () => {
			axios
				.get("https://rickandmortyapi.com/api/character/")
				.then(res => {
					// console.log(res);
					let newChar = res.data.results;
					console.log(newChar);
					setChars(newChar);
				})
				.catch(error => {
					console.log(error);
				});
		};
		getChars();
	}, []);

	return (
		<section className="character-list">
			<h2>Characters</h2>
			{chars.map(char => {
				return <CharacterCard key={char.id} char={char} />;
			})}
		</section>
	);
}
