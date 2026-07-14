# Browser Supply — Homepage Clone

Clone homepage dari situs referensi [browser.supply](https://browser.supply/) menggunakan **Next.js**.

## 🚀 Live Demo & Repository

- **Live URL (Vercel)**: `https://browser-supply-clone-seven.vercel.app/`
- **Repository**: `https://github.com/MahendraSaputraa/browser-supply-clone`

## 🛠️ Tech Stack

| Kategori              | Teknologi                                       |
| --------------------- | ----------------------------------------------- |
| Framework             | [Next.js 16](https://nextjs.org/) (App Router)  |
| Library UI            | [React 19](https://react.dev/)                  |
| Styling               | [Tailwind CSS v4](https://tailwindcss.com/)     |
| Animasi               | [Framer Motion](https://www.framer.com/motion/) |
| Smooth Scroll         | [Lenis](https://lenis.darkroom.engineering/)    |
| Data Fetching / Cache | [TanStack Query](https://tanstack.com/query)    |
| Utility               | `clsx`, `tailwind-merge`                        |
| Icon/SVG              | `@svgr/webpack`                                 |
| Bahasa                | TypeScript                                      |
| Linting               | ESLint (eslint-config-next)                     |

## 📁 Struktur Folder

```
.
├── public/                  # Static assets (images, videos, favicon)
│   ├── images/
│   └── videos/
├── src/
│   ├── app/                  # Next.js App Router (layout, pages, api routes)
│   │   ├── blog/
│   │   ├── templates/
│   │   ├── api/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │   └── not-found.tsx
│   ├── assets/               # Fonts, SVG icons, other raw assets
│   │   ├── fonts/
│   │   └── icons/
│   ├── components/           # Reusable React components
│   │   ├── home/
│   │   ├── layout/
│   │   ├── blog/
│   │   └── ui/
│   ├── data/                 # Local mock data (templates, testimonials, etc.)
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utilities, constants, helpers
│   ├── providers/            # Context / providers (smooth scroll, etc.)
│   └── types/                # TypeScript types and interfaces
├── next.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## ⚙️ Instalasi & Menjalankan Project

```bash
# clone repository
git clone <repo-url>
cd browser-supply-clone

# install dependencies
npm install

# jalankan development server
npm run dev

# build untuk production
npm run build
npm run start
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

---

## 📝 Jawaban Pertanyaan Tambahan

### 1. Jika menggunakan data JSON, bagaimana strukturnya agar scalable dan maintainable?

Data JSON dipecah per-section/domain (bukan satu file besar berisi semua data), misalnya:

```
src/data/
├── hero.json
├── features.json
├── testimonials.json
└── navigation.json
```

Setiap file punya struktur yang konsisten (id, key yang jelas, tipe data yang predictable) sehingga mudah divalidasi dengan TypeScript interface/type. Pendekatan ini membuat:

- Setiap section bisa fetch/import data-nya sendiri tanpa memuat seluruh dataset.
- Penambahan section baru tidak mengubah struktur file yang sudah ada.
- Data mudah dipetakan ke skema API di kemudian hari jika project berkembang menjadi berbasis backend/CMS, karena bentuk objeknya sudah konsisten dengan shape response API pada umumnya.
- Tipe data (TypeScript interface) didefinisikan terpisah di `src/types/`, sehingga JSON dan komponen sama-sama merujuk ke satu sumber kebenaran (single source of truth) untuk bentuk data.

### 2. Jika membuat API sendiri, teknologi/framework apa yang dipilih dan kenapa?

Untuk lingkup homepage sederhana, **Next.js Route Handlers** (`src/app/api/.../route.ts`) adalah pilihan paling masuk akal karena:

- Tidak perlu setup server terpisah — API berjalan dalam satu project yang sama dan ikut ter-deploy otomatis di Vercel (serverless function).
- Cocok untuk kebutuhan ringan seperti serving data JSON, endpoint form submission, atau simple CRUD.
- Menghindari overhead maintain repository/infrastruktur tambahan untuk kebutuhan yang sebenarnya kecil.

Jika kebutuhan API berkembang jadi lebih kompleks (autentikasi, banyak resource, admin panel penuh), pilihan berikutnya adalah **Express.js** atau **NestJS** sebagai backend terpisah, karena lebih terstruktur untuk skala yang lebih besar dan bisa di-deploy independen dari frontend.

### 3. Bagaimana mengonfigurasi custom domain agar mengarah ke project di Vercel?

1. Buka dashboard project di Vercel → tab **Settings → Domains**.
2. Tambahkan domain, misalnya `www.clientwebsite.com`.
3. Vercel akan menampilkan instruksi DNS yang perlu ditambahkan di registrar domain, umumnya:
   - **CNAME** record untuk subdomain `www` yang mengarah ke `cname.vercel-dns.com`, atau
   - **A** record untuk root/apex domain yang mengarah ke IP Vercel (`76.76.21.21`).
4. Tambahkan record tersebut di panel DNS domain (Cloudflare, Niagahoster, Namecheap, dsb).
5. Tunggu proses propagasi DNS (bisa beberapa menit hingga 24 jam).
6. Vercel otomatis menerbitkan **SSL certificate (HTTPS)** gratis via Let's Encrypt setelah domain terverifikasi.
7. Opsional: set redirect dari apex domain (`clientwebsite.com`) ke `www.clientwebsite.com` atau sebaliknya, sesuai preferensi, langsung dari pengaturan Domains di Vercel.

### 4. Jika project butuh admin panel, teknologi/pendekatan apa yang dipilih?

Tergantung skala kebutuhan:

- **Headless CMS** (Sanity, Strapi, atau Payload CMS) — pendekatan paling praktis untuk homepage seperti ini. Non-developer bisa mengelola konten tanpa sentuh kode, dan Next.js tinggal fetch data via API/SDK yang disediakan.
- **Custom admin panel** — jika butuh kontrol penuh, dibuat dengan Next.js App Router terpisah (route `/admin`) dengan autentikasi (misal NextAuth.js/Auth.js), form CRUD, dan database seperti PostgreSQL + Prisma ORM atau Supabase (yang juga menyediakan auth & storage sekaligus).

Untuk kasus homepage marketing yang relatif statis, **headless CMS** lebih efisien dari segi waktu development dibanding membangun admin panel custom dari nol.

### 5. Teknik apa untuk memastikan website tetap cepat di koneksi internet lambat?

- **Image optimization**: menggunakan `next/image` untuk lazy loading, automatic resizing, dan format modern (WebP/AVIF).
- **Code splitting & lazy loading**: dynamic import (`next/dynamic`) untuk komponen berat/animasi yang tidak dibutuhkan saat first paint.
- **Static Generation (SSG)**: halaman homepage dirender statis saat build agar bisa langsung disajikan dari CDN Vercel tanpa menunggu server render.
- **Font optimization**: menggunakan `next/font` agar font di-self-host dan tidak ada request eksternal/render-blocking.
- **Minify & tree-shaking**: otomatis dilakukan Next.js saat build, memastikan bundle JS sekecil mungkin.
- **Prefetching**: Next.js `<Link>` otomatis melakukan prefetch halaman yang kemungkinan akan dikunjungi.
- **Caching**: memanfaatkan HTTP caching header & CDN edge caching dari Vercel untuk asset statis. Untuk data yang diambil dari API, digunakan **TanStack Query** (sudah termasuk di project ini) yang menyediakan client-side caching, automatic revalidation, dan mencegah request berulang ke endpoint yang sama.
- **Menghindari animasi/library berat yang tidak perlu**, serta mengontrol penggunaan Framer Motion hanya di elemen yang benar-benar butuh animasi kompleks.

### 6. Jika mengimplementasikan form, bagaimana mengirim data secara aman ke backend?

- Form dikirim melalui **HTTPS** (default di Vercel) agar data terenkripsi saat transit.
- Request dikirim ke **Route Handler** Next.js (`/api/contact`) sebagai perantara, bukan langsung ke service pihak ketiga dari client, supaya API key/secret tidak terekspos di browser.
- **Validasi input di dua sisi**: client-side (UX cepat, misal dengan `zod`/`react-hook-form`) dan **wajib divalidasi ulang di server-side**, karena validasi client bisa dilewati.
- **Sanitasi input** untuk mencegah injection/XSS sebelum data diproses atau disimpan.
- Menerapkan **rate limiting** sederhana pada endpoint untuk mencegah spam/abuse.
- Environment variable (API key pihak ketiga seperti email service) disimpan di `.env` dan dikonfigurasi lewat Vercel Environment Variables, tidak pernah di-hardcode atau ikut ter-commit ke repository.
- Menambahkan proteksi anti-bot seperti honeypot field atau CAPTCHA (misal Cloudflare Turnstile) jika form bersifat publik.

### 7. Strategi apa untuk mengoptimasi gambar tanpa mengorbankan kualitas?

- Menggunakan komponen `next/image` yang otomatis melakukan resizing, format konversi (WebP/AVIF), dan lazy loading sesuai viewport device.
- Menyediakan gambar dengan **ukuran/resolusi sesuai kebutuhan tampilan** (tidak upload gambar 4K untuk thumbnail kecil), memanfaatkan `srcset`/responsive `sizes`.
- Kompresi gambar sebelum digunakan menggunakan tools seperti **Squoosh** atau **TinyPNG**, dengan quality setting yang tetap menjaga detail visual.
- Menggunakan **SVG** untuk ikon dan ilustrasi vector agar ringan dan tajam di semua resolusi (didukung oleh `@svgr/webpack` di project ini).
- Memberi `priority` hanya pada gambar above-the-fold (misal hero image) agar loading gambar lain tidak menghambat First Contentful Paint.
- Menghindari layout shift dengan selalu mendefinisikan `width`/`height` (atau `fill` dengan container yang sudah punya aspect-ratio) pada setiap gambar.

---

## 📄 Lisensi

Project ini dibuat khusus untuk keperluan **Trial Test Front End Programmer** — Mind Interactive Media, 2026.
