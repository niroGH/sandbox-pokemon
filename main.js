
const cards = [
    {
        "id": 1,
        "name": "Pikachu",
        "image": "https://flyclipart.com/thumb2/pokemon-pikachu-png-photo-png-arts-147628.png",
        "description": "Pikachu is an Electric type Pokemon introduced in Generation 1. It is known as the Mouse Pokemon.",
        "types": ["Electric"],
        "attacks": ["Donner", "Tackle"]
    }
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