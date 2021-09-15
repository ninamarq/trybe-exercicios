const getPlanet = ({ name, distanceFromSun: { value, measurementUnit } }) =>
`${name} is ${value} ${measurementUnit} apart from the Sun`;

  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };

  setTimeout(() => console.log(getPlanet(mars)), 4000); // imprime Marte depois de 4 segundos