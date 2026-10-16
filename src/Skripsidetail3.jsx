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
  ArrowLeft, Code2, Database, Layers, Target, AlertTriangle,
  ChevronRight, Sparkles, CalendarDays,
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
    const id = "portfolio-fonts-detail-3";
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
        <span style={{ fontFamily: C.mono, fontSize: 10, letterSpacing: "0.22em", color: C.stone, textTransform: "uppercase" }}>Project Detail</span>
      </div>
      <h2 style={{ fontFamily: C.serif, fontSize: "clamp(2rem, 3.6vw, 2.75rem)", fontWeight: 600, color: C.cream, lineHeight: 1.15, margin: 0 }}>{title}</h2>
      {sub && <p style={{ fontFamily: C.sans, fontSize: 15, lineHeight: 1.75, color: C.gray, marginTop: 14, maxWidth: 640 }}>{sub}</p>}
    </div>
  );
}

function StatCard({ icon, value, label }) {
  return (
    <div className="royal-hover" style={{ background: C.navyMid, border: `1px solid ${C.navyLight}`, borderRadius: 10, padding: 28, transition: "all .3s ease" }}>
      <div style={{ width: 40, height: 40, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", background: C.goldSoft, color: C.gold, marginBottom: 22 }}>{icon}</div>
      <div style={{ fontFamily: C.serif, fontSize: 28, fontWeight: 600, color: C.cream, lineHeight: 1.2 }}>{value}</div>
      <p style={{ fontFamily: C.sans, fontSize: 12.5, lineHeight: 1.6, color: C.gray, marginTop: 10 }}>{label}</p>
    </div>
  );
}

function TimelineItem({ n, title, desc, last }) {
  return (
    <div style={{ display: "flex", gap: 24, paddingBottom: last ? 0 : 44, position: "relative" }}>
      {!last && <span style={{ position: "absolute", left: 17, top: 40, bottom: 0, width: 1, background: "linear-gradient(to bottom, rgba(212,175,55,0.4), rgba(65,90,119,0.15))" }} />}
      <span style={{ width: 36, height: 36, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid rgba(212,175,55,0.35)`, background: C.navy, fontFamily: C.mono, fontSize: 12, color: C.gold, fontWeight: 600 }}>{n}</span>
      <div style={{ paddingTop: 2 }}>
        <h4 style={{ fontFamily: C.serif, fontSize: 22, fontWeight: 600, color: C.cream, margin: 0 }}>{title}</h4>
        <p style={{ fontFamily: C.sans, fontSize: 14, lineHeight: 1.75, color: C.gray, marginTop: 8, maxWidth: 680 }}>{desc}</p>
      </div>
    </div>
  );
}

function FeatureItem({ title, desc, src, number }) {
  return (
    <div className="royal-hover" style={{ border: `1px solid ${C.navyLight}`, borderRadius: 10, overflow: "hidden", background: C.navyMid, transition: "all .3s ease" }}>
      <div style={{ position: "relative", borderBottom: `1px solid ${C.navyLight}`, background: C.navy }}>
        <span style={{ position: "absolute", top: 14, left: 14, zIndex: 2, width: 30, height: 30, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(13,27,42,0.85)", border: `1px solid ${C.navyLight}`, fontFamily: C.mono, fontSize: 10, color: C.gold, fontWeight: 600 }}>{number}</span>
        <img src={src} alt={title} style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", objectPosition: "top", display: "block" }} />
      </div>
      <div style={{ padding: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <h4 style={{ fontFamily: C.serif, fontSize: 20, fontWeight: 600, color: C.cream, margin: 0 }}>{title}</h4>
          <ChevronRight size={16} style={{ color: C.stone, flexShrink: 0 }} />
        </div>
        <p style={{ fontFamily: C.sans, fontSize: 13.5, lineHeight: 1.65, color: C.gray, marginTop: 8 }}>{desc}</p>
      </div>
    </div>
  );
}

function StackChip({ name }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "9px 18px", borderRadius: 999, border: `1px solid ${C.navyLight}`, background: C.navyMid, fontFamily: C.sans, fontSize: 12.5, color: C.cream }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.gold }} />
      {name}
    </span>
  );
}

export default function Skripsidetail3({ onBack }) {
  useGoogleFonts();
  const stack = ["Flutter", "Laravel", "Dart", "PHP", "RESTful API", "MySQL", "Tailwind CSS", "Android Mobile"];
  const sectionStyle = { padding: "clamp(56px, 9vw, 96px) 0", borderBottom: `1px solid rgba(65,90,119,0.4)` };

  return (
    <div style={{ minHeight: "100vh", background: C.navy, color: C.cream, overflowX: "hidden" }}>
      <style>{`.royal-hover:hover { transform: translateY(-4px); border-color: rgba(212,175,55,0.45) !important; box-shadow: 0 18px 40px rgba(0,0,0,0.35); }.royal-btn:hover { transform: translateY(-2px); }`}</style>

      <nav style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(13,27,42,0.92)", backdropFilter: "blur(12px)", borderBottom: `1px solid rgba(65,90,119,0.4)` }}>
        <Container style={{ height: 64, display: "flex", alignItems: "center" }}>
          <button onClick={onBack} style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: C.sans, fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", color: C.gray, background: "none", border: "none", cursor: "pointer" }}>
            <ArrowLeft size={14} /> KEMBALI KE PORTOFOLIO
          </button>
        </Container>
      </nav>

      <header style={{ borderBottom: `1px solid rgba(65,90,119,0.4)`, position: "relative" }}>
        <div style={{ position: "absolute", top: -200, left: "50%", transform: "translateX(-50%)", width: 700, height: 400, borderRadius: "50%", background: "rgba(212,175,55,0.06)", filter: "blur(110px)", pointerEvents: "none" }} />
        <Container style={{ position: "relative", padding: "clamp(64px, 10vw, 110px) clamp(20px,4vw,40px) clamp(56px, 9vw, 90px)", textAlign: "center" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 16px", borderRadius: 999, border: "1px solid rgba(212,175,55,0.3)", background: "rgba(212,175,55,0.08)", fontFamily: C.mono, fontSize: 10, letterSpacing: "0.22em", color: C.gold, fontWeight: 600 }}>
            <Sparkles size={12} /> INTERNSHIP PROJECT · 2025
          </span>
          <h1 style={{ fontFamily: C.serif, fontWeight: 600, color: C.cream, fontSize: "clamp(2.6rem, 8vw, 5.25rem)", lineHeight: 1.05, letterSpacing: "-0.01em", margin: "36px 0 0" }}>
            HI Inventory
          </h1>
          <p style={{ fontFamily: C.serif, fontStyle: "italic", fontSize: "clamp(1.4rem, 3vw, 2rem)", color: C.gray, margin: "10px 0 0", fontWeight: 500 }}>
            Mobile App Redesign<span style={{ color: C.gold }}>.</span>
          </p>
          <GoldDivider center />
          <p style={{ fontFamily: C.sans, fontSize: 16, lineHeight: 1.85, color: C.gray, maxWidth: 760, margin: "0 auto" }}>
            Redesain sistem inventori internal PT Honoris Industry dari platform berbasis
            website menjadi aplikasi mobile menggunakan Flutter. Terintegrasi dengan{" "}
            <strong style={{ color: C.cream, fontWeight: 600 }}>backend Laravel via REST API</strong>{" "}
            dan database MySQL untuk akses data inventori yang efisien dan real-time.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, marginTop: 40, flexWrap: "wrap" }}>
            <a href="https://github.com/BayuSetiawanv/Hi_inventory" target="_blank" rel="noreferrer" className="royal-btn" style={{ display: "inline-flex", alignItems: "center", gap: 9, background: C.gold, color: C.navy, borderRadius: 4, padding: "14px 28px", fontFamily: C.sans, fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", transition: "all .3s ease" }}>
              <Code2 size={15} /> SOURCE CODE
            </a>
          </div>

          <div style={{ marginTop: 72, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", border: `1px solid ${C.navyLight}`, borderRadius: 10, overflow: "hidden", background: C.navyMid, textAlign: "left" }}>
            {[["Frontend", "Flutter Mobile"], ["Backend", "Laravel REST API"], ["Database", "MySQL"], ["Platform", "Android"]].map(([k, v], i, arr) => (
              <div key={k} style={{ padding: "22px 26px", background: C.navy, borderRight: i < arr.length - 1 ? `1px solid rgba(65,90,119,0.4)` : "none" }}>
                <span style={{ fontFamily: C.mono, fontSize: 9.5, letterSpacing: "0.2em", color: C.stone, textTransform: "uppercase" }}>{k}</span>
                <p style={{ fontFamily: C.serif, fontSize: 19, fontWeight: 600, color: C.cream, margin: "8px 0 0" }}>{v}</p>
              </div>
            ))}
          </div>
        </Container>
      </header>

      <section style={sectionStyle}>
        <Container>
          <SectionLabel n="01" title="Gambaran Singkat" sub="Informasi peran, klien, framework, database, dan arsitektur sistem." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: 18 }}>
            <StatCard icon={<Database size={18} />} value="Mobile Dev" label="Peran dalam pengembangan aplikasi" />
            <StatCard icon={<Layers size={18} />} value="PT Honoris" label="Klien — perusahaan manufaktur lampu LED" />
            <StatCard icon={<CalendarDays size={18} />} value="2025" label="Periode Praktik Kerja Lapangan" />
            <StatCard icon={<Target size={18} />} value="REST API" label="Arsitektur integrasi backend" />
          </div>
        </Container>
      </section>

      <section style={sectionStyle}>
        <Container>
          <SectionLabel n="02" title="Latar Belakang & Tujuan" sub="Transisi dari sistem berbasis website ke aplikasi mobile." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 20 }}>
            <div style={{ background: C.navyMid, border: `1px solid ${C.navyLight}`, borderRadius: 10, padding: 32 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <span style={{ width: 36, height: 36, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", background: C.goldSoft, color: C.gold }}><AlertTriangle size={17} /></span>
                <h3 style={{ fontFamily: C.serif, fontSize: 22, fontWeight: 600, color: C.cream, margin: 0 }}>Permasalahan</h3>
              </div>
              <p style={{ fontFamily: C.sans, fontSize: 14, lineHeight: 1.8, color: C.gray, margin: 0 }}>
                HI Inventory yang sebelumnya berbasis website memiliki keterbatasan fleksibilitas
                dan akses mobile. Pengguna harus membuka browser untuk mengelola data inventori,
                khususnya pada proses barang masuk dan keluar — kurang praktis bagi staf lapangan.
              </p>
            </div>
            <div style={{ background: "rgba(212,175,55,0.05)", border: "1px solid rgba(212,175,55,0.3)", borderRadius: 10, padding: 32 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <span style={{ width: 36, height: 36, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", background: C.goldSoft, color: C.gold }}><Target size={17} /></span>
                <h3 style={{ fontFamily: C.serif, fontSize: 22, fontWeight: 600, color: C.cream, margin: 0 }}>Tujuan Sistem</h3>
              </div>
              <p style={{ fontFamily: C.sans, fontSize: 14, lineHeight: 1.8, color: C.gray, margin: 0 }}>
                Membangun HI Inventory versi mobile dengan Flutter tanpa mengubah sistem backend
                Laravel dan database MySQL yang sudah ada — mempermudah akses, pencatatan, dan
                pemantauan data barang masuk/keluar dari perangkat mobile.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section style={sectionStyle}>
        <Container>
          <SectionLabel n="03" title="Metodologi" sub="Tahapan SDLC yang digunakan dalam proses pengembangan." />
          <div style={{ maxWidth: 760 }}>
            <TimelineItem n="1" title="Analisis Kebutuhan" desc="Mengidentifikasi kebutuhan pengguna dan fitur HI Inventory yang perlu tersedia dalam versi mobile." />
            <TimelineItem n="2" title="Perancangan Sistem" desc="Merancang antarmuka mobile serta menentukan alur komunikasi antara Flutter, REST API Laravel, dan MySQL." />
            <TimelineItem n="3" title="Implementasi" desc="Mengembangkan aplikasi mobile menggunakan Flutter dan Dart, kemudian mengintegrasikannya dengan Laravel REST API." />
            <TimelineItem n="4" title="Pengujian" desc="Menguji fungsi aplikasi, integrasi API, pengambilan & pengiriman data, serta memastikan fitur berjalan sesuai kebutuhan." />
            <TimelineItem n="5" title="Implementasi & Pemeliharaan" desc="Melakukan perbaikan berdasarkan temuan pengujian dan menyesuaikan aplikasi dengan kebutuhan pengguna." last />
          </div>
        </Container>
      </section>

      <section style={sectionStyle}>
        <Container>
          <SectionLabel n="04" title="Hasil Evaluasi Sistem" sub="Functional Testing & Integration Testing antar komponen." />
          <div style={{ background: "rgba(212,175,55,0.05)", border: "1px solid rgba(212,175,55,0.3)", borderRadius: 10, padding: "clamp(24px, 5vw, 40px)", display: "flex", flexWrap: "wrap", gap: 32, alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ maxWidth: 620 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                <Database size={15} style={{ color: C.gold }} />
                <span style={{ fontFamily: C.mono, fontSize: 10, letterSpacing: "0.22em", color: C.gold, fontWeight: 600 }}>EVALUATION</span>
              </div>
              <h3 style={{ fontFamily: C.serif, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 600, color: C.cream, margin: 0, lineHeight: 1.2 }}>
                Functional & Integration Testing
              </h3>
              <p style={{ fontFamily: C.sans, fontSize: 14, lineHeight: 1.7, color: C.gray, marginTop: 12 }}>
                Memastikan seluruh fitur aplikasi berjalan sesuai kebutuhan dan komunikasi
                antara Flutter, Laravel REST API, serta MySQL berjalan dengan baik tanpa error.
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <span style={{ fontFamily: C.serif, fontSize: "clamp(3rem, 12vw, 4.5rem)", fontWeight: 600, color: C.gold, lineHeight: 1 }}>✓</span>
              <p style={{ fontFamily: C.mono, fontSize: 10, letterSpacing: "0.2em", color: C.stone, marginTop: 6 }}>ALL PASSED</p>
            </div>
          </div>
        </Container>
      </section>

      <section style={sectionStyle}>
        <Container>
          <SectionLabel n="05" title="Fitur Aplikasi HI Inventory" sub="Antarmuka mobile untuk pengelolaan data inventori." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: 20 }}>
            <FeatureItem number="01" title="Dashboard Home" desc="Ringkasan data inventori: total produk, stok rendah, dan transaksi saat ini." src={gambar1img} />
            <FeatureItem number="02" title="Pemasukan Barang" desc="Data barang masuk dengan detail produk, jumlah, dan tanggal pemasukan." src={gambar2img} />
            <FeatureItem number="03" title="Pengeluaran Barang" desc="Data barang keluar dengan detail produk, jumlah, dan tanggal pengeluaran." src={gambar3img} />
            <FeatureItem number="04" title="Laporan WIP" desc="Data Work In Progress per bulan dan tahun." src={gambar4img} />
            <FeatureItem number="05" title="Stock Opname" desc="Data stock opname dengan filter bulan, tahun, dan NO BA." src={gambar5img} />
            <FeatureItem number="06" title="Mutasi Bahan Baku" desc="Laporan mutasi bahan baku per periode tahun." src={gambar6img} />
            <FeatureItem number="07" title="Mutasi Barang Jadi" desc="Laporan mutasi barang jadi per periode tahun." src={gambar7img} />
            <FeatureItem number="08" title="Mutasi Barang Sisa" desc="Laporan mutasi barang sisa per periode tahun." src={gambar8img} />
            <FeatureItem number="09" title="Mutasi Mesin" desc="Laporan mutasi mesin per periode tahun." src={gambar9img} />
            <FeatureItem number="10" title="Upload Barang Masuk" desc="Halaman CRUD untuk unggah data barang masuk." src={gambar10img} />
            <FeatureItem number="11" title="Upload Barang Keluar" desc="Halaman CRUD untuk unggah data barang keluar." src={gambar11img} />
            <FeatureItem number="12" title="Summary Bahan Baku" desc="Laporan ringkasan penggunaan bahan baku." src={gambar12img} />
            <FeatureItem number="13" title="Summary Bahan Jadi" desc="Laporan ringkasan produksi bahan jadi." src={gambar13img} />
          </div>
        </Container>
      </section>

      <section style={sectionStyle}>
        <Container>
          <SectionLabel n="06" title="Keterbatasan & Pengembangan Lanjutan" sub="Ruang pengembangan sistem pada versi berikutnya." />
          <div style={{ background: "rgba(212,175,55,0.05)", border: "1px solid rgba(212,175,55,0.3)", borderRadius: 10, padding: 32, display: "flex", gap: 20 }}>
            <span style={{ width: 40, height: 40, borderRadius: 8, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: C.goldSoft, color: C.gold }}><AlertTriangle size={19} /></span>
            <div>
              <h3 style={{ fontFamily: C.serif, fontSize: 22, fontWeight: 600, color: C.cream, margin: 0 }}>Penanganan Keterbatasan</h3>
              <p style={{ fontFamily: C.sans, fontSize: 14, lineHeight: 1.8, color: C.gray, marginTop: 10, maxWidth: 760 }}>
                Aplikasi masih bergantung pada backend dan koneksi REST API yang sudah ada.
                Pengembangan selanjutnya: penambahan dashboard analitik, fitur barcode/QR Code,
                notifikasi real-time, offline synchronization, peningkatan keamanan & hak akses,
                serta usability testing untuk pengalaman pengguna yang lebih baik.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section style={sectionStyle}>
        <Container>
          <SectionLabel n="07" title="Tech Stack" sub="Teknologi yang digunakan untuk membangun sistem." />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {stack.map((s) => <StackChip key={s} name={s} />)}
          </div>
        </Container>
      </section>

      <footer>
        <Container style={{ padding: "clamp(32px, 6vw, 48px) clamp(20px,4vw,40px)", display: "flex", flexWrap: "wrap", gap: 24, alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <p style={{ fontFamily: C.serif, fontSize: 19, fontWeight: 600, color: C.cream, margin: 0 }}>Bayu Setiawan</p>
            <p style={{ fontFamily: C.mono, fontSize: 10, letterSpacing: "0.16em", color: C.stone, marginTop: 6 }}>MAGANG · HI INVENTORY MOBILE REDESIGN · 2025</p>
          </div>
          <button onClick={onBack} style={{ display: "inline-flex", alignItems: "center", gap: 8, border: `1px solid ${C.navyLight}`, borderRadius: 4, padding: "11px 18px", fontFamily: C.sans, fontSize: 10.5, fontWeight: 600, letterSpacing: "0.14em", color: C.gray, background: "none", cursor: "pointer" }}>
            <ArrowLeft size={13} /> KEMBALI KE PORTOFOLIO
          </button>
        </Container>
      </footer>
    </div>
  );
}