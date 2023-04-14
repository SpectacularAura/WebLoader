const opebBBW = document.getElementById("openBtn");
const sex = document.getElementById("webURLImput");

opebBBW.onclick = function () {
  console.log("Button Clicked");

  if (!sex.value.includes("https://")) return;
  else loadURL();

  function loadURL() {
    console.log(sex.value);
    window.location.href = sex.value;
  }
};
