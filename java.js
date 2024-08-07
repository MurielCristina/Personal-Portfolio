function cvAlertENG(event) {
  event.preventDefault;
  alert("This feature is not ready yet, sorry for the inconvinence.");
}
let engAlert = document.querySelector("#cv-eng");
engAlert.addEventListener("click", cvAlertENG);

function cvAlertESP(event) {
  event.preventDefault;
  alert("Esta funcionalidad aun no está disponible, disculpe las molestias.");
}
let espAlert = document.querySelector("#cv-esp");
espAlert.addEventListener("click", cvAlertESP);
