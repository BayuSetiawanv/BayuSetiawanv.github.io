import React, { useEffect } from "react";
import gambar1img from "./assets/Skripsi/gambar1.png";
import gambar2img from "./assets/Skripsi/gambar2.png";
import gambar3img from "./assets/Skripsi/gambar3.png";
import gambar4img from "./assets/Skripsi/gambar4.png";
import gambar5img from "./assets/Skripsi/gambar5.png";
import gambar6img from "./assets/Skripsi/gambar6.png";


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
    "Python",
    "Flask",
    "Scikit-learn",
    "Random Forest",
    "Pandas",
    "NumPy",
    "TimeSeriesSplit",
    "Google Colab",
    "Bootstrap",
    "Jinja2",
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
                SKRIPSI
              </span>

              <span className="font-mono text-[11px] text-slate-600">
                /
              </span>

              <span className="font-mono text-[11px] tracking-[0.15em] text-slate-500">
                2026
              </span>
            </div>

            <h1 className="font-['Space_Grotesk'] text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-white sm:text-5xl lg:text-7xl">
              Sistem Prediksi
              <br />

              <span className="text-slate-400">
                Produksi Lampu
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
              Aplikasi web berbasis Flask untuk memprediksi kebutuhan produksi
              bulanan 10 kategori produk lampu LED menggunakan{" "}
              <strong className="font-semibold text-slate-200">
                Random Forest Regression
              </strong>
              . Model dilatih menggunakan 86 bulan data historis produksi
              Januari 2019 hingga Februari 2026 dengan pendekatan{" "}
              <strong className="font-semibold text-slate-200">
                Knowledge Discovery in Databases (KDD)
              </strong>{" "}
              dalam kerangka metodologi Waterfall.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://drive.google.com/file/d/1UpVXX35jbMKvtajs3QGoRjuEqNyT-ktm/view?usp=drivesdk"
                className="group inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-3 font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-xl hover:shadow-amber-500/10"
              >
                <ExternalLink size={15} />
                LIHAT DEMO
              </a>

              <a
                href="https://github.com/BayuSetiawanv/Random-Forest-Prediksi-Produksi"
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
                Model
              </span>

              <p className="mt-2 font-['Space_Grotesk'] text-sm font-semibold text-slate-200">
                Random Forest
              </p>
            </div>

            <div className="bg-[#0b0f15] p-5">
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">
                Dataset
              </span>

              <p className="mt-2 font-['Space_Grotesk'] text-sm font-semibold text-slate-200">
                860 Records
              </p>
            </div>

            <div className="bg-[#0b0f15] p-5">
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">
                Periode
              </span>

              <p className="mt-2 font-['Space_Grotesk'] text-sm font-semibold text-slate-200">
                2019 — 2026
              </p>
            </div>

            <div className="bg-[#0b0f15] p-5">
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">
                Framework
              </span>

              <p className="mt-2 font-['Space_Grotesk'] text-sm font-semibold text-slate-200">
                Flask
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
            sub="Ringkasan dataset, cakupan produk, periode penelitian, dan hasil feature engineering."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              icon={<Database size={18} />}
              value="860"
              label="Baris data historis tanpa missing value"
            />

            <StatCard
              icon={<Layers size={18} />}
              value="10"
              label="Kategori produk lampu LED"
            />

            <StatCard
              icon={<CalendarDays size={18} />}
              value="86"
              label="Bulan data Januari 2019 – Februari 2026"
            />

            <StatCard
              icon={<Target size={18} />}
              value="24–25"
              label="Fitur hasil feature engineering"
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
                PT Honoris Industry menghadapi tantangan dalam menentukan
                jumlah produksi bulanan yang tepat untuk setiap varian lampu.
                Kelebihan produksi dapat meningkatkan biaya penyimpanan dan
                risiko barang tidak terjual, sedangkan kekurangan produksi
                berpotensi menyebabkan permintaan tidak terpenuhi.
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
                Membantu tim produksi memperkirakan kebutuhan produksi bulan
                berikutnya berdasarkan pola historis sehingga hasil prediksi
                dapat digunakan sebagai acuan dalam perencanaan produksi.
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
            sub="Tahapan Knowledge Discovery in Databases (KDD) yang digunakan dalam proses penelitian."
          />

          <div className="max-w-4xl">
            <TimelineItem
              n="1"
              title="Selection"
              desc="Mengumpulkan data historis produksi lampu periode Januari 2019–Februari 2026 dari catatan produksi PT Honoris Industry."
            />

            <TimelineItem
              n="2"
              title="Preprocessing"
              desc="Melakukan pembersihan data, pengecekan missing value, serta menyusun struktur data berdasarkan produk dan periode bulanan. Tidak ditemukan missing value pada 860 baris data."
            />

            <TimelineItem
              n="3"
              title="Transformation"
              desc="Membentuk feature engineering berupa lag feature bulanan, rolling average, trend, rasio stok, serta one-hot encoding untuk kategori produk sehingga menghasilkan 24–25 fitur."
            />

            <TimelineItem
              n="4"
              title="Data Mining"
              desc="Melatih model Random Forest Regression menggunakan pembagian data berdasarkan urutan waktu dan melakukan validasi menggunakan TimeSeriesSplit pada masing-masing produk."
            />

            <TimelineItem
              n="5"
              title="Interpretation / Evaluation"
              desc="Mengevaluasi model menggunakan MAE, RMSE, R², dan MAPE. Model kemudian disimpan dalam format .pkl dan diintegrasikan ke aplikasi web Flask."
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
            title="Hasil Evaluasi Model"
            sub="Performa model pada data uji setelah proses cross-validation per produk."
          />

          <div className="mb-6 overflow-hidden rounded-2xl border border-amber-500/20 bg-linear-to-br from-amber-500/9 via-white/3 to-transparent p-7 sm:p-8">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <TrendingUp size={16} className="text-amber-400" />

                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-400">
                    Overall Performance
                  </span>
                </div>

                <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-white sm:text-3xl">
                  Model menghasilkan R² sebesar 0,814
                </h3>

                <p className="mt-3 max-w-2xl font-['IBM_Plex_Sans'] text-sm leading-6 text-slate-400">
                  Nilai R² menunjukkan kemampuan model dalam menjelaskan variasi
                  data target, sementara MAPE menunjukkan tingkat kesalahan
                  prediksi relatif terhadap nilai aktual.
                </p>
              </div>

              <div className="shrink-0">
                <span className="font-['Space_Grotesk'] text-5xl font-bold tracking-tight text-amber-400 sm:text-6xl">
                  81,4%
                </span>

                <span className="ml-2 font-mono text-xs text-slate-500">
                  R²
                </span>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <MetricCard
              label="MAE"
              value="3.797,26"
              description="Rata-rata selisih absolut prediksi terhadap aktual."
              icon={<BarChart3 size={16} />}
            />

            <MetricCard
              label="RMSE"
              value="4.722,97"
              description="Akar rata-rata kuadrat kesalahan prediksi."
              icon={<TrendingUp size={16} />}
            />

            <MetricCard
              label="R²"
              value="0,814"
              description="Proporsi variasi target yang dapat dijelaskan model."
              icon={<Target size={16} />}
            />

            <MetricCard
              label="MAPE"
              value="8,29"
              unit="%"
              description="Rata-rata persentase kesalahan absolut."
              icon={<CheckCircle2 size={16} />}
            />
          </div>

          <div className="mt-6 rounded-xl border border-white/[0.07] bg-white/2 px-6 py-4">
            <p className="font-['IBM_Plex_Sans'] text-xs leading-6 text-slate-500">
              <span className="font-semibold text-slate-400">
                Catatan evaluasi:
              </span>{" "}
              Fold pertama pada TimeSeriesSplit dikecualikan dari evaluasi
              karena jumlah data latih yang terlalu sedikit pada awal periode
              menghasilkan R² mendekati nol pada beberapa produk.
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
            n="06"
            title="Fitur Aplikasi Web"
            sub="Antarmuka aplikasi yang menghubungkan hasil model machine learning dengan kebutuhan pengguna."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <FeatureItem
              number="01"
              title="Dashboard Prediksi per Produk"
              desc="Menginput angka untuk produksi pada bulan yang ingin diproduksi"
              src={gambar1img}
            />

            <FeatureItem
              number="02"
              title="Evaluasi Global Model"
              desc="Menyediakan ringkasan performa model melalui MAE, RMSE, R², dan MAPE."
              src={gambar2img}
            />

            <FeatureItem
              number="03"
              title="Kontrol Kelebihan Produksi"
              desc="Membantu mengontrol potensi overproduction melalui mekanisme potongan terhadap hasil produksi."
              src={gambar3img}
            />

            <FeatureItem
              number="04"
              title="Riwayat Data Produksi"
              desc="Menampilkan data historis produksi yang menjadi dasar dalam proses prediksi."
              src={gambar4img}
            />

            <FeatureItem
              number="05"
              title="Evaluasi Per Prediksi"
              desc="Menampilkan hasil evaluasi produksi perproduksi."
              src={gambar5img}  
            />

             <FeatureItem
              number="06"
              title="Dashboard Home"
              desc="Menampilkan Halaman Utama."
              src={gambar6img}  
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
                  Penanganan Underproduction
                </h3>

                <p className="mt-3 max-w-3xl font-['IBM_Plex_Sans'] text-sm leading-7 text-slate-400">
                  Sistem saat ini berfokus pada skenario kelebihan produksi
                  (overproduction) melalui mekanisme potongan, namun belum
                  memiliki logika khusus untuk menangani kekurangan produksi
                  atau stockout. Pengembangan berikutnya dapat menambahkan
                  mekanisme untuk mendeteksi dan menangani kondisi
                  underproduction.
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