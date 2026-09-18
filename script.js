const STORAGE_KEY = "absensiData";

let dataAbsensi = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

const formAbsensi = document.getElementById("formAbsensi");
const tbodyAbsensi = document.getElementById("tbodyAbsensi");
const emptyState = document.getElementById("emptyState");


// SIMPAN DATA
function simpanKeStorage() {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(dataAbsensi)
    );

    console.log("Data berhasil disimpan:", dataAbsensi);
}


// TENTUKAN WARNA STATUS
function getStatusClass(status) {
    const map = {
        Hadir: "status-hadir",
        Izin: "status-izin",
        Sakit: "status-sakit",
        Alpa: "status-alpa"
    };

    return map[status] || "";
}


// TAMPILKAN DATA
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

            <td>
                <span class="status-badge ${getStatusClass(item.status)}">
                    ${item.status}
                </span>
            </td>

            <td>
                <button
                    class="btn-hapus"
                    onclick="hapusData(${index})">
                    Hapus
                </button>
            </td>
        `;

        tbodyAbsensi.appendChild(tr);
    });
}


// TAMBAH DATA
formAbsensi.addEventListener("submit", function(e) {

    e.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const tanggal = document.getElementById("tanggal").value;
    const status = document.getElementById("status").value;

    if (nama === "" || tanggal === "" || status === "") {
        alert("Semua field wajib diisi!");
        return;
    }

    dataAbsensi.push({
        nama: nama,
        tanggal: tanggal,
        status: status
    });

    // Simpan
    simpanKeStorage();

    // Tampilkan
    renderTabel();

    // Kosongkan form
    formAbsensi.reset();
});

//tugas kamu disini


// HAPUS DATA
function hapusData(index) {
}


// Jalankan saat halaman dibuka
renderTabel();