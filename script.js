// ===========================================
// SISTEM ABSENSI KARYAWAN - PT MAJU JAYA
// ===========================================

// Key untuk menyimpan data di localStorage browser
const STORAGE_KEY = "absensiData";

// Ambil data yang sudah tersimpan, atau mulai dengan array kosong
let dataAbsensi = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

// Ambil elemen-elemen yang dibutuhkan dari HTML
const formAbsensi = document.getElementById("formAbsensi");
const tbodyAbsensi = document.getElementById("tbodyAbsensi");
const emptyState = document.getElementById("emptyState");

// Simpan data ke localStorage supaya tidak hilang saat refresh
function simpanKeStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataAbsensi));
}

// Tampilkan class badge warna sesuai status kehadiran
function getStatusClass(status) {
  const map = {
    Hadir: "status-hadir",
    Izin: "status-izin",
    Sakit: "status-sakit",
    Alpa: "status-alpa"
  };
  return map[status] || "";
}

// Render/tampilkan ulang seluruh data absensi ke dalam tabel
function renderTabel() {
  tbodyAbsensi.innerHTML = "";

  if (dataAbsensi.length === 0) {
    emptyState.style.display = "block";
    return;
  }
  emptyState.style.display = "none";

  dataAbsensi.forEach((item, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.nama}</td>
      <td>${item.tanggal}</td>
      <td><span class="status-badge ${getStatusClass(item.status)}">${item.status}</span></td>
      <td><button class="btn-hapus" onclick="hapusData(${index})">Hapus</button></td>
    `;
    tbodyAbsensi.appendChild(tr);
  });
}

// Saat form disubmit: ambil input, validasi sederhana, simpan data baru
formAbsensi.addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const tanggal = document.getElementById("tanggal").value;
  const status = document.getElementById("status").value;

  if (!nama || !tanggal || !status) {
    alert("Semua field wajib diisi!");
    return;
  }

  dataAbsensi.push({ nama, tanggal, status });
  simpanKeStorage();
  renderTabel();
  formAbsensi.reset();
});


function hapusData(index) {
  dataAbsensi.splice(index, 1);
  simpanKeStorage();
}

// Render tabel pertama kali saat halaman dibuka
renderTabel();
