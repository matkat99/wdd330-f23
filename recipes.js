const recipes = [
  {
    author: "Provo High Culinary Students",
    url: "",
    isBasedOn: "",
    cookTime: "30 Min",
    datePublished: "2016-10-16",
    tags: ["Waffles", "Sweet Potato", "Side"],
    description: "Savory waffles made with Sweet potato with a hint of Ginger",
    image:
      "https://wdd131.netlify.app/examples/recipes/images/sweet-potato-waffle.jpg",
    recipeIngredient: [
      "2 separated eggs",
      "1/4 C Oil",
      "1/4 tsp salt",
      "1/4 tsp Cayenne pepper",
      "3/4 C milk",
      "1 Tbsp Brown Sugar",
      "2 tsp Shredded Ginger",
      "3/4 C Mashed Sweet Potatoes",
      "1 Tbsp Minced Shallots",
      "1 Tbsp Baking Powder",
      "1 Tbsp Chives",
      "1/4 C Cornmeal",
      "1 C Flour"
    ],
    name: "Sweet Potato Waffles",
    prepTime: "30 Min",
    recipeInstructions: [
      "Add the egg yolks, oil, salt, cayenne, sugar, ginger, shallots, sweet potatoes (steam and mash before), and milk and mix well.",
      "Next add the cornmeal, chives, and flour and baking powder",
      "Whip the egg whites until stiff and fold in",
      "Cook until golden brown in a waffle iron. Serve with butter and Wilted Greens or Honey."
    ],
    recipeYield: "6 waffles",
    rating: 4
  },
  {
    author: "Shane Thompson",
    url: "",
    isBasedOn: "",
    cookTime: "20 min",
    datePublished: "",
    tags: ["Chicken", "Entree"],
    description:
      "Delicious quick and easy creamy rice dish. The mustard, mushrooms, and lemon all blend together wonderfully",
    image:
      "https://wdd131.netlify.app/examples/recipes/images/escalopes-de-poulet-a-la-creme.webp",
    recipeIngredient: [
      "2 Chicken Tenders, Cubed",
      "4 Mushrooms, Sliced",
      "1/2 C Whipping Cream",
      "1-2 Tbsp Stone Ground Mustard",
      "1 tsp Lemon Juice",
      "Salt and Pepper to taste",
      "1 C Rice, uncooked",
      "4-5 oz Fresh Green Beans"
    ],
    name: "Escalope de Poulet a la Creme with steamed green beans (Chicken with Cream)",
    prepTime: "10 min",
    recipeInstructions: [
      "Add 1 1/2 cups of water to a pan and bring to a boil.  Add the rice and reduce heat to low and simmer for 10-15 minutes or until all the moisture is gone.",
      "Cube chicken then cook over medium high heat in a fry pan, add the mushrooms about halfway through. (10 minutes). ",
      "Pour in cream, mustard and salt and pepper.  Stir.  On medium heat, simmer until it thickens (5 minutes)",
      "While preparing sauce: wash the beans, then trim the ends and snap (or cut) into 2in lengths.  In a sauce pan with a colander add about 1 cup water and steam the beans (10-15 minutes)",
      "Serve sauce over rice, with the Green beans on the side."
    ],
    recipeYield: "3 servings",
    rating: 4.5
  },
  {
    author: "Shane Thompson",
    url: "",
    isBasedOn: "",
    cookTime: "30 min",
    datePublished: "2018-09-19",
    tags: ["Potatoes", "side"],
    description:
      "Easy and delicious oven roasted potatoes that go great with almost anything.",
    image:
      "https://wdd131.netlify.app/examples/recipes/images/roasted-potatoes.webp",
    recipeIngredient: [
      "3-4 Medium Potatoes",
      "1 Tbsp Olive oil",
      "2 tsp Italian Seasoning",
      "1/2 tsp Salt",
      "1/2 tsp Ground Black Pepper",
      "1-2 tsp Hot Sauce (optional)"
    ],
    name: "Oven Roasted potato slices",
    prepTime: "10 min",
    recipeInstructions: [
      "Preheat oven to 400 deg F",
      "Wash and thinly slice the potatoes (I usually slice the potato in half lengthwise, then thinly slice the halves, again lengthwise)",
      "Mix together the oil, salt, pepper, Italian seasoning, and hot sauce.",
      "Toss the potatoes in the spice mixture to evenly coat then spead over a baking sheet",
      "Bake for 30 min or until the desired level of crispyness is achieved."
    ],
    recipeYield: "",
    rating: 4
  },
  {
    author: "Shane Thompson",
    url: "",
    isBasedOn: "",
    cookTime: "20 min",
    datePublished: "2018-09-19",
    tags: ["Southwest", "entree"],
    description:
      "Black beans and tomatoes served over a bed of rice. Top with cheese and scoop up with tortilla chips for maximum enjoyment.",
    image:
      "https://wdd131.netlify.app/examples/recipes/images/black-beans-and-rice.jpg",
    recipeIngredient: [
      "1 Medium Onion, diced",
      "2 Cloves Garlic, minced",
      "1 Tbsp Olive oil",
      "1 Can Black Beans (15oz)",
      "1 Can Diced Tomatoes (15oz)",
      "1/8 tsp Cayenne Pepper (optional)",
      "2 C Brown Rice (uncooked)",
      "Grated Cheese",
      "Tortilla Chips"
    ],
    name: "Black Beans and Rice",
    prepTime: "10 min",
    recipeInstructions: [
      "Add 4 cups water to a saucepan and bring to a boil. Add Rice, stir, cover, and reduce heat to low. Cook until moisture is gone. (20-30 minutes)",
      "In another saucepan heat the oil and add the diced onion and garlic. Cook until tender.",
      "Stir in the drained Black beans, Undrained tomatoes, and Cayenne.",
      "Bring to a boil, then reduce heat and simmer uncovered for 15 min.",
      "Serve over rice, topped with grated cheese and Tortilla chips."
    ],
    recipeYield: "4 servings",
    rating: 3
  },
  {
    author: "Shane Thompson",
    url: "",
    isBasedOn: "",
    cookTime: "30 min",
    datePublished: "2018-09-19",
    tags: ["chicken", "entree", "Indian"],
    description:
      "Quick and easy Chicken curry recipe made with easy to find ingredients.",
    image:
      "https://wdd131.netlify.app/examples/recipes/images/chicken-curry.webp",
    recipeIngredient: [
      "4 Slices Bacon",
      "1 clove Garlic",
      "2 Tbsp Flour",
      "1 C water",
      "1 C Milk",
      "3 Tbsp Tomato Paste",
      "1/2 C Apple Sauce",
      "3-4 tsp Curry Powder",
      "2 tsp Chicken Bouillion",
      "3/4 C Sour Cream",
      "1-2 C Chicken, cubed",
      "2 C Rice, uncooked"
    ],
    name: "Chicken Curry",
    prepTime: "10 min",
    recipeInstructions: [
      "Add 3 cups water to a saucepan and bring to a boil. Add Rice, stir, cover, and reduce heat to low. Cook until moisture is gone. (15-20 minutes)",
      "Cook bacon until crisp, drain reserving 1 Tbsp of bacon drippings, crumble bacon and set aside.",
      "Cook Chicken and Cube.",
      "Blend flour into bacon drippings then stir in the milk until the flour is well mixed. Stir in water, applesauce, tomato paste, curry, and bullion, and garlic.",
      "Bring to a boil, then reduce heat and simmer until rice is done.",
      "Before serving add crumbled bacon, chicken and stir in sour cream. Serve over rice.",
      "Can add condiments if desired: fried potatoes, raisins, toasted coconut, chutney, diced peppers, almonds, cashews."
    ],
    recipeYield: "5 servings",
    rating: 5
  },
  {
    author: "Shane Thompson",
    url: "",
    isBasedOn: "",
    cookTime: "11 min",
    datePublished: "2018-09-19",
    tags: ["dessert"],
    description: "Delicious soft chocolate cookies with coconut.",
    image:
      "https://wdd131.netlify.app/examples/recipes/images/chocolate-chip-cookies.jpg",
    recipeIngredient: [
      "1 Lb butter, softened",
      "1 C white sugar",
      "3 Eggs",
      "1 1/2 C Brown sugar",
      "1 tsp Baking soda",
      "1 tsp Vanilla extract",
      "1/4 tsp Salt",
      "5 C Flour (We like mixing 2 cups whole wheat with 3 cups white)",
      "2 C Chocolate Chips",
      "1 C Shredded Coconut"
    ],
    name: "Chocolate Chip Cookies",
    prepTime: "15 min",
    recipeInstructions: [
      "Preheat oven to 350F.",
      "Cream butter, white sugar, and eggs together.",
      "Add brown sugar, salt, baking soda, and vanilla. Mix well.",
      "Add flour, chocolate chips, and coconut. Mix well.",
      "Place on baking sheet in rows of 1-1.5 inch balls of dough.",
      "Bake for 11-12 minutes."
    ],
    recipeYield: "8 dozen",
    rating: 5
  }
];

const listEl = document.querySelector("#recipe-list");

function recipeTemplate(recipe) {
  return `<li class="recipe">
    <img
		src="${recipe.image}"
		alt="${recipe.name}"
	/>
	<div>
		<h2><a href="#">${recipe.name}</a></h2>
		<p class="recipe__ratings">
			Rating: ${recipe.rating}
		</p>
		<p class="recipe__description">${recipe.description}</p>
	</div>`;
}

function renderRecipes() {
  const html = recipes.map(recipeTemplate);
  listEl.innerHTML = html.join("");
}

renderRecipes();
