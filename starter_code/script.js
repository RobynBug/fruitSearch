const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruit = [
  "Apple",
  "Apricot",
  "Avocado",
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
  clearList();
  if (str.length > 0) {
    let results = fruit.filter((item) =>
      item.toLowerCase().includes(str.toLowerCase())
    );
    return results;
  } else {
    return [];
  }
}

function searchHandler(e) {
  clearList();
  const value = e.target.value;
  const itemsList = search(value);
  showSuggestions(itemsList, value);
}

function showSuggestions(results, inputVal) {
  clearList();

  results.forEach((item) => {
    let indexPosition = item.toLowerCase().indexOf(inputVal.toLowerCase());
    const before = item.substring(0, indexPosition);
    const matched = item.substring(
      indexPosition,
      indexPosition + inputVal.length
    );
    const after = item.substring(indexPosition + inputVal.length);
    const boldText = `${before}<strong>${matched}</strong>${after}`;
    const newLi = document.createElement("li");
    newLi.innerHTML = boldText;
    suggestions.classList.add("has-suggestions");
    suggestions.appendChild(newLi);
  });
}

function useSuggestion(e) {
  input.value = e.target.innerText;
  clearList();
}

const clearList = () => {
  suggestions.innerHTML = "";
  suggestions.classList.remove("has-suggestions");
};

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
