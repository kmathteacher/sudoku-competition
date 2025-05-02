// 1. 8개 문제와 정답 세트
const puzzleList = [
  //1번//
    [["",7,"","",2,"","",4,6],
    ["",6,"","","","",8,9,""],
    [2,"","",8,"","",7,1,5],
    ["",8,4,"",9,7,"","",""],
    [7,1,"","","","","",5,9],
    ["","","",1,3,"",4,8,""],
    [6,9,7,"","",2,"","",8],
    ["",5,8,"","","","",6,""],
    [4,3,"","",8,"","",7,""]],
  //2번// 
  [["","",4,"",5,"","","",""],
  [9,"","",7,3,4,6,"",""],
  ["","",3,"",2,1,"",4,9],
  ["",3,5,"",9,"",4,8,""],
  ["",9,"","","","","",3,""],
  ["",7,6,"",1,"",9,2,""],
  [3,1,"",9,7,"",2,"",""],
  ["","",9,1,8,2,"","",3],
  ["","","","",6,"",1,"",""]],
  //3번//
  [[8,"",6,"",1,"","","",""],
  ["","",3,"",6,4,"",9,""],
  [9,"","","","","",8,1,6],
  ["",8,"",3,9,6,"","",""],
  [7,"",2,"",4,"",3,"",9],
  ["","","",5,7,2,"",8,""],
  [5,2,1,"","","","","",4],
  ["",3,"",7,5,"",2,"",""],
  ["","","","",2,"",1,"",5]],
  //4번//
  [[3,8,"",9,"","",2,"",5],
  ["","","","","",8,7,3,""],
  ["",6,"",3,"","",9,8,""],
  ["","","","","",3,5,"",1],
  [9,1,"",5,"",7,"",2,3],
  [7,"",3,1,"","","","",""],
  ["",3,5,"","",1,"",9,""],
  ["",7,4,6,"","","","",""],
  [8,"",1,"","",2,"",6,7]],
  //5번//
  [[6,"","","","",9,"","",4],
  ["",8,9,5,"","","",1,6],
  [5,"","","",6,"",3,"",9],
  [8,3,1,"","","",7,"",5],
  ["",2,"","","","","",6,""],
  [9,"",7,"","","",8,4,2],
  [2,"",6,"",1,"","","",8],
  [3,7,"","","",6,9,2,""],
  [1,"","",3,"","","","",7]],
  //6번//
  [[5,"",7,2,"","","",9,""],
  ["","",6,"",3,"",7,"",1],
  [4,"","","","","","",6,""],
  [1,"","",4,9,"","","",7],
  ["","","",5,"",8,"","",""],
  [8,"","","",2,7,"","",5],
  ["",7,"","","","","","",9],
  [2,"",9,"",8,"",6,"",""],
  ["",4,"","","",9,3,"",8]],
  //7번//
  [[2,"","","","","",6,9,""],
  ["",5,"","","",3,"","",""],
  [1,7,"","","",9,4,"",5],
  ["","",3,"",2,5,"",1,8],
  ["","","","",4,"","","",""],
  [7,2,"",3,8,"",5,"",""],
  [5,"",2,6,"","","",4,1],
  ["","","",5,"","","",7,""],
  ["",6,7,"","","","","",3]],
  //8번//
  [[1,5,"",2,"",9,"","",4],
  ["",4,"","","",6,"","",""],
  ["","","","",4,"","",6,3],
  ["",7,"","","","",8,"",6],
  [6,"","","","","","","",5],
  [2,"",8,"","","","",1,""],
  [4,6,"","",8,"","","",""],
  ["","","",6,"","","",7,""],
  [8,"","",5,"",1,"",4,9]]
];

