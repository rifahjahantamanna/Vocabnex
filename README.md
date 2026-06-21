# VocabNex 📖

I kept learning new words every day but could never actually remember them. Writing them down didn't work. Flashcard apps felt boring. So I built VocabNex — a personal vocabulary builder that uses **active recall** techniques proven by cognitive science to make new words actually stick.

You add a word. AI instantly gives you a definition, example sentence, and synonyms. Then you study with flashcards and test yourself with AI-generated quizzes. Over time, you can see exactly which words you know and which ones need more work. **This is an ongoing project and I'm actively improving it with new features.**

🔗 **Live Demo:** [vocab-nex.vercel.app](https://vocab-nex.vercel.app)

---

## Features

- **AI Word Enrichment** — Add any word and instantly get a definition, example sentence, and synonyms powered by Gemini AI
- **Smart Caching** — Definitions are stored in a shared database so common words load instantly without any API call
- **Flashcard Review** — Flip cards to reveal definitions, mark what you know vs. what you don't
- **AI Quiz Mode** — AI generates multiple choice questions to test your knowledge through active recall
- **Progress Dashboard** — Track total words learned, flashcard accuracy, and quiz scores over time
- **Dark Theme UI** — Clean, modern interface built with Tailwind CSS

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Frontend | React.js, Tailwind CSS |
| Database & Auth | Supabase |
| AI | Google Gemini API |
| Deployment | Vercel |

---

## How It Works

### Smart Definition Caching

When a user adds a word, VocabNex first checks a shared `definitions` table in Supabase. If the word already exists, it returns instantly — no API call needed. If not, it calls Gemini, saves the result to the shared table, and returns it. The database grows smarter over time and AI is called less and less.

```
User adds word
     ↓
Check shared definitions table
     ↓
Found? → Return instantly (no API call)
Not found? → Call Gemini API → Save to table → Return
```

### Active Recall System

Passive reading doesn't build memory. VocabNex forces you to actively retrieve information through two modes:

- **Flashcards** — See the word, recall the meaning, then flip to verify
- **Quiz** — AI generates a unique multiple choice question for each word, so you can't just memorize answer patterns

---

## Built By

**Rifah Jahan Tamanna**

GitHub: [github.com/rifahjahantamanna](https://github.com/rifahjahantamanna)
