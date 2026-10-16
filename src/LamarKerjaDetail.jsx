import React, { useEffect } from "react";
import atsscoreimg from "./assets/Lamarkerja.ai/atsscore.png";
import coverletterimg from "./assets/Lamarkerja.ai/coverletter.png";
import daftarimg from "./assets/Lamarkerja.ai/daftar.png";
import dashboardimg from "./assets/Lamarkerja.ai/dashboard.png";
import hasilatsimg from "./assets/Lamarkerja.ai/hasilats.png";
import hasilcoverletterimg from "./assets/Lamarkerja.ai/hasilcoverletter.png";
import homeimg from "./assets/Lamarkerja.ai/home.png";
import loginimg from "./assets/Lamarkerja.ai/login.png";
import uploadcvimg from "./assets/Lamarkerja.ai/uploadcv.png";
import {
  ArrowLeft, Code2, ExternalLink, Database, Target, AlertTriangle,
  CheckCircle2, TrendingUp, BarChart3, ChevronRight, Sparkles,
  Brain, Lock, Globe,
} from "lucide-react";

/* ============ DESIGN TOKENS ============ */
const C = {
  navy: "#0D1B2A",
  navyMid: "#1B263B",
  navyLight: "#415A77",
  gold: "#D4AF37",
  goldSoft: "rgba(212,175,55,0.12)",
  cream: "#F7F3E9",
  gray: "#B8B2A4",
  stone: "#8A8478",
  serif: "'Cormorant Garamond', Georgia, serif",
  sans: "'IBM Plex Sans', sans-serif",
  mono: "'IBM Plex Mono', monospace",
};

function useGoogleFonts() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    const id = "portfolio-fonts-detail";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,500&family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap";
    document.head.appendChild(link);
  }, []);
}

