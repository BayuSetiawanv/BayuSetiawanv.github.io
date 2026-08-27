import React, { useEffect } from "react";
import gambar1img from "./assets/intern2/two.png";
import gambar2img from "./assets/intern2/tree.png";
import gambar3img from "./assets/intern2/for.png";
import gambar4img from "./assets/intern2/five.png";
import gambar5img from "./assets/intern2/six.png";
import gambar6img from "./assets/intern2/seven.png";
import gambar7img from "./assets/intern2/eight.png";
import gambar8img from "./assets/intern2/nine.png";
import gambar9img from "./assets/intern2/ten.png";
import gambar10img from "./assets/intern2/las.png";
import gambar11img from "./assets/intern2/dualas.png";
import gambar12img from "./assets/intern2/tilas.png";
import gambar13img from "./assets/intern2/patlas.png";


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
          className="block aspect-video w-full object-cover object-top opacity-90 transition duration-500 group-hover:scale-[1.025] group-hover:opacity-100"
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
    "Flutter",
    "Laravel",
    "Dart",
    "Php",
    "Restful API",
    "MySQL",
    "css Tailwind",
    "android Mobile",
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
                INTERNSHIP PROJECT
              </span>

              <span className="font-mono text-[11px] text-slate-600">
                /
              </span>

              <span className="font-mono text-[11px] tracking-[0.15em] text-slate-500">
                2025
              </span>
            </div>

            <h1 className="font-['Space_Grotesk'] text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-white sm:text-5xl lg:text-7xl">
              HI Inventory 
              <br />

              <span className="text-slate-400">
                Mobile App Redesign
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
              HI Inventory Mobile App Redesign merupakan proyek yang saya kerjakan selama Praktik Kerja Lapang di 
              PT Honoris Industry dengan meredesain sistem inventori berbasis website menjadi aplikasi mobile menggunakan Flutter.{" "}
              Aplikasi ini mendukung pengelolaan data barang masuk dan barang keluar, serta terintegrasi dengan backend Laravel melalui 
              REST API dan database MySQL untuk menyediakan akses data inventori secara efisien dan real-time.{" "}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://github.com/BayuSetiawanv/Hi_inventory"
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
                Framework
              </span>

              <p className="mt-2 font-['Space_Grotesk'] text-sm font-semibold text-slate-200">
                Flutter (Frontend Mobile), Laravel (Backend REST API)
              </p>
            </div>

            <div className="bg-[#0b0f15] p-5">
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">
                Database
              </span>

              <p className="mt-2 font-['Space_Grotesk'] text-sm font-semibold text-slate-200">
                MySQL
              </p>
            </div>

            <div className="bg-[#0b0f15] p-5">
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">
                Platform
              </span>

              <p className="mt-2 font-['Space_Grotesk'] text-sm font-semibold text-slate-200">
                Android Mobile (Cross-platform Flutter)
              </p>
            </div>

            <div className="bg-[#0b0f15] p-5">
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">
                Fitur Utama
              </span>

              <p className="mt-2 font-['Space_Grotesk'] text-sm font-semibold text-slate-200">
                Login, Barang Masuk, Barang Keluar, Riwayat Inventori, Integrasi REST API
              </p>
            </div>
          </div>
        </Container>
      </header>

      {/* =====================================================
          01 — STATISTIK
      ===================================================== */}

      <section className="border-b border-white/6 py-24 lg:py-28">
        <Container>
          <SectionLabel
            n="01"
            title="Gambaran Singkat"
            sub="Ringkasan informasi proyek, termasuk peran, klien, framework, database, dan arsitektur sistem."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              icon={<Database size={18} />}
              value={<p style={{ fontSize: '1.3rem' }}>Mobile App Developer</p> }
              label="Role"
            />

            <StatCard
              icon={<Layers size={18} />}
              value={<p style={{ fontSize: '1.3rem' }}>PT Honoris Industry</p> }
              label="Client"
            />

            <StatCard
              icon={<CalendarDays size={18} />}
              value={<p style={{ fontSize: '1.3rem' }}>Flutter , Laravel REST API, MySQL</p> }
              label="Framework & Database"
            />

            <StatCard
              icon={<Target size={18} />}
              value={<p style={{ fontSize: '1.3rem' }}>Flutter → REST API → Laravel → MySQL</p>}
              label="Arsitektur"
            />
          </div>
        </Container>
      </section>

      {/* =====================================================
          02 — LATAR BELAKANG
      ===================================================== */}

      <section className="border-b border-white/6 py-24 lg:py-28">
        <Container>
          <SectionLabel
            n="02"
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
                Sistem HI Inventory yang sebelumnya berbasis website memiliki keterbatasan 
                dalam hal fleksibilitas dan kemudahan akses melalui perangkat mobile. 
                Pengguna perlu mengakses sistem melalui browser untuk melakukan pengelolaan 
                data inventori, khususnya pada proses pemasukan dan pengeluaran barang 
                produksi. Kondisi tersebut mendorong kebutuhan akan aplikasi mobile 
                yang lebih praktis dan mudah digunakan.
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
                Mengembangkan HI Inventory versi mobile menggunakan Flutter dengan memanfaatkan 
                backend Laravel dan database MySQL yang sudah tersedia. Aplikasi ini bertujuan 
                untuk mempermudah pengguna dalam mengakses, mencatat, dan memantau data barang masuk 
                dan barang keluar melalui perangkat mobile, tanpa mengubah sistem backend dan database 
                yang telah digunakan sebelumnya.
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
            n="03"
            title="Metodologi"
            sub="Tahapan System Development Life Cycle (SDLC) yang digunakan dalam proses penelitian."
          />

          <div className="max-w-4xl">
            <TimelineItem
              n="1"
              title="Analisis Kebutuhan"
              desc="Mengidentifikasi kebutuhan pengguna dan fitur pada HI Inventory yang perlu tersedia dalam versi mobile."
            />

            <TimelineItem
              n="2"
              title="Perancangan Sistem"
              desc="Merancang antarmuka aplikasi mobile serta menentukan alur komunikasi antara Flutter, REST API Laravel, dan database MySQL."
            />

            <TimelineItem
              n="3"
              title="Implementasi"
              desc="Mengembangkan aplikasi mobile menggunakan Flutter dan Dart, kemudian mengintegrasikannya dengan Laravel REST API."
            />

            <TimelineItem
              n="4"
              title="Pengujian"
              desc="Menguji fungsi aplikasi, integrasi API, proses pengambilan dan pengiriman data, serta memastikan fitur berjalan sesuai kebutuhan."
            />

            <TimelineItem
              n="5"
              title="Implementasi & Pemeliharaan"
              desc="Melakukan perbaikan apabila ditemukan masalah dan menyesuaikan aplikasi berdasarkan kebutuhan pengguna."
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
            n="04"
            title="Hasil Evaluasi Sistem"
            sub="Performa Sistem pada data uji setelah proses cross-validation per produk."
          />

          <div className="mb-6 overflow-hidden rounded-2xl border border-amber-500/20 bg-linear-to-br from-amber-500/9 via-white/3 to-transparent p-7 sm:p-8">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-400">

                  </span>
                </div>

                <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-white sm:text-3xl">
                  Evaluation: Functional Testing & Integration Testing
                </h3>

                <p className="mt-3 max-w-2xl font-['IBM_Plex_Sans'] text-sm leading-6 text-slate-400">
                  Functional Testing & Integration Testing untuk memastikan fitur aplikasi 
                  berjalan sesuai kebutuhan serta komunikasi antara Flutter, Laravel REST API, dan MySQL berjalan dengan baik.
                </p>
              </div>
              </div>
            </div>
        </Container>
      </section>

      {/* =====================================================
          05 — FITUR APLIKASI
      ===================================================== */}

      <section className="border-b border-white/6 py-24 lg:py-28">
        <Container>
          <SectionLabel
            n="06"
            title="Fitur Aplikasi HI Inventory"
            sub="Antarmuka aplikasi mobile yang menampilkan fitur-fitur utama untuk pengelolaan data inventori."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <FeatureItem
              number="01"
              title="Dashboard Home"
              desc="Memperlihatkan ringkasan data inventori, termasuk total produk, stok rendah, dan transaksi saat ini."
              src={gambar1img}
            />

            <FeatureItem
              number="02"
              title="Dashboard Pemasukan Barang"
              desc="Menampilkan data barang masuk, termasuk detail produk, jumlah, dan tanggal pemasukan."
              src={gambar2img}
            />

            <FeatureItem
              number="03"
              title="Dashboard Pengeluaran Barang"
              desc="Menampilkan data barang keluar, termasuk detail produk, jumlah, dan tanggal pengeluaran."
              src={gambar3img}
            />

            <FeatureItem
              number="04"
              title="Dashboard Laporan WIP"
              desc="Menampilkan data wip bulan dan tahun"
              src={gambar4img}
            />

            <FeatureItem
              number="05"
              title="Dashboard Stock Opname"
              desc="Menampilkan data stock opname bulan , tahun dan NO BA"
              src={gambar5img}  
            />

             <FeatureItem
              number="06"
              title="Dashboard Mutasi Bahan Baku"
              desc="Menampilkan Laporan mutasi bahan baku periode tahun"
              src={gambar6img}  
            />

            <FeatureItem
              number="07"
              title="Dashboard Mutasi Barang Jadi"
              desc="Menampilkan Laporan mutasi barang jadi periode tahun"
              src={gambar7img}  
            />

            <FeatureItem
              number="08"
              title="Dashboard Mutasi Barang Sisa"
              desc="Menampilkan Laporan mutasi barang sisa periode tahun"
              src={gambar8img}  
            />

            <FeatureItem
              number="09"
              title="Dashboard Mutasi Mesin"
              desc="Menampilkan Laporan mutasi mesin periode tahun"
              src={gambar9img}  
            />

            <FeatureItem
              number="10"
              title="Dashboard Halaman Upload Barang Masuk"
              desc="Menampilkan Halaman CRUD Upload Barang Masuk."
              src={gambar10img}  
            />

            <FeatureItem
              number="11"
              title="Dashboard Halaman Upload Barang Keluar"
              desc="Menampilkan Halaman CRUD Upload Barang Keluar."
              src={gambar11img}  
            />

            <FeatureItem
              number="12"
              title="Dashboard Laporan Summary Bahan Baku"
              desc="Menampilkan Laporan Summary Bahan Baku."
              src={gambar12img}  
            />

            <FeatureItem
              number="13"
              title="Dashboard Laporan Summary Bahan Jadi"
              desc="Menampilkan Laporan Summary Bahan Jadi."
              src={gambar13img}  
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
                  Aplikasi HI Inventory Mobile masih berfokus pada pengelolaan barang masuk dan barang keluar 
                  serta bergantung pada backend dan koneksi REST API yang telah tersedia. Pengembangan selanjutnya 
                  dapat mencakup penambahan dashboard dan laporan inventori, fitur barcode/QR Code, notifikasi, 
                  offline synchronization, peningkatan keamanan dan hak akses, serta usability testing untuk meningkatkan 
                  efektivitas dan pengalaman pengguna.
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