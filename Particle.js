class Particle {
    constructor(x, y){
        this.x =  Math.random()*ww;
        this.y =  Math.random()*wh;
        this.dest = {
          x : x,
          y: y
        };
        this.r =  Math.random()*5 + 2;
        this.vx = (Math.random()-0.5)*20;
        this.vy = (Math.random()-0.5)*20;
        this.accX = 0;
        this.accY = 0;
        this.friction = Math.random()*0.002 + 0.94;
      
        this.color = colors[Math.floor(Math.random()*6)];
    }

    checkMouse(){
        const a = this.x - mouse.x;
        const b = this.y - mouse.y;
      
        var distance = Math.sqrt( a*a + b*b );
        if(distance<(radius*10)){
          this.accX = (this.x - mouse.x)/10;
          this.accY = (this.y - mouse.y)/10;
          this.vx += this.accX;
          this.vy += this.accY;
        }
    }

    update(){
        this.accX = (this.dest.x - this.x)/1000;
        this.accY = (this.dest.y - this.y)/1000;
        this.vx += this.accX;
        this.vy += this.accY;
        this.vx *= this.friction;
        this.vy *= this.friction;
      
        this.x += this.vx;
        this.y +=  this.vy;
    }

    render(){      
        // ctx.fillStyle = this.color;        
        // ctx.beginPath();
        // ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
        // ctx.fill();

        //fill(this.color);
        fill(220, 0, 0);
        ellipse(this.x, this.y, this.r);

    }
}

  