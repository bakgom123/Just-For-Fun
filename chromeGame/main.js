// 점프 부분은 미완성
// 박스를 사진으로 대체해야함
// 소스: 코딩애플
// https://www.youtube.com/watch?v=7TXGvVblfLs
// https://www.youtube.com/watch?v=qkTtmgCjHhM

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var dino = {
    x : 10,
    y : 200,
    width : 50,
    height : 50,
    draw(){
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

dino.draw()

class Cactus{
    constructor(){
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
var cactus = new Cactus();
cactus.draw()



var timer = 0;
var moreCactus = [];
var jumptimer = 0;
var animation;
// 프레임 애니메이션
function everyFrameWork(){
    animation = requestAnimationFrame(everyFrameWork);
    timer++;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (timer % 120 === 0){
        var cactus = new Cactus();
        moreCactus.push(cactus);
    }
    moreCactus.forEach((a, i, o) => {
        //delete if x is less than 0
        if (a.x < 0){
            o.splice(i, 1)
        }
        a.x--;
        crush(dino, a);
        a.draw();
    })
            
    if (isJumping == true){
        dino.y--;
        jumptimer++;
    }
    if (isJumping == false){
        if(dino.y < 200){
            dino.y++;
        }
    }
    // // after 100 frames, stop jumping
    if(jumptimer > 100){
        isJumping = false;
        jumptimer = 0
    }
    dino.draw()
}

everyFrameWork();

function crush(dino, cactus){
    var xdiff = cactus.x - (dino.x + dino.width);
    var ydiff = cactus.y - (dino.y + dino.height);
    if(xdiff < 0 && ydiff < 0){
        ctx.clearRext(0,0, canvas.width, canvas.height);
        cancelAnimationFrame(animation)
    }
}

var isJumping = false;
document.addEventListener('keydown', function(e){
    if (e.code === 'Space'){
        isJumping = ture;
    }
})