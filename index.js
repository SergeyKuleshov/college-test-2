#!/usr/bin/env node

// import { fileURLToPath } from "node:url";
// import path from "node:path";
// import fs from 'fs';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const fileName = process.argv[2];
// const content = fs.readFileSync(path.join(
//   __dirname,
//   fileName
// ), 'utf-8');

// BEGIN
// console.log(content);
const content = `| Существо | Сила | Здоровье | Кол-во человек в отряде | Средний рост | Средний вес | Цена найма |
| Орк | 7 | 8 | 40 | 175 | 90 | 750 |
| Эльф | 5 | 6 | 15 | 165 | 55 | 1500 |
| Дварф | 6 | 10 | 25 | 145 | 75 | 2000 |
| Гоблин | 4 | 4 | 80 | 135 | 45 | 100 |
| Гном | 3 | 6 | 8 | 115 | 35 | 500 |
| Хоббит | 2 | 3 | 3 | 95 | 25 | 1000 |`;

// console.log(content);

const rows = content.split('|').join().split('\n');
const data = rows.map((el) => el.split(',').filter((s) => s));

const normalizeData = data.map((el) => el.map((s) => s.trim()));
const headers = normalizeData.shift();

console.log(headers);
console.log(normalizeData);

const enemies = [];
normalizeData.forEach((row) => {
  const current = {};
  row.forEach((el, index) => {
    current[headers[index]] = el;
  });
  enemies.push(current);
});

console.log(enemies);
// END
