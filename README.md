# Next.js Auth0 + NextAuth + JWT Authentication System

Bu proje, Next.js 14 App Router ile Auth0 + NextAuth.js + JWT entegrasyonunu içeren bir kimlik doğrulama ve yetkilendirme sistemidir. Kullanıcılar Google OAuth üzerinden giriş yapar, oturumlar JWT ile korunur ve role (admin/user) bazlı sayfa erişimi sağlanır.

---

##  Özellikler

- ✅ Next.js 14 (App Router)
- ✅ Auth0 + NextAuth.js OAuth Entegrasyonu
- ✅ JWT ile oturum yönetimi
- ✅ Middleware ile route bazlı yetkilendirme
- ✅ Role-based access: `admin` / `user`
- ✅ TypeScript + TailwindCSS + SOLID prensipleri
- ✅ .env yapılandırması (12-Factor App uyumlu)

---

##  Kullanılan Teknolojiler

- [Next.js](https://nextjs.org/)
- [NextAuth.js](https://next-auth.js.org/)
- [Auth0](https://auth0.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [JWT](https://jwt.io/)

---

##  Giriş Akışı

1. Kullanıcı, Google ile Auth0 üzerinden giriş yapar.
2. NextAuth, JWT ile session oluşturur.
3. Token içine `role` (admin/user) claim olarak eklenir.
4. Session üzerinden `user.role` bilgisi alınır.
5. Middleware ile korunan sayfalara sadece ilgili role sahip kullanıcılar erişebilir.

---

## 🧩 Role Tabanlı Yetkilendirme

| Sayfa       | Erişim          |
|-------------|-----------------|
| `/`         | Herkes          |
| `/admin`    | Sadece admin    |
| `/unauthorized` | Yetkisiz erişimler yönlendirilir |

---

##  .env.local 

AUTH0_CLIENT_ID=zesimg0hOdLFHo4QbbDqZ050IIXJqmmc
AUTH0_CLIENT_SECRET=nIceuGE0iOypaiqtotRbSo87nX9IdT_jayNqYA268gotKplf06jcCLSKPlzixA0r
AUTH0_ISSUER=https://dev-jti04v3lj8tay6zt.us.auth0.com
NEXTAUTH_SECRET=88e9dfa50baada7358caf53e61ae2b91
NEXTAUTH_URL=http://localhost:3000
AUTH0_ROLE_CLAIM=https://example.com/roles