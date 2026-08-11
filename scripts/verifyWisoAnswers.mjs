// Verification script: compares every WisoExamQuestion's correctAnswer/answerStatus
// against the official ZPA answer keys transcribed directly from the source PDFs.
// Run: node --experimental-strip-types scripts/verifyWisoAnswers.mjs

// Canonical keys, exactly as read from the Loe_WiSo_*.pdf solution pages.
// Each entry: questionNumber -> value | [values] | {subPart: value}
const KEYS = {
  'wiso-2020-sommer': {
    1: ['3', '6'], 2: { a: '08', b: '04', c: '02', d: '01', e: '03' }, 3: '4', 4: '3', 5: '5',
    6: ['3', '6'], 7: ['1', '3'], 8: '1', 9: '2', 10: '4', 11: null /* "immer richtig" - unclear */,
    12: '244,80', 13: ['1', '3'], 14: '1', 15: '5', 16: '4', 17: { a: '2', b: '4', c: '3' },
    18: { a: '4', b: '1', c: '2', d: '3', e: '3' }, 19: { a: '75,00', b: '6.750,00', c: '40' },
    20: '4/7', 21: '3', 22: '2', 23: '3', 24: ['2', '5'], 25: ['1', '2'], 26: '5', 27: '5', 28: '3',
    29: { a: '2', b: '1', c: '4', d: '3' }, 30: '3',
  },
  'wiso-2020-winter': {
    1: { a: ['2', '6'], b: ['3', '5'], c: ['1', '4'] }, 2: '3', 3: '1', 4: '2', 5: '1', 6: '4',
    7: { a: '2', b: '4', c: '1', d: '2', e: '3' }, 8: '2', 9: '5', 10: '1', 11: '4', 12: ['4', '5'],
    13: '3', 14: '4', 15: '2', 16: '4', 17: '2', 18: { a: '4', b: '1', c: '2', d: '5', e: '3' },
    19: '1', 20: '5', 21: '4', 22: { a: '3', b: '1,30' }, 23: '5', 24: ['3', '5'], 25: '4', 26: '3',
    27: '5', 28: '4', 29: '4', 30: ['3', '6'],
  },
  'wiso-2021-sommer': {
    1: ['1', '5'], 2: '2', 3: '3', 4: '2', 5: '1', 6: '5', 7: '3', 8: ['4', '5'], 9: ['1', '2'],
    10: '1', 11: '5', 12: '2', 13: '1', 14: '2', 15: ['3', '6'], 16: { a: '9,4', b: '0,9' },
    17: { a: '117.600', b: '5 oder Algo (E17a - 112.000) / 112.000 x 100' }, 18: '4', 19: '4',
    20: '2', 21: '3', 22: '2', 23: '3', 24: { a: '2', b: '3' }, 25: '3', 26: '2', 27: '3', 28: '5',
    29: '5', 30: '2',
  },
  'wiso-2021-winter': {
    1: ['2', '3'], 2: '3', 3: '4', 4: '4', 5: '4', 6: '3', 7: { a: '06', b: '08', c: '09', d: '03' },
    8: '4', 9: '5', 10: '4', 11: '2', 12: '5', 13: '2', 14: '4', 15: '3', 16: '1', 17: '4', 18: '2',
    19: { a: '105.840', b: '8 oder Algo (E19a - 98.000):98.000 x 100' }, 20: { a: '2', b: '6' }, 21: '2', 22: '1', 23: '2', 24: '2', 25: '3',
    26: '3', 27: '2', 28: '1', 29: '4', 30: '2',
  },
  'wiso-2022-sommer': {
    1: '4', 2: ['1', '5'], 3: '06:00', 4: '1', 5: '30', 6: '2', 7: '3', 8: '4', 9: '4', 10: '5',
    11: '3', 12: '2', 13: ['1', '3'], 14: '3', 15: ['3', '6'], 16: '2',
    17: { a: '2', b: '1', c: '2', d: '3', e: '3' }, 18: '5', 19: '3', 20: '5', 21: '2', 22: '2',
    // 23: pictogram-matching item; b) ("Gehäuse unter Spannung, nicht berühren") could not be
    // reliably distinguished between pictograms 4 and 6 at available image resolution, so the
    // whole shared-option-list item was deliberately left 'unclear' rather than guessed.
    23: { a: null, b: null, c: null, d: null }, 24: '4', 25: '3',
    26: { a: '3', b: '2', c: '4', d: '5', e: '1' }, 27: '2', 28: '3', 29: '4', 30: '5',
  },
  'wiso-2024-sommer': {
    1: '4', 2: '2', 3: '3', 4: '2', 5: ['1', '4'], 6: '2', 7: '4', 8: '2', 9: ['3', '4'], 10: '3',
    11: ['1', '3'], 12: '3', 13: { a: '3', b: '4', c: '5', d: '1', e: '2' }, 14: '3', 15: '4',
    16: '34.980,00', 17: '3', 18: '8', 19: '5', 20: '3', 21: '1', 22: '2', 23: '4', 24: '4', 25: '1',
    26: '4', 27: '4', 28: '5', 29: ['3', '5'], 30: '4',
  },
  'wiso-2024-winter': {
    1: '5', 2: '4', 3: '1', 4: '3', 5: '3', 6: '3', 7: ['3', '4'], 8: '1', 9: '5',
    10: { a: '2', b: '1', c: '4' }, 11: '5', 12: '1', 13: '2', 14: '5', 15: '5', 16: '2', 17: '5',
    18: { a: '3', b: '2', c: '3', d: '1', e: '1' }, 19: '5', 20: '3', 21: '4', 22: '3', 23: '1',
    24: '2', 25: '3', 26: '2', 27: ['2', '5'], 28: ['1', '5'], 29: '3', 30: '2',
  },
  'wiso-2025-winter': 'ALL_UNCLEAR',
}

