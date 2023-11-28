// const project = document.querySelector("#project");
// project.addEventListener("click", );

// const offer = document.querySelector("#offer");
// offer.addEventListener("blur", (e) => {
//   console.log(e.target.value, {});
// });

// const client = document.querySelector("#client");
// client.addEventListener("blur", (e) => {
//   console.log(e.target.value, {});
// });

// localStorage.setItem(project, offer, client);

// code with gtp

// document.getElementById("project").addEventListener("keyup", function (event) {
//   // Check if the key pressed is "Enter" (key code 13)
//   if (event.key === "Enter") {
//     saveData();
//   }
// });

// document.getElementById("offer").addEventListener("keyup", function (event) {
//   // Check if the key pressed is "Enter" (key code 13)
//   if (event.key === "Enter") {
//     saveData();
//   }
// });

// function saveData() {
//   let inputData = document.getElementById("registration-form").value;

//   if (inputData.trim() !== "") {
//     localStorage.setItem("userData", inputData);
//     alert("Data saved successfully!");
//   } else {
//     alert("Please enter data before saving.");
//   }
// }
// trying to gather all the values

document
  .getElementById("registration-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const projectName = document.getElementById("project").value;
    const offerName = document.getElementById("offer").value;
    const clientName = document.getElementById("client").value;
    const contactPerson = document.getElementById("person-name").value;
    const eMail = document.getElementById("email").value;
    const street = document.getElementById("street").value;
    const city = document.getElementById("city").value;
    const postal = document.getElementById("postal").value;
    const projectDescription = document.getElementById(
      "project-description"
    ).value;

    const formData = {
      name: projectName,
      offer: offerName,
      client: clientName,
      contactPerson: contactPerson,
      email: eMail,
      street: street,
      city: city,
      postalCode: postal,
      description: projectDescription,
    };

    console.log(formData);

    saveFormData(formData);
    window.location.href = "index.html";
  });

function saveFormData(formData) {
  const storedFormData = JSON.parse(localStorage.getItem("formData")) || [];

  storedFormData.push(formData);

  localStorage.setItem("formData", JSON.stringify(storedFormData));
}

// const btnNext = document.querySelector(".arrow-next");
// btnNext.addEventListener("click", (e) => {
//   window.location.assign("proCost.html");
// });
