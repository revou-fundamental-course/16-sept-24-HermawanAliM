// let nama = document.getElementById("nama");
// console.log(nama);

// let input_nama = prompt("Masukkan nama anda : ")
// nama.innerText = input_nama;

// Cek apakah elemen, ada atau sudah dibuat sebelumnya
const checkElemenNama = document.getElementById("form-nama");
console.log(checkElemenNama);

const checkElemenTanggalLahir = document.getElementById("form-tanggal-lahir");
console.log(checkElemenTanggalLahir);

const checkElemenGender = document.querySelectorAll('input[name="form-gender"]');
console.log(checkElemenGender);

const checkElemenPesan = document.getElementById("form-pesan");
console.log(checkElemenPesan);

const checkElemenButtonSubmit = document.getElementById("btn-submit");
console.log(checkElemenButtonSubmit);

// Ambil nilai dari tiap form input + validasi form
const addEventButton = checkElemenButtonSubmit.addEventListener("click", function (e) {
  e.preventDefault();

  const sectionHasil = document.querySelector(".hasil");

  const getNama = checkElemenNama.value;
  console.log(getNama);

  const getTempatLahir = checkElemenTanggalLahir.value;
  console.log(getTempatLahir);

  let selectedGender = "";
  checkElemenGender.forEach(gender => {
    if (gender.checked) {
      selectedGender = gender.value;
    }
  })
  console.log(selectedGender);

  const getPesan = checkElemenPesan.value;
  console.log(getPesan);

  const {sekarang} = getHariIni();

  sectionHasil.innerHTML = `
    <p><span>Waktu saat ini : </span>${sekarang}</p>
    <p><span>Nama : </span>${getNama}</p>
    <p><span>Tanggal Lahir : </span>${getTempatLahir}</p>
    <p><span>Jenis Kelamin : </span>${selectedGender}</p>
    <p><span>Pesan : </span>${getPesan}</p>
  `;
});

function getHariIni() {
  const sekarang = new Date();
  return {sekarang}
}