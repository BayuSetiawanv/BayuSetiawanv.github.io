import React, { useState } from "react";
import sertifikat1 from "./assets/sertifikat/sertifikat1.jpeg";
import sertifikat2 from "./assets/sertifikat/sertifikat2.jpeg";
import sertifikat3 from "./assets/sertifikat/sertifikat3.jpeg";
import { Award, X, ZoomIn } from "lucide-react";

/* ============ DESIGN TOKENS (sama dengan halaman detail) ============ */
const C = {
  navy: "#0D1B2A", navyMid: "#1B263B", navyLight: "#415A77",
  gold: "#D4AF37", goldSoft: "rgba(212,175,55,0.12)",
  cream: "#F7F3E9", gray: "#B8B2A4", stone: "#8A8478",
  serif: "'Cormorant Garamond', Georgia, serif",
  sans: "'IBM Plex Sans', sans-serif", mono: "'IBM Plex Mono', monospace",
};

/* =========================================================
   DATA SERTIFIKAT — EDIT BAGIAN INI SESUAI MILIK ANDA
========================================================= */
const CERTIFICATES = [
  {
    id: "servicenow-agentic-ai",
    title: "Agentic AI Executive Micro-Certification",
    issuer: "ServiceNow",
    date: "Oktober 2026",
    img: sertifikat1,
  },
  {
    id: "comstrac-smart-student",
    title: "Agentic AI 'Smart Student with AI' Certification",
    issuer: "ComSTraC — Computing Centre, Universitas Pakuan",
    date: "Oktober 2026",
    img: sertifikat2,
  },
  {
    id: "sertifikat-ketiga",
    title: "Committee Member – Seminar 2024",   // ← GANTI sesuai sertifikat Anda
    issuer: "Department of Education, Student Executive Board (BEM) FMIPA, Universitas Pakuan",           // ← GANTI
    date: "Oktober 2024",                     // ← GANTI
    img: sertifikat3,
  },
];

/* ============ SECTION HEAD ============ */
function SectionHead({ n, title, sub }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 8 }}>
        <span style={{ fontFamily: C.serif, fontSize: 20, fontWeight: 600, color: C.gold }}>{n}</span>
        <span style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(65,90,119,1), transparent)" }} />
      </div>
      <h2 style={{ fontFamily: C.serif, fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 600, color: C.cream, margin: 0 }}>
        {title}
      </h2>
      {sub && (
        <p style={{ fontFamily: C.sans, fontSize: 15, lineHeight: 1.7, color: C.gray, marginTop: 8, maxWidth: 560 }}>
          {sub}
        </p>
      )}
    </div>
  );
}

/* ============ CERTIFICATE CARD ============ */
function CertificateCard({ cert, index, onOpen }) {
  return (
    <div
      className="royal-hover"
      onClick={() => onOpen(cert)}
      style={{
        cursor: "zoom-in",
        border: `1px solid ${C.navyLight}`,
        borderRadius: 10,
        overflow: "hidden",
        background: C.navyMid,
        transition: "all .3s ease",
      }}
    >
      <div style={{ position: "relative", background: C.navy, borderBottom: `1px solid ${C.navyLight}` }}>
        <span style={{ position: "absolute", top: 12, left: 12, zIndex: 2, width: 30, height: 30, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(13,27,42,0.85)", border: `1px solid ${C.navyLight}`, fontFamily: C.mono, fontSize: 10, color: C.gold, fontWeight: 600 }}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <span style={{ position: "absolute", top: 12, right: 12, zIndex: 2, width: 30, height: 30, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(13,27,42,0.85)", border: `1px solid ${C.navyLight}`, color: C.gold }}>
          <ZoomIn size={14} />
        </span>
        <img
          src={cert.img}
          alt={cert.title}
          style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", objectPosition: "top", display: "block" }}
        />
      </div>
      <div style={{ padding: 22 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
          <Award size={16} style={{ color: C.gold, flexShrink: 0 }} />
          <span style={{ fontFamily: C.mono, fontSize: 10, letterSpacing: "0.18em", color: C.stone, textTransform: "uppercase" }}>
            {cert.date}
          </span>
        </div>
        <h3 style={{ fontFamily: C.serif, fontSize: 20, fontWeight: 600, color: C.cream, margin: 0, lineHeight: 1.25 }}>
          {cert.title}
        </h3>
        <p style={{ fontFamily: C.sans, fontSize: 12.5, lineHeight: 1.6, color: C.gray, marginTop: 6 }}>
          {cert.issuer}
        </p>
      </div>
    </div>
  );
}

/* ============ MAIN COMPONENT ============ */
export default function Certifications() {
  const [active, setActive] = useState(null);

  return (
    <section id="sertifikasi" style={{ padding: "clamp(48px, 8vw, 88px) 0" }}>
      <style>{`.royal-hover:hover { transform: translateY(-4px); border-color: rgba(212,175,55,0.45) !important; box-shadow: 0 18px 40px rgba(0,0,0,0.35); }`}</style>

      <div style={{ maxWidth: 1160, width: "100%", margin: "0 auto", padding: "0 clamp(20px, 4vw, 40px)" }}>
        <SectionHead
          n="04"
          title="Sertifikasi"
          sub="Pengakuan profesional yang memvalidasi kompetensi saya di bidang AI dan teknologi modern."
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, inmax(min(100%, 280px), 1fr))", gap: 20 }}>
          {CERTIFICATES.map((cert, i) => (
            <CertificateCard key={cert.id} cert={cert} index={i} onOpen={setActive} />
          ))}
        </div>
      </div>

      {/* LIGHTBOX — klik kartu untuk melihat sertifikat ukuran penuh */}
      {active && (
        <div
          onClick={() => setActive(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 100,
            background: "rgba(13,27,42,0.94)", backdropFilter: "blur(10px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "clamp(16px, 4vw, 48px)", cursor: "zoom-out",
          }}
        >
          <button
            onClick={() => setActive(null)}
            aria-label="Tutup"
            style={{
              position: "absolute", top: 20, right: 24,
              width: 40, height: 40, borderRadius: 8,
              display: "flex", alignItems: "center", justifyContent: "center",
              background: C.navyMid, border: `1px solid ${C.navyLight}`,
              color: C.cream, cursor: "pointer",
            }}
          >
            <X size={18} />
          </button>
          <figure style={{ margin: 0, maxWidth: 900, width: "100%", textAlign: "center" }} onClick={(e) => e.stopPropagation()}>
            <img
              src={active.img}
              alt={active.title}
              style={{
                width: "100%", maxHeight: "76vh", objectFit: "contain",
                borderRadius: 8, border: `1px solid ${C.navyLight}`,
                boxShadow: "0 30px 80px rgba(0,0,0,0.55)", background: "#ffffff",
              }}
            />
            <figcaption style={{ marginTop: 16 }}>
              <p style={{ fontFamily: C.serif, fontSize: 20, fontWeight: 600, color: C.cream, margin: 0 }}>
                {active.title}
              </p>
              <p style={{ fontFamily: C.mono, fontSize: 11, letterSpacing: "0.15em", color: C.gold, marginTop: 6, textTransform: "uppercase" }}>
                {active.issuer} · {active.date}
              </p>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}