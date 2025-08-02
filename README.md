# Next.js + Auth0 ile Rol Bazlı Kimlik Doğrulama Sistemi

Bu proje, Next.js (App Router), Auth0 ve NextAuth.js kullanılarak geliştirilmiş JWT tabanlı bir **rol bazlı kimlik doğrulama ve yetkilendirme** sistemidir.

Senior Frontend Developer pozisyonu için teknik değerlendirme amacıyla geliştirilmiştir.

---

## 🔐 Özellikler

- Google ile **Auth0 OAuth giriş**
- **JWT tabanlı oturum** yönetimi
- **Middleware ile route koruması**
- **Rol bazlı yetkilendirme** (admin / user)
- Admin paneli: `/admin`
- Yetkisiz erişim sayfası: `/unauthorized`
- Dinamik **Navbar** (kullanıcı rolüne göre değişir)
- **SOLID** ve **12-Factor App** prensiplerine uygun yapı
- Jest + RTL ile temel **unit test**

---

## 🚀 Kullanılan Teknolojiler

- **Next.js 14 (App Router)**
- **Auth0** (OAuth sağlayıcısı)
- **NextAuth.js**
- **TailwindCSS**
- **TypeScript**
- **Jest + React Testing Library**

---

## 🛠️ Projeyi Çalıştırma

Bu adımlar, projeyi kendi bilgisayarında çalıştırmak isteyen herkes içindir:

1. Reposu klonlayın:

```bash
git clone https://github.com/nurefsanb/next-auth.git
cd next-auth
```

2. Bağımlılıkları kurun:

```bash
npm install
```

3. `.env.local` dosyasını oluşturun ve doldurun:

```env
AUTH0_CLIENT_ID=xxx
AUTH0_CLIENT_SECRET=xxx
AUTH0_ISSUER=https://xxx.auth0.com
NEXTAUTH_SECRET=xxx
NEXTAUTH_URL=http://localhost:3000
```

4. Geliştirme sunucusunu başlatın:

```bash
npm run dev
```

5. Uygulamaya tarayıcıdan erişin:  
[http://localhost:3000](http://localhost:3000)

---

## 🧪 Test Çalıştırma

```bash
npm test
```

Test altyapısı Jest + React Testing Library ile kuruludur.  
Örnek test dosyası: `__tests__/Navbar.test.tsx`

---

## 🧱 Proje Yapısı

```
app/
├── admin/              # Yalnızca admin erişimi
├── unauthorized/       # Yetkisiz erişim uyarısı
├── protected-route/    # Örnek korumalı sayfa
├── client-provider.tsx
components/
├── Navbar.tsx          # Rol tabanlı navigasyon
lib/
├── auth/
│   ├── options.ts      # NextAuth yapılandırması
│   └── role.ts         # isAdmin/isUser yardımcıları
middleware.ts           # Route koruma
types/
├── next-auth.d.ts      # Session'a role ekleme
__tests__/
├── Navbar.test.tsx     # Basit unit test
```

---

## 🐳 Docker 

```bash
docker build -t next-auth-app .
docker run -p 3000:3000 next-auth-app
```

---

## ✅ Admin Rolü Nasıl Eklenir?

Auth0 panelinden kullanıcıya özel bir claim tanımlayın:

Örnek:

```json
{
  "https://example.com/roles": ["admin"]
}
```

Bu claim, JWT içinde yer alacak ve uygulama bunu `token.role` olarak alacaktır.

---

---

## 📌 Geliştiren

**Nurefsan B.**  
[GitHub → nurefsanb](https://github.com/nurefsanb)
