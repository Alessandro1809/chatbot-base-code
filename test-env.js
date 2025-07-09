// Script de prueba para verificar variables de entorno (versión ES modules)
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { OpenAI } from 'openai';

// Configurar __dirname en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Cargar variables de entorno
dotenv.config({ path: join(__dirname, '.env') });

console.log('=== Prueba de variables de entorno ===');
console.log('Directorio actual:', process.cwd());
console.log('Directorio del script:', __dirname);
console.log('OPENAI_API_KEY:', process.env.OPENAI_API_KEY ? '✅ Definida' : '❌ No definida');
console.log('PORT:', process.env.PORT || 'No definido');

// Intentar cargar OpenAI
console.log('\n=== Probando carga de OpenAI ===');
try {
  console.log('Módulo OpenAI cargado correctamente');
  
  if (process.env.OPENAI_API_KEY) {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });
    console.log('✅ Cliente de OpenAI inicializado correctamente');
  } else {
    console.log('❌ No se puede probar OpenAI sin API key');
  }
} catch (error) {
  console.error('❌ Error al cargar OpenAI:', error.message);
}
