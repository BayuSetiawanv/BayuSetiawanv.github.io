import React, { useEffect } from "react";
import {
  ArrowLeft, ArrowUpRight, Code2, Sparkles,
  LayoutGrid, Truck, UtensilsCrossed, Globe, Boxes, BarChart3,
} from "lucide-react";

const C = {
  navy: "#0D1B2A", navyMid: "#1B263B", navyLight: "#415A77",
  gold: "#D4AF37", goldSoft: "rgba(212,175,55,0.12)",
  cream: "#F7F3E9", gray: "#B8B2A4", stone: "#8A8478",
  serif: "'Cormorant Garamond', Georgia, serif",
  sans: "'IBM Plex Sans', sans-serif", mono: "'IBM Plex Mono', monospace",
};

function useGoogleFonts() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    const id = "portfolio-fonts-archive";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id; link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,500&family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap";
    document.head.appendChild(link);
  }, []);
}

function Container({ children, style }) {
  return (
    <div style={{ maxWidth: 1160, width: "100%", margin: "0 auto", padding: "0 clamp(20px, 4vw, 40px)", ...style }}>
      {children}
    </div>
  );
}

function GoldDivider({ center }) {
  return <div style={{ width: 64, height: 1, background: C.gold, margin: center ? "28px auto" : "28px 0" }} />;
}

