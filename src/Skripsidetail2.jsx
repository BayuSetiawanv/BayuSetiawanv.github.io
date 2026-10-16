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
  ArrowLeft, Code2, ExternalLink, Database, Layers, Target, AlertTriangle,
  CheckCircle2, TrendingUp, BarChart3, CalendarDays, ChevronRight, Sparkles,
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
    const id = "portfolio-fonts-detail-2";
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
      <div style={{ fontFamily: C.serif, fontSize: "clamp(2rem, 6vw, 2.5rem)", fontWeight: 600, color: C.cream, lineHeight: 1 }}>{value}</div>
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

function MetricCard({ label, value, unit, description, icon }) {
  return (
    <div className="royal-hover" style={{ background: `linear-gradient(140deg, ${C.navyMid}, ${C.navy})`, border: `1px solid ${C.navyLight}`, borderRadius: 10, padding: 26, transition: "all .3s ease" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
        <span style={{ fontFamily: C.mono, fontSize: 10.5, letterSpacing: "0.18em", color: C.stone, textTransform: "uppercase" }}>{label}</span>
        <span style={{ color: C.gold }}>{icon}</span>
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
        <span style={{ fontFamily: C.serif, fontSize: "clamp(1.75rem, 5vw, 2.125rem)", fontWeight: 600, color: C.cream, lineHeight: 1 }}>{value}</span>
        {unit && <span style={{ fontFamily: C.mono, fontSize: 13, color: C.gold }}>{unit}</span>}
      </div>
      {description && <p style={{ fontFamily: C.sans, fontSize: 12, lineHeight: 1.6, color: C.gray, marginTop: 12 }}>{description}</p>}
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

export default function Skripsidetail2({ onBack }) {
  useGoogleFonts();
  const stack = ["Dart", "Flutter", "SQLite", "SQL", "Android"];
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
            <Sparkles size={12} /> MAGANG · 2025
          </span>
          <h1 style={{ fontFamily: C.serif, fontWeight: 600, color: C.cream, fontSize: "clamp(2.6rem, 8vw, 5.25rem)", lineHeight: 1.05, letterSpacing: "-0.01em", margin: "36px 0 0" }}>
            Sistem Informasi
          </h1>
          <p style={{ fontFamily: C.serif, fontStyle: "italic", fontSize: "clamp(1.4rem, 3vw, 2rem)", color: C.gray, margin: "10px 0 0", fontWeight: 500 }}>
            Gudang dengan Rekomendasi Kendaraan<span style={{ color: C.gold }}>.</span>
          </p>
          <GoldDivider center />
          <p style={{ fontFamily: C.sans, fontSize: 16, lineHeight: 1.85, color: C.gray, maxWidth: 760, margin: "0 auto" }}>
            Aplikasi Android berbasis Flutter untuk mendigitalisasi pengelolaan gudang
            PT Honoris Industry. Dibangun dengan metodologi{" "}
            <strong style={{ color: C.cream, fontWeight: 600 }}>SDLC Waterfall</strong>,
            dilengkapi live search barang, kalkulasi otomatis kubikasi & berat, serta
            sistem rekomendasi kendaraan distribusi — teruji 100% lulus Black Box & White Box testing.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, marginTop: 40, flexWrap: "wrap" }}>
            <a href="https://drive.google.com/file/d/1ZUZAXVALwNDrC4895x8xuQO3ypjuXuOw/view?usp=drivesdk" target="_blank" rel="noreferrer" className="royal-btn" style={{ display: "inline-flex", alignItems: "center", gap: 9, background: C.gold, color: C.navy, borderRadius: 4, padding: "14px 28px", fontFamily: C.sans, fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", transition: "all .3s ease" }}>
              <ExternalLink size={15} /> LIHAT DEMO
            </a>
            <a href="https://github.com/BayuSetiawanv/kubikasi_app" target="_blank" rel="noreferrer" className="royal-btn" style={{ display: "inline-flex", alignItems: "center", gap: 9, border: `1px solid ${C.navyLight}`, color: C.cream, borderRadius: 4, padding: "14px 28px", fontFamily: C.sans, fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", transition: "all .3s ease" }}>
              <Code2 size={15} /> SOURCE CODE
            </a>
          </div>

          <div style={{ marginTop: 72, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", border: `1px solid ${C.navyLight}`, borderRadius: 10, overflow: "hidden", background: C.navyMid, textAlign: "left" }}>
            {[["Frontend", "Flutter (Dart)"], ["Database", "SQLite (Lokal)"], ["Metodologi", "SDLC Waterfall"], ["Testing", "Black Box & White Box"]].map(([k, v], i, arr) => (
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
          <SectionLabel n="01" title="Latar Belakang & Tujuan" sub="Masalah operasional gudang yang melatarbelakangi pembangunan sistem." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 20 }}>
            <div style={{ background: C.navyMid, border: `1px solid ${C.navyLight}`, borderRadius: 10, padding: 32 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <span style={{ width: 36, height: 36, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", background: C.goldSoft, color: C.gold }}><AlertTriangle size={17} /></span>
                <h3 style={{ fontFamily: C.serif, fontSize: 22, fontWeight: 600, color: C.cream, margin: 0 }}>Permasalahan</h3>
              </div>
              <p style={{ fontFamily: C.sans, fontSize: 14, lineHeight: 1.8, color: C.gray, margin: 0 }}>
                Pengelolaan gudang PT Honoris Industry masih manual, memicu dua masalah utama:
                waktu pencarian data barang yang lama dan risiko human error saat menghitung
                estimasi kapasitas muatan truk. Kondisi ini menghambat efisiensi pengiriman barang.
              </p>
            </div>
            <div style={{ background: "rgba(212,175,55,0.05)", border: "1px solid rgba(212,175,55,0.3)", borderRadius: 10, padding: 32 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <span style={{ width: 36, height: 36, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", background: C.goldSoft, color: C.gold }}><Target size={17} /></span>
                <h3 style={{ fontFamily: C.serif, fontSize: 22, fontWeight: 600, color: C.cream, margin: 0 }}>Tujuan Sistem</h3>
              </div>
              <p style={{ fontFamily: C.sans, fontSize: 14, lineHeight: 1.8, color: C.gray, margin: 0 }}>
                Mendigitalisasi pencarian data barang, mengotomatisasi perhitungan volume
                kubikasi & berat muatan, serta memberikan rekomendasi jenis dan jumlah kendaraan
                pengangkut secara akurat untuk mengoptimalkan operasional logistik.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section style={sectionStyle}>
        <Container>
          <SectionLabel n="02" title="Metodologi" sub="Tahapan SDLC Waterfall yang digunakan dalam pengembangan aplikasi." />
          <div style={{ maxWidth: 760 }}>
            <TimelineItem n="1" title="Analysis" desc="Memetakan alur kerja gudang PT Honoris Industry, mengidentifikasi kendala pencarian manual, dan merumuskan kebutuhan fitur: live search, kalkulasi kubikasi/berat, serta sistem rekomendasi kendaraan." />
            <TimelineItem n="2" title="System Design" desc="Merancang arsitektur basis data (ERD & spesifikasi tabel SQLite), memetakan alur data via DFD, dan mendesain antarmuka pengguna (UI/UX) yang intuitif untuk staf operasional." />
            <TimelineItem n="3" title="Implementation" desc="Membangun aplikasi mobile menggunakan Flutter (Dart) dengan basis data lokal SQLite untuk penyimpanan data master barang dan armada truk secara efisien." />
            <TimelineItem n="4" title="Testing" desc="Black Box Testing memastikan seluruh tombol, navigasi, dan fitur utama berjalan sesuai spesifikasi. White Box Testing memeriksa jalur logika internal, algoritma kalkulasi, dan validasi akurasi rekomendasi kendaraan." />
            <TimelineItem n="5" title="Deployment & Maintenance" desc="Menyiapkan berkas eksekusi (build APK) untuk pengujian di perangkat Android fisik dan menyusun dokumentasi pemeliharaan sistem." last />
          </div>
        </Container>
      </section>

      <section style={sectionStyle}>
        <Container>
          <SectionLabel n="03" title="Hasil Evaluasi Pengujian Sistem" sub="Pengujian untuk memastikan keandalan, akurasi, dan performa aplikasi." />
          <div style={{ background: "rgba(212,175,55,0.05)", border: "1px solid rgba(212,175,55,0.3)", borderRadius: 10, padding: "clamp(24px, 5vw, 40px)", marginBottom: 24, display: "flex", flexWrap: "wrap", gap: 32, alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ maxWidth: 620 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                <CheckCircle2 size={15} style={{ color: C.gold }} />
                <span style={{ fontFamily: C.mono, fontSize: 10, letterSpacing: "0.22em", color: C.gold, fontWeight: 600 }}>TESTING RESULT</span>
              </div>
              <h3 style={{ fontFamily: C.serif, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 600, color: C.cream, margin: 0, lineHeight: 1.2 }}>
                100% Lulus Black Box & Valid di White Box Testing
              </h3>
              <p style={{ fontFamily: C.sans, fontSize: 14, lineHeight: 1.7, color: C.gray, marginTop: 12 }}>
                Seluruh jalur logika program bebas dari celah logika, dan perhitungan
                matematis volume kubikasi (m³) serta berat (kg) terbukti sepenuhnya akurat.
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <span style={{ fontFamily: C.serif, fontSize: "clamp(3rem, 12vw, 4.5rem)", fontWeight: 600, color: C.gold, lineHeight: 1 }}>100%</span>
              <p style={{ fontFamily: C.mono, fontSize: 10, letterSpacing: "0.2em", color: C.stone, marginTop: 6 }}>PASS RATE</p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: 18 }}>
            <MetricCard label="Black Box Testing" value="100%" description="UI/UX, tombol, navigasi, dan fitur keranjang berjalan tanpa error fungsional." icon={<BarChart3 size={16} />} />
            <MetricCard label="White Box Testing" value="Valid" description="Jalur logika pencarian dan keranjang bebas dari logic error." icon={<TrendingUp size={16} />} />
            <MetricCard label="Validasi Matematis" value="Akurat" description="Perhitungan kubikasi dan berat presisi sesuai perhitungan manual." icon={<Target size={16} />} />
            <MetricCard label="Dampak Operasional" value="Faster" description="Pemangkasan waktu pencarian barang dan eliminasi human error." icon={<CheckCircle2 size={16} />} />
          </div>
          <div style={{ marginTop: 24, borderRadius: 10, border: `1px solid ${C.navyLight}`, background: C.navyMid, padding: "18px 24px" }}>
            <p style={{ fontFamily: C.sans, fontSize: 12.5, lineHeight: 1.7, color: C.gray, margin: 0 }}>
              <strong style={{ color: C.cream, fontWeight: 600 }}>Catatan evaluasi:</strong>{" "}
              Logika rekomendasi armada berhasil menyarankan jenis dan jumlah truk secara presisi
              tanpa overloading. Namun, sistem belum memperhitungkan tata letak 3D barang di dalam truk.
            </p>
          </div>
        </Container>
      </section>

      <section style={sectionStyle}>
        <Container>
          <SectionLabel n="04" title="Fitur Aplikasi Mobile" sub="Antarmuka aplikasi untuk staf operasional gudang." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: 20 }}>
            <FeatureItem number="01" title="Dashboard Home" desc="Halaman utama dengan daftar produk, live search, dan akses keranjang." src={duabelasimg} />
            <FeatureItem number="02" title="Dashboard Keranjang (Kosong)" desc="Tampilan keranjang sebelum item ditambahkan." src={duaimg} />
            <FeatureItem number="03" title="Pemilihan Item" desc="Halaman pemilihan barang dari master data." src={delapanimg} />
            <FeatureItem number="04" title="Input Quantity" desc="Dialog input jumlah quantity berdasarkan kebutuhan." src={sepuluhimg} />
            <FeatureItem number="05" title="Memasukkan Jumlah Quantity" desc="User memasukkan jumlah quantity yang dibutuhkan." src={sembilanimg} />
            <FeatureItem number="06" title="Keranjang dengan Item" desc="Keranjang setelah item ditambahkan untuk proses atau penghapusan." src={tigaimg} />
            <FeatureItem number="07" title="Hasil Perhitungan & Rekomendasi Kendaraan" desc="Output perhitungan kubikasi dan rekomendasi truk yang sesuai." src={empatimg} />
            <FeatureItem number="08" title="Pembatalan Keranjang" desc="Halaman keranjang saat user tidak melanjutkan ke perhitungan." src={enamimg} />
            <FeatureItem number="09" title="Penghapusan Item" desc="Konfirmasi dan eksekusi penghapusan item dari keranjang." src={tujuhimg} />
            <FeatureItem number="10" title="Live Search" desc="Pencarian barang real-time dengan instant feedback." src={satuimg} />
          </div>
        </Container>
      </section>

      <section style={sectionStyle}>
        <Container>
          <SectionLabel n="05" title="Keterbatasan & Pengembangan Lanjutan" sub="Ruang pengembangan sistem pada versi berikutnya." />
          <div style={{ background: "rgba(212,175,55,0.05)", border: "1px solid rgba(212,175,55,0.3)", borderRadius: 10, padding: 32, display: "flex", gap: 20 }}>
            <span style={{ width: 40, height: 40, borderRadius: 8, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: C.goldSoft, color: C.gold }}><AlertTriangle size={19} /></span>
            <div>
              <h3 style={{ fontFamily: C.serif, fontSize: 22, fontWeight: 600, color: C.cream, margin: 0 }}>Penanganan Keterbatasan</h3>
              <p style={{ fontFamily: C.sans, fontSize: 14, lineHeight: 1.8, color: C.gray, marginTop: 10, maxWidth: 760 }}>
                Sistem masih menggunakan database lokal SQLite sehingga data belum dapat
                disinkronkan real-time, dan keranjang tidak tersimpan permanen setelah aplikasi
                ditutup. Pengembangan selanjutnya: integrasi cloud database, pemindai barcode/QR
                Code, dan visualisasi 3D penataan muatan truk.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section style={sectionStyle}>
        <Container>
          <SectionLabel n="06" title="Tech Stack" sub="Teknologi yang digunakan untuk membangun sistem." />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {stack.map((s) => <StackChip key={s} name={s} />)}
          </div>
        </Container>
      </section>

      <footer>
        <Container style={{ padding: "clamp(32px, 6vw, 48px) clamp(20px,4vw,40px)", display: "flex", flexWrap: "wrap", gap: 24, alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <p style={{ fontFamily: C.serif, fontSize: 19, fontWeight: 600, color: C.cream, margin: 0 }}>Bayu Setiawan</p>
            <p style={{ fontFamily: C.mono, fontSize: 10, letterSpacing: "0.16em", color: C.stone, marginTop: 6 }}>MAGANG · SISTEM KUBIKASI & REKOMENDASI KENDARAAN · 2025</p>
          </div>
          <button onClick={onBack} style={{ display: "inline-flex", alignItems: "center", gap: 8, border: `1px solid ${C.navyLight}`, borderRadius: 4, padding: "11px 18px", fontFamily: C.sans, fontSize: 10.5, fontWeight: 600, letterSpacing: "0.14em", color: C.gray, background: "none", cursor: "pointer" }}>
            <ArrowLeft size={13} /> KEMBALI KE PORTOFOLIO
          </button>
        </Container>
      </footer>
    </div>
  );
}