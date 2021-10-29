import React from 'react';

class Pokemon extends React.Component {
    render() {
       const { pokemon } = this.props;

        return (
            pokemon.map((pokemon) => {
                return(
                    <section className="pokemon">
                        <link href="http://fonts.cdnfonts.com/css/pokemon-solid" rel="stylesheet"></link>
                        <h3 className={ pokemon.name }>Name: { pokemon.name }</h3>
                        <h5> Type: { pokemon.type }</h5>
                        <p>Average Weight: { pokemon.averageWeight.value } { pokemon.averageWeight.measurementUnit }</p>
                        <img src={ pokemon.image } />
                    </section>
                );
            })
        )
    }
}

export default Pokemon;