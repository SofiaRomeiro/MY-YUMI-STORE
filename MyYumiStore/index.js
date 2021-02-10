class Recipe {
	constructor(name, type, ingredients, preparation) {
		this.name = name;
		this.type = type;
		this.ingredients = ingredients;
		this.preparation = preparation;
	}
}

const lista = [
	{
		'name': 'porco',
		'type': 'carne',
		'ingredients': [],
		'preparation': []
	},
	new Recipe('vaca', 'carne', [], [])

];

const results = lista.filter((receita) => {
	return receita.type == 'carne';
});

function add_recipe(recipe) {
	lista.push(recipe);
	console.log(lista);
};

