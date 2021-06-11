// on load

let items = [];

function generateListItem(item) {
  const listItem = document.createElement("li");
  const image = document.createElement("img");
  image.src = item.image;
  const name = document.createElement("h2");
  name.append(item.name);
  const paragraph = document.createElement("p");
  paragraph.append(item.description);
  const price = document.createElement("span");
  price.append("$" + item.price);
  const button = document.createElement("button");
  button.append("Add to Cart");

  listItem.append(image);
  listItem.append(name);
  listItem.append(paragraph);
  listItem.append(price);
  listItem.append(button);

  const itemsList = document.querySelector(".items");
  itemsList.append(listItem);
}

async function loadItems() {
  const response = await axios.get("http://localhost:3100/items");
  items = response.data;
  for (let item of items) {
    generateListItem(item);
  }
}

loadItems();

// event handlers

const button = document.querySelector("#signup-button");

function handleClick(event) {
  event.preventDefault();
  console.log("Button clicked!");
  //   button.setAttribute("disabled", true);
  console.log(button.disabled);
  button.innerHTML = "Sign Out";
}

button.addEventListener("click", handleClick);
