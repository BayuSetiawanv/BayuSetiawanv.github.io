import React, { useEffect, useState } from "react";
import { Mail, FileDown, ArrowUpRight } from "lucide-react";
import cvFile from "./assets/CV_Bayu_Setiawanv.pdf";
import SkripsiDetail from "./SkripsiDetail";
import Skripsidetail2 from "./Skripsidetail2";
import Skripsidetail3 from "./Skripsidetail3";
import ProjectsArchive from "./ProjectsArchive";
import "./index.css";

const SOCIALS = {
  linkedin: "💼",
  github: "💻",
  instagram: "📸",
};


function useGoogleFonts() {
  useEffect(() => {
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

function IconLink({ href, label, emoji }) {
  return (
    <a href={href} className="icon-link">
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

function ProjectRow({ tag, title, desc, metrics, tags, href, date, onOpen }) {
  const content = (
    <>
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
    </>
  );

  if (onOpen) {
    return (
      <a
        href="#"
        className="project-card"
        onClick={(e) => {
          e.preventDefault();
          onOpen();
        }}
      >
        {content}
      </a>
    );
  }

  return (
    <a href={href} className="project-card">
      {content}
    </a>
  );
}

export default function Portfolio() {
  useGoogleFonts();
  const [copied, setCopied] = useState(false);
  const [page, setPage] = useState("home"); 
  const [scrollY, setScrollY] = useState(0);
  const email = "bayusetiawanv916@gmail.com";

  const openPage = (target) => {
  setScrollY(window.scrollY); // simpan posisi saat ini
  setPage(target);
  };

  const goHome = () => {
  setPage("home");

  // tunggu Home dirender, lalu kembalikan scroll
  setTimeout(() => {
    window.scrollTo({
      top: scrollY,
      behavior: "smooth",
    });
  }, 50);
  };

  const stack = [
    "Python","JavaScript","Dart", "Php","Scikit-learn", "Random Forest", "Pandas", "NumPy",
    "Flask", "Html/Css", "Bootstrap", "Google Colab", "Git","React", "Mysql", "Restful API", "Flutter", "Laravel", "Android Mobile", 
  ];

  

  if (page === "skripsi") {
    return <SkripsiDetail onBack={goHome} />;
  }

  if (page === "internship") {
  return <Skripsidetail2 onBack={goHome} />;
  }

  if (page === "research") {
  return <Skripsidetail3 onBack={goHome} />;
  }

  if (page === "anual") {
  return <ProjectsArchive onBack={goHome} />;
  }

  return (
    <div>
      {/* NAV */}
      <nav className="navbar">
        <div className="portfolio-container navbar-inner">
          <span className="nav-name">BAYU SETIAWAN</span>
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
          <div className="hero-eyebrow">PORTOFOLIO — SOFTWARE ENGINEER &amp; MACHINE LEARNING</div>
          <div className="hero-top">
            <div
              className="profile-image"
              style={{
                width: 140,
                height: 140,
                background: "linear-gradient(135deg, #2E4E55, #141B1E)",
              }}
            >
              <span style={{ fontFamily: "'Space Grotesk',sans-serif", color: "#F0A93A", fontSize: "2rem", fontWeight: 700 }}>
                BS
              </span>
            </div>
            <h1 className="hero-title">
              Menulis kode yang menyelesaikan masalah nyata, <span>bukan sekadar berjalan di laptop sendiri.</span>
            </h1>
          </div>

          <div className="hero-cta">
            <a href={`mailto:${email}`} className="btn btn-primary">
              <Mail size={15} /> bayusetiawanv916@gmail.com
            </a>
            <a
               href={cvFile}
               download="CV_BAYUSETIAWAN.pdf"
               className="btn btn-secondary"
              >
               <FileDown size={15} />
                CV SAYA
            </a>
          </div>

          <div className="social-row">
            <IconLink href="https://www.linkedin.com/in/bayu-setiawan-7b51a6349?utm_source=share_via&utm_content=profile&utm_medium=member_ios" label="LinkedIn" emoji={SOCIALS.linkedin} />
            <IconLink href="https://github.com/BayuSetiawanv" label="GitHub" emoji={SOCIALS.github} />
            <IconLink href="https://www.instagram.com/_bayusetiawanv?igsi=MTVvMHBpcm1heTZ3&wa_status_inline=true" label="Instagram" emoji={SOCIALS.instagram} />
          </div>

          <p className="hero-intro">
           <h1 clasname="hero-intro"> Halo, Saya Bayu Setiawan.</h1>
            Software Engineer yang membangun solusi melalui teknologi dan data.
            <p>
           <h1>  Saya senang mengubah permasalahan nyata menjadi solusi digital — mulai 
            dari aplikasi web dan mobile, sistem backend, hingga model Machine Learning yang 
            terintegrasi ke dalam aplikasi.
            Mari lihat perjalanan, proyek, dan solusi yang telah saya bangun. </h1> 
            </p>
          </p>
        </div>
      </header>

      {/* STACK */}
      <section id="skill" className="section">
        <div className="portfolio-container">
          <SectionLabel n="01" title="Stack Saya 🚀" />
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
          <SectionLabel n="02" title="Project Terbaru" sub="Beberapa project yang sudah saya bangun" />
          <div className="projects-list">
            <ProjectRow
              tag="SKRIPSI"
              date="2026"
              title="Sistem Prediksi Produksi Lampu — PT Honoris Industry"
              desc="Model Random Forest Regression untuk memprediksi kebutuhan produksi 10 varian lampu.
               Dilatih di Google Colab dan di-deploy sebagai aplikasi web (Flask), 
               lengkap dengan halaman evaluasi model dan cross-validation per produk."
              metrics={[
                { label: "MAE", value: "3,797,26", unit: "" },
                { label: "RMSE", value: "4,722,97", unit: "" },
                { label: "R²", value: "0,81", unit: "" },
                { label: "MAPE", value: "8,29", unit: "%" },
              ]}
              tags={["python", "randomforest", "flask", "colab"]}
              onOpen={() => openPage("skripsi")}
            />
            <ProjectRow
              tag="INTERNSHIP 2025"
              title="Sistem Rekomendasi Kendaraan Berdasarkan Kubikasi Berbasis Mobile - PT Honoris Industry"
              desc="Pengembangan aplikasi gudang berbasis mobile di PT Honoris Industry yang mampu mempercepat pencarian barang,
               menghitung kubikasi dan berat secara otomatis, 
               serta merekomendasikan kendaraan distribusi untuk meningkatkan efisiensi operasional gudang."
              tags={["Flutter", "Dart", "Sqlite", "Restful API","android mobile"]}
              onOpen={() => openPage("internship")}
            />
            <ProjectRow
              tag="INTERNSHIP 2025"
              title="Pengembangan Aplikasi Mobile HI Inventory Berbasis Flutter dengan Integrasi REST API Laravel dan Database MySQL pada PT Honoris Industry"
              desc="Proyek ini merupakan kegiatan redesain sistem HI Inventory milik 
              PT Honoris Industry dari platform berbasis website menjadi aplikasi mobile 
              menggunakan Flutter. Aplikasi dikembangkan untuk mempermudah proses pengelolaan data 
              pemasukan dan pengeluaran barang produksi melalui perangkat mobile. 
              Dalam implementasinya, aplikasi Flutter terintegrasi dengan backend Laravel melalui REST API dan database MySQL, 
              sehingga proses pengelolaan dan akses data inventori dapat dilakukan secara lebih efektif dan efisien."
              tags={["Flutter", "Dart", "MySQL", "Restful API", "Laravel", "Php", "Android Mobile"]}
              onOpen={() => openPage("research")}
            />
            <ProjectRow
              tag="PROYEK LAINNYA"
              title="Beberapa Proyek Lainnya"
              desc="Berikut beberapa proyek lain yang pernah saya kerjakan, termasuk proyek semasa kuliah dan proyek pribadi,
              yang hilang karena data lama dan tidak sempat di-backup. Beberapa proyek ini mencakup pengembangan website,"
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
            Halo! 👋 Saya Bayu Setiawan, Software Engineer fresh graduate
            yang terbiasa membangun aplikasi web dan mobile secara end to end
            dari backend, database, hingga integrasi API. Saya berpengalaman 
            mengembangkan aplikasi web dan mobile menggunakan Flutter, Laravel, 
            Flask, serta MySQL, termasuk membangun sistem prediksi produksi 
            berbasis Random Forest dan meredesain sistem inventori perusahaan 
            menjadi aplikasi mobile selama magang di PT Honoris Industry. 
            Saya senang membangun solusi digital yang tidak hanya berfungsi 
            dengan baik secara teknis, tetapi juga mampu menyelesaikan permasalahan 
            nyata di lingkungan industri. Saat ini saya terbuka untuk kesempatan 
            sebagai Software Engineer, Backend Developer, maupun Machine Learning Engineer.
          </div>
        </div>
      </section>

      {/* CONNECT */}
      <section id="kontak" className="section">
        <div className="portfolio-container">
          <SectionLabel n="04" title="Jangan Sungkan 😁" sub="Terhubung dengan saya" />
          <div className="connect-row">
            <IconLink href="https://www.linkedin.com/in/bayu-setiawan-7b51a6349?utm_source=share_via&utm_content=profile&utm_medium=member_ios" label="LinkedIn" emoji={SOCIALS.linkedin} />
            <IconLink href="https://github.com/BayuSetiawanv" label="GitHub" emoji={SOCIALS.github} />
            <IconLink href="https://www.instagram.com/_bayusetiawanv?igsi=MTVvMHBpcm1heTZ3&wa_status_inline=true" label="Instagram" emoji={SOCIALS.instagram} />
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
          <span className="footer-copy">© 2026 Bayu Setiawan — dibuat manual, bukan generator portofolio.</span>
          <div className="footer-links">
            {[""].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

          