const answerList = [
  //q1//
  [
    [8,7,5,9,2,1,3,4,6],
    [3,6,1,7,5,4,8,9,2],
    [2,4,9,8,6,3,7,1,5],
    [5,8,4,6,9,7,1,2,3],
    [7,1,3,2,4,8,6,5,9],
    [9,2,6,1,3,5,4,8,7],
    [6,9,7,4,1,2,5,3,8],
    [1,5,8,3,7,9,2,6,4],
    [4,3,2,5,8,6,9,7,1] 
  ],
  //q2//
  [
    [2,6,4,8,5,9,3,1,7],
    [9,8,1,7,3,4,6,5,2],
    [7,5,3,6,2,1,8,4,9],
    [1,3,5,2,9,7,4,8,6],
    [8,9,2,5,4,6,7,3,1],
    [4,7,6,3,1,8,9,2,5],
    [3,1,8,9,7,5,2,6,4],
    [6,4,9,1,8,2,5,7,3],
    [5,2,7,4,6,3,1,9,8]
  ],
  //q3//
  [ 
    [8,5,6,9,1,7,4,2,3],
    [2,1,3,8,6,4,5,9,7],
    [9,4,7,2,3,5,8,1,6],
    [1,8,5,3,9,6,7,4,2],
    [7,6,2,1,4,8,3,5,9],
    [3,9,4,5,7,2,6,8,1],
    [5,2,1,6,8,3,9,7,4],
    [4,3,9,7,5,1,2,6,8],
    [6,7,8,4,2,9,1,3,5]
    
  ],
  //q4//
  [
    [3,8,7,9,6,4,2,1,5],
    [5,4,9,2,1,8,7,3,6],
    [1,6,2,3,7,5,9,8,4],
    [4,2,6,8,9,3,5,7,1],
    [9,1,8,5,4,7,6,2,3],
    [7,5,3,1,2,6,8,4,9],
    [6,3,5,7,8,1,4,9,2],
    [2,7,4,6,3,9,1,5,8],
    [8,9,1,4,5,2,3,6,7]
  ],
  //q5//
  [
    [6, 1, 3, 2, 7, 9, 5, 8, 4],
    [7, 8, 9, 5, 4, 3, 2, 1, 6],
    [5, 4, 2, 8, 6, 1, 3, 7, 9],
    [8, 3, 1, 6, 2, 4, 7, 9, 5],
    [4, 2, 5, 7, 9, 8, 1, 6, 3],
    [9, 6, 7, 1, 3, 5, 8, 4, 2],
    [2, 5, 6, 9, 1, 7, 4, 3, 8],
    [3, 7, 8, 4, 5, 6, 9, 2, 1],
    [1, 9, 4, 3, 8, 2, 6, 5, 7]
  ],
  //q6//
  [
    [5, 1, 7, 2, 6, 4, 8, 9, 3],
    [9, 2, 6, 8, 3, 5, 7, 4, 1],
    [4, 8, 3, 9, 7, 1, 5, 6, 2],
    [1, 3, 5, 4, 9, 6, 2, 8, 7],
    [7, 9, 2, 5, 1, 8, 4, 3, 6],
    [8, 6, 4, 3, 2, 7, 9, 1, 5],
    [3, 7, 8, 6, 4, 2, 1, 5, 9],
    [2, 5, 9, 1, 8, 3, 6, 7, 4],
    [6, 4, 1, 7, 5, 9, 3, 2, 8]
  ],
  //q7//
  [
    [2, 3, 4, 1, 5, 8, 6, 9, 7],
    [9, 5, 6, 4, 7, 3, 1, 8, 2],
    [1, 7, 8, 2, 6, 9, 4, 3, 5],
    [6, 4, 3, 9, 2, 5, 7, 1, 8],
    [8, 1, 5, 7, 4, 6, 3, 2, 9],
    [7, 2, 9, 3, 8, 1, 5, 6, 4],
    [5, 9, 2, 6, 3, 7, 8, 4, 1],
    [3, 8, 1, 5, 9, 4, 2, 7, 6],
    [4, 6, 7, 8, 1, 2, 9, 5, 3]
  ],
  //q8//
  [
    [1, 5, 6, 2, 3, 9, 7, 8, 4],
    [7, 4, 3, 8, 5, 6, 9, 2, 1],
    [9, 8, 2, 1, 4, 7, 5, 6, 3],
    [3, 7, 5, 4, 1, 2, 8, 9, 6],
    [6, 1, 4, 9, 7, 8, 2, 3, 5],
    [2, 9, 8, 3, 6, 5, 4, 1, 7],
    [4, 6, 9, 7, 8, 3, 1, 5, 2],
    [5, 2, 1, 6, 9, 4, 3, 7, 8],
    [8, 3, 7, 5, 2, 1, 6, 4, 9]
  ]
];

let size = 9;
let currentRound = 0;
let resultList = [];
let startTime = 0;
let startFlag = false;
let timerInterval;

