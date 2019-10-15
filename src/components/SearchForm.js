import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";

export default function SearchForm({ chars }) {
	const [searchTerm, setSearchTerm] = useState("");
	const [searchResults, setSearchResults] = useState([]);

	console.log(chars);
	useEffect(() => {
		const results = chars
			.map(char => {
				return char.name;
			})
			.filter(char => {
				return char.toLowerCase().includes(searchTerm);
			});
		setSearchResults(results);
		console.log(results);
	}, [searchTerm]);

	const handleChange = e => {
		setSearchTerm(e.target.value);
	};

	return (
		<section className="search-form">
			<form>
				<label htmlFor="charName" />
				<input id="charName" type="text" name="textfield" placeholder="Wubadubadubdub" value={searchTerm} onChange={handleChange} />
			</form>
			<section className="character-list">
				<h2>Characters</h2>
				{searchResults.map(char => {
					return <CharacterCard key={char.id} char={char} />;
				})}
			</section>
		</section>
	);
}
