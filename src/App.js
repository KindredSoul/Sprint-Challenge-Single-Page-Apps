import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage";
import Character from "./components/Character.js";

export default function App() {
	return (
		<main>
			<Header />
			<Route path="/" exact component={WelcomePage} />
			<Route path="/characters" exact component={CharacterList} />
			<Route path="/characters/:id" render={props => <Character {...props} id={props.match.params.id} />} />
		</main>
	);
}
