import React, { useEffect } from "react";
import satuimg from "./assets/Intern/satu.jpeg";
import duaimg from "./assets/Intern/dua.jpeg";
import tigaimg from "./assets/Intern/tiga.jpeg";
import empatimg from "./assets/Intern/empat.jpeg";
import limaimg from "./assets/Intern/lima.jpeg";
import enamimg from "./assets/Intern/enam.jpeg";
import tujuhimg from "./assets/Intern/tujuh.jpeg";
import delapanimg from "./assets/Intern/delapan.jpeg";
import sembilanimg from "./assets/Intern/sembilan.jpeg";
import sepuluhimg from "./assets/Intern/sepuluh.jpeg";
import sebelasimg from "./assets/Intern/sebelas.jpeg";
import duabelasimg from "./assets/Intern/duabelas.jpeg";


import {
  ArrowLeft,
  Code2,
  ExternalLink,
  Database,
  Layers,
  Target,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  BarChart3,
  CalendarDays,
  ChevronRight,
  Sparkles,
} from "lucide-react";

/* =========================================================
   GOOGLE FONTS
========================================================= */
function useGoogleFonts() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    const id = "portfolio-fonts";

    if (document.getElementById(id)) return;

    const link = document.createElement("link");

    link.id = id;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600&display=swap";

    document.head.appendChild(link);
  }, []);
}

/* =========================================================
   REUSABLE CONTAINER
========================================================= */

function Container({ children, className = "" }) {
  return (
    <div
      className={`mx-auto w-full max-w-295 px-6 sm:px-8 lg:px-12 ${className}`}
    >
      {children}
    </div>
  );
}

/* =========================================================
   SECTION LABEL
========================================================= */

function SectionLabel({ n, title, sub }) {
  return (
    <div className="mb-12">
      <div className="mb-4 flex items-center gap-3">
        <span className="font-mono text-xs font-semibold tracking-[0.25em] text-amber-500">
          {n}
        </span>

        <span className="h-px w-12 bg-amber-500/50" />

        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
          Project Detail
        </span>
      </div>

      <h2 className="max-w-3xl font-['Space_Grotesk'] text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
        {title}
      </h2>

      {sub && (
        <p className="mt-4 max-w-2xl font-['IBM_Plex_Sans'] text-sm leading-7 text-slate-400">
          {sub}
        </p>
      )}
    </div>
  );
}

/* =========================================================
   STAT CARD
========================================================= */

