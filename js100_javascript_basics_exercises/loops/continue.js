let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null,
              'London', 'Beijing', null];

for (let i = 0; i < cities.length - 1; i++) {
  if (cities[i] === null) {
    continue;
  }
  console.log(cities[i].length);
}