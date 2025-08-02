# 1. Temel node imajı
FROM node:18-alpine

# 2. Uygulama dizinini oluştur
WORKDIR /app

# 3. Bağımlılık dosyalarını kopyala
COPY package*.json ./

# 4. Bağımlılıkları yükle
RUN npm install

# 5. Geri kalan her şeyi kopyala
COPY . .

# 6. Ortam değişkeni: üretim değil geliştirme
ENV NODE_ENV=development

# 7. Port ayarı
EXPOSE 3000

# 8. Başlatma komutu
CMD ["npm", "run", "dev"]
