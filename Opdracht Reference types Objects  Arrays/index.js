// Deel 1 Objecten:

let person = {
    myName: "Maureen",
    myAge: 35,
};

// Dot Notation
person.myName = "Maureen";
person.myAge = 35;

console.log(person.myName);
console.log(person.myAge);

// Bracket Notation
person['name'] = 'Mary';

console.log(person.name);

let evaluations ={
    value: [7, 10, 9]
};

console.log(evaluations);
// de value is 3

// Deel 2 Arrays:

let colors = [
    "groen",
    "blauw",
     "rood" ];

console.log(colors);

let color = [0, 1, 2,];
   color[0]= "groen" ;
   color[1]= "blauw" ;
   color[2]= "rood"  ;

   //color.lenght = 3;
console.log(color.length) ;

let colored = ['groen', 'geel', 'paars'];


let count = colored.push('brown');
console.log(count);
console.log(colored);

colored.push(5);
console.log(colored);



let greeting = {
    greeting: "Hi ik ben een object" 
};

colored.push("Hi ik ben een object");
console.log(colored);

// Deel 3 Bekijk een "real-life" object

const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
                food: {
                        favourite_food: "fish",
      medium_liked_food: "dried fruits", 
      disliked_food: "walnuts"
     }
  },
        {
    name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: [ "Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
                        favourite_food: "tuna",
      medium_liked_food: "canned food", 
      disliked_food: "all fruits"
     }
  },
        {
    name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: [ "Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
        favourite_food: "meaty things",
      medium_liked_food: "tuna", 
      disliked_food: "canned food"
     }
  }
]

// 1 Log de naam van het laatste kattenras.
// Resultaat: American Bobtail
console.log(catBreeds[2].name);

// 2 Log de energy levels van de eerste kat.
//Resultaat: 5

console.log(catBreeds[0].energy_level);

// Log het eerste temperament van de temperamenten van de tweede kat.
// Resultaat: Affectionate

console.log(catBreeds[1].temperament.slice(0,1));

//Log het laatst temperament van de temperamenten van de derde kat.
//  Resultaat: Sensitive

console.log(catBreeds[2].temperament.slice(0,1,2,3,4));

// Log het favoriete voedsel van de derde kat
// Resultaat: meaty things

console.log(catBreeds[2].food);
