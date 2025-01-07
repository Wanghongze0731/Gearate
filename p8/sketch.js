let logo;
let numbers = [];
let images = [];
let gifs = [];
let texts = [
    "Tape represents the media, with the development of science and technology, digital technology has brought immediacy, music, video content can be accessed and played through the Internet in a few seconds, this process significantly accelerates the time experience",
    "Meal replacement bars are an innovative product in modern fast-paced life, which mainly provides a quick alternative for those who do not have time to cook or want to save time. It addresses the need for time acceleration by compressing the traditional dining process into a few minutes of eating experience",
    "Audio tape is a device that records and plays back sound through a physical medium, and the advent of digitalization has not only increased the speed of access to music and video content, but also changed the way we live. Technology saves us the time we need to use audio tapes, which can be done directly with software",
    "CDS were once an important vehicle for music, movies and software. With the acceleration of time, the rapid development of digital technology, cloud storage, streaming media platforms and other technologies have been rapidly popularized, and the status of the disc has been rapidly replaced",
    "The game console provides an immersive gaming experience through virtual reality technology. This experience makes the player completely immersed in the virtual world, ignoring the passage of time in real life, and gradually losing their sensitivity to time.",
    "In modern society, the function of the clock is not only a simple time indication tool, it has been closely linked with efficiency and productivity. With the advance of industrialization and globalization, the clock has become an important tool to measure work efficiency and adjust production processes.",
    "Buttons represent the clothing industry, the production cycle of clothing is greatly shortened, the design, production, shelf time has become more urgent. The fashion industry's promotion of the fast fashion trend has accelerated the cycle of clothing consumption in the market.",
    "As an information storage and exchange tool, U disk greatly promotes the immediacy of workflow. The convenience of the USB flash drive allows the exchange of information between different locations and devices with little delay.",
];
let grid = [];
let cols = 6;
let rows = 4;
let imgWidth = 100;
let imgHeight = 100;  
let spacing = 200;

let    gn=0
let    tn=0
let z

let kkk=false

let zbg
function preload() {
  logo = loadImage('./p8/bb.jpg');
  z = loadImage('./p8/z.png');
  zbg = loadImage('./p8/zbg.png');

  for (let i = 0; i < 8; i++) {
    images[i] = loadImage(`./p8/${i}.png`);
    gifs[i] = loadImage(`./p8/${i}.gif`);
    
  }

}

function setup() {
  // createCanvas(windowWidth,windowHeight);
  createCanvas(1920,1080);
  imageMode (CENTER)
  textFont("Courier New"); // 设置字体
  textSize(18); // 设置字体大小
  textStyle(BOLD); // 设置字体粗细
  // strokeWeight(3)

  
  grid.push(new ImageCell(90,957, images[3],3, 3));
  grid.push(new ImageCell(92,430, images[4],4, 4));
  grid.push(new ImageCell(95,737, images[1],1, 1));
  grid.push(new ImageCell(89,263, images[2],2, 2));


  grid.push(new ImageCell(460,255, images[3],3, 3));
  grid.push(new ImageCell(460,731, images[5],5, 5));
  grid.push(new ImageCell(460,967, images[6],6, 6));


  grid.push(new ImageCell(790,474, images[1],1,1));
  grid.push(new ImageCell(790,737, images[7],7,7));
  grid.push(new ImageCell(790,967, images[4],4,4));



  grid.push(new ImageCell(1120,263, images[5],5,5));
  grid.push(new ImageCell(1120,474, images[7],7,7));
  grid.push(new ImageCell(1120,737, images[3],3,3));



  grid.push(new ImageCell(1500,263, images[6],6,6));
  grid.push(new ImageCell(1500,474, images[2],2,2));
  grid.push(new ImageCell(1500,967, images[0],0,0));



  grid.push(new ImageCell(1800,263, images[1],1,1));
  grid.push(new ImageCell(1800,737, images[0],0,0));
  grid.push(new ImageCell(1800,967, images[7],7,7));


  
  const originalWidth = 1920;
  const originalHeight = 1080;

  const scaleX = width / originalWidth;
  const scaleY = height / originalHeight;

  grid.forEach(cell => {
      cell.x = cell.x * scaleX+100;
      cell.y = cell.y * scaleY+100;
  });

  
}

function draw() {
  

  
  // 显示logo
  image(logo, width/2, height/2,width, height);
   textSize(30)
   fill(0)
  
  //  text(mouseX+":"+mouseY,mouseX,mouseY)
 
    for (let cell of grid) {
        cell.display();
      }


     if(kkk){

        image(z,width/2,height/2,width,height)
        image( gifs[gn],width/4,height/2)

        image(zbg,width*3/4,height/2+100)

        text( texts[tn],width*3/4-741/2+80,height/2+100-692/2+80,600)
     }
      
  
 
}







class ImageCell {
    constructor(x, y, img, gif, text) {
      this.x = x*2/3+200;
      this.y = y*2/3+50;
      this.img = img;
      this.gif = gif;
      this.text = text;
      this.clicked = false;
    }
  
    display() {
      image(this.img, this.x, this.y, this.img.width/6, this.img.height/6);
   
    }
  
    checkClick() {
      if (dist (mouseX,mouseY,this.x,this.y)<this.img.width/12) {
        
        gn=this.gif
        tn=this.text
        kkk=!kkk
      }
    }
  }

  function mousePressed() {


    console.log(mouseX,mouseY)
    for (let cell of grid) {
      cell.checkClick();
    }
  }