/* ============ CONTAINER (INLINE STYLE — DIJAMIN RAPI) ============ */
function Container({ children, style }) {
  return (
    <div
      style={{
        maxWidth: 1160,
        width: "100%",
        margin: "0 auto",
        padding: "0 clamp(20px, 4vw, 40px)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ============ DIVIDER EMAS (seperti referensi) ============ */
function GoldDivider({ center }) {
  return (
    <div
      style={{
        width: 64,
        height: 1,
        background: C.gold,
        margin: center ? "28px auto" : "28px 0",
      }}
    />
  );
}

/* ============ SECTION LABEL ============ */
function SectionLabel({ n, title, sub }) {
  return (
    <div style={{ marginBottom: 56 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
        <span style={{ fontFamily: C.mono, fontSize: 12, letterSpacing: "0.25em", color: C.gold, fontWeight: 600 }}>
          {n}
        </span>
        <span style={{ width: 48, height: 1, background: C.gold, opacity: 0.45 }} />
        <span style={{ fontFamily: C.mono, fontSize: 10, letterSpacing: "0.22em", color: C.stone, textTransform: "uppercase" }}>
          Project Detail
        </span>
      </div>
      <h2 style={{ fontFamily: C.serif, fontSize: "clamp(2rem, 3.6vw, 2.75rem)", fontWeight: 600, color: C.cream, lineHeight: 1.15, margin: 0 }}>
        {title}
      </h2>
      {sub && (
        <p style={{ fontFamily: C.sans, fontSize: 15, lineHeight: 1.75, color: C.gray, marginTop: 14, maxWidth: 640 }}>
          {sub}
        </p>
      )}
    </div>
  );
}

/* ============ STAT CARD ============ */
function StatCard({ icon, value, label }) {
  return (
    <div
      style={{
        background: C.navyMid,
        border: `1px solid ${C.navyLight}`,
        borderRadius: 10,
        padding: 28,
        transition: "all .3s ease",
      }}
      className="royal-hover"
    >
      <div
        style={{
          width: 40, height: 40, borderRadius: 8,
          display: "flex", alignItems: "center", justifyContent: "center",
          background: C.goldSoft, color: C.gold, marginBottom: 22,
        }}
      >
        {icon}
      </div>
      <div style={{ fontFamily: C.serif, fontSize: "clamp(2rem, 6vw, 2.5rem)", fontWeight: 600, color: C.cream, lineHeight: 1 }}>
        {value}
      </div>
      <p style={{ fontFamily: C.sans, fontSize: 12.5, lineHeight: 1.6, color: C.gray, marginTop: 10 }}>
        {label}
      </p>
    </div>
  );
}

/* ============ TIMELINE ============ */
function TimelineItem({ n, title, desc, last }) {
  return (
    <div style={{ display: "flex", gap: 24, paddingBottom: last ? 0 : 44, position: "relative" }}>
      {!last && (
        <span
          style={{
            position: "absolute", left: 17, top: 40, bottom: 0, width: 1,
            background: "linear-gradient(to bottom, rgba(212,175,55,0.4), rgba(65,90,119,0.15))",
          }}
        />
      )}
      <span
        style={{
          width: 36, height: 36, borderRadius: "50%", flexShrink: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          border: `1px solid rgba(212,175,55,0.35)`, background: C.navy,
          fontFamily: C.mono, fontSize: 12, color: C.gold, fontWeight: 600,
        }}
      >
        {n}
      </span>
      <div style={{ paddingTop: 2 }}>
        <h4 style={{ fontFamily: C.serif, fontSize: 22, fontWeight: 600, color: C.cream, margin: 0 }}>
          {title}
        </h4>
        <p style={{ fontFamily: C.sans, fontSize: 14, lineHeight: 1.75, color: C.gray, marginTop: 8, maxWidth: 680 }}>
          {desc}
        </p>
      </div>
    </div>
  );
}

/* ============ METRIC CARD ============ */
function MetricCard({ label, value, unit, description, icon }) {
  return (
    <div
      className="royal-hover"
      style={{
        background: `linear-gradient(140deg, ${C.navyMid}, ${C.navy})`,
        border: `1px solid ${C.navyLight}`,
        borderRadius: 10,
        padding: 26,
        transition: "all .3s ease",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
        <span style={{ fontFamily: C.mono, fontSize: 10.5, letterSpacing: "0.18em", color: C.stone, textTransform: "uppercase" }}>
          {label}
        </span>
        <span style={{ color: C.gold }}>{icon}</span>
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
        <span style={{ fontFamily: C.serif, fontSize: "clamp(1.75rem, 5vw, 2.125rem)", fontWeight: 600, color: C.cream, lineHeight: 1 }}>
          {value}
        </span>
        {unit && <span style={{ fontFamily: C.mono, fontSize: 13, color: C.gold }}>{unit}</span>}
      </div>
      {description && (
        <p style={{ fontFamily: C.sans, fontSize: 12, lineHeight: 1.6, color: C.gray, marginTop: 12 }}>
          {description}
        </p>
      )}
    </div>
  );
}

/* ============ FEATURE CARD ============ */
function FeatureItem({ title, desc, src, number }) {
  return (
    <div
      className="royal-hover"
      style={{
        border: `1px solid ${C.navyLight}`,
        borderRadius: 10,
        overflow: "hidden",
        background: C.navyMid,
        transition: "all .3s ease",
      }}
    >
      <div style={{ position: "relative", borderBottom: `1px solid ${C.navyLight}`, background: C.navy }}>
        <span
          style={{
            position: "absolute", top: 14, left: 14, zIndex: 2,
            width: 30, height: 30, borderRadius: 6,
            display: "flex", alignItems: "center", justifyContent: "center",
            background: "rgba(13,27,42,0.85)", border: `1px solid ${C.navyLight}`,
            fontFamily: C.mono, fontSize: 10, color: C.gold, fontWeight: 600,
          }}
        >
          {number}
        </span>
        <img
          src={src}
          alt={title}
          style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", objectPosition: "top", display: "block" }}
        />
      </div>
      <div style={{ padding: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <h4 style={{ fontFamily: C.serif, fontSize: 20, fontWeight: 600, color: C.cream, margin: 0 }}>
            {title}
          </h4>
          <ChevronRight size={16} style={{ color: C.stone, flexShrink: 0 }} />
        </div>
        <p style={{ fontFamily: C.sans, fontSize: 13.5, lineHeight: 1.65, color: C.gray, marginTop: 8 }}>
          {desc}
        </p>
      </div>
    </div>
  );
}

/* ============ STACK CHIP ============ */
function StackChip({ name }) {
  return (
    <span
      style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        padding: "9px 18px", borderRadius: 999,
        border: `1px solid ${C.navyLight}`, background: C.navyMid,
        fontFamily: C.sans, fontSize: 12.5, color: C.cream,
      }}
    >
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.gold }} />
      {name}
    </span>
  );
}

/* ============ MAIN ============ */
export default function LamarKerjaDetail({ onBack }) {
  useGoogleFonts();
  const stack = [
    "Next.js", "React", "TypeScript", "Tailwind CSS", "FastAPI",
    "Python", "PostgreSQL", "Groq API", "PyMuPDF", "Zustand", "Vercel", "Railway",
  ];

  const sectionStyle = { padding: "clamp(56px, 9vw, 96px) 0", borderBottom: `1px solid rgba(65,90,119,0.4)` };

  return (
    <div style={{ minHeight: "100vh", background: C.navy, color: C.cream, overflowX: "hidden" }}>
      <style>{`
        .royal-hover:hover { transform: translateY(-4px); border-color: rgba(212,175,55,0.45) !important; box-shadow: 0 18px 40px rgba(0,0,0,0.35); }
        .royal-btn:hover { transform: translateY(-2px); }
      `}</style>

      {/* NAVBAR */}
      <nav
        style={{
          position: "sticky", top: 0, zIndex: 50,
          background: "rgba(13,27,42,0.92)", backdropFilter: "blur(12px)",
          borderBottom: `1px solid rgba(65,90,119,0.4)`,
        }}
      >
        <Container style={{ height: 64, display: "flex", alignItems: "center" }}>
          <button
            onClick={onBack}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              fontFamily: C.sans, fontSize: 11, fontWeight: 600,
              letterSpacing: "0.14em", color: C.gray, background: "none",
              border: "none", cursor: "pointer",
            }}
          >
            <ArrowLeft size={14} />
            KEMBALI KE PORTOFOLIO
          </button>
        </Container>
      </nav>

      {/* HERO — CENTERED & SIMETRIS (seperti referensi Royal) */}
      <header style={{ borderBottom: `1px solid rgba(65,90,119,0.4)`, position: "relative" }}>
        <div
          style={{
            position: "absolute", top: -200, left: "50%", transform: "translateX(-50%)",
            width: 700, height: 400, borderRadius: "50%",
            background: "rgba(212,175,55,0.06)", filter: "blur(110px)", pointerEvents: "none",
          }}
        />
        <Container style={{ position: "relative", padding: "clamp(64px, 10vw, 110px) clamp(20px,4vw,40px) clamp(56px, 9vw, 90px)", textAlign: "center" }}>
          <span
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "7px 16px", borderRadius: 999,
              border: "1px solid rgba(212,175,55,0.3)", background: "rgba(212,175,55,0.08)",
              fontFamily: C.mono, fontSize: 10, letterSpacing: "0.22em", color: C.gold, fontWeight: 600,
            }}
          >
            <Sparkles size={12} /> AI SAAS PLATFORM · 2026
          </span>

          <h1
            style={{
              fontFamily: C.serif, fontWeight: 600, color: C.cream,
              fontSize: "clamp(2.6rem, 8vw, 5.25rem)", lineHeight: 1.05,
              letterSpacing: "-0.01em", margin: "36px 0 0",
            }}
          >
            LamarKerja.AI
          </h1>
          <p
            style={{
              fontFamily: C.serif, fontStyle: "italic", fontSize: "clamp(1.4rem, 3vw, 2rem)",
              color: C.gray, margin: "10px 0 0", fontWeight: 500,
            }}
          >
            AI-Powered CV Optimizer<span style={{ color: C.gold }}>.</span>
          </p>

          <GoldDivider center />

          <p
            style={{
              fontFamily: C.sans, fontSize: 16, lineHeight: 1.85, color: C.gray,
              maxWidth: 720, margin: "0 auto",
            }}
          >
            Platform SaaS full-stack yang memanfaatkan{" "}
            <strong style={{ color: C.cream, fontWeight: 600 }}>Large Language Model (LLM)</strong> untuk
            mengoptimalkan CV, menganalisis ATS compatibility score, dan generate cover letter secara
            real-time — dibangun dengan Next.js, FastAPI, dan Groq API (Llama 3) berfokus pada{" "}
            <strong style={{ color: C.cream, fontWeight: 600 }}>prompt engineering yang robust</strong>.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: 14, marginTop: 40, flexWrap: "wrap" }}>
            <a
              href="https://lamar-kerja-j7tb.vercel.app"
              target="_blank" rel="noreferrer"
              className="royal-btn"
              style={{
                display: "inline-flex", alignItems: "center", gap: 9,
                background: C.gold, color: C.navy, borderRadius: 4,
                padding: "14px 28px", fontFamily: C.sans, fontSize: 12,
                fontWeight: 700, letterSpacing: "0.14em", transition: "all .3s ease",
              }}
            >
              <ExternalLink size={15} /> LIHAT WEBSITE
            </a>
            <a
              href="https://github.com/BayuSetiawanv/LamarKerja"
              target="_blank" rel="noreferrer"
              className="royal-btn"
              style={{
                display: "inline-flex", alignItems: "center", gap: 9,
                border: `1px solid ${C.navyLight}`, color: C.cream, borderRadius: 4,
                padding: "14px 28px", fontFamily: C.sans, fontSize: 12,
                fontWeight: 700, letterSpacing: "0.14em", transition: "all .3s ease",
              }}
            >
              <Code2 size={15} /> SOURCE CODE
            </a>
          </div>

          {/* METADATA GRID */}
          <div
            style={{
              marginTop: 72, display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
              border: `1px solid ${C.navyLight}`, borderRadius: 10, overflow: "hidden",
              background: C.navyMid, textAlign: "left",
            }}
          >
            {[
              ["Frontend", "Next.js (App Router)"],
              ["Backend", "FastAPI (Python)"],
              ["AI Model", "Groq API (Llama 3)"],
              ["Deployment", "Vercel & Railway"],
            ].map(([k, v], i) => (
              <div
                key={k}
                style={{
                  padding: "22px 26px", background: C.navy,
                  borderRight: i < 3 ? `1px solid rgba(65,90,119,0.4)` : "none",
                }}
              >
                <span style={{ fontFamily: C.mono, fontSize: 9.5, letterSpacing: "0.2em", color: C.stone, textTransform: "uppercase" }}>
                  {k}
                </span>
                <p style={{ fontFamily: C.serif, fontSize: 19, fontWeight: 600, color: C.cream, margin: "8px 0 0" }}>
                  {v}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </header>

      {/* 01 — GAMBARAN SINGKAT */}
      <section style={sectionStyle}>
        <Container>
          <SectionLabel n="01" title="Gambaran Singkat" sub="Ringkasan arsitektur sistem, teknologi utama, dan capaian teknis proyek." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: 18 }}>
            <StatCard icon={<Brain size={18} />} value="0%" label="AI JSON parsing errors berkat fallback & auto-retry mechanism." />
            <StatCard icon={<Database size={18} />} value="Async" label="Backend pipeline PyMuPDF + SQLAlchemy untuk parsing PDF." />
            <StatCard icon={<Lock size={18} />} value="JWT" label="Authentication dan konfigurasi CORS yang ketat." />
            <StatCard icon={<Globe size={18} />} value="100%" label="Responsive mobile-first dengan dukungan dark mode." />
          </div>
        </Container>
      </section>

      {/* 02 — LATAR BELAKANG */}
      <section style={sectionStyle}>
        <Container>
          <SectionLabel n="02" title="Latar Belakang & Tujuan" sub="Masalah yang melatarbelakangi pembangunan sistem dan tujuan yang ingin dicapai." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 20 }}>
            <div style={{ background: C.navyMid, border: `1px solid ${C.navyLight}`, borderRadius: 10, padding: 32 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <span style={{ width: 36, height: 36, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", background: C.goldSoft, color: C.gold }}>
                  <AlertTriangle size={17} />
                </span>
                <h3 style={{ fontFamily: C.serif, fontSize: 22, fontWeight: 600, color: C.cream, margin: 0 }}>Permasalahan</h3>
              </div>
              <p style={{ fontFamily: C.sans, fontSize: 14, lineHeight: 1.8, color: C.gray, margin: 0 }}>
                Proses melamar pekerjaan memakan waktu lama: menyesuaikan CV dengan requirement setiap
                perusahaan dan menyusun cover letter yang compelling. Banyak pelamar tidak menyadari apakah
                CV mereka ATS-friendly, sehingga lamaran tidak pernah sampai ke rekruter.
              </p>
            </div>
            <div style={{ background: "rgba(212,175,55,0.05)", border: "1px solid rgba(212,175,55,0.3)", borderRadius: 10, padding: 32 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <span style={{ width: 36, height: 36, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", background: C.goldSoft, color: C.gold }}>
                  <Target size={17} />
                </span>
                <h3 style={{ fontFamily: C.serif, fontSize: 22, fontWeight: 600, color: C.cream, margin: 0 }}>Tujuan Sistem</h3>
              </div>
              <p style={{ fontFamily: C.sans, fontSize: 14, lineHeight: 1.8, color: C.gray, margin: 0 }}>
                Membangun platform SaaS yang mengotomatisasi optimasi CV, memberikan ATS compatibility
                score, dan generate cover letter yang tailored secara real-time — memangkas waktu persiapan
                lamaran hingga 70% dengan hasil yang lebih profesional.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 03 — ARSITEKTUR */}
      <section style={sectionStyle}>
        <Container>
          <SectionLabel n="03" title="Arsitektur Sistem & AI Integration" sub="Desain sistem full-stack dengan integrasi LLM dan pipeline data yang robust." />
          <div style={{ maxWidth: 760 }}>
            <TimelineItem n="1" title="Frontend Architecture (Next.js)" desc="Next.js App Router dengan TypeScript untuk type safety, mobile-first responsive design via Tailwind CSS, dark mode, dan state management Zustand untuk performa optimal." />
            <TimelineItem n="2" title="Backend API (FastAPI)" desc="RESTful API berperforma tinggi dengan asynchronous processing, validasi Pydantic, dan dokumentasi API otomatis untuk menangani concurrent requests secara efisien." />
            <TimelineItem n="3" title="AI Integration & Prompt Engineering" desc="Integrasi Groq Cloud API (Llama 3) untuk ekstraksi data CV dan text generation, dengan robust prompt strategy berbasis fallback dan auto-retry yang menekan parsing error hingga 0%." />
            <TimelineItem n="4" title="Unstructured Data Processing" desc="Pipeline asynchronous PyMuPDF untuk ekstraksi teks PDF, memetakan data tidak terstruktur menjadi JSON terstruktur untuk penyimpanan PostgreSQL via SQLAlchemy ORM." />
            <TimelineItem n="5" title="DevOps & Security" desc="Deployment arsitektur decoupled via Vercel (frontend) dan Railway (backend), diamankan dengan JWT authentication dan konfigurasi CORS yang ketat." last />
          </div>
        </Container>
      </section>

      {/* 04 — METRIK */}
      <section style={sectionStyle}>
        <Container>
          <SectionLabel n="04" title="Hasil & Metrik Teknis" sub="Performa sistem dan capaian teknis setelah implementasi." />
          <div
            style={{
              background: "rgba(212,175,55,0.05)", border: "1px solid rgba(212,175,55,0.3)",
              borderRadius: 10, padding: "clamp(24px, 5vw, 40px)", marginBottom: 24,
              display: "flex", flexWrap: "wrap", gap: 32, alignItems: "center", justifyContent: "space-between",
            }}
          >
            <div style={{ maxWidth: 620 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                <CheckCircle2 size={15} style={{ color: C.gold }} />
                <span style={{ fontFamily: C.mono, fontSize: 10, letterSpacing: "0.22em", color: C.gold, fontWeight: 600 }}>
                  TECHNICAL ACHIEVEMENT
                </span>
              </div>
              <h3 style={{ fontFamily: C.serif, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 600, color: C.cream, margin: 0, lineHeight: 1.2 }}>
                Zero AI Parsing Errors dengan Robust Prompt Engineering
              </h3>
              <p style={{ fontFamily: C.sans, fontSize: 14, lineHeight: 1.7, color: C.gray, marginTop: 12 }}>
                Fallback mechanism dan auto-retry strategy memastikan 0% error rate saat parsing JSON dari respons LLM.
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <span style={{ fontFamily: C.serif, fontSize: "clamp(3rem, 12vw, 4.5rem)", fontWeight: 600, color: C.gold, lineHeight: 1 }}>0%</span>
              <p style={{ fontFamily: C.mono, fontSize: 10, letterSpacing: "0.2em", color: C.stone, marginTop: 6 }}>ERROR RATE</p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: 18 }}>
            <MetricCard label="Response Time" value="<2" unit="sec" description="Rata-rata respons Groq API untuk analisis CV dan cover letter." icon={<TrendingUp size={16} />} />
            <MetricCard label="ATS Accuracy" value="High" description="Analisis ATS score berdasarkan best practices industri." icon={<BarChart3 size={16} />} />
            <MetricCard label="Data Extraction" value="100%" description="Ekstraksi teks berhasil dari berbagai format PDF CV." icon={<Database size={16} />} />
            <MetricCard label="Security" value="JWT" description="Authentication dan CORS protection pada seluruh endpoint." icon={<Lock size={16} />} />
          </div>
        </Container>
      </section>

      {/* 05 — FITUR */}
      <section style={sectionStyle}>
        <Container>
          <SectionLabel n="05" title="Fitur Aplikasi" sub="Antarmuka aplikasi yang menampilkan fitur-fitur utama platform LamarKerja.AI." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: 20 }}>
            <FeatureItem number="01" title="Homepage & Landing" desc="Value proposition yang jelas dengan call-to-action prominent untuk registrasi." src={homeimg} />
            <FeatureItem number="02" title="Authentication System" desc="Login dan register dengan JWT token management." src={loginimg} />
            <FeatureItem number="03" title="Dashboard Utama" desc="Overview aktivitas pengguna, riwayat analisis CV, dan quick actions." src={dashboardimg} />
            <FeatureItem number="04" title="Upload & Parse CV" desc="Upload CV format PDF dengan progress indicator real-time." src={uploadcvimg} />
            <FeatureItem number="05" title="ATS Score Analysis" desc="Breakdown detail ATS score beserta rekomendasi improvement." src={atsscoreimg} />
            <FeatureItem number="06" title="Cover Letter Generator" desc="Cover letter tailored berdasarkan CV dan job description." src={coverletterimg} />
            <FeatureItem number="07" title="Hasil Analisis ATS" desc="Scoring metrics dan actionable recommendations." src={hasilatsimg} />
            <FeatureItem number="08" title="Hasil Cover Letter" desc="Siap di-copy atau diunduh dalam format rapi." src={hasilcoverletterimg} />
            <FeatureItem number="09" title="Daftar Riwayat" desc="Riwayat seluruh CV dan cover letter yang pernah dibuat." src={daftarimg} />
          </div>
        </Container>
      </section>

      {/* 06 — KETERBATASAN */}
      <section style={sectionStyle}>
        <Container>
          <SectionLabel n="06" title="Keterbatasan & Pengembangan Lanjutan" sub="Ruang pengembangan sistem yang masih dapat ditingkatkan pada versi berikutnya." />
          <div style={{ background: "rgba(212,175,55,0.05)", border: "1px solid rgba(212,175,55,0.3)", borderRadius: 10, padding: 32, display: "flex", gap: 20 }}>
            <span style={{ width: 40, height: 40, borderRadius: 8, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: C.goldSoft, color: C.gold }}>
              <AlertTriangle size={19} />
            </span>
            <div>
              <h3 style={{ fontFamily: C.serif, fontSize: 22, fontWeight: 600, color: C.cream, margin: 0 }}>Penanganan Keterbatasan</h3>
              <p style={{ fontFamily: C.sans, fontSize: 14, lineHeight: 1.8, color: C.gray, marginTop: 10, maxWidth: 760 }}>
                Sistem bergantung pada Groq API yang memiliki rate limiting. Pengembangan selanjutnya mencakup
                caching untuk mengurangi API calls, multi-language support, integrasi job boards untuk auto-fill
                job description, analytics untuk tracking success rate, serta fitur premium seperti unlimited
                CV storage dan priority AI processing.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 07 — STACK */}
      <section style={sectionStyle}>
        <Container>
          <SectionLabel n="07" title="Tech Stack" sub="Teknologi yang digunakan untuk membangun platform full-stack AI ini." />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {stack.map((s) => <StackChip key={s} name={s} />)}
          </div>
        </Container>
      </section>

      {/* FOOTER */}
      <footer>
        <Container style={{ padding: "clamp(32px, 6vw, 48px) clamp(20px,4vw,40px)", display: "flex", flexWrap: "wrap", gap: 24, alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <p style={{ fontFamily: C.serif, fontSize: 19, fontWeight: 600, color: C.cream, margin: 0 }}>Bayu Setiawan</p>
            <p style={{ fontFamily: C.mono, fontSize: 10, letterSpacing: "0.16em", color: C.stone, marginTop: 6 }}>
              LAMARKERJA.AI · 2026
            </p>
          </div>
          <button
            onClick={onBack}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              border: `1px solid ${C.navyLight}`, borderRadius: 4, padding: "11px 18px",
              fontFamily: C.sans, fontSize: 10.5, fontWeight: 600, letterSpacing: "0.14em",
              color: C.gray, background: "none", cursor: "pointer",
            }}
          >
            <ArrowLeft size={13} /> KEMBALI KE PORTOFOLIO
          </button>
        </Container>
      </footer>
    </div>
  );
}