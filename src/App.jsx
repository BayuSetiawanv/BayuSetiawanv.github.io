import React, { useEffect, useState } from "react";
import { Mail, FileDown, ArrowUpRight } from "lucide-react";
import cvFile from "./assets/BAYUSETIAWANV_CV.pdf";
import SkripsiDetail from "./SkripsiDetail";
import Skripsidetail2 from "./Skripsidetail2";
import Skripsidetail3 from "./Skripsidetail3";
import ProjectsArchive from "./ProjectsArchive";
import LamarKerjaDetail from "./LamarKerjaDetail"; // <-- IMPORT BARU
import Certifications from "./Certifications";
import "./index.css";

const SOCIALS = {
  linkedin: "💼",
  github: "💻",
  instagram: "📸",
};

function IconLink({ href, label, emoji }) {
  return (
    <a href={href} className="icon-link" target="_blank" rel="noreferrer">
      <span>{emoji}</span>
      <span>{label}</span>
    </a>
  );
}

function StackChip({ name }) {
  return (
    <div className="stack-chip">
      <span className="stack-dot" />
      <span>{name}</span>
    </div>
  );
}

function SectionLabel({ n, title, sub }) {
  return (
    <div className="section-head">
      <div className="section-label">
        <span className="num">{n}</span>
        <span className="line" />
      </div>
      <h2 className="section-title tight">{title}</h2>
      {sub && <p className="section-sub">{sub}</p>}
    </div>
  );
}

function MetricCard({ label, value, unit }) {
  return (
    <div className="metric-card">
      <span className="metric-label">{label}</span>
      <span className="metric-value">
        {value}
        <span className="metric-unit">{unit}</span>
      </span>
    </div>
  );
}

function ProjectRow({ tag, title, desc, metrics, tags, date, onOpen }) {
  return (
    <a
      href="#"
      className="project-card"
      onClick={(e) => {
        e.preventDefault();
        onOpen();
      }}
    >
      <div className="project-tag-row">
        <span className="project-tag">{tag}</span>
        {date && <span className="project-date">{date}</span>}
      </div>
      <div className="project-head">
        <h3 className="project-title">{title}</h3>
        <ArrowUpRight size={18} color="#B8B2A4" style={{ flexShrink: 0, marginTop: 4 }} />
      </div>
      <p className="project-desc">{desc}</p>
      {metrics && (
        <div className="metrics-grid">
          {metrics.map((m) => (
            <MetricCard key={m.label} {...m} />
          ))}
        </div>
      )}
      {tags && (
        <div className="project-hashtags">
          {tags.map((t) => (
            <span key={t}>#{t}</span>
          ))}
        </div>
      )}
    </a>
  );
}

