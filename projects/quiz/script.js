const quizData = [
  {
    question: "How old is Elon Musk?",
    a: "25",
    b: "35",
    c: "45",
    d: "55",
    correct: "d",
  },

  {
    question: "What is the most popular programming langiage in 2024 ?",
    a: "JS",
    b: "C",
    c: "C++",
    d: "Python",
    correct: "c",
  },

  {
    question: "Who is Prime Minister of India? ",
    a: "Narendra modi",
    b: "Swapnil Shelke",
    c: "Ritesh Gadre",
    d: "Elon Musk",
    correct: "a",
  },

  {
    question: "HTML stands for? ",
    a: "Hypter text Markup Lnaguage",
    b: "Caccading style sheet",
    c: "Json object antation",
    d: "Hpyer text transmission Markup logo",
    correct: "a",
  },

  {
    question: "What year JS launched",
    a: "2020",
    b: "1995",
    c: "2018",
    d: "1997",
    correct: "b",
  },
];

const questionEl = document.getElementById("question")

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");