const pizzaNombre = document.getElementById("pizzaNombre");
const pizzaPrecio = document.getElementById("pizzaPrice");
const pizzaIngre = document.getElementById("pizzaIngre");
const pizzaInput = document.getElementById("inputNumber");
const card = document.getElementById("card");
const button = document.getElementById("button");
const menu = {
  pizza1: {
    id: 1,
    nombre: "Muzzarela",
    ingredients: ["Queso Muzzarela", " salsa"],
    precio: "$550",
  },

  pizza2: {
    id: 2,
    nombre: "Especial",
    ingredients: ["Queso Muzzarela", " salsa", " Jamon", " Morron"],
    precio: "$700",
  },

  pizza3: {
    id: 3,
    nombre: "4 Quesos",
    ingredients: [
      "Queso Muzzarela",
      " Queso Roquefort",
      " Queso Parmesano",
      " Queso Cheddar",
      " salsa",
    ],
    precio: "$900",
  },

  pizza4: {
    id: 4,
    nombre: "Bacon",
    ingredients: ["Queso Muzzarela", " salsa", " Panceta"],
    precio: "$950",
  },

  pizza5: {
    id: 5,
    nombre: "Alemana",
    ingredients: ["Queso Muzzarela", " salsa", " Salchica Alemana", " Papas Pay"],
    precio: "$950",
  },

  pizza6: {
    id: 6,
    nombre: "Vegetariana",
    ingredients: [
      "Queso Muzzarela",
      " salsa",
      " Morrones Azados",
      " Cebolla azada",
      " Aceitunas negras",
    ],
    precio: "$800",
  },
};

function mostrarPizza() {
  if (pizzaInput.value == menu.pizza1.id) {
    pizzaNombre.textContent = menu.pizza1.nombre;
    pizzaPrecio.textContent = menu.pizza1.precio;
    pizzaIngre.textContent = menu.pizza1.ingredients;
    card.classList.remove(
      "cardPizza2",
      "cardPizza3",
      "cardPizza4",
      "cardPizza5",
      "cardPizza6"
    );
    card.classList.add("cardPizza1");
  } else if (pizzaInput.value == menu.pizza2.id) {
    pizzaNombre.textContent = menu.pizza2.nombre;
    pizzaPrecio.textContent = menu.pizza2.precio;
    pizzaIngre.textContent = menu.pizza2.ingredients;
    card.classList.remove(
      "cardPizza1",
      "cardPizza3",
      "cardPizza4",
      "cardPizza5",
      "cardPizza6"
    );
    card.classList.add("cardPizza2");
  } else if (pizzaInput.value == menu.pizza3.id) {
    pizzaNombre.textContent = menu.pizza3.nombre;
    pizzaPrecio.textContent = menu.pizza3.precio;
    pizzaIngre.textContent = menu.pizza3.ingredients;
    card.classList.remove(
      "cardPizza2",
      "cardPizza1",
      "cardPizza4",
      "cardPizza5",
      "cardPizza6"
    );
    card.classList.add("cardPizza3");
  } else if (pizzaInput.value == menu.pizza4.id) {
    pizzaNombre.textContent = menu.pizza4.nombre;
    pizzaPrecio.textContent = menu.pizza4.precio;
    pizzaIngre.textContent = menu.pizza4.ingredients;
    card.classList.remove(
      "cardPizza2",
      "cardPizza3",
      "cardPizza1",
      "cardPizza5",
      "cardPizza6"
    );
    card.classList.add("cardPizza4");
  } else if (pizzaInput.value == menu.pizza5.id) {
    pizzaNombre.textContent = menu.pizza5.nombre;
    pizzaPrecio.textContent = menu.pizza5.precio;
    pizzaIngre.textContent = menu.pizza5.ingredients;
    card.classList.remove(
      "cardPizza2",
      "cardPizza3",
      "cardPizza4",
      "cardPizza1",
      "cardPizza6"
    );
    card.classList.add("cardPizza5");
  } else if (pizzaInput.value == menu.pizza6.id) {
    pizzaNombre.textContent = menu.pizza6.nombre;
    pizzaPrecio.textContent = menu.pizza6.precio;
    pizzaIngre.textContent = menu.pizza6.ingredients;
    card.classList.remove(
      "cardPizza2",
      "cardPizza3",
      "cardPizza4",
      "cardPizza5",
      "cardPizza1"
    );
    card.classList.add("cardPizza6");
  } else {
    card.classList.remove(
      "cardPizza2",
      "cardPizza3",
      "cardPizza4",
      "cardPizza5",
      "cardPizza6",
      "cardPizza1"
    );
    pizzaNombre.textContent = "ID invalido";
    pizzaPrecio.textContent = "";
    pizzaIngre.textContent = "";

  }
}

button.addEventListener("click", mostrarPizza, true);
