console.log("Sudah siap");

const base_api = "https://api.genderize.io";

function tunjukinHasil(name, gender, probability) {
  const prediksi = document.getElementById("prediksi");
  const persen = probability * 100;
  let genderBaru;
  if (gender == "male") {
    genderBaru = "cowo";
  } else {
    genderBaru = "cewe";
  }

  const text = `Hai ${name}, jenis kelamin kamu kemungkinan adalah ${genderBaru} sebesar ${persen}% `;
  prediksi.textContent = text;
}

async function prediksi(event) {
  if (event.key == "Enter") {
    const namaDepan = event.target.value;
    const linkQuery = `${base_api}/?name=${namaDepan}&country_id=ID`;

    const respons = await fetch(linkQuery);
    const hasil = await respons.json();
    tunjukinHasil(hasil.name, hasil.gender, hasil.probability);
  }
}

const input = document.getElementById("input");

input.addEventListener("input", function () {
  const prediksi = document.getElementById("prediksi");
  if (this.value.trim() === "") {
    prediksi.textContent = "";
  }
});
