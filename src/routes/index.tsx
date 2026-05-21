import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Droplets,
  Zap,
  Shield,
  Sprout,
  MapPin,
  Phone,
  Globe,
  Instagram,
  ChevronDown,
  Mountain,
  Gauge,
  Ruler,
  Waves,
} from "lucide-react";
import heroImg from "@/assets/hero-jatiluhur.jpg";
import spillwayImg from "@/assets/spillway.jpg";
import damWallImg from "@/assets/dam-wall.jpg";
import logoJT2 from "@/assets/logo-jasatirta2.png";
import logoBUMN from "@/assets/logo-bumn.png";
import logoKemenpu from "@/assets/kemenpu.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const sections = [
  { id: "latar", label: "Latar Belakang" },
  { id: "manfaat", label: "Manfaat" },
  { id: "teknis", label: "Data Teknis" },
  { id: "pelana", label: "Bendungan Pelana" },
  { id: "instrumentasi", label: "Instrumentasi" },
  { id: "kontak", label: "Kontak" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <img
            src={logoBUMN}
            alt="Logo BUMN"
            className="h-9 w-auto rounded px-1 bg-transparent"
          />
          <img
            src={logoKemenpu}
            alt="Logo Kemenpu"
            className="h-9 w-auto rounded px-1 bg-transparent"
          />
          <img
            src={logoJT2}
            alt="Logo Perum Jasa Tirta II"
            className="h-9 w-auto rounded px-1 bg-transparent"
          />
        </a>
        <nav className="hidden md:flex items-center gap-1">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`px-3 py-2 text-sm rounded-md transition-colors ${
                scrolled
                  ? "text-foreground/80 hover:text-primary hover:bg-primary/5"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Pemandangan udara Waduk Jatiluhur saat matahari terbenam"
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/40 to-background" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur border border-white/25 text-xs uppercase tracking-[0.2em] mb-6">
          <Waves className="w-3.5 h-3.5" /> Perum Jasa Tirta II
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
          Bendungan <span className="text-accent">Ir. H. Djuanda</span>
          <br />
          Jatiluhur
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
          Mahakarya infrastruktur air pertama Indonesia — diresmikan 26 Agustus 1967,
          menopang irigasi, listrik, dan kehidupan jutaan masyarakat Jawa Barat dan Jakarta.
        </p>
        <a
          href="#latar"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-primary font-semibold hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          Jelajahi Bendungan <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
      {/* wave */}
      <svg className="absolute bottom-0 inset-x-0 text-background" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,64 C240,112 480,16 720,48 C960,80 1200,128 1440,80 L1440,120 L0,120 Z" />
      </svg>
    </section>
  );
}

function Latar() {
  const items = [
    { year: "1948", text: "Gagasan awal oleh Prof. Ir. W.J. Blommestein, dikaji ulang oleh Ir. Van Schravendijk dan Ir. Abdoelah Angudi." },
    { year: "1957", text: "Peletakan batu pertama pembangunan oleh Presiden Soekarno." },
    { year: "1957–1967", text: "Dibangun di bawah perencanaan & pengawasan Coyne et Bellier, pelaksana Compagnie Francaise d'Enterprise — Paris, Perancis." },
    { year: "1967", text: "Diresmikan pada 26 Agustus 1967 oleh Presiden Soeharto." },
  ];
  return (
    <section id="latar" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="Sejarah" title="Latar Belakang" />
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Bendungan Jatiluhur adalah bendungan multiguna terbesar pertama di Indonesia.
            Dibangun selama satu dekade, bendungan ini menjadi simbol kemajuan teknik dan
            kemandirian bangsa di era pasca kemerdekaan.
          </p>
          <ol className="relative border-l-2 border-primary/30 space-y-8 pl-6">
            {items.map((it, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-[34px] top-1 w-5 h-5 rounded-full bg-primary ring-4 ring-background" />
                <div className="text-xs uppercase tracking-widest text-accent font-bold">{it.year}</div>
                <p className="mt-1 text-foreground">{it.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Manfaat() {
  const benefits = [
    { icon: Sprout, title: "Irigasi", value: "242.000 ha", desc: "Penyediaan air untuk irigasi pertanian." },
    { icon: Droplets, title: "Air Baku DMI", value: "Domestik–Industri", desc: "Sumber air baku untuk rumah tangga, kota, dan industri." },
    { icon: Zap, title: "Pembangkit Listrik", value: "187,5 MW", desc: "Kapasitas pembangkit listrik tenaga air." },
    { icon: Shield, title: "Pengendalian Banjir", value: "Aktif", desc: "Mengatur debit Sungai Citarum di musim hujan." },
    { icon: Waves, title: "Pariwisata & Olahraga Air", value: "Destinasi", desc: "Pengembangan kawasan rekreasi waduk." },
  ];
  return (
    <section id="manfaat" className="relative py-24 px-6 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="Manfaat" title="Lima Pilar Manfaat Bendungan" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary grid place-items-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <b.icon className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold text-primary">{b.value}</div>
              <div className="font-semibold mt-1">{b.title}</div>
              <p className="text-sm text-muted-foreground mt-2">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatPill({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 bg-card border border-border rounded-xl p-4">
      <div className="w-10 h-10 rounded-lg bg-accent/15 text-accent grid place-items-center">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <div className="text-xs text-muted-foreground uppercase tracking-wider">{label}</div>
        <div className="font-semibold text-foreground">{value}</div>
      </div>
    </div>
  );
}

function Teknis() {
  const [tab, setTab] = useState<"utama" | "spillway" | "waduk">("utama");
  const tabs = [
    { id: "utama" as const, label: "Bendungan Utama" },
    { id: "spillway" as const, label: "Menara Pelimpah" },
    { id: "waduk" as const, label: "Waduk" },
  ];
  return (
    <section id="teknis" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="Data Teknis" title="Spesifikasi Konstruksi" />
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                tab === t.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === "utama" && (
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img
              src={damWallImg}
              alt="Tubuh bendungan utama Jatiluhur"
              loading="lazy"
              width={1280}
              height={800}
              className="rounded-2xl shadow-lg w-full h-auto"
            />
            <div>
              <h3 className="text-2xl font-bold mb-2">Bendungan Utama</h3>
              <p className="text-muted-foreground mb-6">
                Konstruksi tipe <em>rockfill with inclined clay core</em> — kombinasi
                tumpukan batu dengan inti lempung miring untuk kedap air.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <StatPill icon={Mountain} label="Tinggi" value="105 m" />
                <StatPill icon={Ruler} label="Panjang" value="1.220 m" />
                <StatPill icon={Gauge} label="Elevasi Puncak" value="+114,5 m" />
                <StatPill icon={Waves} label="Volume Urugan" value="9,1 jt m³" />
              </div>
            </div>
          </div>
        )}

        {tab === "spillway" && (
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-2">Menara Pelimpah Utama</h3>
              <p className="text-muted-foreground mb-6">
                Menara pelimpah berbentuk morning glory dengan diameter 90 m dan 14
                jendela. Pelepasan air mencapai{" "}
                <span className="text-primary font-semibold">270 m³/detik</span> untuk
                sublimasi.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <StatPill icon={Gauge} label="Elevasi Puncak" value="+114,5 m" />
                <StatPill icon={Gauge} label="Elevasi Mercu" value="+107 mdpl" />
                <StatPill icon={Ruler} label="Panjang Pelimpah" value="150,23 m" />
                <StatPill icon={Waves} label="Kapasitas Maks." value="3.080 m³/dtk" />
              </div>
            </div>
            <img
              src={spillwayImg}
              alt="Menara pelimpah morning glory Jatiluhur"
              loading="lazy"
              width={1024}
              height={1024}
              className="order-1 md:order-2 rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
        )}

        {tab === "waduk" && (
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { label: "Volume Tampungan", value: "2,44 milyar m³", sub: "Pada TMA +107 m" },
              { label: "Luas Genangan", value: "8.300 ha", sub: "Permukaan waduk" },
              { label: "Daerah Tangkapan", value: "4.500 km²", sub: "Total cakupan DAS" },
              { label: "Tangkapan Langsung", value: "380 km²", sub: "Ke Waduk Ir. H. Djuanda" },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-primary to-primary/70 text-primary-foreground rounded-2xl p-6"
              >
                <div className="text-3xl font-bold">{s.value}</div>
                <div className="mt-2 font-medium">{s.label}</div>
                <div className="text-xs text-primary-foreground/70 mt-1">{s.sub}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function Pelana() {
  const pelana = [
    { name: "Pasirgombong Barat", panjang: "1.950 m", tinggi: "19 m" },
    { name: "Pasirgombong Timur", panjang: "400 m", tinggi: "15 m" },
    { name: "Ciganea", panjang: "330 m", tinggi: "12,5 m" },
    { name: "Ubrug", panjang: "550 m", tinggi: "17 m" },
  ];
  return (
    <section id="pelana" className="relative py-24 px-6 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="Struktur Pendukung" title="Bendungan Pelana" />
        <p className="text-muted-foreground max-w-3xl mb-10">
          Memiliki 4 Bendungan Pelana dengan tipe <em>Homogeneous Earth Fill</em>,
          penutup batu andesit, dan <em>Chimney Drain</em> di beberapa tempat. Elevasi
          puncak +114,5 m.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {pelana.map((p, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-6 border border-border hover:border-accent transition-colors"
            >
              <div className="text-xs uppercase tracking-widest text-accent font-bold">
                Pelana {i + 1}
              </div>
              <div className="font-bold text-lg mt-1 mb-3">{p.name}</div>
              <div className="text-sm text-muted-foreground">Panjang</div>
              <div className="font-semibold">{p.panjang}</div>
              <div className="text-sm text-muted-foreground mt-2">Tinggi</div>
              <div className="font-semibold">{p.tinggi}</div>
            </div>
          ))}
        </div>
        <div className="bg-card rounded-2xl p-6 border border-border">
          <div className="text-xs uppercase tracking-widest text-primary font-bold">
            Pelimpah Bantu
          </div>
          <h4 className="text-xl font-bold mt-1">Ubrug</h4>
          <p className="text-muted-foreground mt-2">
            Lantai pelimpah berada pada elevasi +102 m dengan konstruksi pintu tipe{" "}
            <em>Radial Gate</em>.
          </p>
        </div>
      </div>
    </section>
  );
}

function Instrumentasi() {
  const tools = [
    { name: "Inklinometer", desc: "Memantau pergerakan internal struktur bendungan." },
    { name: "Piezometer", desc: "Mengukur tekanan air pori dalam tubuh bendungan." },
    { name: "V-Notch & Stopwatch", desc: "Memantau rembesan/bocoran air." },
    { name: "Accelerograph", desc: "Mengukur getaran akibat gempa bumi." },
    { name: "Peralatan Topografi", desc: "Memantau pergerakan eksternal bendungan." },
    { name: "Klimatologi & Hidrologi", desc: "Mencatat data iklim untuk operasi waduk." },
  ];
  return (
    <section id="instrumentasi" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="Keselamatan" title="Instrumentasi Bendungan" />
        <p className="text-muted-foreground max-w-3xl mb-10">
          Dalam rangka keselamatan, Bendungan Ir. H. Djuanda dilengkapi instrumen untuk
          memantau pergerakan, tekanan air pori, rembesan, getaran, dan data
          klimatologi-hidrologi secara berkelanjutan.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((t, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl border border-border bg-card hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary group-hover:bg-white/20 group-hover:text-white grid place-items-center text-sm font-bold">
                  {i + 1}
                </span>
                <h4 className="font-bold">{t.name}</h4>
              </div>
              <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/90">
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Kontak() {
  return (
    <section id="kontak" className="relative py-24 px-6 bg-primary text-primary-foreground overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-accent mb-3">
            Kontak
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Perusahaan Umum (Perum)
            <br />
            Jasa Tirta II — Jatiluhur
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-md">
            Jl. Lurah Kawi — Jatiluhur — Purwakarta. Hubungi kami untuk informasi
            kunjungan, edukasi, dan kerja sama.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-accent" />
              <span>0264-201972 &nbsp;·&nbsp; Fax 0264-201971</span>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-accent" />
              <a href="https://jasatirta2.co.id" className="hover:text-accent">
                jasatirta2.co.id
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Instagram className="w-5 h-5 text-accent" />
              <span>@jasatirta.2</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-accent" />
              <span>-6.524070° LS, 107.388621° BT</span>
            </div>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8">
          <h3 className="font-bold text-lg mb-4">Lokasi Strategis</h3>
          <div className="space-y-4">
            <div>
              <div className="text-3xl font-bold text-accent">± 100 km</div>
              <div className="text-sm text-primary-foreground/80">
                Tenggara Jakarta
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">± 60 km</div>
              <div className="text-sm text-primary-foreground/80">
                Barat Laut Bandung
              </div>
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=-6.524070,107.388621`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-full bg-accent text-accent-foreground font-semibold hover:bg-white transition-colors"
            >
              <MapPin className="w-4 h-4" /> Buka di Google Maps
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/15 flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-6 rounded-xl px-5 py-3 bg-transparent">
          <img src={logoBUMN} alt="BUMN" className="h-10 w-auto" />
          <div className="w-px h-8 bg-border" />
          <img src={logoKemenpu} alt="Logo Kemenpu" className="h-10 w-auto" />
          <div className="w-px h-8 bg-border" />
          <img src={logoJT2} alt="Perum Jasa Tirta II" className="h-10 w-auto" />
        </div>
        <div className="text-sm text-primary-foreground/70 flex flex-wrap gap-x-4 gap-y-1">
          <span>© {new Date().getFullYear()} Perum Jasa Tirta II — Jatiluhur</span>
          <span>BUMN untuk Indonesia</span>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12">
      <div className="text-xs uppercase tracking-[0.25em] text-accent font-bold mb-3">
        {eyebrow}
      </div>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{title}</h2>
      <div className="mt-4 h-1 w-16 bg-primary rounded-full" />
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Latar />
      <Manfaat />
      <Teknis />
      <Pelana />
      <Instrumentasi />
      <Kontak />
    </div>
  );
}
