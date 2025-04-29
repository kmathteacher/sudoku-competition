// 정답 스도쿠판 (9x9 예시)
const answerKey = [
  [5,3,4,6,7,8,9,1,2],
  [6,7,2,1,9,5,3,4,8],
  [1,9,8,3,4,2,5,6,7],
  [8,5,9,7,6,1,4,2,3],
  [4,2,6,8,5,3,7,9,1],
  [7,1,3,9,2,4,8,5,6],
  [9,6,1,5,3,7,2,8,4],
  [2,8,7,4,1,9,6,3,5],
  [3,4,5,2,8,6,1,7,9]
];

// 문제판 (빈칸 처리)
const puzzle = [
  [5,3,'', '',7,'', '', '', ''],
  [6,'', '',1,9,5,'', '', ''],
  ['',9,8,'', '', '', '',6,''],
  [8,'','',7,'','', '', '',3],
  [4,'', '',8,'',3,'', '',1],
  [7,'','', '',2,'','', '',6],
  ['',6,'', '', '', '',2,8,''],
  ['', '', '',4,1,9,'', '',5],
  ['', '', '', '',8,'', '',7,9]
];

let size = 9; // 9x9 확장

let startTime = 0;
let startFlag = false;

// 시작 버튼 클릭 시
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

  startTime = Date.now();
  startFlag = true;
  createSudokuBoard();
}

// 스도쿠판 만들기
function createSudokuBoard() {
  const board = document.getElementById('sudoku-board');
  board.innerHTML = '';

  board.style.gridTemplateColumns = `repeat(${size}, 40px)`; // 9개로 조정

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

      // 1~9 숫자만 입력 가능하게 강제
      input.addEventListener('input', () => {
        let val = input.value;
        if (val.length > 1) val = val.slice(0, 1); // 한자리만 입력 가능
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

// 제출 버튼 클릭 시
function submitSudoku() {
  if (!startFlag) return;

  const name = document.getElementById('student-name').value.trim();
  const studentId = document.getElementById('student-id').value.trim();

  const endTime = Date.now();
  const elapsedTime = Math.floor((endTime - startTime) / 1000);

  let correct = 0;
  let total = 0;
  const inputs = document.querySelectorAll('#sudoku-board input');

  inputs.forEach(input => {
    const row = input.dataset.row;
    const col = input.dataset.col;
    const value = parseInt(input.value);

    if (puzzle[row][col] === '') { // 빈칸만 채점
      total++;
      if (value === answerKey[row][col]) {
        correct++;
      }
    }
  });

  const accuracy = (correct / total) * 100;

  document.getElementById('result').innerText = 
    `이름: ${name}, 학번: ${studentId}\n걸린 시간: ${elapsedTime}초\n정답 개수: ${correct}/${total}\n정확도: ${accuracy.toFixed(2)}%`;

  const resultData = {
    name: name,
    studentId: studentId,
    time: elapsedTime,
    correct: correct,
    accuracy: accuracy.toFixed(2)
  };

  console.log('제출 데이터:', resultData);

  // 서버 전송
  fetch('https://script.google.com/macros/s/AKfycbzC0-SXkwPw7VX1tYIPY7ET-W4CU7ZCPDog9UOdWdYETfuYhHSfKd4lrIqkIZOoY04/exec', {
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

  // 다음 문제 초기화 (현재는 같은 문제, 랜덤문제 나중에 추가 가능)
  startTime = Date.now();
  startFlag = true;
  createSudokuBoard();
}
