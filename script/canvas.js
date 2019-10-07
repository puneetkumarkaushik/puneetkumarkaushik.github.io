let canvas = document.querySelector("canvas");
let ctx = canvas.getContext('2d');
let width = canvas.width = innerWidth;
let height = canvas.height = innerHeight;

let colors = [
    "#145873",
    "#03A6A6",
    "#D9B23D",
    "#F2884B"
];

function color() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function Ball(x, y, radius) {
    this.x  =x;
    this.y = y;
    this.radius = radius;
    this.color = color();
    this.dx = (Math.random() - 0.5) * 2;
    this.dy = (Math.random() - 0.5) * 2;

    this.update = function(){
        this.x += this.dx;
        this.y += this.dy;

        if(this.x + this.radius > width || this.x - this.radius < 0){
            this.dx = -this.dx;
        }
        if(this.y + this.radius > height || this.y - this.radius < 0){
            this.dy = -this.dy;
        }
        
        this.draw();
    }

    this.draw = function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.strokeStyle = this.color;
        ctx.stroke();
    }
}

function getBalls(num){
    let balls = [];
    for(let i=0; i<num; i++){   
        let radius = 10;
        let x = Math.floor(Math.random() * (width - 2 * radius)) + radius;
        let y = Math.floor(Math.random() * (height - 2 * radius)) + radius;

        let ball = new Ball(x, y, radius);
        balls.push(ball);
    }
    return balls;
}

let balls = getBalls(50);

function render(){
    for(let i=0; i<balls.length; i++){
        balls[i].update();
    }
}

function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, width, height);
    render();
}

animate();