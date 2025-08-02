import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth({
  pages: {
    signIn: "/api/auth/signin", // Giriş yapılmamışsa buraya yönlendir
  },
  callbacks: {
    async authorized({ token, req }) {
      const isAdminPage = req.nextUrl.pathname.startsWith("/admin");

      // Admin sayfasıysa ve kullanıcı admin değilse yönlendirme yap
      if (isAdminPage) {
        if (!token || token.role !== "admin") {
          return false; // yetkisiz => signIn sayfasına yönlendirilir
        }
      }

      // Diğer tüm sayfalar için sadece oturum kontrolü yeterli
      return !!token;
    },
  },
});
export const config = {
  matcher: ["/protected-route/:path*", "/admin/:path*"], // Role bazlı ve oturum bazlı koruma için
};
