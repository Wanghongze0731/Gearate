let logo;

// let   zz=[]
let flag=true
let points = [
  {
      "p1": 0,
      "p2": 1,
      "p3": 68,
      "p4": 154
  },
  {
      "p1": 0,
      "p2": 156,
      "p3": 69,
      "p4": 229
  },
  {
      "p1": 0,
      "p2": 231,
      "p3": 68,
      "p4": 515
  },
  {
      "p1": 0,
      "p2": 518,
      "p3": 68,
      "p4": 598
  },
  {
      "p1": 0,
      "p2": 596,
      "p3": 68,
      "p4": 752
  },
  {
      "p1": 0,
      "p2": 754,
      "p3": 68,
      "p4": 1081
  },
  {
      "p1": 67,
      "p2": 752,
      "p3": 261,
      "p4": 1079
  },
  {
      "p1": 66,
      "p2": 514,
      "p3": 260,
      "p4": 752
  },
  {
      "p1": 69,
      "p2": 229,
      "p3": 324,
      "p4": 515
  },
  {
      "p1": 69,
      "p2": 153,
      "p3": 400,
      "p4": 230
  },
  {
      "p1": 71,
      "p2": 65,
      "p3": 400,
      "p4": 152
  },
  {
      "p1": 68,
      "p2": 4,
      "p3": 672,
      "p4": 64
  },
  {
      "p1": 400,
      "p2": 62,
      "p3": 673,
      "p4": 155
  },
  {
      "p1": 400,
      "p2": 155,
      "p3": 674,
      "p4": 231
  },
  {
      "p1": 324,
      "p2": 231,
      "p3": 400,
      "p4": 515
  },
  {
      "p1": 262,
      "p2": 516,
      "p3": 400,
      "p4": 596
  },
  {
      "p1": 262,
      "p2": 598,
      "p3": 400,
      "p4": 751
  },

  {
      "p1": 400,
      "p2": 231,
      "p3": 739,
      "p4": 467
  },
  {
      "p1": 580,
      "p2": 467,
      "p3": 1051,
      "p4": 514
  },
  {
      "p1": 673,
      "p2": 3,
      "p3": 738,
      "p4": 229
  },
  {
      "p1": 579,
      "p2": 515,
      "p3": 773,
      "p4": 597
  },
  {
      "p1": 773,
      "p2": 515,
      "p3": 1052,
      "p4": 677
  },
  {
      "p1": 875,
      "p2": 681,
      "p3": 1011,
      "p4": 788
  },
  {
      "p1": 874,
      "p2": 791,
      "p3": 1011,
      "p4": 943
  },
  {
      "p1": 774,
      "p2": 680,
      "p3": 874,
      "p4": 791
  },
  {
      "p1": 688,
      "p2": 753,
      "p3": 774,
      "p4": 892
  },
  {
      "p1": 776,
      "p2": 792,
      "p3": 874,
      "p4": 893
  },
  {
      "p1": 688,
      "p2": 894,
      "p3": 800,
      "p4": 1003
  },
  {
      "p1": 262,
      "p2": 1004,
      "p3": 800,
      "p4": 1080
  },
  {
      "p1": 400,
      "p2": 598,
      "p3": 580,
      "p4": 750
  },
  {
      "p1": 578,
      "p2": 596,
      "p3": 774,
      "p4": 750
  },
  {
      "p1": 260,
      "p2": 754,
      "p3": 688,
      "p4": 1003
  },
  {
      "p1": 738,
      "p2": 3,
      "p3": 956,
      "p4": 103
  },
  {
      "p1": 955,
      "p2": 4,
      "p3": 1100,
      "p4": 103
  },
  {
      "p1": 1100,
      "p2": 2,
      "p3": 1344,
      "p4": 102
  },
  {
      "p1": 1099,
      "p2": 104,
      "p3": 1344,
      "p4": 216
  },
  {
      "p1": 1102,
      "p2": 218,
      "p3": 1181,
      "p4": 363
  },
  {
      "p1": 1345,
      "p2": 150,
      "p3": 1454,
      "p4": 217
  },
  {
      "p1": 739,
      "p2": 105,
      "p3": 956,
      "p4": 363
  },
  {
      "p1": 739,
      "p2": 363,
      "p3": 1179,
      "p4": 467
  },
  {
      "p1": 1053,
      "p2": 467,
      "p3": 1180,
      "p4": 515
  },
  {
      "p1": 1179,
      "p2": 220,
      "p3": 1452,
      "p4": 363
  },
  {
      "p1": 1181,
      "p2": 363,
      "p3": 1453,
      "p4": 514
  },
  {
      "p1": 1344,
      "p2": 3,
      "p3": 1454,
      "p4": 151
  },
  {
      "p1": 1455,
      "p2": 4,
      "p3": 1654,
      "p4": 148
  },
  {
      "p1": 1454,
      "p2": 151,
      "p3": 1656,
      "p4": 218
  },
  {
      "p1": 1454,
      "p2": 218,
      "p3": 1655,
      "p4": 389
  },
  {
      "p1": 1656,
      "p2": 2,
      "p3": 1919,
      "p4": 76
  },
  {
      "p1": 1736,
      "p2": 77,
      "p3": 1917,
      "p4": 260
  },
  {
      "p1": 1656,
      "p2": 77,
      "p3": 1736,
      "p4": 260
  },
  {
      "p1": 1656,
      "p2": 261,
      "p3": 1838,
      "p4": 319
  },
  {
      "p1": 1838,
      "p2": 262,
      "p3": 1918,
      "p4": 595
  },
  {
      "p1": 1656,
      "p2": 319,
      "p3": 1839,
      "p4": 594
  },
  {
      "p1": 1800,
      "p2": 596,
      "p3": 1918,
      "p4": 647
  },
  {
      "p1": 1655,
      "p2": 596,
      "p3": 1798,
      "p4": 644
  },
  {
      "p1": 1454,
      "p2": 391,
      "p3": 1656,
      "p4": 514
  },
  {
      "p1": 1324,
      "p2": 514,
      "p3": 1654,
      "p4": 594
  },
  {
      "p1": 1053,
      "p2": 516,
      "p3": 1325,
      "p4": 593
  },
  {
      "p1": 1053,
      "p2": 595,
      "p3": 1230,
      "p4": 680
  },
  {
      "p1": 1229,
      "p2": 596,
      "p3": 1512,
      "p4": 680
  },
  {
      "p1": 1512,
      "p2": 596,
      "p3": 1655,
      "p4": 679
  },
  {
      "p1": 1512,
      "p2": 682,
      "p3": 1655,
      "p4": 916
  },
  {
      "p1": 1297,
      "p2": 682,
      "p3": 1513,
      "p4": 916
  },
  {
      "p1": 1230,
      "p2": 680,
      "p3": 1296,
      "p4": 863
  },
  {
      "p1": 1010,
      "p2": 683,
      "p3": 1231,
      "p4": 863
  },
  {
      "p1": 1147,
      "p2": 864,
      "p3": 1297,
      "p4": 1076
  },
  {
      "p1": 1298,
      "p2": 916,
      "p3": 1656,
      "p4": 1077
  },
  {
      "p1": 873,
      "p2": 940,
      "p3": 1146,
      "p4": 1076
  },
  {
      "p1": 1009,
      "p2": 863,
      "p3": 1146,
      "p4": 943
  },
  {
      "p1": 1656,
      "p2": 646,
      "p3": 1917,
      "p4": 1077
  },
  {
      "p1": 956,
      "p2": 104,
      "p3": 1099,
      "p4": 361
  },
  
]; // 用于存储坐标的数组


