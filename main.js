function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML = 
  createCard(
      "24/11",
      "Thursday",
      createGame("uruguay", "13:00", "south-korea") +
        createGame("portugal", "16:00", "ghana")
    ) +
   createCard(
      "28/11",
      "Monday",
      createGame("south-korea", "13:00", "ghana") +
        createGame("portugal", "19:00", "uruguay")
    ) +
    createCard(
      "02/12",
      "Friday",
      createGame("south-korea", "15:00", "portugal") +
        createGame("ghana", "15:00", "uruguay")
    )

