# 📋 Studi Kasus: Hari Pertama di PT Maju Jaya

## 📖 Daftar Isi

1. [Latar Belakang](#-latar-belakang)
2. [Tentang Aplikasi](#-tentang-aplikasi)
3. [Alur Pengerjaan](#-alur-pengerjaan)
   - [Langkah 1: Fork & Clone](#langkah-1-fork--clone)
   - [Langkah 2: Deploy ke GitHub Pages](#langkah-2-deploy-ke-github-pages)
   - [Langkah 3: Buat Branch Kerja](#langkah-3-buat-branch-kerja)
   - [Langkah 4: Kerjakan Tugas](#langkah-4-kerjakan-tugas)
   - [Langkah 5: Kirim Hasil Kerja](#langkah-5-kirim-hasil-kerja)
4. [Checklist Sebelum Submit](#-checklist-sebelum-submit)

---

## 🎬 Latar Belakang

Selamat! Kamu baru saja diterima sebagai **Junior Frontend Developer** di **PT Maju Jaya**, sebuah perusahaan yang sedang mengembangkan sistem internal untuk operasional kantor.

Di hari pertama kerja, kamu diperkenalkan dengan **Fikri**, seorang **Lead Software Engineer** di tim kamu. Fikri akan menjadi orang yang me-review setiap pekerjaan yang kamu kirim sebelum masuk ke sistem utama perusahaan.

> **Fikri:** "Selamat datang di tim! Hari ini kita mulai dari project kecil dulu ya — sistem absensi karyawan yang lagi kita kembangkan. Base code-nya udah aku siapin, kamu tinggal lanjutin salah satu bagian yang masih kurang. Tapi sebelum ngoding, ada beberapa SOP tim yang wajib kamu ikutin. Aku jelasin dulu ya."

---

## 🖥️ Tentang Aplikasi

Sistem yang akan kamu kerjakan adalah **Sistem Absensi Karyawan**. Fitur yang sudah tersedia di base code:

| Fitur | Deskripsi |
|---|---|
| **Input data absensi** | Form untuk mencatat nama karyawan, tanggal, dan status kehadiran (Hadir / Izin / Sakit / Alpa) |
| **Validasi form** | Semua field wajib diisi sebelum data bisa disimpan |
| **Penyimpanan data** | Data absensi otomatis tersimpan di `localStorage`, sehingga tidak hilang saat halaman di-refresh |
| **Tampilan tabel** | Seluruh data absensi ditampilkan dalam tabel dengan badge warna berbeda untuk tiap status |

> 💡 **Sebelum lanjut:** jalankan aplikasinya dengan membuka `index.html` langsung di browser, lalu coba input beberapa data untuk memastikan kamu paham cara kerjanya.

---

## 🚀 Alur Pengerjaan

### Langkah 1: Fork & Clone

Ambil salinan project ke akun dan komputer kamu sendiri:

1. **Fork** repository ini ke akun GitHub kamu (klik tombol **Fork** di pojok kanan atas halaman repo)
2. **Clone** hasil fork tersebut ke komputer kamu:
   ```bash
   git clone https://github.com/USERNAME-KAMU/NAMA-REPO.git
   cd NAMA-REPO
   ```

> ⚠️ **Penting:** clone dari **fork kamu sendiri**, bukan dari repo utama perusahaan. Kalau kerjaan kamu sudah oke, baru akan digabungkan ke repo utama.

---

### Langkah 2: Deploy ke GitHub Pages

Sebelum menyentuh kode sama sekali, pastikan dulu aplikasi yang ada saat ini bisa live dan diakses secara online:

1. Masuk ke repo hasil fork kamu di GitHub
2. Buka **Settings > Pages**
3. Pilih **Source: Deploy from a branch**, branch **`main`**, folder **`/ (root)`**, lalu klik **Save**
4. Tunggu 1–2 menit sampai muncul link live-nya (formatnya `https://username-kamu.github.io/nama-repo/`)
5. Buka link tersebut dan pastikan aplikasi tampil serta berjalan dengan normal

> **Fikri:** "Link ini nanti jadi 'wajah' tim kita ke luar. Siapapun yang buka link ini harus lihat aplikasi yang jalan dengan baik, gak boleh ada tampilan error atau blank page."

---

### Langkah 3: Buat Branch Kerja

Ini bagian paling krusial dari SOP tim PT Maju Jaya — **branch `main` harus selalu aman**.

> **Fikri:** "Karena branch `main` itu otomatis ke-deploy jadi website live yang tadi kamu buka, maka branch `main` **HARUS SELALU** dalam kondisi bisa jalan tanpa error. Kalau kamu ngoding dan nge-push langsung ke `main`, terus ternyata kodenya error, bukan cuma kamu yang kena masalah — seluruh tim yang buka link live bakal lihat aplikasi rusak. Makanya, kita gak pernah ngoding langsung di branch `main`. Semua perubahan wajib dikerjakan di branch terpisah dulu, baru digabungkan ke `main` kalau sudah benar-benar siap."

Sebelum mulai ngoding, buat branch baru:

```bash
git checkout -b feature/hapus-data
```

---

### Langkah 4: Kerjakan Tugas

Sistem absensi ini sudah punya tombol **Hapus** di setiap baris tabel, tapi fungsinya belum bekerja. Lengkapi fungsi `hapusData()` di file `script.js` supaya:

1. ✅ Data absensi pada baris yang diklik terhapus dari daftar
2. ✅ Perubahan tersimpan permanen (tidak muncul lagi setelah halaman di-refresh)
3. ✅ Tabel di layar langsung ter-update setelah data dihapus

> 💡 Petunjuk lengkap sudah tersedia dalam bentuk komentar di dalam `script.js`, tepat di atas fungsi `hapusData()`.

**Kerjakan secara bertahap** — setiap progress kecil yang selesai wajib di-commit dengan pesan yang jelas. Contoh pembagian tahapan:

| Tahap | Yang Dikerjakan | Contoh Commit Message |
|---|---|---|
| 1 | Menghapus data dari array `dataAbsensi` | `feat: hapus data absensi dari array berdasarkan index` |
| 2 | Menyimpan perubahan ke `localStorage` | `feat: simpan perubahan data absensi setelah dihapus` |
| 3 | Merender ulang tabel setelah data dihapus | `feat: perbarui tampilan tabel setelah data dihapus` |

**Aturan penulisan commit message:**

| ❌ Hindari | ✅ Gunakan |
|---|---|
| `update` | `feat: hapus data absensi dari array berdasarkan index` |
| `fix` | `feat: simpan perubahan data absensi setelah dihapus` |
| `asdsad` | `feat: perbarui tampilan tabel setelah data dihapus` |

Pesan commit yang baik menjelaskan **apa** yang berubah, bukan sekadar menandai bahwa ada perubahan.

---

### Langkah 5: Kirim Hasil Kerja

Setelah fitur selesai dan sudah kamu tes langsung di browser (pastikan **tidak ada error sama sekali**):

1. Push branch kerjamu ke fork kamu:
   ```bash
   git push origin feature/hapus-data
   ```
2. Pastikan aplikasi di link GitHub Pages kamu tetap berjalan normal
3. Kirim **link fork** dan **link GitHub Pages** kamu ke Fikri untuk direview

---

## ✅ Checklist Sebelum Submit

- [ ] Sudah fork dan clone repo dengan benar
- [ ] Aplikasi berhasil di-deploy dan bisa diakses lewat GitHub Pages
- [ ] Mengerjakan fitur di branch terpisah, **bukan** langsung di `main`
- [ ] Fitur hapus data sudah berfungsi dan sudah dites di browser
- [ ] Minimal ada 3 commit dengan pesan yang jelas dan menjelaskan perubahan
- [ ] Branch `main` tidak tersentuh sama sekali oleh perubahan kode

---

Selamat mengerjakan, Good Luck! 🚀