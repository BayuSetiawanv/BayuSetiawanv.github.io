import React, { useEffect } from "react";
import gambar1img from "./assets/Skripsi/gambar1.png";
import gambar2img from "./assets/Skripsi/gambar2.png";
import gambar3img from "./assets/Skripsi/gambar3.png";
import gambar4img from "./assets/Skripsi/gambar4.png";
import gambar5img from "./assets/Skripsi/gambar5.png";
import gambar6img from "./assets/Skripsi/gambar6.png";
import {
  ArrowLeft, Code2, ExternalLink, Database, Layers, Target, AlertTriangle,
  CheckCircle2, TrendingUp, BarChart3, CalendarDays, ChevronRight, Sparkles,
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
    const id = "portfolio-fonts-detail-skripsi";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,500&family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap";
    document.head.appendChild(link);
  }, []);
}

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

function StatCard({ icon, value, label }) {
  return (
    <div
      className="royal-hover"
      style={{
        background: C.navyMid,
        border: `1px solid ${C.navyLight}`,
        borderRadius: 10,
        padding: 28,
        transition: "all .3s ease",
      }}
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

export default function SkripsiDetail({ onBack }) {
  useGoogleFonts();
  const stack = [
    "Python", "Flask", "Scikit-learn", "Random Forest", "Pandas",
    "NumPy", "TimeSeriesSplit", "Google Colab", "Bootstrap", "Jinja2",
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

      {/* HERO — CENTERED */}
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
            <Sparkles size={12} /> SKRIPSI · 2026
          </span>

          <h1
            style={{
              fontFamily: C.serif, fontWeight: 600, color: C.cream,
              fontSize: "clamp(2.6rem, 8vw, 5.25rem)", lineHeight: 1.05,
              letterSpacing: "-0.01em", margin: "36px 0 0",
            }}
          >
            Sistem Prediksi
          </h1>
          <p
            style={{
              fontFamily: C.serif, fontStyle: "italic", fontSize: "clamp(1.4rem, 3vw, 2rem)",
              color: C.gray, margin: "10px 0 0", fontWeight: 500,
            }}
          >
            Produksi Lampu<span style={{ color: C.gold }}>.</span>
          </p>

          <GoldDivider center />

          <p
            style={{
              fontFamily: C.sans, fontSize: 16, lineHeight: 1.85, color: C.gray,
              maxWidth: 760, margin: "0 auto",
            }}
          >
            Aplikasi web berbasis Flask untuk memprediksi kebutuhan produksi bulanan
            10 kategori produk lampu LED menggunakan{" "}
            <strong style={{ color: C.cream, fontWeight: 600 }}>Random Forest Regression</strong>.
            Model dilatih pada 86 bulan data historis (Januari 2019 – Februari 2026) dengan pendekatan{" "}
            <strong style={{ color: C.cream, fontWeight: 600 }}>Knowledge Discovery in Databases (KDD)</strong>{" "}
            dalam kerangka metodologi Waterfall.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: 14, marginTop: 40, flexWrap: "wrap" }}>
            <a
              href="https://drive.google.com/file/d/1UpVXX35jbMKvtajs3QGoRjuEqNyT-ktm/view?usp=drivesdk"
              target="_blank" rel="noreferrer"
              className="royal-btn"
              style={{
                display: "inline-flex", alignItems: "center", gap: 9,
                background: C.gold, color: C.navy, borderRadius: 4,
                padding: "14px 28px", fontFamily: C.sans, fontSize: 12,
                fontWeight: 700, letterSpacing: "0.14em", transition: "all .3s ease",
              }}
            >
              <ExternalLink size={15} /> LIHAT DEMO
            </a>
            <a
              href="https://github.com/BayuSetiawanv/Random-Forest-Prediksi-Produksi"
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
              ["Model", "Random Forest"],
              ["Dataset", "860 Records"],
              ["Periode", "2019 — 2026"],
              ["Framework", "Flask"],
            ].map(([k, v], i, arr) => (
              <div
                key={k}
                style={{
                  padding: "22px 26px", background: C.navy,
                  borderRight: i < arr.length - 1 ? `1px solid rgba(65,90,119,0.4)` : "none",
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

      {/* 01 — STATISTIK */}
      <section style={sectionStyle}>
        <Container>
          <SectionLabel n="01" title="Gambaran Singkat" sub="Ringkasan dataset, cakupan produk, periode penelitian, dan hasil feature engineering." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: 18 }}>
            <StatCard icon={<Database size={18} />} value="860" label="Baris data historis tanpa missing value" />
            <StatCard icon={<Layers size={18} />} value="10" label="Kategori produk lampu LED" />
            <StatCard icon={<CalendarDays size={18} />} value="86" label="Bulan data Januari 2019 – Februari 2026" />
            <StatCard icon={<Target size={18} />} value="24–25" label="Fitur hasil feature engineering" />
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
                PT Honoris Industry menghadapi tantangan dalam menentukan jumlah produksi bulanan yang
                tepat untuk setiap varian lampu. Kelebihan produksi meningkatkan biaya penyimpanan dan
                risiko barang tidak terjual, sedangkan kekurangan produksi berpotensi menyebabkan
                permintaan tidak terpenuhi.
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
                Membantu tim produksi memperkirakan kebutuhan produksi bulan berikutnya berdasarkan
                pola historis, sehingga hasil prediksi dapat digunakan sebagai acuan dalam perencanaan
                produksi yang lebih akurat.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 03 — METODOLOGI */}
      <section style={sectionStyle}>
        <Container>
          <SectionLabel n="03" title="Metodologi" sub="Tahapan Knowledge Discovery in Databases (KDD) yang digunakan dalam proses penelitian." />
          <div style={{ maxWidth: 760 }}>
            <TimelineItem n="1" title="Selection" desc="Mengumpulkan data historis produksi lampu periode Januari 2019 – Februari 2026 dari catatan produksi PT Honoris Industry." />
            <TimelineItem n="2" title="Preprocessing" desc="Pembersihan data, pengecekan missing value, serta menyusun struktur data berdasarkan produk dan periode bulanan. Tidak ditemukan missing value pada 860 baris data." />
            <TimelineItem n="3" title="Transformation" desc="Feature engineering berupa lag feature bulanan, rolling average, trend, rasio stok, serta one-hot encoding untuk kategori produk sehingga menghasilkan 24–25 fitur." />
            <TimelineItem n="4" title="Data Mining" desc="Melatih model Random Forest Regression menggunakan pembagian data berdasarkan urutan waktu dan melakukan validasi menggunakan TimeSeriesSplit pada masing-masing produk." />
            <TimelineItem n="5" title="Interpretation / Evaluation" desc="Evaluasi model menggunakan MAE, RMSE, R², dan MAPE. Model kemudian disimpan dalam format .pkl dan diintegrasikan ke aplikasi web Flask." last />
          </div>
        </Container>
      </section>

      {/* 04 — EVALUASI */}
      <section style={sectionStyle}>
        <Container>
          <SectionLabel n="04" title="Hasil Evaluasi Model" sub="Performa model pada data uji setelah proses cross-validation per produk." />
          <div
            style={{
              background: "rgba(212,175,55,0.05)", border: "1px solid rgba(212,175,55,0.3)",
              borderRadius: 10, padding: "clamp(24px, 5vw, 40px)", marginBottom: 24,
              display: "flex", flexWrap: "wrap", gap: 32, alignItems: "center", justifyContent: "space-between",
            }}
          >
            <div style={{ maxWidth: 620 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                <TrendingUp size={15} style={{ color: C.gold }} />
                <span style={{ fontFamily: C.mono, fontSize: 10, letterSpacing: "0.22em", color: C.gold, fontWeight: 600 }}>
                  OVERALL PERFORMANCE
                </span>
              </div>
              <h3 style={{ fontFamily: C.serif, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 600, color: C.cream, margin: 0, lineHeight: 1.2 }}>
                Model menghasilkan R² sebesar 0,814
              </h3>
              <p style={{ fontFamily: C.sans, fontSize: 14, lineHeight: 1.7, color: C.gray, marginTop: 12 }}>
                Nilai R² menunjukkan kemampuan model dalam menjelaskan variasi data target, sementara
                MAPE menunjukkan tingkat kesalahan prediksi relatif terhadap nilai aktual.
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <span style={{ fontFamily: C.serif, fontSize: "clamp(3rem, 12vw, 4.5rem)", fontWeight: 600, color: C.gold, lineHeight: 1 }}>81,4%</span>
              <p style={{ fontFamily: C.mono, fontSize: 10, letterSpacing: "0.2em", color: C.stone, marginTop: 6 }}>R² SCORE</p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: 18 }}>
            <MetricCard label="MAE" value="3.797,26" description="Rata-rata selisih absolut prediksi terhadap aktual." icon={<BarChart3 size={16} />} />
            <MetricCard label="RMSE" value="4.722,97" description="Akar rata-rata kuadrat kesalahan prediksi." icon={<TrendingUp size={16} />} />
            <MetricCard label="R²" value="0,814" description="Proporsi variasi target yang dapat dijelaskan model." icon={<Target size={16} />} />
            <MetricCard label="MAPE" value="8,29" unit="%" description="Rata-rata persentase kesalahan absolut." icon={<CheckCircle2 size={16} />} />
          </div>
          <div
            style={{
              marginTop: 24, borderRadius: 10, border: `1px solid ${C.navyLight}`,
              background: C.navyMid, padding: "18px 24px",
            }}
          >
            <p style={{ fontFamily: C.sans, fontSize: 12.5, lineHeight: 1.7, color: C.gray, margin: 0 }}>
              <strong style={{ color: C.cream, fontWeight: 600 }}>Catatan evaluasi:</strong>{" "}
              Fold pertama pada TimeSeriesSplit dikecualikan dari evaluasi karena jumlah data latih
              yang terlalu sedikit pada awal periode menghasilkan R² mendekati nol pada beberapa produk.
            </p>
          </div>
        </Container>
      </section>

      {/* 05 — FITUR APLIKASI (sebelumnya salah n="06") */}
      <section style={sectionStyle}>
        <Container>
          <SectionLabel n="05" title="Fitur Aplikasi Web" sub="Antarmuka aplikasi yang menghubungkan hasil model machine learning dengan kebutuhan pengguna." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: 20 }}>
            <FeatureItem number="01" title="Dashboard Prediksi per Produk" desc="Menginput angka untuk produksi pada bulan yang ingin diproduksi." src={gambar1img} />
            <FeatureItem number="02" title="Evaluasi Global Model" desc="Ringkasan performa model melalui MAE, RMSE, R², dan MAPE." src={gambar2img} />
            <FeatureItem number="03" title="Kontrol Kelebihan Produksi" desc="Mengontrol potensi overproduction melalui mekanisme potongan terhadap hasil produksi." src={gambar3img} />
            <FeatureItem number="04" title="Riwayat Data Produksi" desc="Menampilkan data historis produksi yang menjadi dasar dalam proses prediksi." src={gambar4img} />
            <FeatureItem number="05" title="Evaluasi Per Prediksi" desc="Menampilkan hasil evaluasi produksi per kategori produk." src={gambar5img} />
            <FeatureItem number="06" title="Dashboard Home" desc="Menampilkan halaman utama aplikasi." src={gambar6img} />
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
              <h3 style={{ fontFamily: C.serif, fontSize: 22, fontWeight: 600, color: C.cream, margin: 0 }}>Penanganan Underproduction</h3>
              <p style={{ fontFamily: C.sans, fontSize: 14, lineHeight: 1.8, color: C.gray, marginTop: 10, maxWidth: 760 }}>
                Sistem saat ini berfokus pada skenario kelebihan produksi (overproduction) melalui
                mekanisme potongan, namun belum memiliki logika khusus untuk menangani kekurangan
                produksi atau stockout. Pengembangan berikutnya dapat menambahkan mekanisme untuk
                mendeteksi dan menangani kondisi underproduction.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 07 — TECH STACK */}
      <section style={sectionStyle}>
        <Container>
          <SectionLabel n="07" title="Tech Stack" sub="Teknologi yang digunakan untuk membangun, melatih, dan menjalankan sistem." />
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
              SKRIPSI · SISTEM PREDIKSI PRODUKSI LAMPU · 2026
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