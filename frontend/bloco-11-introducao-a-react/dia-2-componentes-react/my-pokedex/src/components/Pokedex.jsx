import React from "react";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
    render() {
        const { pokemons } = this.props;

        return (
        <div className="pokedex">
            <Pokemon pokemon={ pokemons }/>
        </div>
        );
    }
}

export default Pokedex;