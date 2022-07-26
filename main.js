
const cards = [
    {
        "id": 1,
        "name": "Pikachu",
        "image": "https://flyclipart.com/thumb2/pokemon-pikachu-png-photo-png-arts-147628.png",
        "description": "Pikachu is an Electric type Pokemon introduced in Generation 1. It is known as the Mouse Pokemon.",
        "types": ["Electric"],
        "attacks": ["Donner", "Tackle"]
    },
    {
        "id": 2,
        "name": "Raichu",
        "image": "data:image/jpeg;base64,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",
        "description": "Its long tail serves as a ground to protect itself from its own high-voltage power.",
        "types": ["Electric"],
        "attacks": ["Donner", "Tackle"]
    },
    {
        "id": 3,
        "name": "Bulbasaur",
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
        "description": "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
        "types": ["Grass", "Poisen"],
        "attacks": ["Overgrow"]
    },
    {
        "id": 4,
        "name": "Ivysaur",
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
        "description": "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
        "types": ["Grass", "Poisen"],
        "attacks": ["Overgrow"]
    },
    {   
        "id": 5,
        "name": "Vanusaur",
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
        "description": "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
        "types": ["Grass", "Poisen"],
        "attacks": ["Overgrow"]
    },
    {
        "id": 6,
        "name": "Charmander",
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
        "description": "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
        "types": ["Fire"],
        "attacks": ["Blaze"]
    },
    {
        "id": 7,
        "name": "Charmeleon",
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
        "description": "It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.",
        "types": ["Fire"],
        "attacks": ["Blaze"]
    },
    {
        "id": 8,
        "name": "Charizard",
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
        "description": "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.",
        "types": ["Fire", "Flying"],
        "attacks": ["Blaze"]
    },
    {
        "id": 9,
        "name": "Squirtel",
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
        "description": "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
        "types": ["Water"],
        "attacks": ["Torrent"]
    },
    {
        "id": 10,
        "name": "Wartortel",
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png",
        "description": "It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.",
        "types": ["Water"],
        "attacks": ["Torrent"]
    },
    {
        "id": 11,
        "name": "Blastois",
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
        "description": "It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.",
        "types": ["Water"],
        "attacks": ["Torrent"]
    },
    {
        "id": 12,
        "name": "Snivy",
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/495.png",
        "description": "Being exposed to sunlight makes its movements swifter. It uses vines more adeptly than its hands.",
        "types": ["Grass"],
        "attacks": ["Overgrow"]
    },
    {
        "id": 13,
        "name": "Oshawott",
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/495.png",
        "description": "The scalchop on its stomach is not just used for battle—it can be used to break open hard berries as well.",
        "types": ["Water"],
        "attacks": ["Torrent"]
    },

    

]




const cardContainer = document.getElementById("card-container");
cardContainer.innerHTML = "";
cards.forEach(card => {
    const cardElement = `
    <div id="card-container">
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src="${card.image}" alt="Avatar"
                    style="width:300px;height:300px;">
            </div>
            <div class="flip-card-back">
                <h1>${card.name}</h1>
                <p>${card.description}</p>
                <p>Types: ${card.types.join(",")}</p>
                <p>Attacks: ${card.attacks.join(",")}</p>
            </div>
        </div>
    </div>
    `;
    cardContainer.innerHTML += cardElement;
});