const FILES = {
  'wiso-2020-sommer': { path: '../src/data/wisoExam/wiso2020Sommer.ts', exportName: 'wisoExam2020SommerQuestions' },
  'wiso-2020-winter': { path: '../src/data/wisoExam/wiso2020Winter.ts', exportName: 'wisoExam2020WinterQuestions' },
  'wiso-2021-sommer': { path: '../src/data/wisoExam/wiso2021Sommer.ts', exportName: 'wisoExam2021SommerQuestions' },
  'wiso-2021-winter': { path: '../src/data/wisoExam/wiso2021Winter.ts', exportName: 'wisoExam2021WinterQuestions' },
  'wiso-2022-sommer': { path: '../src/data/wisoExam/wiso2022Sommer.ts', exportName: 'wisoExam2022SommerQuestions' },
  'wiso-2024-sommer': { path: '../src/data/wisoExam/wiso2024Sommer.ts', exportName: 'wisoExam2024SommerQuestions' },
  'wiso-2024-winter': { path: '../src/data/wisoExam/wiso2024Winter.ts', exportName: 'wisoExam2024WinterQuestions' },
  'wiso-2025-winter': { path: '../src/data/wisoExam/wiso2025Winter.ts', exportName: 'wisoExam2025WinterQuestions' },
}

function normalize(v) {
  if (v === undefined || v === null) return null
  if (Array.isArray(v)) return [...v].sort().join(';')
  return String(v)
}

let totalMismatches = 0
let totalChecked = 0

for (const [examId, fileInfo] of Object.entries(FILES)) {
  const mod = await import(fileInfo.path)
  const questions = mod[fileInfo.exportName]
  const key = KEYS[examId]

  console.log(`\n=== ${examId} (${questions.length} question objects) ===`)

  if (key === 'ALL_UNCLEAR') {
    const wrong = questions.filter((q) => q.answerStatus !== 'unclear' || q.correctAnswer !== undefined)
    if (wrong.length > 0) {
      console.log(`  MISMATCH: expected ALL unclear/no correctAnswer, but found ${wrong.length} with a value set:`)
      for (const q of wrong) console.log(`    q${q.questionNumber}${q.subPart ?? ''}: status=${q.answerStatus} answer=${JSON.stringify(q.correctAnswer)}`)
      totalMismatches += wrong.length
    } else {
      console.log('  OK: all questions correctly unclear with no correctAnswer.')
    }
    continue
  }

  for (const q of questions) {
    const expectedForTask = key[q.questionNumber]
    if (expectedForTask === undefined) {
      console.log(`  WARN: q${q.questionNumber}${q.subPart ?? ''} not in canonical key at all (extra/unexpected task number)`)
      continue
    }
    const expected = q.subPart && typeof expectedForTask === 'object' && !Array.isArray(expectedForTask)
      ? expectedForTask[q.subPart]
      : expectedForTask

    totalChecked++

    if (expected === null) {
      // Canonical key itself is ambiguous/non-numeric (e.g. "immer richtig", or an accepted-formula answer) -> should be unclear
      if (q.answerStatus !== 'unclear') {
        console.log(`  MISMATCH: q${q.questionNumber}${q.subPart ?? ''} expected 'unclear' (key value is non-mappable) but got status=${q.answerStatus} answer=${JSON.stringify(q.correctAnswer)}`)
        totalMismatches++
      }
      continue
    }

    if (q.answerStatus !== 'confirmed') {
      console.log(`  MISMATCH: q${q.questionNumber}${q.subPart ?? ''} expected confirmed='${normalize(expected)}' but got status=${q.answerStatus}`)
      totalMismatches++
      continue
    }

    const got = normalize(q.correctAnswer)
    const want = normalize(expected)
    if (got !== want) {
      console.log(`  MISMATCH: q${q.questionNumber}${q.subPart ?? ''} expected '${want}' but file has '${got}'`)
      totalMismatches++
    }
  }
}

console.log(`\n\nChecked ${totalChecked} scoreable items. Total mismatches: ${totalMismatches}`)
