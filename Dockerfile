# Usa una imagen base de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos del proyecto
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install --only=production

# Copia el resto del código
COPY . .

# Expone el puerto donde corre tu aplicación (ajústalo según tu configuración)
EXPOSE 3222

# Comando para ejecutar la aplicación
CMD ["node", "server.js"]
