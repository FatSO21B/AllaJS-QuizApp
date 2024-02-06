const userName = document.querySelector("#username");
const saveScoreBtn = document.querySelector("#saveScoreBtn");
const finalScore = document.querySelector("#finalScore");
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
finalScore.textContent = mostRecentScore;

saveScoreBtn.addEventListener('click', (e)=> {
  e.preventDefault();

  const score = {
    score: mostRecentScore,
    name: userName.value
  }
  
  highScores.push(score);
  highScores.sort((a,b)=>{
    return b.score - a.score
  })

  highScores.splice(5);
  localStorage.setItem('highScores', JSON.stringify(highScores))
  setTimeout(()=> {
    return window.location.assign('/')
  }, 1000)
  
})