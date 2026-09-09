import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.join(__dirname, '..', 'dist')
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000

const app = express()
app.disable('x-powered-by')

if (!fs.existsSync(distDir)) {
  console.error(`Build output not found at ${distDir}. Run "npm run build" before starting the server.`)
  process.exit(1)
}

app.use(express.static(distDir, { index: false }))

app.get('*', (req, res) => {
  res.sendFile(path.join(distDir, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`FISI Learning Hub läuft auf http://localhost:${PORT}`)
})
