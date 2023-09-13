console.log(123)


const modal1 = document.querySelector('#my-modal1');
const modalBtn1 = document.querySelector('#modal-btn1');
const closeBtn1 = document.querySelector('.close1');

// Events
modalBtn1.addEventListener('click', openModal1);
closeBtn1.addEventListener('click', closeModal1);
window.addEventListener('click', outsideClick1);
// Open
function openModal1() {
  modal1.style.display = 'block';
}
// Close
function closeModal1() {
  modal1.style.display = 'none';
}
// Close If Outside Click
function outsideClick1(e) {
  if (e.target == modal) {
    modal1.style.display = 'none';
  }
}
// script.js
const produkter = [
  { id: 1, navn: "Amber Season Giftbag", pris: 274, billede: "amber-season.jpg" },
  { id: 2, navn: "Amber Caramel", pris: 82.00, billede: "amber-caramel.jpg" },
  { id: 3, navn: "Liquorice Drageé", pris: 60.00, billede: "lisquorice.jpg" },
];
const kurvVarer = [];
function tilføjTilKurv(produktId) {
  const produkt = produkter.find((p) => p.id === produktId);
  if (produkt) {
      kurvVarer.push(produkt);
      opdaterKurv();
  }
}
function opdaterKurv() {
  const kurvVarerListe = document.getElementById("kurv-varer");
  const totalPris = document.getElementById("total-pris");
  let total = 0;
  kurvVarerListe.innerHTML = "";
  kurvVarer.forEach((vare) => {
      const li = document.createElement("li");
      li.textContent = `${vare.navn} - ${vare.pris.toFixed(2)} kr.`;
      kurvVarerListe.appendChild(li);
      total += vare.pris;
  });
  totalPris.textContent = `${total.toFixed(2)} kr.`;
}
const betalingsKnap = document.getElementById("betaling-knap");
betalingsKnap.addEventListener("click", () => {
  alert("Din ordre er blevet sendt!");
  kurvVarer.length = 0; // Tøm kurven
  opdaterKurv();
});
// Generer produktliste
const produktContainer = document.querySelector(".produkt-liste");
produkter.forEach((produkt) => {
  const produktDiv = document.createElement("div");
  produktDiv.classList.add("produkt");
  produktDiv.innerHTML = `
      <h3>${produkt.navn}</h3>
      <img src="${produkt.billede}" alt="${produkt.navn}" class="produkt-billede">
      <p>Pris: ${produkt.pris.toFixed(2)} kr.</p>
      <button onclick="tilføjTilKurv(${produkt.id})">Tilføj til kurv</button>
  `;
  produktContainer.appendChild(produktDiv);
});
// Initialiser kurv
opdaterKurv();