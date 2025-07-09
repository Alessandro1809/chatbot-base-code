import OpenAI from 'openai'

console.log('=== Inicializando cliente de OpenAI ===')


const apiKey = process.env.OPENAI_API_KEY
if (!apiKey) {
  throw new Error('OPENAI_API_KEY no está definida en las variables de entorno')
}


const openai = new OpenAI({
  apiKey: apiKey
})

console.log('✅ Cliente de OpenAI inicializado correctamente')

export { openai }

export async function analyzeFoodText(text: string) {
  const completion = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        role: 'system',
        content: 'Eres un nutricionista profesional. Analiza la siguiente comida o receta y proporciona un análisis nutricional con calorías aproximadas, macronutrientes y recomendaciones.'
      },
      {
        role: 'user',
        content: text
      }
    ]
  })

  return completion.choices[0].message.content
}

export async function analyzeFoodImage(imageUrl: string) {
  const completion = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        role: 'system',
        content: 'Eres un nutricionista profesional. Analiza la siguiente imagen de comida y proporciona un análisis nutricional con calorías aproximadas, macronutrientes y recomendaciones.'
      },
      {
        role: 'user',
        content: [
          {
            type: 'image_url',
            image_url: {
              url: imageUrl
            }
          }
        ]
      }
    ]
  })

  return completion.choices[0].message.content
}
