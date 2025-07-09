# 🍏 NutriBot - Asistente de Nutrición Inteligente

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)](https://openai.com/)

Un chatbot de WhatsApp que utiliza inteligencia artificial para analizar imágenes y descripciones de comida, proporcionando información nutricional detallada, conteo de calorías y recomendaciones saludables.

## 🌟 Características

- 🖼️ **Análisis de imágenes de comida** usando visión por computadora
- 📝 **Procesamiento de descripciones** de comidas en texto
- 📊 **Información nutricional detallada** (calorías, macronutrientes)
- 💡 **Recomendaciones personalizadas** para una alimentación saludable
- 🤖 Fácil de usar a través de WhatsApp

## 🚀 Requisitos previos

- Node.js 18 o superior
- Cuenta de OpenAI con acceso a la API
- Número de teléfono para el bot de WhatsApp

## ⚙️ Configuración

1. Clona el repositorio:
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd base-ts-baileys-memory
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
   ```env
   OPENAI_API_KEY=tu_api_key_de_openai
   PORT=3000
   ```

## 🏃‍♂️ Iniciar el bot

1. Ejecuta el comando de desarrollo:
   ```bash
   npm run dev
   ```

2. Escanea el código QR que aparecerá en la consola con WhatsApp Web en tu teléfono.

3. ¡Listo! El bot estará activo en tu WhatsApp.

## 💬 Cómo usar

1. **Para analizar una comida por texto**:
   ```
   Envía: "comida [descripción de tu comida]"
   Ejemplo: "comida un plato de arroz con pollo y ensalada"
   ```

2. **Para analizar una imagen de comida**:
   ```
   Envía una imagen de tu comida con el pie de foto "analiza"
   ```

## 🛠️ Estructura del proyecto

```
src/
├── app.ts            # Punto de entrada de la aplicación
├── services/
│   └── openAI.ts    # Servicio de integración con OpenAI
└── types/           # Tipos TypeScript
```

## 📦 Dependencias principales

- `@builderbot/bot`: Framework para crear bots
- `@builderbot/provider-baileys`: Proveedor de WhatsApp
- `openai`: Cliente de la API de OpenAI
- `typescript`: Tipado estático
- `dotenv`: Manejo de variables de entorno

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor, envía un PR con tus mejoras.

## 📄 Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).

---

Hecho con ❤️ por [Tu Nombre]