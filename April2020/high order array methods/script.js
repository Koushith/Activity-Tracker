const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 700 },
  { name: "Album", price: 300 },
  { name: "book", price: 800 },
  { name: "pen", price: 400 },
  { name: "pensil", price: 100 },
  { name: "jio", price: 900 },
  { name: "mob", price: 1000 },
];

// filer < 500

const fil = items.filter((item) => item.price <= 900);

// console.table(fil);

// map- this will take and put it into new array

// put all names in new array

const new_array = items.map((item) => {
  return item.name;
});
// console.log(new_array);

// Fina

// find wtr  jio exisy

// const exist = items.find((item) => item.name == "jio");
// console.log(exist);

const exist = items.find(function (item) {
  return item.name == "jio";
});

// console.log(exist);

// loop throug an array

// items.forEach((item) => console.log(item.name));
