// ===========================================
// SISTEM ABSENSI KARYAWAN - PT MAJU JAYA
// ==============================
// =============


// ===========================================
// STORAGE
// ===========================================

const STORAGE_KEY = "absensiData";


// Ambil data dari localStorage
let dataAbsensi =
    JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];


// ===========================================
// AMBIL ELEMENT HTML
// ===========================================

const formAbsensi =
    document.getElementById("formAbsensi");

const tbodyAbsensi =
    document.getElementById("tbodyAbsensi");

const emptyState =
    document.getElementById("emptyState");


// ===========================================
// SIMPAN DATA KE LOCAL STORAGE
// ===========================================

function simpanKeStorage() {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(dataAbsensi)
    );

}


// ===========================================
// MENDAPATKAN CLASS STATUS
// ===========================================

function getStatusClass(status) {

    const map = {
        Hadir: "status-hadir",
        Izin: "status-izin",
        Sakit: "status-sakit",
        Alpa: "status-alpa"
    };

    return map[status] || "";

}


// ===========================================
// MENAMPILKAN DATA KE TABEL
// ===========================================

function renderTabel() {

    // Kosongkan tabel terlebih dahulu
    tbodyAbsensi.innerHTML = "";


    // Jika tidak ada data
    if (dataAbsensi.length === 0) {

        emptyState.style.display = "block";

        return;
    }


    // Sembunyikan pesan kosong
    emptyState.style.display = "none";


    // Tampilkan semua data
    dataAbsensi.forEach(function (item, index) {

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
                    type="button"
                    class="btn-hapus"
                    onclick="hapusData(${index})"
                >
                    Hapus
                </button>
            </td>
        `;


        tbodyAbsensi.appendChild(tr);

    });

}


// ===========================================
// TAMBAH DATA ABSENSI
// ===========================================

formAbsensi.addEventListener(
    "submit",
    function (e) {

        e.preventDefault();

//tugas kamu disini


        // Ambil data dari form
        const nama =
            document.getElementById("nama").value.trim();

        const tanggal =
            document.getElementById("tanggal").value;

        const status =
            document.getElementById("status").value;


        // Validasi
        if (!nama || !tanggal || !status) {

            alert("Semua field wajib diisi!");

            return;
        }


        // Masukkan data ke array
        dataAbsensi.push({
            nama: nama,
            tanggal: tanggal,
            status: status
        });


        // Simpan ke localStorage
        simpanKeStorage();


        // Perbarui tabel
        renderTabel();


        // Kosongkan form
        formAbsensi.reset();

    }
);


// ===========================================
// HAPUS DATA ABSENSI
// ===========================================

function hapusData(index) {

}


// ===========================================
// TAMPILKAN DATA SAAT HALAMAN DIBUKA
// ===========================================

renderTabel();