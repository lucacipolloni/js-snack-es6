// # Snack 1

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

// # Snack 2

const genRand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const teams = [
  {
    name: "Inter",
    score: 0,
    fouls: 0,
  },
  {
    name: "Juventus",
    score: 0,
    fouls: 0,
  },
  {
    name: "Milan",
    score: 0,
    fouls: 0,
  },
  {
    name: "Lazio",
    score: 0,
    fouls: 0,
  },
  {
    name: "Roma",
    score: 0,
    fouls: 0,
  },
];

const teamsFouls = [];

for (let i = 0; i < teams.length; i++) {
  const score = genRand(0, 10);
  const fouls = genRand(0, 5);

  const currentTeam = teams[i];
  currentTeam.score = score;
  currentTeam.fouls = fouls;

  const teamFouls = {
    name: currentTeam.name,
    fouls: fouls,
  };

  teamsFouls.push(teamFouls);
}

console.table(teams);
console.table(teamsFouls);
