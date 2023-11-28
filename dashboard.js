const createNewOffer = document.querySelector(".new-offer");

// createNewOffer.addEventListener("click", (e) => {
//   console.log("Button was clicked");
// });
const btn = document.querySelector(".new-offer");
btn.addEventListener("click", (e) => {
  window.location.assign("proInformation.html");
});
// function visitPage() {
//   window.location.assign("proTeam.html");
// }
// below go get the info
let storedData = localStorage.getItem("formData");
let displayElement = document.getElementById("display-data");

// to create the new element
let projects = JSON.parse(storedData);
if (storedData === null) {
  displayElement.style.display = "none";
} else {
  projects.forEach((project) => {
    const createCard = document.createElement("div");
    createCard.classList.add("cart");

    const createInElement = document.createElement("div");
    createInElement.classList.add("cart-content");

    createCard.appendChild(createInElement);

    createInElement.innerHTML = `
    <h4>${project.name}  </h4>
<div>

  <span> Client</span>  <p>${project.client}</p>    
  
  </div>
  <div>
  <span>Team</span> <p></p>
  </div>
  <div class="cart-footer">
              <div class="approved">
                <img src="/images/Pending.svg" alt="pending icon" />
                <span>Approved</span>
              </div>
              <img src="/images/Delete.svg" alt="delete icon" />
              <button class="removeCard">delete</button>
            </div>`;
    displayElement.append(createCard);
  });
}
//this work well but only for the newly created card
/* let removeBtn = document.getElementById("removeCard");
let removeCard = document.getElementById("display-data");
removeBtn.addEventListener("click", function () {
  removeCard.remove();
}); */

// trying with chat gpt

// Add a click event listener to the parent container
displayElement.addEventListener("click", function (event) {
  // Check if the clicked element is the delete button
  if (event.target.classList.contains("removeCard")) {
    // Find the parent card and remove it
    const cardToRemove = event.target.closest(".cart");
    if (cardToRemove) {
      cardToRemove.remove();
    }
  }
});

// Add a click event listener to the existing delete buttons
document.querySelectorAll(".removeCard").forEach(function (button) {
  button.addEventListener("click", function () {
    // Find the parent card and remove it
    const cardToRemove = button.closest(".cart");
    if (cardToRemove) {
      cardToRemove.remove();
    }
  });
});

/* let removeOldCards = document.querySelector("cart");
removeBtn.addEventListener("click", function () {
  removeOldCards.remove();
}); */

// code below works. it was a first try

/* let projects = JSON.parse(storedData);
if (storedData === null) {
  displayElement.style.display = "none";
} else {
  projects.forEach((project) => {
    const createElement = document.createElement("div");
    createElement.classList.add("cart");
    const createInElement = document.createElement("div");
    createInElement.classList.add("cart-content");

    createElement.appendChild(createInElement);

    createInElement.innerHTML = `
    <h4>${project.name}  </h4>
<div>

  <span> Client</span>  <p>${project.client}</p>    
  
  </div>
  <div>
  <span>Team</span> <p></p>
  </div>`;
    displayElement.append(createElement);
  });
} */
