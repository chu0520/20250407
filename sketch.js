let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight); // 畫布大小為整個視窗
  console.log(width, height); // 檢查畫布大小
  noStroke();

  // 產生 40 個圓，隨機位置與大小
  for (let i = 0; i < 40; i++) {
    let circle = {
      x: random(width), // 隨機 x 座標
      y: random(height), // 隨機 y 座標
      size: random(30, 50), // 初始大小 30 到 50
      color: color(random(255), random(255), random(255)), // 隨機鮮豔顏色
    };
    console.log(circle); // 檢查每個圓的屬性
    circles.push(circle);
  }
}

function draw() {
  background(	"#FFECF5");

  // 根據滑鼠的 x 座標調整圓的大小
  let sizeFactor = map(mouseX, 0, width, 20, 80);
  console.log(mouseX, sizeFactor); // 檢查滑鼠位置和大小因子

  // 繪製所有圓
  for (let circle of circles) {
    console.log(circle); // 檢查每個圓的屬性
    fill(circle.color);
    ellipse(circle.x, circle.y, circle.size * sizeFactor / 50); // 調整大小
  }
}
