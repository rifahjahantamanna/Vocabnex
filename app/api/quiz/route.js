import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

export async function POST(request) {
  try {
    const { word, definition, allWords } = await request.json()

    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' })

    const prompt = `Create a multiple choice question to test knowledge of the word "${word}" which means "${definition}".

Use these words as wrong options (pick 3): ${allWords.filter(w => w !== word).slice(0, 6).join(', ')}

Respond in this exact JSON format with no extra text, no markdown, no backticks:
{
  "question": "What does the word '${word}' mean?",
  "correct": "${definition}",
  "options": ["${definition}", "wrong definition 1", "wrong definition 2", "wrong definition 3"]
}`

    const result = await model.generateContent(prompt)
    const text = result.response.text()
    const clean = text.replace(/```json|```/g, '').trim()
    const data = JSON.parse(clean)
    
    console.log('Quiz data:', JSON.stringify(data))

    data.options = data.options.sort(() => Math.random() - 0.5)

    return Response.json(data)
  } catch (err) {
    console.error('Quiz error:', err)
    return Response.json({ error: err.message }, { status: 500 })
  }
}