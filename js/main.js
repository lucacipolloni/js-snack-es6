// Snack 1

const bikes = [
  {
    nome: "Mountain Bike",
    peso: 45,
  },
  {
    nome: "Cross bike",
    peso: 35,
  },
  {
    nome: "Enduro bike",
    peso: 80,
  },
];

let lightestBike;

for (const bike of bikes) {
  if (!lightestBike || bike.peso < lightestBike.peso) {
    lightestBike = bike;
  }
}

console.log(lightestBike);