function SectionLabel({ n, title, sub }) {
  return (
    <div style={{ marginBottom: 56 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
        <span style={{ fontFamily: C.mono, fontSize: 12, letterSpacing: "0.25em", color: C.gold, fontWeight: 600 }}>{n}</span>
        <span style={{ width: 48, height: 1, background: C.gold, opacity: 0.45 }} />
        <span style={{ fontFamily: C.mono, fontSize: 10, letterSpacing: "0.22em", color: C.stone, textTransform: "uppercase" }}>Portfolio Archive</span>
      </div>
      <h2 style={{ fontFamily: C.serif, fontSize: "clamp(2rem, 3.6vw, 2.75rem)", fontWeight: 600, color: C.cream, lineHeight: 1.15, margin: 0 }}>{title}</h2>
      {sub && <p style={{ fontFamily: C.sans, fontSize: 15, lineHeight: 1.75, color: C.gray, marginTop: 14, maxWidth: 640 }}>{sub}</p>}
    </div>
  );
}

function StackChip({ name }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 12px", borderRadius: 999, border: `1px solid ${C.navyLight}`, background: C.navyMid, fontFamily: C.sans, fontSize: 11, color: C.cream }}>
      <span style={{ width: 5, height: 5, borderRadius: "50%", background: C.gold }} />
      {name}
    </span>
  );
}

const PROJECTS = [
  {
    id: "prediksi-produksi-lampu", category: "Skripsi", year: "2026",
    icon: <BarChart3 size={18} />, title: "Sistem Prediksi Produksi Lampu",
    org: "PT Honoris Industry",
    desc: "Aplikasi web Flask untuk memprediksi kebutuhan produksi bulanan 10 kategori produk lampu LED menggunakan Random Forest Regression, dilatih dari 86 bulan data historis.",
    stack: ["Python", "Flask", "Scikit-learn", "Random Forest"],
    metric: { value: "81,4%", label: "R² Score" },
    hasDetail: true,
    links: {
      demo: "https://drive.google.com/file/d/1UpVXX35jbMKvtajs3QGoRjuEqNyT-ktm/view?usp=drivesdk",
      code: "https://github.com/BayuSetiawanv/Random-Forest-Prediksi-Produksi",
    },
  },
  {
    id: "kubikasi-armada", category: "Magang", year: "2025",
    icon: <Truck size={18} />, title: "Sistem Kubikasi Armada Kendaraan",
    org: "PT Honoris Industry",
    desc: "Aplikasi mobile untuk menghitung dan mengelola kapasitas muatan (kubikasi) armada kendaraan distribusi guna mendukung efisiensi perencanaan pengiriman.",
    stack: ["Dart", "Flutter"],
    hasDetail: false,
  },
  {
    id: "hi-inventory-redesign", category: "Magang", year: "2025",
    icon: <Boxes size={18} />, title: "Redesain HI Inventory",
    org: "PT Honoris Industry",
    desc: "Perombakan sistem inventaris internal perusahaan, mencakup ulang alur data, antarmuka, dan integrasi API untuk mendukung operasional gudang.",
    stack: ["Flutter", "Laravel", "MySQL", "REST API"],
    hasDetail: false,
  },
  {
    id: "food-ordering-crud", category: "Personal", year: null,
    icon: <UtensilsCrossed size={18} />, title: "Aplikasi Pemesanan Makanan",
    org: "Proyek Latihan",
    desc: "Sistem CRUD pemesanan makanan berbasis Laravel yang mencakup manajemen menu, pesanan, dan status transaksi.",
    stack: ["Laravel", "MySQL"],
    hasDetail: false,
  },
  {
    id: "client-portfolio-sites", category: "Freelance", year: null,
    icon: <LayoutGrid size={18} />, title: "Website Portofolio Klien",
    org: "Proyek Freelance",
    desc: "Serangkaian situs portofolio untuk klien yang dibangun menggunakan PHP native, disesuaikan dengan kebutuhan dan identitas masing-masing klien.",
    stack: ["PHP", "MySQL", "HTML/CSS"],
    hasDetail: false,
  },
  {
    id: "bapenda-bogor-redesign", category: "Freelance", year: null,
    icon: <Globe size={18} />, title: "Redesain Website Bapenda Kota Bogor",
    org: "Proyek Freelance",
    desc: "Perombakan tampilan dan struktur website Bapenda Kota Bogor untuk meningkatkan kejelasan informasi dan kemudahan navigasi bagi pengguna.",
    stack: ["PHP", "HTML/CSS"],
    hasDetail: false,
  },
];

function ProjectCard({ project, index, onSelect }) {
  const clickable = project.hasDetail && onSelect;
  return (
    <div
      onClick={clickable ? () => onSelect(project) : undefined}
      className="royal-hover"
      style={{
        display: "flex", flexDirection: "column", overflow: "hidden",
        borderRadius: 10, border: `1px solid ${C.navyLight}`,
        background: C.navyMid, transition: "all .3s ease",
        cursor: clickable ? "pointer" : "default",
      }}
    >
      <div style={{ position: "relative", borderBottom: `1px solid ${C.navyLight}`, background: "rgba(13,27,42,0.6)", padding: 24 }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          <span style={{ width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 8, border: "1px solid rgba(212,175,55,0.2)", background: C.goldSoft, color: C.gold }}>
            {project.icon}
          </span>
          <span style={{ fontFamily: C.mono, fontSize: 10, fontWeight: 600, letterSpacing: "0.2em", color: C.stone }}>
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div style={{ marginTop: 20, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8 }}>
          <span style={{ borderRadius: 999, border: "1px solid rgba(212,175,55,0.3)", background: C.goldSoft, padding: "4px 10px", fontFamily: C.mono, fontSize: 9, fontWeight: 600, letterSpacing: "0.15em", color: C.gold, textTransform: "uppercase" }}>
            {project.category}
          </span>
          {project.year && <span style={{ fontFamily: C.mono, fontSize: 10, letterSpacing: "0.1em", color: C.stone }}>{project.year}</span>}
        </div>
      </div>

      <div style={{ padding: 24, flex: 1, display: "flex", flexDirection: "column" }}>
        <h3 style={{ fontFamily: C.serif, fontSize: 22, fontWeight: 600, color: C.cream, margin: 0, lineHeight: 1.2 }}>{project.title}</h3>
        <p style={{ fontFamily: C.sans, fontSize: 12, fontWeight: 500, color: C.stone, margin: "6px 0 0" }}>{project.org}</p>
        <p style={{ fontFamily: C.sans, fontSize: 13.5, lineHeight: 1.65, color: C.gray, margin: "14px 0 0" }}>{project.desc}</p>
        
        {project.metric && (
          <div style={{ marginTop: 20, paddingTop: 16, borderTop: `1px solid rgba(65,90,119,0.4)`, display: "flex", alignItems: "baseline", gap: 8 }}>
            <span style={{ fontFamily: C.serif, fontSize: 24, fontWeight: 600, color: C.gold }}>{project.metric.value}</span>
            <span style={{ fontFamily: C.mono, fontSize: 10, letterSpacing: "0.15em", color: C.stone, textTransform: "uppercase" }}>{project.metric.label}</span>
          </div>
        )}
        
        <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 6 }}>
          {project.stack.map((s) => <StackChip key={s} name={s} />)}
        </div>

        <div style={{ marginTop: 20, paddingTop: 16, borderTop: `1px solid rgba(65,90,119,0.4)`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {clickable ? (
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: C.sans, fontSize: 12, fontWeight: 600, color: C.gold }}>
              Lihat Detail <ArrowUpRight size={14} />
            </span>
          ) : (
            <span style={{ fontFamily: C.mono, fontSize: 10, letterSpacing: "0.15em", color: C.stone, textTransform: "uppercase" }}>Ringkasan Proyek</span>
          )}
          {project.links?.code && (
            <a href={project.links.code} onClick={(e) => e.stopPropagation()} target="_blank" rel="noreferrer" style={{ color: C.stone, transition: "color .3s ease" }} aria-label="Source code">
              <Code2 size={15} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsArchive({ onBack, onSelectProject }) {
  useGoogleFonts();
  const total = PROJECTS.length;
  const categories = [...new Set(PROJECTS.map((p) => p.category))].length;
  const sectionStyle = { padding: "clamp(56px, 9vw, 96px) 0" };

  return (
    <div style={{ minHeight: "100vh", background: C.navy, color: C.cream, overflowX: "hidden" }}>
      <style>{`.royal-hover:hover { transform: translateY(-4px); border-color: rgba(212,175,55,0.45) !important; box-shadow: 0 18px 40px rgba(0,0,0,0.35); }`}</style>

      <nav style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(13,27,42,0.92)", backdropFilter: "blur(12px)", borderBottom: `1px solid rgba(65,90,119,0.4)` }}>
        <Container style={{ height: 64, display: "flex", alignItems: "center" }}>
          <button onClick={onBack} style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: C.sans, fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", color: C.gray, background: "none", border: "none", cursor: "pointer" }}>
            <ArrowLeft size={14} /> KEMBALI KE BERANDA
          </button>
        </Container>
      </nav>

      <header style={{ borderBottom: `1px solid rgba(65,90,119,0.4)`, position: "relative" }}>
        <div style={{ position: "absolute", top: -200, left: "50%", transform: "translateX(-50%)", width: 700, height: 400, borderRadius: "50%", background: "rgba(212,175,55,0.06)", filter: "blur(110px)", pointerEvents: "none" }} />
        <Container style={{ position: "relative", padding: "110px clamp(20px,4vw,40px) 70px", textAlign: "center" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 16px", borderRadius: 999, border: "1px solid rgba(212,175,55,0.3)", background: "rgba(212,175,55,0.08)", fontFamily: C.mono, fontSize: 10, letterSpacing: "0.22em", color: C.gold, fontWeight: 600 }}>
            <Sparkles size={12} /> SELURUH PROYEK
          </span>
          <h1 style={{ fontFamily: C.serif, fontWeight: 600, color: C.cream, fontSize: "clamp(2.6rem, 8vw, 5.25rem)", lineHeight: 1.05, letterSpacing: "-0.01em", margin: "36px 0 0" }}>
            Proyek yang pernah
          </h1>
          <p style={{ fontFamily: C.serif, fontStyle: "italic", fontSize: "clamp(1.4rem, 3vw, 2rem)", color: C.gray, margin: "10px 0 0", fontWeight: 500 }}>
            saya bangun<span style={{ color: C.gold }}>.</span>
          </p>
          <GoldDivider center />
          <p style={{ fontFamily: C.sans, fontSize: 16, lineHeight: 1.85, color: C.gray, maxWidth: 720, margin: "0 auto" }}>
            Kumpulan proyek dari pengalaman magang, freelance, dan pengembangan pribadi —
            mencakup sistem machine learning, aplikasi mobile, dan pengembangan web.
          </p>

          <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))", border: `1px solid ${C.navyLight}`, borderRadius: 10, overflow: "hidden", background: C.navyMid, textAlign: "left", maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}>
            {[["Total Proyek", total], ["Kategori", categories], ["Stack Utama", "6+"]].map(([k, v], i, arr) => (
              <div key={k} style={{ padding: "22px 26px", background: C.navy, borderRight: i < arr.length - 1 ? `1px solid rgba(65,90,119,0.4)` : "none" }}>
                <span style={{ fontFamily: C.mono, fontSize: 9.5, letterSpacing: "0.2em", color: C.stone, textTransform: "uppercase" }}>{k}</span>
                <p style={{ fontFamily: C.serif, fontSize: 24, fontWeight: 600, color: C.cream, margin: "8px 0 0" }}>{v}</p>
              </div>
            ))}
          </div>
        </Container>
      </header>

      <section style={sectionStyle}>
        <Container>
          <SectionLabel n="01" title="Daftar Proyek" sub="Berbagai proyek yang pernah saya kerjakan, baik untuk keperluan magang, freelance, maupun pengembangan pribadi." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: 20 }}>
            {PROJECTS.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} onSelect={onSelectProject} />
            ))}
          </div>
        </Container>
      </section>

      <footer>
        <Container style={{ padding: "clamp(32px, 6vw, 48px) clamp(20px,4vw,40px)", borderTop: `1px solid rgba(65,90,119,0.4)`, display: "flex", flexWrap: "wrap", gap: 24, alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <p style={{ fontFamily: C.serif, fontSize: 19, fontWeight: 600, color: C.cream, margin: 0 }}>Bayu Setiawan</p>
            <p style={{ fontFamily: C.mono, fontSize: 10, letterSpacing: "0.16em", color: C.stone, marginTop: 6 }}>ARSIP PROYEK · {new Date().getFullYear()}</p>
          </div>
          <button onClick={onBack} style={{ display: "inline-flex", alignItems: "center", gap: 8, border: `1px solid ${C.navyLight}`, borderRadius: 4, padding: "11px 18px", fontFamily: C.sans, fontSize: 10.5, fontWeight: 600, letterSpacing: "0.14em", color: C.gray, background: "none", cursor: "pointer" }}>
            <ArrowLeft size={13} /> KEMBALI KE BERANDA
          </button>
        </Container>
      </footer>
    </div>
  );
}