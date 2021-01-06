

const particles = [];
let amount = 0;
let mouse = {x: 0, y: 0};
let radius = 1;
let colors = ["#468966","#FFF0A5", "#FFB03B","#B64926", "#8E2800"];
let ww = 1000;
let wh = 800;
let data = undefined;
let loaded = false;

function setup(){
  createCanvas(ww, wh);
  background(255);
  data = initGraphics();
  console.log(data);
  // fill(120,0,120);
  // stroke(220,0,0);
  // textSize(30);
  // text('hi there', ww/2, wh/2);
  
  
}


function draw(){
  console.log(data);

  if(data != undefined && !loaded){
    background(0);
    initScene(data);
  }
  //image(ctx, 0, 0);
  
  console.log(particles.length);
  // particles.forEach(particle => {
  //   particle.checkMouse();
  //   particle.update();
  //   particle.render();
    
  // })
}






// function onMouseMove(e){
//   mouse.x = e.clientX;
//   mouse.y = e.clientY;
// }

// function onTouchMove(e){
//   if(e.touches.length > 0 ){
//     mouse.x = e.touches[0].clientX;
//     mouse.y = e.touches[0].clientY;
//   }
// }

// function onTouchEnd(e){
// mouse.x = -9999;
// mouse.y = -9999;
// }

function initGraphics(){

  const graphics = createGraphics(ww, wh);
  graphics.stroke(0,0,0);
  graphics.fill(0, 0, 0,);
  graphics.textSize(ww/6);
  graphics.text("sploosh", ww/4, wh/2);

  graphics.loadPixels()
  return [0, 0, 0];
      //just for a test
}




function initScene(data){
  // ww = canvas.width = window.innerWidth;
  // wh = canvas.height = window.innerHeight;

  // ctx.clearRect(0, 0, canvas.width, canvas.height);

  // ctx.font = "bold "+(ww/10)+"px sans-serif";
  // ctx.textAlign = "center";
  //ctx.fillText("sploosh", ww/2, wh/2);

  //loadPixels();
  // console.log(pixels[0], pixels[1], pixels[2]);
  //var data  = ctx.getImageData(0, 0, ww, wh).data;
  //ctx.clearRect(0, 0, canvas.width, canvas.height);
  //ctx.globalCompositeOperation = "screen";

  // particles = [];
  for(var i=0;i<ww;i+=Math.round(ww/150)){
    for(var j=0;j<wh;j+=Math.round(ww/150)){
      console.log(i, j, pixels[((i + j * ww) * 4) +3 ]);
      if(data[ ((i + j*ww)*4) + 3] > 150){
        particles.push(new Particle>(i,j));
      }
    }
  }
  amount = particles.length;
  loaded = true;

}

// function onMouseClick(){
//   radius++;
//   if(radius ===5){
//     radius = 0;
//   }
// }

// function render(a) {
//   requestAnimationFrame(render);
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   for (var i = 0; i < amount; i++) {
//     particles[i].render();
//   }
// };

// copy.addEventListener("keyup", initScene);
// window.addEventListener("resize", initScene);
// window.addEventListener("mousemove", onMouseMove);
// window.addEventListener("touchmove", onTouchMove);
// window.addEventListener("click", onMouseClick);
// window.addEventListener("touchend", onTouchEnd);
// initScene();
// requestAnimationFrame(render);

