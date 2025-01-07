let logo;
let numbers = [];
let video;
let p1
function preload() {
  logo = loadImage('./p10/logo.png');
  p1 = loadImage('./p10/2.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // 初始化摄像头
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();
  
  // 创建初始数字
  for(let i=0;i<3;i++){

    let num = new Number(
      random(width,width+200),
      random(250, height - 50),
      floor(random(0, 24))+":"+floor(random(0,60))
    );
    numbers.push(num);
  }

  
}

function draw() {
  // 创建渐变背景
  let gradient = drawingContext.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, '#c9dde4');
  gradient.addColorStop(1, 'white');
  drawingContext.fillStyle = gradient;
  rect(0, 0, width, height);
  
  // 显示logo
  // image(logo, 20, 20,828/4, 236/4);
  //  textSize(20)

  //  fill(0)
  // text("About",250,50)
  // text("Gallery",250,80)
  
  // 更新和显示数字
  for (let i = numbers.length - 1; i >= 0; i--) {
    numbers[i].move();
    numbers[i].display();
    
    // 检查是否超出边界
    if (numbers[i].x < -50) {
      numbers[i].x = random(width,width+200);
      numbers[i].y = random(250, height - 50);
      numbers[i].value =floor(random(0, 24))+":"+floor(random(0,60))
    }
  }
}



// 数字类
class Number {
  constructor(x, y, value) {
    this.x = x;
    this.y = y;
    this.value = value;
    this.speed = random(2, 5);
    this.showVideo = false; // 每个数字独立控制视频显示
  }
  
  move() {
    this.x -= this.speed;
  }
  
  display() {
    // 如果需要显示视频
    if (this.showVideo) {
      image(video, this.x - 320, this.y - 120, 320, 240);
      // image(p1, this.x - 320, this.y - 120, 320, 240);


     
    
    }
    
    // 显示数字
    textSize(32);
    fill(0);
    text(this.value, this.x, this.y);
  }
  
  contains(px, py) {
    let w = textWidth(this.value);
    return (px > this.x && px < this.x + w &&
            py > this.y - 32 && py < this.y);
  }
}



// 处理点击事件
function mousePressed() {
  for (let num of numbers) {
    if (num.contains(mouseX, mouseY)) {
      num.showVideo = !num.showVideo; // 切换视频显示状态
    }
  }
}

// 自适应窗口大小
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}