let   bm=[{
    "p1": 67,
    "p2": 282,
    "p3": 323,
    "p4": 516,
    "str":"PERSPECTIVE",
    "HT":"p4"
},{
    "p1": 260,
    "p2": 754,
    "p3": 688,
    "p4": 1003,
    "str":"CONGEAL",
    "HT":"p9"
},  {
    "p1": 773,
    "p2": 515,
    "p3": 1052,
    "p4": 677,
    "str":"ACCELERATION",
    "HT":"p7"
},
{
    "p1": 739,
    "p2": 105,
    "p3": 956,
    "p4": 363,
    "str":"FLUX",
    "HT":"p5"
},  {
    "p1": 1181,
    "p2": 363,
    "p3": 1453,
    "p4": 514,
    "str":"PRINTER",
    "HT":"p6"
},{
    "p1": 1656,
    "p2": 319,
    "p3": 1839,
    "p4": 594,
     "str":"VIRTUAL",
     "HT":"p10"
},  {
    "p1": 1297,
    "p2": 682,
    "p3": 1513,
    "p4": 916,
    "str":"SYMBOL",
    "HT":"p8"
}]

let clickCount = 0; // 点击计数器
let rectangles = [];
let videos = [];

let tf


let zp=[]
function preload() {
  logo = loadImage('./p3/v.jpg');
  tf=loadFont('./p3/1.ttf');


  for (let i=0;i<7;i++){

    zp[i]=loadImage('./p3/mm/'+i+'.png');

  }
}

function setup() {
  createCanvas(windowWidth,windowHeight);
//   createCanvas(1920,1080);
  for (let i = 1; i <= 7; i++) {
    let videoz = createVideo(`./p3/video${i}.mp4`);
    videoz.hide()
    videos.push(videoz);
}
  let z=random(points)
  textFont(tf); // 设置使用加载的字体
  textSize(32);
  let x=Math.floor(random(1,7))
  rectangles.push(new Rectangle(z.p1*width/1920, z.p2*height/1080, (z.p3 -z.p1)*width/1920, (z.p4 - z.p2)*height/1080,x));
}

