Cinema22 adalah aplikasi web untuk mengakses informasi tentang Movie. Dibuat dengan NextJS (ReactJs SSR). Agar dapat mendukung SEO.

## Getting Started

Sebelum menjalakan aplikasi, buatlah file `.env.local` di `root`. Dengan isi :

```
MOVIEDB_KEY = someofyourmoviedbkey
NEXT_PUBLIC_MOVIEDB_KEY = someofyourmoviedbkey
```

untuk mendapatkan moviedb_key silahkan akses : https://developers.themoviedb.org/3/getting-started/introduction

Setelah itu dapat membuka terminal dan jalankan server :

```
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda, dan nikmati aplikasinya.

## Components
Aplikasi ini memiliki beberapa komponen yaitu :
- Breadcrumb
- Footer
- GridItem
- Layout
- Meta
- MovieGrid
- Navbar
- Pagination