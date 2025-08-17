# BigBang Sequence Generator

![Output.json screenshot](/asset/screenshot.png)

## Description

This project inspired by a tale of two prime numbers (3 and 5) colliding to cause a "big bang." The goal is to create a model that predicts future "big bangs" by generating an array of values from 1 to 100, where:

- Divisible by 3 → "BIG"
- Divisible by 5 → "BANG"
- Divisible by 3 and 5 → "BIGBANG"

Output is saved as a JSON file named `output.json`.

---

## Steps to Run

1. Clone the repository:

```bash
git clone <https://github.com/mrullldhm/big-bang>
cd big-bang-task
```

2. Install dependencies:

```bash
npm install
```

3. Buidl TypeScript Code:

```bash
npm run build
```

4. Run the script

```bash
npm start
```

## Output
After running the script, `output.json` will contain the following content:

```json
["1","2","BIG","4","BANG","BIG","7","8","BIG","BANG","11","BIG","13","14","BIGBANG",...]