export default function Portfolio() {
  const [copied, setCopied] = useState(false);
  const [page, setPage] = useState("home"); // Kembali ke "home" sebagai default
  const [scrollY, setScrollY] = useState(0);
  const email = "bayusetiawanv916@gmail.com";

  const openPage = (target) => {
    setScrollY(window.scrollY);
    setPage(target);
  };

  const goHome = () => {
    setPage("home");
    setTimeout(() => {
      window.scrollTo({ top: scrollY, behavior: "smooth" });
    }, 50);
  };

  // Stack diperbarui sesuai CV terbaru (lebih modern & terstruktur)
  const stack = [
    "Python", "JavaScript", "TypeScript", "PHP", "Dart", "HTML5", "CSS3",
    "NextJS", "ReactJS", "Tailwind CSS", "Zustand", "Flutter",
    "FastAPI", "Flask", "Laravel", "RESTful API Design", "Pydantic", "Asynchronous Programming (async/await)",
    "PostgreSQL", "MySQL", "SQLAlchemy (Async ORM)", "Neon (Serverless DB)",
    "LLM Integration (Groq API, Llama 3)", "Prompt Engineering", "Agentic AI", "Scikit-learn", "Pandas",
    "Random Forest Regression", "Time Series Cross-Validation", "PyMuPDF", "JSON Parsing", "Regular Expression (Regex)",
    "Git", "GitHub", "Vercel", "Railway", "Postman", "Google Colab", "VS Code", "Chrome DevTools",
  ];

  // Routing untuk semua halaman detail
  if (page === "lamarKerja") return <LamarKerjaDetail onBack={goHome} />;
  if (page === "skripsi") return <SkripsiDetail onBack={goHome} />;
  if (page === "internship") return <Skripsidetail2 onBack={goHome} />;
  if (page === "research") return <Skripsidetail3 onBack={goHome} />;
  if (page === "anual") return <ProjectsArchive onBack={goHome} />;

  return (
    <div>
      {/* NAV */}
      <nav className="navbar">
        <div className="portfolio-container navbar-inner">
          <span className="nav-name">Bayu Setiawan</span>
          <div className="nav-links">
            {["Proyek", "Skill", "Tentang", "Kontak"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="portfolio-container">
          <div className="hero-eyebrow">SOFTWARE & AI ENGINEER</div>
          <div className="hero-top">
            <div
              className="profile-image"
              style={{
                width: 140,
                height: 140,
                background: "linear-gradient(135deg, #1B263B, #0D1B2A)",
              }}
            >
              <span style={{ fontFamily: "'Cormorant Garamond', serif", color: "#D4AF37", fontSize: "2.5rem", fontWeight: 700 }}>
                BS
              </span>
            </div>
            <h1 className="hero-title">
              Membangun solusi digital yang <span>skalabel, terukur, dan berdampak.</span>
            </h1>
          </div>
          <div className="hero-cta">
            <a href={`mailto:${email}`} className="btn btn-primary">
              <Mail size={15} /> Hubungi Saya
            </a>
            <a href={cvFile} download="BAYUSETIAWANV_CV.pdf" className="btn btn-secondary">
              <FileDown size={15} /> Unduh CV
            </a>
          </div>
          <div className="social-row">
            <IconLink href="https://www.linkedin.com/in/bayu-setiawan-7b51a6349" label="LinkedIn" emoji={SOCIALS.linkedin} />
            <IconLink href="https://github.com/BayuSetiawanv" label="GitHub" emoji={SOCIALS.github} />
            <IconLink href="https://www.instagram.com/_bayusetiawanv" label="Instagram" emoji={SOCIALS.instagram} />
          </div>
          <div className="hero-intro">
            <p>
              Halo, saya <strong>Bayu Setiawan</strong>. Software & AI Engineer yang berfokus pada pembangunan solusi <em>end-to-end</em>: mulai dari arsitektur backend, integrasi database, hingga deployment model Machine Learning dan LLM ke lingkungan produksi.
            </p>
            <p>
              Saya percaya bahwa kode yang baik bukan hanya yang berjalan di laptop sendiri, tetapi yang mampu menjembatani <strong>model AI yang kompleks dengan aplikasi web/mobile yang production-ready</strong>, serta memberikan dampak bisnis yang nyata.
            </p>
          </div>
        </div>
      </header>

      {/* STACK */}
      <section id="skill" className="section">
        <div className="portfolio-container">
          <SectionLabel n="01" title="Tech Stack" sub="Teknologi dan framework yang saya gunakan dalam pembangunan solusi." />
          <div className="stack-row">
            {stack.map((s) => (
              <StackChip key={s} name={s} />
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="proyek" className="section">
        <div className="portfolio-container">
          <SectionLabel n="02" title="Proyek Unggulan" sub="Solusi teknis yang telah saya rancang dan implementasikan di lingkungan industri." />
          <div className="projects-list">
            
            {/* PROYEK 1: LAMARKERJA.AI (BARU & PALING ATAS) */}
            <ProjectRow
              tag="AI SAAS PLATFORM"
              date="2026"
              title="LamarKerja.AI — AI-Powered CV Optimizer"
              desc="Platform SaaS full-stack yang memanfaatkan LLM (Groq API/Llama 3) untuk mengoptimalkan CV, menganalisis ATS score, dan generate cover letter. Dicapai 0% AI JSON parsing errors melalui robust prompt engineering dan fallback mechanisms."
              tags={["next.js", "fastapi", "typescript", "groq-api", "postgresql", "vercel"]}
              onOpen={() => openPage("lamarKerja")}
            />

            {/* PROYEK 2: SKRIPSI (DITAMBAHKAN METRIK BISNIS) */}
            <ProjectRow
              tag="MACHINE LEARNING"
              date="2026"
              title="Sistem Prediksi Produksi Lampu — PT Honoris Industry"
              desc="Aplikasi web Flask yang memprediksi kebutuhan produksi bulanan 10 varian lampu menggunakan Random Forest Regression. Berhasil mengurangi risiko overproduction sebesar ~3.900 unit/bulan melalui perencanaan yang lebih akurat."
              metrics={[
                { label: "R² Score", value: "0,81", unit: "" },
                { label: "MAPE", value: "8,29", unit: "%" },
                { label: "RMSE", value: "4.722", unit: "" },
                { label: "Data", value: "86", unit: "Bulan" },
              ]}
              tags={["python", "random-forest", "flask", "scikit-learn"]}
              onOpen={() => openPage("skripsi")}
            />

            {/* PROYEK 3: MAGANG 1 */}
            <ProjectRow
              tag="SOFTWARE ENGINEERING"
              date="2025"
              title="Sistem Kubikasi & Rekomendasi Kendaraan Distribusi"
              desc="Aplikasi mobile gudang yang mempercepat pencarian barang, menghitung kubikasi dan berat secara otomatis, serta merekomendasikan kendaraan distribusi untuk meningkatkan efisiensi operasional logistik."
              tags={["flutter", "dart", "sqlite", "algorithm"]}
              onOpen={() => openPage("internship")}
            />

            {/* PROYEK 4: MAGANG 2 */}
            <ProjectRow
              tag="SOFTWARE ENGINEERING"
              date="2025"
              title="Redesain & Mobilisasi HI Inventory System"
              desc="Migrasi sistem inventaris internal dari web ke aplikasi mobile Flutter. Mengintegrasikan REST API Laravel dan MySQL untuk mempercepat proses pemasukan/pengeluaran barang produksi secara real-time."
              tags={["flutter", "laravel", "mysql", "restapi"]}
              onOpen={() => openPage("research")}
            />

            {/* PROYEK 5: PROYEK LAINNYA (DIPERTAHANKAN TAPI DIPERHALUS NARASINYA) */}
            <ProjectRow
              tag="ARSIP PROYEK"
              title="Proyek Freelance & Pengembangan Pribadi"
              desc="Kumpulan proyek lain yang pernah saya kerjakan, termasuk redesain website Bapenda Kota Bogor, website portofolio klien, dan sistem CRUD latihan. Lihat detail lengkap di halaman arsip."
              tags={["php", "laravel", "react", "mysql"]}
              onOpen={() => openPage("anual")}
            />

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="tentang" className="section">
        <div className="portfolio-container">
          <SectionLabel n="03" title="Tentang Saya" />
          <div className="about-card">
            <p style={{ marginBottom: '16px' }}>
              Saya adalah Software & AI Engineer dengan pengalaman dalam membangun aplikasi <strong>end-to-end</strong> yang berbasis data. Saya memiliki rekam jejak yang kuat dalam mengembangkan sistem Machine Learning untuk industri manufaktur, termasuk model prediksi produksi (Random Forest, R² 0.81) yang mengoptimalkan perencanaan di 10 kategori produk, serta mengelola seluruh siklus hidup dari pra-pemrosesan data hingga deployment via Flask, Laravel, dan Flutter.
            </p>
            <p style={{ marginBottom: '16px' }}>
              Baru-baru ini, saya memperluas keahlian saya ke pengembangan <strong>Full-Stack AI</strong> dengan merancang platform SaaS berbasis LLM (Next.js, FastAPI) yang memiliki fitur prompt engineering tingkat lanjut, parsing data tidak terstruktur secara real-time, dan deployment cloud yang skalabel.
            </p>
            <p>
              Saya sangat nyaman menjembatani kesenjangan antara <strong>model AI yang kompleks dan aplikasi web/mobile yang production-ready</strong>. Saat ini, saya terbuka untuk berkontribusi sebagai Software Engineer atau AI Engineer di perusahaan yang berorientasi pada produk dan data.
            </p>
          </div>
        </div>
      </section>

      <Certifications />
      

      {/* CONNECT */}
      <section id="kontak" className="section">
        <div className="portfolio-container">
          <SectionLabel n="05" title="Mari Terhubung" sub="Terbuka untuk diskusi teknis, kolaborasi, atau peluang profesional." />
          <div className="connect-row">
            <IconLink href="https://www.linkedin.com/in/bayu-setiawan-7b51a6349" label="LinkedIn" emoji={SOCIALS.linkedin} />
            <IconLink href="https://github.com/BayuSetiawanv" label="GitHub" emoji={SOCIALS.github} />
            <IconLink href="https://www.instagram.com/_bayusetiawanv" label="Instagram" emoji={SOCIALS.instagram} />
            <button
              onClick={() => {
                navigator.clipboard?.writeText(email);
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
              }}
              className="copy-btn"
            >
              <Mail size={15} />
              <span>{copied ? "TERSALIN!" : email}</span>
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="portfolio-container footer-inner">
          <span className="footer-copy">© {new Date().getFullYear()} Bayu Setiawan — Dirancang & dibangun secara manual.</span>
        </div>
      </footer>
    </div>
  );
}