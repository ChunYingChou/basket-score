let players = [
  { name: '櫻木花道', pts: 0, reb: 0, ast: 0, stl: 0, blk: 2 },
  { name: '流川楓', pts: 30, reb: 6, ast: 3, stl: 3, blk: 0 },
  { name: '赤木剛憲', pts: 16, reb: 10, ast: 0, stl: 0, blk: 5 },
  { name: '宮城良田', pts: 6, reb: 0, ast: 7, stl: 6, blk: 0 },
  { name: '三井壽', pts: 21, reb: 4, ast: 3, stl: 0, blk: 0 }
]

const dataPanel = document.querySelector('#data-panel')


// write your code here
function displayPlayerList(players) {

  let htmlContent = ''

  players.forEach(function (player) {

    htmlContent += `<tr>`

    for (let key in player) {
      if (key === 'name') {
        htmlContent += `<th> ${player[key]} </th>`
      } else {
        htmlContent += `
          <th> 
          <span style = "font-size: 25px"> ${player[key]} </span>
          <i class="fa fa-plus-circle up"></i> 
          <i class="fa fa-minus-circle down"></i> 
          </th>
    `
      }
    }
    htmlContent += `</tr>`
  })
  dataPanel.innerHTML = htmlContent
}

displayPlayerList(players)


// 新增按鈕功能

dataPanel.addEventListener('click', function (event) {
  let target = event.target
  let scoreBox = target.parentElement.children[0] // 先往上找到上層元素的下層第一個小孩
  let score = parseInt(scoreBox.innerText) // 將字串轉換為數字
  if (target.classList.contains('fa-plus-circle')) {
    score += 1
    scoreBox.innerText = score // 將分數的更新結果傳回表格
  } else if (target.classList.contains('fa-minus-circle')) {
    score -= 1
    if (score < 0) {
      score = 0
    }
    scoreBox.innerText = score // 將分數的更新結果傳回表格
  }

})