function draw() {


  if(flag&&frameCount%120==0){

    let z=random(points)

    let x=Math.floor(random(1,7))
    rectangles[0]=new Rectangle(z.p1*width/1920, z.p2*height/1080, (z.p3 -z.p1)*width/1920, (z.p4 - z.p2)*height/1080,x)

  }
 
  background(255,0,0)
  // 显示logo
  image(logo, 0, 0,width,height);

//    text (mouseX+":"+mouseY,mouseX,mouseY)
  for (let i = 0; i < bm.length; i++) {


    
    let z = bm[i];

    if(mouseX>z.p1*width/1920&&mouseX<z.p3*width/1920&&mouseY>z.p2*height/1080&&mouseY<z.p4*height/1080){
    fill(255,255,255,100);
    noStroke()
    // rect(z.p1*width/1920, z.p2*height/1080, (z.p3 -z.p1)*width/1920, (z.p4 - z.p2)*height/1080); // 绘制 p1, p2
    image(zp[i],z.p1*width/1920, z.p2*height/1080, (z.p3 -z.p1)*width/1920, (z.p4 - z.p2)*height/1080)
    if(z.str=="FLUX"){
        push()
        fill(0)
        textAlign(RIGHT)

        text (z.str,z.p3*width/1920, z.p4*height/1080)

        pop ()
    }
   else  if(z.str=="PRINTER"){
    push()
    fill(0)
    textAlign(RIGHT)

    text (z.str,z.p3*width/1920, z.p2*height/1080+27)

    pop ()
    }
    else {

        textSize(30)

        fill(0)

        text (z.str,z.p1*width/1920, z.p4*height/1080)
    }
    
    }
   
   
    
  }

  for (let rect of rectangles) {
    rect.display();
}
}


function mouseClicked(){

 



}
class Rectangle {
  constructor(x, y, w, h,v) {
      this.x = x; // 矩形的左上角 x 坐标
      this.y = y; // 矩形的左上角 y 坐标
      this.w = w; // 矩形的宽度
      this.h = h; // 矩形的高度
      this.color = [100, 150, 200]; // 默认颜色

      this.v=v

      videos[this.v].size(w, h);
      videos[this.v].volume(0);
      videos[this.v].loop();
      videos[this.v].hide();
  }

  display() {
     

      let img = videos[this.v].get();
    //    image(img, this.x-1, this.y-2,img.width,img.height); 
       image(img, this.x, this.y,this.w,this.h); 
  }

  checkClick(mx, my) {

    if(!flag &&mx > this.x && mx < this.x + this.w && my > this.y && my < this.y + this.h){

        if(this.v==1){

            window.location.href='p4.html'
        }
        if(this.v==2){

            window.location.href='p5.html'
        }
        if(this.v==3){

            window.location.href='p6.html'
        }
        if(this.v==4){

            window.location.href='p7.html'
        }
        if(this.v==5){

            window.location.href='p8.html'
        }
        if(this.v==6){

            window.location.href='p9.html'
        }
        if(this.v==7){

            window.location.href='p10.html'
        }





    }
      // 检查鼠标是否在矩形内
      if (mx > this.x && mx < this.x + this.w && my > this.y && my < this.y + this.h) {
         flag=false
      }
  }
}
let z=0
function mouseClicked(){
    console.log(mouseX,mouseY)



    for (let i = 0; i < bm.length; i++) {


    
        let z = bm[i];
    
        if(mouseX>z.p1*width/1920&&mouseX<z.p3*width/1920&&mouseY>z.p2*height/1080&&mouseY<z.p4*height/1080){

           window.location.href=z.HT+'.html'

        }

    }
  for (let rect of rectangles) {
    rect.checkClick(mouseX, mouseY);
}
   

//   // 获取鼠标坐标
//   let x = mouseX;
//   let y = mouseY;

//   // 根据点击次数更新数组
//   if (clickCount % 4 === 0) {
//     // 第一次点击，初始化新对象
//     points.push({ p1: x, p2: y, p3: null, p4: null });
//   } else if (clickCount % 4 === 1) {
//     // 第二次点击，更新第一个对象的 p3, p4
//     points[points.length - 1].p3 = x;
//     points[points.length - 1].p4 = y;
//   } else if (clickCount % 4 === 2) {
//     // 第三次点击，初始化下一个对象
//     points.push({ p1: x, p2: y, p3: null, p4: null });
//   } else if (clickCount % 4 === 3) {
//     // 第四次点击，更新第二个对象的 p3, p4
//     points[points.length - 1].p3 = x;
//     points[points.length - 1].p4 = y;
//   }

//   clickCount++; // 增加点击计数




//   sessionStorage.setItem("kk", JSON.stringify(points))


}


