let nama = document.getElementById("nama");
console.log(nama);

let input_nama = prompt("Masukkan nama anda : ")
nama.innerText = input_nama;

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

  if (getNama === "") {
    alert("Nama tidak boleh kosong!");
    return;
  }

  if (getTempatLahir === "") {
    alert("Tanggal lahir tidak boleh kosong!");
    return;
  }

  if (selectedGender === "") {
    alert("Jenis kelamin harus dipilih!");
    return;
  }

  if (getPesan === "") {
    alert("Pesan tidak boleh kosong!");
    return;
  }

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

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

document.getElementById('nextBtn').addEventListener('click', function() {
  slides[currentSlide].style.display = 'none';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = 'block';
});

document.getElementById('prevBtn').addEventListener('click', function() {
  slides[currentSlide].style.display = 'none';
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].style.display = 'block';
});
