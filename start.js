// Script de arranque mejorado
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Configurar __dirname en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Cargar variables de entorno
dotenv.config({ path: join(__dirname, '.env') });

console.log('=== Iniciando aplicación ===');
console.log('Directorio actual:', process.cwd());
console.log('Directorio del script:', __dirname);
console.log('Variables de entorno cargadas:', {
  PORT: process.env.PORT,
  HAS_OPENAI_KEY: !!process.env.OPENAI_API_KEY
});

// Importar la aplicación principal
console.log('\n=== Importando aplicación principal ===');
try {
  // Usar ruta relativa con extensión .js
  const appPath = new URL('./src/app.js', import.meta.url).pathname;
  console.log('Ruta de la aplicación:', appPath);
  
  // Importar dinámicamente
  const app = await import(appPath);
  console.log('✅ Aplicación importada correctamente');
} catch (error) {
  console.error('❌ Error al importar la aplicación:', error);
  process.exit(1);
}