function startGame() {
  const name = document.getElementById('student-name').value.trim();
  const studentId = document.getElementById('student-id').value.trim();

  if (!name || !studentId) {
    alert('이름과 학번을 입력하세요.');
    return;
  }

  document.getElementById('student-info').style.display = 'none';
  document.getElementById('sudoku-board').style.display = 'grid';
  document.getElementById('submit-button').style.display = 'inline-block';
  document.getElementById('round-info').style.display = 'block';

  currentRound = 0;
  resultList = [];
  startTime = Date.now();
  startFlag = true;
  startTimer();
  document.getElementById('round-number').innerText = `문제 ${currentRound + 1} / ${puzzleList.length}`;
  createSudokuBoard();
}

function startTimer() {
  timerInterval = setInterval(() => {
    const now = Date.now();
    const elapsed = Math.floor((now - startTime) / 1000);
    document.getElementById('timer').innerText = `시간: ${elapsed}초`;
  }, 1000);
}

function createSudokuBoard() {
  const board = document.getElementById('sudoku-board');
  board.innerHTML = '';
  board.style.gridTemplateColumns = `repeat(${size}, 52px)`;

  const puzzle = puzzleList[currentRound];

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const input = document.createElement('input');
      input.type = 'number';
      input.min = 1;
      input.max = size;
      input.dataset.row = row;
      input.dataset.col = col;

      if (puzzle[row][col] !== '') {
        input.value = puzzle[row][col];
        input.disabled = true;
      }

      if (row % 3 === 0) input.classList.add("top-border");
      if (row === size - 1) input.classList.add("bottom-border");
      if (col % 3 === 0) input.classList.add("left-border");
      if (col === size - 1) input.classList.add("right-border");

      input.addEventListener('input', () => {
        let val = input.value;
        if (val.length > 1) val = val.slice(0, 1);
        val = parseInt(val);
        if (isNaN(val) || val < 1) {
          input.value = '';
        } else if (val > size) {
          input.value = size;
        } else {
          input.value = val;
        }
      });

      board.appendChild(input);
    }
  }
}

function submitSudoku() {
  if (!startFlag) return;
  clearInterval(timerInterval);

  const name = document.getElementById('student-name').value.trim();
  const studentId = document.getElementById('student-id').value.trim();
  const puzzle = puzzleList[currentRound];
  const answerKey = answerList[currentRound];

  const endTime = Date.now();
  const elapsedTime = Math.floor((endTime - startTime) / 1000);

  let correct = 0;
  let total = 0;
  const inputs = document.querySelectorAll('#sudoku-board input');

  inputs.forEach(input => {
    const row = input.dataset.row;
    const col = input.dataset.col;
    const value = parseInt(input.value);

    if (puzzle[row][col] === '') {
      total++;
      if (value === answerKey[row][col]) {
        correct++;
      }
    }
  });

  const accuracy = total === 0 ? 0 : (correct / total) * 100;
  resultList.push({ time: elapsedTime, correct: correct, accuracy: accuracy.toFixed(2) });

  currentRound++;

  if (currentRound < puzzleList.length) {
    document.getElementById('round-number').innerText = `문제 ${currentRound + 1} / ${puzzleList.length}`;
    createSudokuBoard();
    startTimer();
  } else {
    const totalTime = Math.floor((Date.now() - startTime) / 1000);
    const avgAccuracy = (resultList.reduce((sum, r) => sum + parseFloat(r.accuracy), 0) / resultList.length).toFixed(2);

    const resultData = {
      "이름": name,
      "학번": studentId,
      "걸린 시간": totalTime
    };

    for (let i = 0; i < resultList.length; i++) {
      resultData[`${i + 1}번`] = resultList[i].correct;
    }

    resultData["평균정확도"] = avgAccuracy;

    document.getElementById('result').innerText = `이름: ${name}\n학번: ${studentId}\n총 ${resultList.length}문제 완료!\n총 걸린 시간: ${totalTime}초\n평균 정확도: ${avgAccuracy}%`;

    fetch('https://script.google.com/macros/s/AKfycbxd3_PbxwPXs504ySndhmn7pV3-6FKRHZCVv3YhcUbfMY_Jy1Mw0nn39NT0MsvwiqGU/exec', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(resultData)
    })
    .then(() => {
      console.log('서버에 제출 완료!');
    })
    .catch(error => {
      console.error('제출 실패:', error);
    });
  }
}

