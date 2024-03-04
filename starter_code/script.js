const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

function search(str) {
  let results = [];

  // TODO
  if(str.length > 0) {
	  results.push(
    fruit.filter((item) => item.toLowerCase().includes(str.toLowerCase()))
	
  );
  return results;
  }

}

function searchHandler(e) {
  // TODO
  clearList();
  let value = e.target.value;
  const itemsArray = search(value);
  const choices = [];
  itemsArray.forEach((item) => {
    for (let i = 0; i < item.length; i++) {
		if(!choices.includes(item[i])) {
      choices.push(item[i]);
    }
}
  });
  showSuggestions(choices, value = "");
}

function showSuggestions(results, inputVal) {
  // TODO

  results.forEach((item) => {
    let newLi = document.createElement("li");
    newLi.innerHTML = item;
    suggestions.appendChild(newLi);
  });
  
}

function useSuggestion(e) {
  // TODO
  input.value = e.target.innerHTML;
  clearList();
}

const clearList = () => {
	suggestions.innerHTML = '';
}


input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
