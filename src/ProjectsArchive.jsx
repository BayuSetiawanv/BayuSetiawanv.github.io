import React, { useEffect } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Code2,
  ExternalLink,
  Sparkles,
  LayoutGrid,
  Truck,
  UtensilsCrossed,
  Globe,
  Boxes,
  BarChart3,
} from "lucide-react";

/* =========================================================
   GOOGLE FONTS (sama dengan halaman detail)
========================================================= */

function useGoogleFonts() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

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
    <div className={`mx-auto w-full max-w-295 px-6 sm:px-8 lg:px-12 ${className}`}>
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
          Portfolio Archive
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
   STACK BADGE
========================================================= */

function StackChip({ name }) {
  return (
    <div className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 font-['IBM_Plex_Sans'] text-[11px] font-medium text-slate-300 transition-all duration-300 hover:border-amber-500/30 hover:bg-amber-500/[0.07] hover:text-amber-300">
      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 transition-transform duration-300 group-hover:scale-125" />
      {name}
    </div>
  );
}

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

const PROJECTS = [
  {
    id: "prediksi-produksi-lampu",
    category: "Skripsi",
    year: "2026",
    icon: <BarChart3 size={18} />,
    title: "Sistem Prediksi Produksi Lampu",
    org: "PT Honoris Industry",
    desc:
      "Aplikasi web Flask untuk memprediksi kebutuhan produksi bulanan 10 kategori produk lampu LED menggunakan Random Forest Regression, dilatih dari 86 bulan data historis.",
    stack: ["Python", "Flask", "Scikit-learn", "Random Forest"],
    metric: { value: "81,4%", label: "R² Score" },
    hasDetail: true,
    links: {
      demo: "https://drive.google.com/file/d/1UpVXX35jbMKvtajs3QGoRjuEqNyT-ktm/view?usp=drivesdk",
      code: "https://github.com/BayuSetiawanv/Random-Forest-Prediksi-Produksi",
    },
  },
  {
    id: "kubikasi-armada",
    category: "Magang",
    year: "2025",
    icon: <Truck size={18} />,
    title: "Sistem Kubikasi Armada Kendaraan",
    org: "PT Honoris Industry",
    desc:
      "Aplikasi mobile untuk menghitung dan mengelola kapasitas muatan (kubikasi) armada kendaraan distribusi guna mendukung efisiensi perencanaan pengiriman.",
    stack: ["Dart", "Flutter"],
    hasDetail: false,
  },
  {
    id: "hi-inventory-redesign",
    category: "Magang",
    year: "2025",
    icon: <Boxes size={18} />,
    title: "Redesain HI Inventory",
    org: "PT Honoris Industry",
    desc:
      "Perombakan sistem inventaris internal perusahaan, mencakup ulang alur data, antarmuka, dan integrasi API untuk mendukung operasional gudang.",
    stack: ["Flutter", "Laravel", "MySQL", "REST API"],
    hasDetail: false,
  },
  {
    id: "food-ordering-crud",
    category: "Personal",
    year: null,
    icon: <UtensilsCrossed size={18} />,
    title: "Aplikasi Pemesanan Makanan",
    org: "Proyek Latihan",
    desc:
      "Sistem CRUD pemesanan makanan berbasis Laravel yang mencakup manajemen menu, pesanan, dan status transaksi.",
    stack: ["Laravel", "MySQL"],
    hasDetail: false,
  },
  {
    id: "client-portfolio-sites",
    category: "Freelance",
    year: null,
    icon: <LayoutGrid size={18} />,
    title: "Website Portofolio Klien",
    org: "Proyek Freelance",
    desc:
      "Serangkaian situs portofolio untuk klien yang dibangun menggunakan PHP native, disesuaikan dengan kebutuhan dan identitas masing-masing klien.",
    stack: ["PHP", "MySQL", "HTML/CSS"],
    hasDetail: false,
  },
  {
    id: "bapenda-bogor-redesign",
    category: "Freelance",
    year: null,
    icon: <Globe size={18} />,
    title: "Redesain Website Bapenda Kota Bogor",
    org: "Proyek Freelance",
    desc:
      "Perombakan tampilan dan struktur website Bapenda Kota Bogor untuk meningkatkan kejelasan informasi dan kemudahan navigasi bagi pengguna.",
    stack: ["PHP", "HTML/CSS"],
    hasDetail: false,
  },
];

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({ project, index, onSelect }) {
  const clickable = project.hasDetail && onSelect;

  return (
    <div
      onClick={clickable ? () => onSelect(project) : undefined}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/30 hover:bg-white/5 hover:shadow-2xl hover:shadow-black/20 ${
        clickable ? "cursor-pointer" : ""
      }`}
    >
      {/* HEADER */}
      <div className="relative border-b border-white/10 bg-slate-900/60 p-6">
        <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-amber-500/6 blur-2xl transition-all duration-300 group-hover:bg-amber-500/12" />

        <div className="relative flex items-start justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10 text-amber-400">
            {project.icon}
          </div>

          <span className="font-mono text-[10px] font-semibold tracking-[0.2em] text-slate-600">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="relative mt-6 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-amber-500/20 bg-amber-500/[0.07] px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.15em] text-amber-400">
            {project.category}
          </span>

          {project.year && (
            <span className="font-mono text-[10px] tracking-widest text-slate-600">
              {project.year}
            </span>
          )}
        </div>
      </div>

      {/* BODY */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-['Space_Grotesk'] text-lg font-semibold text-slate-100">
          {project.title}
        </h3>

        <p className="mt-1 font-['IBM_Plex_Sans'] text-xs font-medium text-slate-500">
          {project.org}
        </p>

        <p className="mt-4 font-['IBM_Plex_Sans'] text-sm leading-6 text-slate-400">
          {project.desc}
        </p>

        {project.metric && (
          <div className="mt-5 flex items-baseline gap-2 border-t border-white/6 pt-4">
            <span className="font-['Space_Grotesk'] text-xl font-bold text-amber-400">
              {project.metric.value}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-slate-600">
              {project.metric.label}
            </span>
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <StackChip key={s} name={s} />
          ))}
        </div>

        {/* FOOTER ACTION */}
        <div className="mt-6 flex items-center justify-between border-t border-white/6 pt-5">
          {clickable ? (
            <span className="inline-flex items-center gap-1.5 font-['IBM_Plex_Sans'] text-xs font-semibold text-amber-400 transition-all duration-300 group-hover:gap-2.5">
              Lihat Detail
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          ) : (
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-slate-600">
              Ringkasan Proyek
            </span>
          )}

          {project.links?.code && (
            <a
              href={project.links.code}
              onClick={(e) => e.stopPropagation()}
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 transition-colors duration-300 hover:text-amber-400"
              aria-label="Source code"
            >
              <Code2 size={15} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function ProjectsArchive({ onBack, onSelectProject }) {
  useGoogleFonts();

  const total = PROJECTS.length;
  const categories = [...new Set(PROJECTS.map((p) => p.category))].length;

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
            <span>KEMBALI KE BERANDA</span>
          </button>
        </Container>
      </nav>

      {/* =====================================================
          HERO
      ===================================================== */}
      <header className="relative border-b border-white/6">
        <div className="absolute left-1/2 top-0 h-125 w-200 -translate-x-1/2 -translate-y-1/3 rounded-full bg-amber-500/[0.035] blur-[120px]" />

        <Container className="relative pb-16 pt-14 sm:pb-20 sm:pt-16 lg:pt-20">
          <div className="max-w-225">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/[0.07] px-3 py-1.5 font-mono text-[10px] font-semibold tracking-[0.18em] text-amber-400">
              <Sparkles size={12} />
              SELURUH PROYEK
            </span>

            <h1 className="mt-6 font-['Space_Grotesk'] text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
              Proyek yang
              <br />
              <span className="text-slate-400">pernah saya bangun</span>
              <span className="text-amber-400">.</span>
            </h1>

            <p className="mt-6 max-w-2xl font-['IBM_Plex_Sans'] text-base leading-8 text-slate-400">
              Kumpulan proyek dari pengalaman magang, freelance, dan
              pengembangan pribadi — mencakup sistem machine learning,
              aplikasi mobile, dan pengembangan web.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-3 sm:max-w-125">
            <div className="bg-[#0b0f15] p-5">
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">
                Total Proyek
              </span>
              <p className="mt-2 font-['Space_Grotesk'] text-sm font-semibold text-slate-200">
                {total}
              </p>
            </div>

            <div className="bg-[#0b0f15] p-5">
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">
                Kategori
              </span>
              <p className="mt-2 font-['Space_Grotesk'] text-sm font-semibold text-slate-200">
                {categories}
              </p>
            </div>

            <div className="bg-[#0b0f15] p-5">
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">
                Stack Utama
              </span>
              <p className="mt-2 font-['Space_Grotesk'] text-sm font-semibold text-slate-200">
                6+
              </p>
            </div>
          </div>
        </Container>
      </header>

      {/* =====================================================
          GRID PROYEK
      ===================================================== */}
      <section className="py-20 lg:py-24">
        <Container>
          <SectionLabel
            n="01"
            title="Daftar Proyek"
            sub="Berbagai proyek yang pernah saya kerjakan, baik untuk keperluan magang, freelance, maupun pengembangan pribadi."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onSelect={onSelectProject}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer>
        <Container className="flex flex-col gap-6 border-t border-white/6 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-['Space_Grotesk'] text-sm font-semibold text-slate-300">
              Bayu Setiawan
            </p>
            <p className="mt-1 font-mono text-[10px] tracking-[0.12em] text-slate-600">
              ARSIP PROYEK · {new Date().getFullYear()}
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
            KEMBALI KE BERANDA
          </button>
        </Container>
      </footer>
    </div>
  );
}