function StatCard({ icon, value, label }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/30 hover:bg-white/5.5 hover:shadow-2xl hover:shadow-black/20">
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-amber-500/5 blur-2xl transition-all duration-300 group-hover:bg-amber-500/10" />

      <div className="relative">
        <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10 text-amber-400">
          {icon}
        </div>

        <div className="font-['Space_Grotesk'] text-4xl font-bold tracking-tight text-white">
          {value}
        </div>

        <p className="mt-2 max-w-47.5 font-['IBM_Plex_Sans'] text-xs leading-5 text-slate-500">
          {label}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   TIMELINE ITEM
========================================================= */

function TimelineItem({ n, title, desc, last }) {
  return (
    <div className="group relative flex gap-6 pb-10 last:pb-0">
      {!last && (
        <div className="absolute left-4.25 top-10 h-[calc(100%-10px)] w-px bg-linear-to-b from-amber-500/40 to-white/5" />
      )}

      <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-amber-500/30 bg-slate-950 font-mono text-xs font-semibold text-amber-400 transition-all duration-300 group-hover:border-amber-400 group-hover:bg-amber-500/10 group-hover:shadow-lg group-hover:shadow-amber-500/10">
        {n}
      </div>

      <div className="pt-0.5">
        <h4 className="font-['Space_Grotesk'] text-lg font-semibold text-slate-100">
          {title}
        </h4>

        <p className="mt-2 max-w-2xl font-['IBM_Plex_Sans'] text-sm leading-7 text-slate-400">
          {desc}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   METRIC CARD
========================================================= */

function MetricCard({ label, value, unit, description, icon }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-white/6 to-white/2 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/30">
      <div className="absolute right-0 top-0 h-28 w-28 translate-x-1/3 -translate-y-1/3 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="relative">
        <div className="mb-5 flex items-center justify-between">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            {label}
          </span>

          <div className="text-amber-400">{icon}</div>
        </div>

        <div className="flex items-end gap-2">
          <span className="font-['Space_Grotesk'] text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {value}
          </span>

          {unit && (
            <span className="mb-1 font-mono text-sm text-amber-400">
              {unit}
            </span>
          )}
        </div>

        {description && (
          <p className="mt-3 font-['IBM_Plex_Sans'] text-xs leading-5 text-slate-500">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

/* =========================================================
   FEATURE CARD
========================================================= */

function FeatureItem({ title, desc, src, number }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/3 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/30 hover:bg-white/5">
      <div className="relative overflow-hidden border-b border-white/10 bg-slate-900">
        <div className="absolute left-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-slate-950/80 font-mono text-[10px] font-semibold text-amber-400 backdrop-blur">
          {number}
        </div>

        <img
          src={src}
          alt={title}
          className="mx-auto block h-auto max-h-155 w-auto max-w-full object-contain opacity-90 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-100"
        />

        <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-slate-950/80 to-transparent" />
      </div>

      <div className="p-6">
        <div className="mb-3 flex items-center justify-between gap-4">
          <h4 className="font-['Space_Grotesk'] text-lg font-semibold text-slate-100">
            {title}
          </h4>

          <ChevronRight
            size={17}
            className="shrink-0 text-slate-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-amber-400"
          />
        </div>

        <p className="font-['IBM_Plex_Sans'] text-sm leading-6 text-slate-400">
          {desc}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   STACK BADGE
========================================================= */

function StackChip({ name }) {
  return (
    <div className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2.5 font-['IBM_Plex_Sans'] text-xs font-medium text-slate-300 transition-all duration-300 hover:border-amber-500/30 hover:bg-amber-500/[0.07] hover:text-amber-300">
      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 transition-transform duration-300 group-hover:scale-125" />

      {name}
    </div>
  );
}

/* =========================================================
   BACKGROUND GRID
========================================================= */

function BackgroundGrid() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 opacity-[0.025]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
        backgroundSize: "50px 50px",
      }}
    />
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function SkripsiDetail({ onBack }) {
  useGoogleFonts();

  const stack = [
    "Dart",
    "Flutter",
    "SQLite",
    "SQL",
    "Android",
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#080b10] text-slate-100">
      <BackgroundGrid />

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <nav className="sticky top-0 z-50 border-b border-white/6 bg-[#080b10]/85 backdrop-blur-xl">
        <Container className="flex h-16 items-center">
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2 font-['IBM_Plex_Sans'] text-[11px] font-semibold tracking-[0.12em] text-slate-500 transition hover:text-amber-400"
          >
            <ArrowLeft
              size={14}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

            <span>KEMBALI KE PORTOFOLIO</span>
          </button>
        </Container>
      </nav>

      {/* =====================================================
          HERO
      ===================================================== */}

      <header className="relative border-b border-white/6">
        <div className="absolute left-1/2 top-0 h-125 w-200 -translate-x-1/2 -translate-y-1/3 rounded-full bg-amber-500/[0.035] blur-[120px]" />

        <Container className="relative pb-20 pt-14 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20">
          <div className="max-w-225">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/[0.07] px-3 py-1.5 font-mono text-[10px] font-semibold tracking-[0.18em] text-amber-400">
                <Sparkles size={12} />
                MAGANG
              </span>

              <span className="font-mono text-[11px] text-slate-600">
                /
              </span>

              <span className="font-mono text-[11px] tracking-[0.15em] text-slate-500">
                2025
              </span>
            </div>

            <h1 className="font-['Space_Grotesk'] text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-white sm:text-5xl lg:text-7xl">
              Sistem Informasi Gudang
              <br />

              <span className="text-slate-400">
                Dengan Rekomendasi Kendaraan
              </span>

              <span className="text-amber-400">.</span>
            </h1>

            <div className="mt-5 flex items-center gap-3">
              <span className="h-px w-8 bg-amber-500" />

              <span className="font-['IBM_Plex_Sans'] text-sm font-medium text-slate-400">
                PT Honoris Industry
              </span>
            </div>

            <p className="mt-6 max-w-3xl font-['IBM_Plex_Sans'] text-base leading-8 text-slate-400 sm:text-lg">
              Aplikasi Android berbasis Flutter berfokus pada pengembangan Sistem Informasi Gudang Berbasis Mobile menggunakan
              framework Flutter dan basis data SQLite untuk mengatasi kendala pengelolaan gudang manual.{" "}
              Menggunakan metode pengembangan Waterfall yang mencakup analisis kebutuhan, perancangan sistem (DFD, ERD, UI/UX),
              implementasi, hingga pengujian (black box dan white box), penelitian ini berhasil menghasilkan aplikasi mobile dengan 
              fitur pencarian kode barang secara instan, kalkulasi otomatis untuk total volume kubikasi dan berat barang, serta 
              sistem rekomendasi jenis kendaraan pengangkut yang akurat.{" "}
              <strong className="font-semibold text-slate-200">
                Software Development Life Cycle (SDLC) Waterfall
              </strong>{" "}
              sebagai metode pengembangan aplikasi berbasis mobile.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://drive.google.com/file/d/1ZUZAXVALwNDrC4895x8xuQO3ypjuXuOw/view?usp=drivesdk"
                className="group inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-3 font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-xl hover:shadow-amber-500/10"
              >
                <ExternalLink size={15} />
                LIHAT DEMO
              </a>

              <a
                href="https://github.com/BayuSetiawanv/kubikasi_app"
                className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-5 py-3 font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/6 hover:text-white"
              >
                <Code2 size={15} />
                SOURCE CODE
              </a>
            </div>
          </div>

          {/* HERO METADATA */}

          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-4">
            <div className="bg-[#0b0f15] p-5">
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">
                Frond End
              </span>

              <p className="mt-2 font-['Space_Grotesk'] text-sm font-semibold text-slate-200">
                Flutter (dart)
              </p>
            </div>

            <div className="bg-[#0b0f15] p-5">
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">
                DataBase
              </span>

              <p className="mt-2 font-['Space_Grotesk'] text-sm font-semibold text-slate-200">
                SQlite
              </p>
            </div>

            <div className="bg-[#0b0f15] p-5">
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">
                Metodologi
              </span>

              <p className="mt-2 font-['Space_Grotesk'] text-sm font-semibold text-slate-200">
                SDLC (Waterfall)
              </p>
            </div>

            <div className="bg-[#0b0f15] p-5">
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">
                Testing
              </span>

              <p className="mt-2 font-['Space_Grotesk'] text-sm font-semibold text-slate-200">
                Black Box & White Box
              </p>
            </div>
          </div>
        </Container>
      </header>

      {/* =====================================================
          01 — LATAR BELAKANG
      ===================================================== */}

      <section className="border-b border-white/6 py-24 lg:py-28">
        <Container>
          <SectionLabel
            n="01"
            title="Latar Belakang & Tujuan"
            sub="Masalah yang melatarbelakangi pembangunan sistem dan tujuan yang ingin dicapai."
          />

          <div className="grid gap-5 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-7 sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
                  <AlertTriangle size={17} />
                </div>

                <h3 className="font-['Space_Grotesk'] text-lg font-semibold text-slate-100">
                  Permasalahan
                </h3>
              </div>

              <p className="font-['IBM_Plex_Sans'] text-sm leading-8 text-slate-400">
                Pengelolaan gudang di PT Honoris Industry sebelumnya masih menggunakan sistem manual. 
                Hal ini memicu dua masalah utama: lamanya waktu pencarian lokasi/data barang 
                serta tingginya risiko human error saat menghitung estimasi kapasitas muatan truk. 
                Kondisi ini menghambat efisiensi proses pengiriman barang.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-500/15 bg-amber-500/[0.035] p-7 sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
                  <Target size={17} />
                </div>

                <h3 className="font-['Space_Grotesk'] text-lg font-semibold text-slate-100">
                  Tujuan Sistem
                </h3>
              </div>

              <p className="font-['IBM_Plex_Sans'] text-sm leading-8 text-slate-400">
                Mengembangkan aplikasi gudang berbasis mobile yang dapat mendigitalisasi 
                pencarian data barang secara instan, mengotomatisasi perhitungan total volume 
                kubikasi dan berat muatan, serta memberikan rekomendasi jenis dan jumlah 
                kendaraan pengangkut secara akurat untuk mengoptimalkan operasional logistik.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          03 — METODOLOGI
      ===================================================== */}

      <section className="border-b border-white/6 py-24 lg:py-28">
        <Container>
          <SectionLabel
            n="02"
            title="Metodologi"
            sub="Tahapan System Development Life Cycle (SDLC) yang digunakan dalam proses penelitian."
          />

          <div className="max-w-4xl">
            <TimelineItem
              n="1"
              title="Analysis"
              desc="Mengidentifikasi alur kerja gudang di PT Honoris Industry, memetakan kendala pencarian manual, 
              serta merumuskan kebutuhan fitur seperti live search, kalkulasi kubikasi/berat, dan sistem rekomendasi kendaraan.."
            />

            <TimelineItem
              n="2"
              title="System Design"
              desc="Merancang arsitektur basis data (Entity-Relationship Diagram / ERD dan spesifikasi tabel SQLite), 
              memetakan alur data melalui Data Flow Diagram (DFD), serta mendesain antarmuka pengguna (UI/UX Design) yang intuitif untuk staf operasional."
            />

            <TimelineItem
              n="3"
              title="Implementation"
              desc="Membangun aplikasi mobile menggunakan framework Flutter (Dart) dan mengintegrasikan 
              basis data lokal SQLite untuk penyimpanan data master barang dan armada truk secara efisien.."
            />

            <TimelineItem
              n="4"
              title="Testing"
              desc={
              <>
                 - Black Box Testing : Memastikan seluruh fungsi tombol, navigasi, dan fitur utama berjalan sesuai ekspektasi tanpa bug.
                  <br />
                 - White Box Testing : Memeriksa logika internal program, alur eksekusi algoritma kalkulasi, dan pengujian validasi akurasi rekomendasi kendaraan.
                </>
                  }
              />

            <TimelineItem
              n="5"
              title="Deployment & Maintenance"
              desc="Menyiapkan berkas eksekusi (build APK) untuk pengujian di perangkat fisik Android dan menyusun dokumentasi pemeliharaan sistem."
              last
            />
          </div>
        </Container>
      </section>

      {/* =====================================================
          04 — EVALUASI
      ===================================================== */}

      <section className="border-b border-white/6 py-24 lg:py-28">
        <Container>
          <SectionLabel
            n="03"
            title="Hasil Evaluasi Pengujian Sistem"
            sub="Pengujian dilakukan untuk memastikan keandalan, akurasi, dan performa aplikasi sebelum siap digunakan secara operasional."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <MetricCard
              label="Hasil Black Box Testing"
              value="Pass / 100% Berhasil."
              description="Seluruh komponen antarmuka (UI/UX), tombol navigasi, dialog input quantity, search bar, 
              dan fungsi keranjang belanja terbukti berjalan sesuai spesifikasi tanpa adanya error atau kendala fungsional."
              icon={<BarChart3 size={16} />}
            />

            <MetricCard
              label="Hasil White Box Testing"
              value="Pass / Valid."
              description="Jalur logika program (cyclomatic complexity) pada fungsi pencarian barang (live search) 
              dan pemrosesan keranjang telah diuji dan terbukti bebas dari celah logika (logic error)."
              icon={<TrendingUp size={16} />}
            />

            <MetricCard
              label="Hasil Uji Validasi & Algoritma"
              value="100% Akurat."
              description="Rumus matematika otomatisasi volume kubikasi ($m^3$) dan total berat ($kg$) 
              menghasilkan angka yang presisi dan sesuai dengan perhitungan manual."
              icon={<Target size={16} />}
            />

            <MetricCard
              label="Evaluasi Dampak Operasional"
              value="Pemangkasan waktu pencarian barang."
              unit=""
              description="Menghilangkan potensi kesalahan manusia (human error) dalam mengestimasi kapasitas muatan kendaraan."
              icon={<CheckCircle2 size={16} />}
            />
          </div>

          <div className="mt-6 rounded-xl border border-white/[0.07] bg-white/2 px-6 py-4">
            <p className="font-['IBM_Plex_Sans'] text-xs leading-6 text-slate-500">
              <span className="font-semibold text-slate-400">
                Catatan evaluasi:
              </span>{" "}
              Hasil pengujian menunjukkan bahwa aplikasi berbasis Flutter dan SQLite ini 100% lolos uji Black Box untuk seluruh fungsi navigasi 
              dan antarmuka, serta lolos uji White Box pada jalur logika pencarian dan keranjang. Pengujian validasi mengonfirmasi bahwa perhitungan 
              matematis volume kubikasi (m^3) dan berat (kg) berjalan sepenuhnya akurat, sementara logika rekomendasi armada berhasil menyarankan 
              jenis dan jumlah truk secara presisi tanpa overloading. Meski demikian, evaluasi mencatat batasan sistem yang masih bergantung pada basis data
              lokal SQLite serta belum memperhitungkan tata letak 3D barang di dalam truk, sehingga pengembangan selanjutnya disarankan mencakup integrasi cloud database, 
              pemindai barcode/QR code, dan visualisasi penataan muatan.
            </p>
          </div>
        </Container>
      </section>

      {/* =====================================================
          05 — FITUR APLIKASI
      ===================================================== */}

      <section className="border-b border-white/6 py-24 lg:py-28">
        <Container>
          <SectionLabel
            n="12"
            title="Fitur Aplikasi Web"
            sub="Antarmuka aplikasi yang menghubungkan hasil model machine learning dengan kebutuhan pengguna."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <FeatureItem
              number="01"
              title="Dashboard Home"
              desc="Menampilkan Halaman utama,daftar produk,live search, dan keranjang."
              src={duabelasimg} 
            />

            <FeatureItem
              number="02"
              title="Dashboard Keranjang"
              desc="Menampilkan isi halaman keranjang sebelum ditambah item."
              src={duaimg}
            />

            <FeatureItem
              number="03"
              title="Pemilihan Item"
              desc="Menampilkan halaman memilih item."
              src={delapanimg}
            />

            <FeatureItem
              number="04"
              title="Menampilkan Jumlah Quantity"
              desc="Setelah pemilihan item, user ditampilkan dengan pemilihan quantity."
              src={sepuluhimg}
            />

            <FeatureItem
              number="05"
              title="Memasukan Jumlah Quantity"
              desc="User memasukan jumlah quantity berdasarkan kebutuhan."
              src={sembilanimg}  
            />

             <FeatureItem
              number="06"
              title="Dashboard Keranjang setelah memasukan quantity"
              desc="Menampilkan halaman keranjang setelah memasukan quantity untuk melanjutkan proses atau menghapus item."
              src={tigaimg}  
            />

             <FeatureItem
              number="07"
              title="Dashboard hasil perhitungan"
              desc="Menampilkan Halaman hasil perhitungan dan pemilihan mobil sesuai kubikasi yang telah dihitung."
              src={empatimg}  
            />
            
             <FeatureItem
              number="08"
              title="Dashboard keranjang ketika dihapus"
              desc="Menampilkan Halaman keranjang jika tidak ingin melanjutkan ke perhitungan."
              src={enamimg}  
            />

             <FeatureItem
              number="09"
              title="Dashboard Keranjang jika dihapus"
              desc="Menampilkan Halaman keranjang jika dihapus dan item terhapus dari keranjang."
              src={tujuhimg}  
            />
             
             <FeatureItem
              number="10"
              title="Dashboard live search"
              desc="Menampilkan item sesuai pencarian."
              src={satuimg}  
            />
          </div>
        </Container>
      </section>

      {/* =====================================================
          06 — KETERBATASAN
      ===================================================== */}

      <section className="border-b border-white/6 py-24 lg:py-28">
        <Container>
          <SectionLabel
            n="06"
            title="Keterbatasan & Pengembangan Lanjutan"
            sub="Ruang pengembangan sistem yang masih dapat ditingkatkan pada versi berikutnya."
          />

          <div className="relative overflow-hidden rounded-2xl border border-amber-500/20 bg-amber-500/[0.035] p-7 sm:p-8">
            <div className="absolute right-0 top-0 h-32 w-32 translate-x-1/3 -translate-y-1/3 rounded-full bg-amber-500/10 blur-3xl" />

            <div className="relative flex gap-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
                <AlertTriangle size={19} />
              </div>

              <div>
                <h3 className="font-['Space_Grotesk'] text-lg font-semibold text-slate-100">
                  Penanganan Keterbatasan
                </h3>

                <p className="mt-3 max-w-3xl font-['IBM_Plex_Sans'] text-sm leading-7 text-slate-400">
                  Keterbatasan aplikasi ini adalah masih menggunakan database lokal (SQLite), sehingga 
                  data belum dapat disinkronkan secara real-time, serta keranjang dan hasil perhitungan 
                  belum tersimpan secara permanen setelah aplikasi ditutup. Untuk pengembangan selanjutnya, 
                  sistem disarankan menambahkan fitur pemindaian barcode/QR Code, mengintegrasikan database
                  berbasis cloud, serta menyempurnakan algoritma rekomendasi kendaraan agar lebih optimal 
                  dalam mendukung proses distribusi barang.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          07 — TECH STACK
      ===================================================== */}

      <section className="border-b border-white/6 py-24 lg:py-28">
        <Container>
          <SectionLabel
            n="07"
            title="Tech Stack"
            sub="Teknologi yang digunakan untuk membangun, melatih, dan menjalankan sistem."
          />

          <div className="flex flex-wrap gap-3">
            {stack.map((s) => (
              <StackChip key={s} name={s} />
            ))}
          </div>
        </Container>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer>
        <Container className="flex flex-col gap-6 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-['Space_Grotesk'] text-sm font-semibold text-slate-300">
              Bayu Setiawan
            </p>

            <p className="mt-1 font-mono text-[10px] tracking-[0.12em] text-slate-600">
              SISTEM PREDIKSI PRODUKSI LAMPU · 2026
            </p>
          </div>

          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2 self-start rounded-lg border border-white/8 px-4 py-2.5 font-['IBM_Plex_Sans'] text-[10px] font-semibold tracking-[0.12em] text-slate-500 transition-all duration-300 hover:border-amber-500/30 hover:text-amber-400 sm:self-auto"
          >
            <ArrowLeft
              size={13}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

            KEMBALI KE PORTOFOLIO
          </button>
        </Container>
      </footer>
    </div>
  );
}