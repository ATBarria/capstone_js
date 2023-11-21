const project = document.querySelector("#project");
project.addEventListener("blur", (e) => {
  console.log(e.target.value, {});
});

const offer = document.querySelector("#offer");
offer.addEventListener("blur", (e) => {
  console.log(e.target.value, {});
});

const client = document.querySelector("#client");
client.addEventListener("blur", (e) => {
  console.log(e.target.value, {});
});

localStorage.setItem(project, offer, client);
