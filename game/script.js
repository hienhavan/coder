window.addEventListener('load', function () {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 1400;
    canvas.height = 720;
    let enemies = [];
    let enemies2 = [];
    let enemies3 = [];
    let score = 0;
    let gameOver = false;
    let dem = 0;
    let item   = [];
    let gold =[];
    let uti =  true;
    let chuongluc =true;
    let projectiles = [];
    let audio = new Audio('Sergio%2527s%20Magic%20Dustbin.mp3');



    // su kien tu ban phim

    class InputHandler {
        constructor() {
            this.keys = [];
            window.addEventListener('keydown', e => {
                if ((e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'Control' || e.key === 'a' || e.key === 'r' || e.key === 's' || e.key === 'q' || e.key === 'w' || e.key === 'd' || e.key === 'e' || e.key === 'y')  && this.keys.indexOf(e.key) === -1) {
                    this.keys.push(e.key);
                }
                // xu ly khi an enter tro choi bat dau lai
                else if (e.key === 'Enter' && gameOver){restartGane()}
                if (input.keys === ' ') {
                    Player.shootTop();
                }
                // console.log(e.key, this.keys);
                if (e.key === 'u'){
                        switchCharacter();
                }
            });
            window.addEventListener('keyup', e => {
                if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'Control' || e.key === 'a' || e.key === 'r' || e.key === 's' || e.key === 'q' || e.key === 'w' || e.key === 'y' || e.key === 'e' || e.key === 'd') {
                    this.keys.splice(this.keys.indexOf(e.key), 1);
                }
                console.log(e.key, this.keys);
            });
//             window.addEventListener('click',event =>{
// this.keys.push(event.button)
//             })
        }
    }


    class Player {
        constructor(gameWidth, gameHeight) {
            this.gameWidth = gameWidth;
            this.gameHeight = gameHeight;
               this.width = 288;
            this.height = 128;
            this.x = 30;                                                      // vi tri cua doi tuong
            this.y = this.gameHeight - this.height;                        // vi tri cua doi tuong
            this.image = document.getElementById('playerImage');  //lay doi tuong
          this.frameX = 0;
            // this.maxFame =  8;
            this.maxFame = 7;
            this.frameY = 0;
            this.fps = 20;                                               // bien de dem khoang thơi gian da troi qua kể từ  lần cập nhật frame trước đo
            this.frameTimer = 0;                                          // dem tg giua cac khung hinh
            this.frameInterval = 1000/this.fps;                           //  khoảng thời gian giữa hai khung hình liên tiếp
            this.speed = 0;
            this.vy = 0;
            this.weight = 1;                                                 // trrong luc

        }

// dat lai tro choi
        restart (){
            this.x = 0;
            this.y = this.gameHeight - this.height;
            this.maxFame = 8;
            this.frameY = 0;

        }


        draw(context) {
           //  // tao ra 1 o vuong de xac dinh va cham.
           //  context.strokeStyle = 'white';
            // context.strokeRect(this.x,this.y+50,this.width-30,this.height-100)
           // // context.fillStyle = 'white';
           //  // context.fillRect(this.x, this.y, this.width, this.height);         //tao 1 doi tuong o trang
           //  context.beginPath();
           //  context.arc(this.x + this.width/2,this.y + this.height/2,this.width/2,0,Math.PI * 2);
           //  context.stroke();
           //  context.strokeStyle = 'blue';
           //  context.beginPath();
           //  context.arc(this.x ,this.y ,this.width/2,0,Math.PI * 2);
           //  context.stroke();this.width*3.1,this.width*1.3
           //  context.drawImage(this.image, this.frameX* this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width-90 , this.height -50);  //gan doi tuong that vao doi tuong o trang.
            context.drawImage(this.image,this.frameX* this.width, this.frameY* this.height, this.width, this.height , this.x-490, this.y+90, this.width+990, this.height-800);  //gan doi tuong that vao doi tuong o trang.
       projectiles.forEach(projectile =>{
           projectile.draw(ctx);
       })
        }

        update(input,daltaTime,enemies,enemies2,item,gold,enemies3) {
            // xu ly va cham
            enemies.forEach(enemy =>{
                const dx = (enemy.x+ enemy.width/2)- (this.x + this.width/2);     // tính vị trí trung diêm cua vat theo x
                const dy = (enemy.y + enemy.height/2) - (this.y + this.height/2);  // tính vị trí trung diêm cua vat theo y
                const  distance = Math.sqrt(dx * dx + dy * dy);                  // xác dinh khoang cách giữa 2 vật theo cả y và x
                if (distance+110 < enemy.width/2 + this.width/2){                                // so sanh neu khoảng cach giữa 2 trung diểm gần và chạm vào nhau thì gameover
                    if (enemy.framey === 0 ) {
                        gameOver = true;

                        stopSound(audio);
                    }

                }
            })
          enemies2.forEach(enemy2=>{
              const dx2 = (enemy2.x+enemy2.width/2) -(this.x + this.width/2);
              const dy2 = (enemy2.y + enemy2.height/2) - (this.y + this.height/2);
              const distance2 =  Math.sqrt(dx2 * dx2 + dy2 * dy2);
              if(distance2+140 < enemy2.width/2 + this.width/2){
                  if (enemy2.frameY === 0 ) {
                      gameOver = true;
                      stopSound(audio);
                  }
              }
          })
            enemies3.forEach(enemy3=>{
                const dx3 = (enemy3.x+enemy3.width/2) -(this.x + this.width/2);
                const dy3 = (enemy3.y + enemy3.height/2) - (this.y + this.height/2);
                const distance3 =  Math.sqrt(dx3 * dx3 + dy3 * dy3);
                if(distance3+190 < enemy3.width/2 + this.width/2){
                    enemy3.frameY =1
                    if (enemy3.frameY === 1 && enemy3.frameX >= 4) {
                        gameOver = true;
                        stopSound(audio);
                    }
                }
            })
            item.forEach(itemm=>{
                const dxt = (itemm.x+ itemm.width/2) -(this.x + this.width/2);
                const dyt = (itemm.y + itemm.height/2) - (this.y + this.height/2);
                const distance2 =  Math.sqrt(dxt * dxt + dyt * dyt);
                if(distance2+150 < enemy2.width/2 + this.width/2){
                    score += 20;
                    itemm.markedForDeletion = true;
                }
            })
            gold.forEach(goldd=>{
                const dxt = (goldd.x+ goldd.width/2) -(this.x + this.width/2);
                const dyt = (goldd.y + goldd.height/2) - (this.y + this.height/2);
                const distance2 =  Math.sqrt(dxt * dxt + dyt * dyt);
                if(distance2+150 < enemy2.width/2 + this.width/2){
                    if (goldd.frameY === 0 )
                        score  += 5;
                    else score += 10;
                    goldd.markedForDeletion = true;
                }
            })

            // sprite animation
            //play1
            if(this.frameTimer > this.frameInterval){                                   // kiểm tra xem đã đủ tg cập nhật khung hhinh chua
                if (this.frameX >= this.maxFame) this.frameX = 0;
                 this.frameX++
                this.frameTimer = 0;

            } else {
                this.frameTimer += 10;
            }

            // controls
            if (input.keys.indexOf('ArrowRight') > -1) {
                this.speed = 5;
            } else if (input.keys.indexOf('ArrowLeft') > -1) {
                this.speed = -5;
            }
            else {
                this.speed = 0;
            }
            if (input.keys.indexOf('ArrowUp') > -1 && this.onGround()) {
                this.vy -= 32;

            }
            else if (input.keys.indexOf('ArrowDown') > -1) {
                this.maxFame = 7;
                this.frameY = 2;
                this.vy += 9

            }
          if (input.keys.indexOf('Control') > -1) {
                this.vy = 0.6
            }
            if (input.keys.indexOf('q') > -1) {
                this.x1 = 220;
                this.y1 = this.gameHeight - this.height-20                            // vi tri cua doi tuong
            }
// vertical movement
            // nhanvat
            this.x += this.speed;
            if (this.x < 0) this.x = 0;
            else if (this.x > this.gameWidth - this.width) this.x = this.gameWidth - this.width;

            this.y += this.vy;
            if (!this.onGround()) {
                this.vy += this.weight
                this.maxFame = 8;
                this.frameY = 3;
                this.frameTimer =1;


            } else {
                this.vy = 0;
                // this.maxFame = 8;
                this.maxFame = 7;
                this.frameY = 0;
            }



            if (input.keys.indexOf('a') > -1) {
                this.maxFame = 7;
                          this.frameY = 1;
                // xu ly va cham

                enemies.forEach(enemy =>{
                    const dx = (enemy.x+ enemy.width/2)- (this.x + this.width/2);     // tính vị trí trung diêm cua vat theo x
                    const dy = (enemy.y + enemy.height/2) - (this.y + this.height/2);  // tính vị trí trung diêm cua vat theo y
                    const  distance = Math.sqrt(dx * dx + dy * dy);                  // xác dinh khoang cách giữa 2 vật theo cả y và x
                    if (distance+100 < enemy.width/2 + this.width/2){                          // so sanh neu khoảng cach giữa 2 trung diểm gần và chạm vào nhau thì gameover
                       enemy.framey = 1;
                    }

                })

                enemies2.forEach(enemy2=>{
                    const dx2 = (enemy2.x+enemy2.width/2) -(this.x + this.width/2);
                    const dy2 = (enemy2.y + enemy2.height/2) - (this.y + this.height/2);
                    const distance2 =  Math.sqrt(dx2 * dx2 + dy2 * dy2);
                    if(distance2+90 < enemy2.width/2 + this.width/2){
                        enemy2.frameY = 1;

                    }
                })
                enemies3.forEach(enemy3=>{
                    const dx3 = (enemy3.x+enemy3.width/2) -(this.x + this.width/2);
                    const dy3 = (enemy3.y + enemy3.height/2) - (this.y + this.height/2);
                    const distance3 =  Math.sqrt(dx3 * dx3 + dy3 * dy3);
                    if(distance3+200 < enemy3.width/2 + this.width/2){
                        enemy3.frameY = 4;

                    }
                })
            }
            if (input.keys.indexOf('s') > -1) {
                this.maxFame = 7;
                              this.frameY = 2;
                // xu ly va cham

                enemies.forEach(enemy =>{
                    const dx = (enemy.x+ enemy.width/2)- (this.x + this.width/2);     // tính vị trí trung diêm cua vat theo x
                    const dy = (enemy.y + enemy.height/2) - (this.y + this.height/2);  // tính vị trí trung diêm cua vat theo y
                    const  distance = Math.sqrt(dx * dx + dy * dy);                  // xác dinh khoang cách giữa 2 vật theo cả y và x
                    if (distance < enemy.width/2 + this.width/2){                          // so sanh neu khoảng cach giữa 2 trung diểm gần và chạm vào nhau thì gameover
                        enemy.framey = 1;
                    }
                })

                enemies2.forEach(enemy2=>{
                    const dx2 = (enemy2.x+enemy2.width/2) -(this.x + this.width/2);
                    const dy2 = (enemy2.y + enemy2.height/2) - (this.y + this.height/2);
                    const distance2 =  Math.sqrt(dx2 * dx2 + dy2 * dy2);
                    if(distance2 < enemy2.width/2 + this.width/2){
                        enemy2.frameY = 1;

                    }
                })
                enemies3.forEach(enemy3=>{
                    const dx3 = (enemy3.x+enemy3.width/2) -(this.x + this.width/2);
                    const dy3 = (enemy3.y + enemy3.height/2) - (this.y + this.height/2);
                    const distance3 =  Math.sqrt(dx3 * dx3 + dy3 * dy3);
                    if(distance3+140 < enemy3.width/2 + this.width/2){
                        enemy3.frameY = 4;

                    }
                })
            }
            if (input.keys.indexOf('d') > -1) {
                this.maxFame = 7;
                this.frameY = 4;
                // xu ly va cham

                enemies.forEach(enemy =>{
                    const dx = (enemy.x+ enemy.width/2)- (this.x + this.width/2);     // tính vị trí trung diêm cua vat theo x
                    const dy = (enemy.y + enemy.height/2) - (this.y + this.height/2);  // tính vị trí trung diêm cua vat theo y
                    const  distance = Math.sqrt(dx * dx + dy * dy);                  // xác dinh khoang cách giữa 2 vật theo cả y và x
                    if (distance-1000 < enemy.width/2 + this.width/2){                          // so sanh neu khoảng cach giữa 2 trung diểm gần và chạm vào nhau thì gameover
                        enemy.framey = 1;
                    }
                })

                enemies3.forEach(enemy3=>{
                    const dx3 = (enemy3.x+enemy3.width/2) -(this.x + this.width/2);
                    const dy3 = (enemy3.y + enemy3.height/2) - (this.y + this.height/2);
                    const distance3 =  Math.sqrt(dx3 * dx3 + dy3 * dy3);
                    if(distance3-1000 < enemy3.width/2 + this.width/2){
                        enemy3.frameY = 4;

                    }
                })
            }

            // xu ly bien mat
            enemies.forEach(enemy=>{
                if (enemy.framey === 1 && enemy.frameX === 8  )
                {
                    score++;
                    enemy.markedForDeletion = true;
                }
            })
            enemies2.forEach(enemy2=>{
                if (enemy2.frameY === 1 && enemy2.frameX === 7  )
                {
                    score++;
                    enemy2.markedForDeletion = true;
                }
            })
            enemies3.forEach(enemy3=>{
                if (enemy3.frameY === 4 && enemy3.frameX === 7  )
                {
                    score++;
                    enemy3.markedForDeletion = true;
                }
            })
            if (this.y > this.gameHeight - this.height) this.y = this.gameHeight - this.height;

            // handle projectiles

            projectiles.forEach(projectile =>{
            projectile.update(daltaTime);
        });
        projectiles = projectiles.filter(projectile => !projectile.markedForDeletion);
        }

        onGround() {
            return this.y >= this.gameHeight - this.height;                           // true nếu n ở dưới mặt đất
        }
        shootTop(){
            projectiles.push(new Projectile(canvas.width, canvas.height))
        }
    }

    /// play2

    class Play2 {
        constructor(gameWidth, gameHeight) {
            this.gameWidth = gameWidth;
            this.gameHeight = gameHeight;
            this.width1 = 80;
            this.height1 = 80;
            this.x = 30;                                                      // vi tri cua doi tuong
            this.y = this.gameHeight - this.height1;                        // vi tri cua doi tuong
            this.image1 = document.getElementById('playerImage1');  //lay doi tuong
            this.frameX = 0;
            this.frameY = 5;
            this.fps = 20;                                               // bien de dem khoang thơi gian da troi qua kể từ  lần cập nhật frame trước đo
            this.frameTimer = 0;                                          // dem tg giua cac khung hinh
            this.frameInterval = 1000 / this.fps;                           //  khoảng thời gian giữa hai khung hình liên tiếp
        }

        draw(context) {
            context.drawImage(this.image1, this.frameX * this.width1, this.frameY * this.height1, this.width1, this.height1 + 6, this.x-100, this.y - 790, this.width1 + 1000, this.height1 + 1000);  //gan doi tuong that vao doi tuong o trang.

        }

        update(input, daltaTime, enemies, enemies2, item, gold) {

            if (this.frameTimer > this.frameInterval) {                                   // kiểm tra xem đã đủ tg cập nhật khung hhinh chua
                if (this.frameX >=13) {
                    this.frameX = 0
                }
                this.frameX++
                this.frameTimer = 0;

            } else {
                this.frameTimer += 20;
            }
            if (input.keys.indexOf('r') > -1){
                this.frameX = 0;
                score -= 20;
                this.x += 20
this.frameY = 2
                // xu ly va cham
                enemies.forEach(enemy =>{
                    const dx = (enemy.x+ enemy.width/2)- (this.x + this.width1/2);     // tính vị trí trung diêm cua vat theo x
                    const dy = (enemy.y + enemy.height/2) - (this.y + this.height1/2);  // tính vị trí trung diêm cua vat theo y
                    const  distance = Math.sqrt(dx * dx + dy * dy);                  // xác dinh khoang cách giữa 2 vật theo cả y và x
                    if (distance-1300 < enemy.width/2 + this.width1/2){                          // so sanh neu khoảng cach giữa 2 trung diểm gần và chạm vào nhau thì gameover
                        enemy.framey = 1

                    }
                })

                enemies2.forEach(enemy2=>{
                    const dx2 = (enemy2.x+enemy2.width/2) -(this.x + this.width1/2);
                    const dy2 = (enemy2.y + enemy2.height/2) - (this.y + this.height1/2);
                    const distance2 =  Math.sqrt(dx2 * dx2 + dy2 * dy2);
                    if(distance2-1300 < enemy2.width/2 + this.width1/2){
                        enemy2.frameY = 1
                    }
                })
                enemies3.forEach(enemy3=>{
                    const dx3 = (enemy3.x+enemy3.width/2) -(this.x + this.width1/2);
                    const dy3 = (enemy3.y + enemy3.height/2) - (this.y + this.height1/2);
                    const distance3 =  Math.sqrt(dx3 * dx3 + dy3 * dy3);
                    if(distance3-1000 < enemy3.width/2 + this.width1/2){
                        enemy3.frameY = 4;

                    }
                })
            }

            if (input.keys.indexOf('r') <= -1 && this.frameX >=13) {
                this.frameY = 5
                this.x = -300
                this.frameX = 0;
            }
        }
    }


// game play 3


    class Player3 {
        constructor(gameWidth, gameHeight) {
            this.gameWidth = gameWidth;
            this.gameHeight = gameHeight;
            this.width = 288;
            this.height = 128;
            this.x = 30;                                                      // vi tri cua doi tuong
            this.y = this.gameHeight - this.height;                        // vi tri cua doi tuong
            this.image = document.getElementById('playerImage2');  //lay doi tuong
            this.image1 = document.getElementById('playerImage2-1');  //lay doi tuong
            // this.image1 = document.getElementById('playerImage1');  //lay doi tuong

            this.frameX = 0
            this.frameX1 = 0
            this.maxFame1 = 53;
            this.maxFame = 7;
            this.frameY = 0;
            this.fps = 10;                                               // bien de dem khoang thơi gian da troi qua kể từ  lần cập nhật frame trước đo
            this.frameTimer = 0;                                          // dem tg giua cac khung hinh
            this.frameTimer1 = 0;                                          // dem tg giua cac khung hinh
            this.frameInterval = 1000/this.fps;                           //  khoảng thời gian giữa hai khung hình liên tiếp
            this.speed = 0;
            this.vy = 0;
            this.weight = 1;                                                 // trrong luc

        }

// dat lai tro choi
        restart (){
            this.x = 0;
            this.y = this.gameHeight - this.height;
            this.maxFame = 8;
            this.frameY = 0;

        }


        draw(context) {
            //  // tao ra 1 o vuong de xac dinh va cham.
            //  context.strokeStyle = 'white';
            // context.strokeRect(this.x,this.y+50,this.width-30,this.height-100)
            // // context.fillStyle = 'white';
            //  // context.fillRect(this.x, this.y, this.width, this.height);         //tao 1 doi tuong o trang
            //  context.beginPath();
            //  context.arc(this.x + this.width/2,this.y + this.height/2,this.width/2,0,Math.PI * 2);
            //  context.stroke();
            //  context.strokeStyle = 'blue';
            //  context.beginPath();
            //  context.arc(this.x ,this.y ,this.width/2,0,Math.PI * 2);
            //  context.stroke();this.width*3.1,this.width*1.3
            //  context.drawImage(this.image, this.frameX* this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width-90 , this.height -50);  //gan doi tuong that vao doi tuong o trang.
                if (uti){
                    context.drawImage(this.image,this.frameX* this.width, this.frameY* this.height, this.width, this.height , this.x-490, this.y+90, this.width+990, this.height-800);  //gan doi tuong that vao doi tuong o trang.
                }
                else
                 context.drawImage(this.image1,this.frameX1* this.width, this.frameY* this.height, this.width, this.height , this.x-490, this.y+90, this.width+990, this.height-800);  //gan doi tuong that vao doi tuong o trang.

        }

        update(input,daltaTime,enemies,enemies2,item,gold,enemies3) {
            // xu ly va cham
            enemies.forEach(enemy =>{
                const dx = (enemy.x+ enemy.width/2)- (this.x + this.width/2);     // tính vị trí trung diêm cua vat theo x
                const dy = (enemy.y + enemy.height/2) - (this.y + this.height/2);  // tính vị trí trung diêm cua vat theo y
                const  distance = Math.sqrt(dx * dx + dy * dy);                  // xác dinh khoang cách giữa 2 vật theo cả y và x
                if (distance+110 < enemy.width/2 + this.width/2){                                // so sanh neu khoảng cach giữa 2 trung diểm gần và chạm vào nhau thì gameover
                    if (enemy.framey === 0 ) {
                        gameOver = true;
                        stopSound(audio);
                    }

                }
            })
            enemies2.forEach(enemy2=>{
                const dx2 = (enemy2.x+enemy2.width/2) -(this.x + this.width/2);
                const dy2 = (enemy2.y + enemy2.height/2) - (this.y + this.height/2);
                const distance2 =  Math.sqrt(dx2 * dx2 + dy2 * dy2);
                if(distance2+140 < enemy2.width/2 + this.width/2){
                    if (enemy2.frameY === 0 ) {
                        gameOver = true;
                        stopSound(audio);
                    }
                }
            })
            enemies3.forEach(enemy3=>{
                const dx3 = (enemy3.x+enemy3.width/2) -(this.x + this.width/2);
                const dy3 = (enemy3.y + enemy3.height/2) - (this.y + this.height/2);
                const distance3 =  Math.sqrt(dx3 * dx3 + dy3 * dy3);
                if(distance3+190 < enemy3.width/2 + this.width/2){
                    enemy3.frameY =1
                    if (enemy3.frameY === 1 && enemy3.frameX >= 4) {
                        gameOver = true;
                        stopSound(audio);
                    }
                }
            })
            item.forEach(itemm=>{
                const dxt = (itemm.x+ itemm.width/2) -(this.x + this.width/2);
                const dyt = (itemm.y + itemm.height/2) - (this.y + this.height/2);
                const distance2 =  Math.sqrt(dxt * dxt + dyt * dyt);
                if(distance2+150 < enemy2.width/2 + this.width/2){
                    score += 20;
                    itemm.markedForDeletion = true;
                }
            })
            gold.forEach(goldd=>{
                const dxt = (goldd.x+ goldd.width/2) -(this.x + this.width/2);
                const dyt = (goldd.y + goldd.height/2) - (this.y + this.height/2);
                const distance2 =  Math.sqrt(dxt * dxt + dyt * dyt);
                if(distance2+150 < enemy2.width/2 + this.width/2){
                    if (goldd.frameY === 0 )
                        score  += 5;
                    else score += 10;
                    goldd.markedForDeletion = true;
                }
            })

            // sprite animation
            //play1
            if(this.frameTimer > this.frameInterval){                                   // kiểm tra xem đã đủ tg cập nhật khung hhinh chua
                if (this.frameX >= this.maxFame) this.frameX = 0;
                this.frameX++
                this.frameTimer = 0;

            } else {
                this.frameTimer += 10;
            }
            if(this.frameTimer1 > this.frameInterval){                                   // kiểm tra xem đã đủ tg cập nhật khung hhinh chua
                if (this.frameX1 >= this.maxFame1) this.frameX1 = 0;
                this.frameX1++
                this.frameTimer1 = 0;

            } else {
                this.frameTimer1 += 100;
            }

            // controls
            if (input.keys.indexOf('ArrowRight') > -1) {
                this.speed = 5;
            } else if (input.keys.indexOf('ArrowLeft') > -1) {
                this.speed = -5;
            }
            else {
                this.speed = 0;
            }
            if (input.keys.indexOf('ArrowUp') > -1 && this.onGround()) {
                this.vy -= 32;

            }
            else if (input.keys.indexOf('ArrowDown') > -1) {
                this.maxFame = 7;
                this.frameY = 2;
                this.vy += 9

            }
            if (input.keys.indexOf('Control') > -1) {
                this.maxFame = 8;
                this.vy = 0.6
            }
            if (input.keys.indexOf('q') > -1) {
                this.speed = 5;
            }
// vertical movement
            //dan-chuog luc
            this.x1 += this.speed;
            if (this.x1 < 0) this.x1 = 0;
            // nhan vat
            this.x += this.speed;
            if (this.x < 0) this.x = 0;
            else if (this.x > this.gameWidth - this.width) this.x = this.gameWidth - this.width;

            this.y += this.vy;
            if (!this.onGround()) {
                this.vy += this.weight
                this.maxFame = 8;
                this.frameY = 1;
                this.frameTimer =1;


            } else {
                this.vy = 0;
                // this.maxFame = 8;
                this.maxFame = 7;
                this.frameY = 0;
            }

            if (input.keys.indexOf('a') > -1) {
                this.maxFame = 7;
                this.frameY = 3;
                // xu ly va cham

                enemies.forEach(enemy =>{
                    const dx = (enemy.x+ enemy.width/2)- (this.x + this.width/2);     // tính vị trí trung diêm cua vat theo x
                    const dy = (enemy.y + enemy.height/2) - (this.y + this.height/2);  // tính vị trí trung diêm cua vat theo y
                    const  distance = Math.sqrt(dx * dx + dy * dy);                  // xác dinh khoang cách giữa 2 vật theo cả y và x
                    if (distance+100 < enemy.width/2 + this.width/2){                          // so sanh neu khoảng cach giữa 2 trung diểm gần và chạm vào nhau thì gameover
                        enemy.framey = 1;
                    }

                })

                enemies2.forEach(enemy2=>{
                    const dx2 = (enemy2.x+enemy2.width/2) -(this.x + this.width/2);
                    const dy2 = (enemy2.y + enemy2.height/2) - (this.y + this.height/2);
                    const distance2 =  Math.sqrt(dx2 * dx2 + dy2 * dy2);
                    if(distance2+90 < enemy2.width/2 + this.width/2){
                        enemy2.frameY = 1;

                    }
                })
                enemies3.forEach(enemy3=>{
                    const dx3 = (enemy3.x+enemy3.width/2) -(this.x + this.width/2);
                    const dy3 = (enemy3.y + enemy3.height/2) - (this.y + this.height/2);
                    const distance3 =  Math.sqrt(dx3 * dx3 + dy3 * dy3);
                    if(distance3+200 < enemy3.width/2 + this.width/2){
                        enemy3.frameY = 4;

                    }
                })
            }
            if (input.keys.indexOf('s') > -1) {
                this.maxFame = 7;
                this.frameY = 4;
                // xu ly va cham

                enemies.forEach(enemy =>{
                    const dx = (enemy.x+ enemy.width/2)- (this.x + this.width/2);     // tính vị trí trung diêm cua vat theo x
                    const dy = (enemy.y + enemy.height/2) - (this.y + this.height/2);  // tính vị trí trung diêm cua vat theo y
                    const  distance = Math.sqrt(dx * dx + dy * dy);                  // xác dinh khoang cách giữa 2 vật theo cả y và x
                    if (distance < enemy.width/2 + this.width/2){                          // so sanh neu khoảng cach giữa 2 trung diểm gần và chạm vào nhau thì gameover
                        enemy.framey = 1;
                    }
                })

                enemies2.forEach(enemy2=>{
                    const dx2 = (enemy2.x+enemy2.width/2) -(this.x + this.width/2);
                    const dy2 = (enemy2.y + enemy2.height/2) - (this.y + this.height/2);
                    const distance2 =  Math.sqrt(dx2 * dx2 + dy2 * dy2);
                    if(distance2 < enemy2.width/2 + this.width/2){
                        enemy2.frameY = 1;

                    }
                })
                enemies3.forEach(enemy3=>{
                    const dx3 = (enemy3.x+enemy3.width/2) -(this.x + this.width/2);
                    const dy3 = (enemy3.y + enemy3.height/2) - (this.y + this.height/2);
                    const distance3 =  Math.sqrt(dx3 * dx3 + dy3 * dy3);
                    if(distance3+140 < enemy3.width/2 + this.width/2){
                        enemy3.frameY = 4;

                    }
                })
            }
            if (input.keys.indexOf('d') > -1) {
                this.maxFame = 7;
                this.frameY = 5;
                // xu ly va cham

                enemies.forEach(enemy =>{
                    const dx = (enemy.x+ enemy.width/2)- (this.x + this.width/2);     // tính vị trí trung diêm cua vat theo x
                    const dy = (enemy.y + enemy.height/2) - (this.y + this.height/2);  // tính vị trí trung diêm cua vat theo y
                    const  distance = Math.sqrt(dx * dx + dy * dy);                  // xác dinh khoang cách giữa 2 vật theo cả y và x
                    if (distance-1000 < enemy.width/2 + this.width/2){                          // so sanh neu khoảng cach giữa 2 trung diểm gần và chạm vào nhau thì gameover
                        enemy.framey = 1;
                    }
                })

                // enemies2.forEach(enemy2=>{
                //     const dx2 = (enemy2.x+enemy2.width/2) -(this.x + this.width/2);
                //     const dy2 = (enemy2.y + enemy2.height/2) - (this.y + this.height/2);
                //     const distance2 =  Math.sqrt(dx2 * dx2 + dy2 * dy2);
                //     if(distance2-1000 < enemy2.width/2 + this.width/2){
                //         enemy2.frameY = 1;
                //
                //     }
                // })
                enemies3.forEach(enemy3=>{
                    const dx3 = (enemy3.x+enemy3.width/2) -(this.x + this.width/2);
                    const dy3 = (enemy3.y + enemy3.height/2) - (this.y + this.height/2);
                    const distance3 =  Math.sqrt(dx3 * dx3 + dy3 * dy3);
                    if(distance3-1000 < enemy3.width/2 + this.width/2){
                        enemy3.frameY = 4;

                    }
                })
            }
            if (input.keys.indexOf('w') > -1) {
                uti = false;
                // xu ly va cham

                enemies.forEach(enemy =>{
                    const dx = (enemy.x+ enemy.width/2)- (this.x + this.width/2);     // tính vị trí trung diêm cua vat theo x
                    const dy = (enemy.y + enemy.height/2) - (this.y + this.height/2);  // tính vị trí trung diêm cua vat theo y
                    const  distance = Math.sqrt(dx * dx + dy * dy);                  // xác dinh khoang cách giữa 2 vật theo cả y và x
                    if (distance -100 < enemy.width/2 + this.width/2){                          // so sanh neu khoảng cach giữa 2 trung diểm gần và chạm vào nhau thì gameover
                        enemy.framey = 1;
                    }

                })

                enemies2.forEach(enemy2=>{
                    const dx2 = (enemy2.x+enemy2.width/2) -(this.x + this.width/2);
                    const dy2 = (enemy2.y + enemy2.height/2) - (this.y + this.height/2);
                    const distance2 =  Math.sqrt(dx2 * dx2 + dy2 * dy2);
                    if(distance2 - 100 < enemy2.width/2 + this.width/2){
                        enemy2.frameY = 1;

                    }
                })
                enemies3.forEach(enemy3=>{
                    const dx3 = (enemy3.x+enemy3.width/2) -(this.x + this.width/2);
                    const dy3 = (enemy3.y + enemy3.height/2) - (this.y + this.height/2);
                    const distance3 =  Math.sqrt(dx3 * dx3 + dy3 * dy3);
                    if(distance3 - 100 < enemy3.width/2 + this.width/2){
                        enemy3.frameY = 4;

                    }
                })
            }
            if (input.keys.indexOf('w') === -1 && this.frameX1 >= 53) {
                uti = true;
            }
            // xu ly bien mat
            enemies.forEach(enemy=>{
                if (enemy.framey === 1 && enemy.frameX === 8  )
                {
                    score++;
                    enemy.markedForDeletion = true;
                }
            })
            enemies2.forEach(enemy2=>{
                if (enemy2.frameY === 1 && enemy2.frameX === 7  )
                {
                    score++;
                    enemy2.markedForDeletion = true;
                }
            })
            enemies3.forEach(enemy3=>{
                if (enemy3.frameY === 4 && enemy3.frameX === 7  )
                {
                    score++;
                    enemy3.markedForDeletion = true;
                }
            })


            if (this.y > this.gameHeight - this.height) this.y = this.gameHeight - this.height;
        }

        onGround() {
            return this.y >= this.gameHeight - this.height;                           // true nếu n ở dưới mặt đất
        }
    }

    class Background {
        constructor(gameWidth, gameHeight) {
            this.gameWidth = gameWidth;
            this.gameHeight = gameHeight;
            this.image = document.getElementById('backgroundImage');
            this.audio = document.getElementById('audio')
            this.x = 0;
            this.y = 0;
            this.width = 1500;
            this.height = 800;
            this.speed = 5;
        }

        draw(context) {
            context.drawImage(this.image, this.x, this.y, this.width, this.height);
            context.drawImage(this.image, this.x + this.width, this.y, this.width, this.height); // loop background
        }

        update() {
            this.x -= this.speed;
            if (this.x < -this.width) this.x = 0;
        }
        restart(){
            this.x = 0;
        }
    }




    // chưởng lực
    class Projectile {
        constructor(gameWidth, gameHeight) {
            this.gameWidth = gameWidth;
            this.gameHeight = gameHeight;
            this.x = 220
            this.width = 40;
            this.height = 32;
            this.x = 220;                                                      // vi tri cua doi tuong
            this.y = this.gameHeight - this.height - 110                            // vi tri cua doi tuong
            this.image1 = document.getElementById('chuong-luc1');
            this.image2 = document.getElementById('chuong-luc1-1');
            this.frameX = 0;
            this.maxFame = 9;
            this.frameY = 0;
            this.fps = 20;                                               // bien de dem khoang thơi gian da troi qua kể từ  lần cập nhật frame trước đo
            this.frameTimer = 0;                                          // dem tg giua cac khung hinh
            this.frameInterval = 1000 / this.fps;                           //  khoảng thời gian giữa hai khung hình liên tiếp
            this.speed = 5;
            // this.vy = 0;
            // this.weight = 1;                                                 // trrong luc

        }

        draw(context) {
            if (chuongluc) {
                context.drawImage(this.image1, this.frameX * this.width, 0, this.width, this.height, this.x, this.y, this.width + 50, this.height - 100)
            }  //gan doi tuong that vao doi tuong o trang.
            else {
                context.drawImage(this.image2, this.frameX * this.width, 0, this.width, this.height, this.x, this.y, this.width + 100, this.height - 300)
            }  //gan doi tuong that vao doi tuong o trang.
        }

        update() {
            // sprite animation
            this.x += this.speed;
            if (this.frameTimer > this.frameInterval) {                                   // kiểm tra xem đã đủ tg cập nhật khung hhinh chua
                if (this.frameX >= this.maxFame) this.frameX = 0;
                this.frameX++
                this.frameTimer = 0;

            } else {
                this.frameTimer += 10;
            }

        }
    }





    class  Item {
        constructor(gameWidth, gameHeight) {
            this.gameWidth = gameWidth;
            this.gameHeight = gameHeight;
            this.width = 170;
            this.height = 200;
            this.image = document.getElementById('item');
            this.x = this.gameWidth;
            this.y = Math.random() * (600 - 200) + 200;
            this.speed = 0;
            this.fps = 200;
            this.frameTimer = 0;
            this.frameInterval = 1000/this.fps;
            this.markedForDeletion = false;

        }
        draw(context){
            // context.strokeStyle = 'white';
            // context.strokeRect(this.x,this.y,this.width,this.height);
            context.drawImage(this.image,0,0, this.width*3, this.height*3, this.x, this.y+30, this.width-100 , this.height-120 )
        }
    update(daltaTime) {
        if (this.frameTimer > this.frameInterval){
            this.frameTimer = 0;
            this.speed += 0.1

        } else {
            this.frameTimer += daltaTime;
        }

        this.x -= this.speed;

        if (this.x < 0 - this.width) {
            this.markedForDeletion = true;
        }

    }

}

    function handItem(daltaTime) {
        if (itemTimer > enemyInterval + ramdomEnemyInterval) {
            item.push(new Item(canvas.width, canvas.height));
            ramdomEnemyInterval = Math.random() * 100 + 500;
            itemTimer = 0;
        } else {
            itemTimer += 0.5;
        }
        item.forEach(itemm => {
            itemm.draw(ctx);
            itemm.update(daltaTime);
        });
        item = item.filter(itemm => !itemm.markedForDeletion); // xu ly tao 1 ham moi va them doi tuong neu markedForDeletion true
    }
// tien vang
    class Gold {
        constructor(gameWidth, gameHeight) {
            this.gameWidth = gameWidth;
            this.gameHeight = gameHeight;
            this.width = 80;
            this.height = 80;
            this.x = this.gameWidth;
            this.y = this.gameHeight - this.height;
            this.image = document.getElementById('gold');
            this.frameX = 0;
            this.frameY = parseInt(Math.random() * 2);
            this.maxFrame = 5;
            this.fps =50;
            this.frameTimer = 0;
            this.frameInterval = 1000/this.fps;
            this.speed = 0;
            this. maxspeed = 30;  // toc do toi da.
            this.markedForDeletion = false;
        }
        draw(context){
            // context.strokeStyle = 'white';
            // context.strokeRect(this.x,this.y,this.width,this.height);
            context.drawImage(this.image, this.frameX * this.width, this.frameY* this.height, this.width, this.height , this.x, this.y-100, this.width, this.height+30);
        }
        update(daltaTime) {
            if (this.frameTimer > this.frameInterval){
                if (this.frameX >= this.maxFrame)  {
                    this.frameX = 0;
                }
                else { this.frameX++
                }
                this.frameTimer = 0;
                this.speed += 0.1

            } else {
                this.frameTimer += daltaTime;
            }

            this.x -= this.speed;

            if (this.x < 0 - this.width) {
                this.markedForDeletion = true;
            }
        }
    }

    function handGold(daltaTime) {
        if (goldTimer > enemyInterval + ramdomEnemyInterval) {
            gold.push(new Gold(canvas.width, canvas.height));
            ramdomEnemyInterval = Math.random() * 100 + 500;
            goldTimer = 0;
        } else {
            goldTimer += 1;
        }
        gold.forEach(goldd => {
            goldd.draw(ctx);
            goldd.update(daltaTime);
        });
        gold = gold.filter(goldd => !goldd.markedForDeletion); // xu ly tao 1 ham moi va them doi tuong neu markedForDeletion true
    }

    // quai vat 2
    class Enemy2 {
        constructor(gameWidth, gameHeight) {
            this.gameWidth =  gameWidth;
            this.gameHeight = gameHeight;
            this.width = 199;
            this.height = 200;
            this.x = this.gameWidth;
            this.y = Math.random() * 400;
            this.speed = 0;
            this.maxFrame = 7 ;
            this.frameX = 0;
            this.frameY = 0;
            this.frameTimer = 0;

            this.image = document.getElementById('enemyImage2');
            this.fps = 20;
            // this.angle = 0;
            // this.va =  Math.random() * 0.1 + 0.1;
            this.frameInterval = 1000/this.fps;
            this.markedForDeletion = false;

        }
        draw(context){
            // context.strokeStyle = 'black';
            // context.strokeRect(this.x,this.y,this.width,this.height);
            // context.beginPath();
            // context.arc(this.x + this.width/2,this.y + this.height/2,this.width/2,0,Math.PI * 2);
            // context.stroke();
            // context.strokeStyle = 'blue';
            // context.beginPath();
            // context.arc(this.x ,this.y ,this.width/2,0,Math.PI * 2);
            // context.stroke();
            // context.drawImage(this.image, this.frameX* this.width, 0, this.width, this.height+40, this.x, this.y, this.width -90, this.height -60);
            context.drawImage(this.image, this.frameX* this.width,this.frameY * this.height, this.width, this.height, this.x, this.y, this.width -90, this.height -40);


        }
        update(daltaTime) {
            // this.angle += this.va;
            // this.y = Math.sin(this.angle);
            if (this.frameTimer > this.frameInterval){
                if (this.frameX >= this.maxFrame)  {
                    this.frameX = 0;
                    this.abc = 0;
                }
                else { this.frameX++
                    this.abc++
                }
                this.frameTimer = 0;
                this.speed += 0.1

            } else {
                this.frameTimer += daltaTime;
            }

            this.x -= this.speed;

            if (this.x < 0 - this.width) {
                this.markedForDeletion = true;
            }

        }

    }
    // dt2

    function handleEnemie2(daltaTime) {
        if (enemy2Timer > enemyInterval + ramdomEnemyInterval){
            enemies2.push(new Enemy2 (canvas.width, canvas.height));
            // ramdomEnemyInterval = Math.random() * 100 + 500;
            ramdomEnemyInterval -= 100
            enemy2Timer = 0;
        }else {
            enemy2Timer += 10;
        }
        enemies2.forEach(enemy2 => {
            enemy2.draw(ctx)
            enemy2.update(daltaTime);
        });
        enemies2 =  enemies2.filter(enemy2 => !enemy2.markedForDeletion);        // xu ly tao 1 ham moi va them doi tuong neu markedForDeletion true
    }



// quai vat 3


    class Enemy3 {
        constructor(gameWidth, gameHeight) {
            this.gameWidth = gameWidth;
            this.gameHeight = gameHeight;
            this.width = 140;
            this.height = 93;
            this.image = document.getElementById('enemyImage3');
            this.x = this.gameWidth;
            this.y = this.gameHeight - this.height;
            this.frameX = 0;
            this.frameY = 0;
            this.maxFrame = 7;
            this.fps =20;
            this.frameTimer = 0;
            this.frameInterval = 1000/this.fps;
            this.speed = 0;
            this. maxspeed = 30;  // toc do toi da.
            this.markedForDeletion = false;
        }

        draw(context) {
            //// tao khoi de xu ly va cham
            // context.strokeStyle = 'white';
            // context.strokeRect(this.x,this.y,this.width,this.height);
            // context.beginPath();
            // context.arc(this.x + this.width/2,this.y + this.height/2,this.width/2,0,Math.PI * 2);
            // context.stroke();
            // context.strokeStyle = 'blue';
            // context.beginPath();
            // context.arc(this.x ,this.y ,this.width/2,0,Math.PI * 2);
            // context.stroke();
            context.drawImage(this.image,this.frameX* this.width, this.frameY* this.height, this.width, this.height, this.x, this.y+10, this.width+250, this.height-500);  //gan doi tuong that vao doi tuong o trang.
        }
// cập nhật vị trí hoạt ảnh theo khung hình frames ddeeer tạo hiệu ứng hoạt ảnh
        update(daltaTime) {
            if (this.frameTimer > this.frameInterval){
                if (this.frameX >= this.maxFrame) this.frameX = 0;
                else
                    this.frameX++

                this.frameTimer = 0;
                this.speed += 0.05

            } else {
                this.frameTimer += daltaTime;
            }
            // Tăng tốc độ lên dần dần
            if (this.speed < this.maxspeed) {
            }
            this.x -= this.speed;

            if (this.x < 0 - this.width) {
                this.markedForDeletion = true;
            }
        }
    }

// xu ly quai vay xuat hien
    function handleEnemies3(daltaTime) {
        // Implement enemy handling if necessary
        if (enemy3Timer > enemyInterval + ramdomEnemyInterval) {
            enemies3.push(new Enemy3(canvas.width, canvas.height));
            ramdomEnemyInterval = Math.random() * 100 + 500;
            // ramdomEnemyInterval -= 100
            enemy3Timer = 0;
        } else {
            enemy3Timer += 1;
        }
        enemies3.forEach(enemy3 => {
            enemy3.draw(ctx)
            enemy3.update(daltaTime);
        });
        enemies3 = enemies3.filter(enemy3 => !enemy3.markedForDeletion);
    }




    class Enemy {
        constructor(gameWidth, gameHeight) {
            this.gameWidth = gameWidth;
            this.gameHeight = gameHeight;
            this.width = 255;
            this.height = 208;
            this.image = document.getElementById('enemyImage');
            this.x = this.gameWidth;
            this.y = this.gameHeight - this.height;
            this.frameX = 0;
            this.framey = 0;
            this.maxFrame = 8;
            this.fps =50;
            this.frameTimer = 0;
            this.frameInterval = 1000/this.fps;
            this.speed = 0;
this. maxspeed = 30;  // toc do toi da.
            this.markedForDeletion = false;
        }

        draw(context) {
            //// tao khoi de xu ly va cham
            // context.strokeStyle = 'white';
            // context.strokeRect(this.x,this.y,this.width,this.height);
            // context.beginPath();
            // context.arc(this.x + this.width/2,this.y + this.height/2,this.width/2,0,Math.PI * 2);
            // context.stroke();
            // context.strokeStyle = 'blue';
            // context.beginPath();
            // context.arc(this.x ,this.y ,this.width/2,0,Math.PI * 2);
            // context.stroke();
            context.drawImage(this.image, this.frameX * this.width, this.framey* this.height, this.width, this.height , this.x, this.y+40, this.width -90, this.height -90);
        }
// cập nhật vị trí hoạt ảnh theo khung hình frames ddeeer tạo hiệu ứng hoạt ảnh
        update(daltaTime) {
            if (this.frameTimer > this.frameInterval){
                if (this.frameX >= this.maxFrame) this.frameX = 0;
                else
                    this.frameX++

                this.frameTimer = 0;
                this.speed += 0.1

            } else {
                this.frameTimer += daltaTime;
            }
            // Tăng tốc độ lên dần dần
            if (this.speed < this.maxspeed) {
            }
            this.x -= this.speed;

            if (this.x < 0 - this.width) {
                this.markedForDeletion = true;
            }
        }
    }

    // enemies2.push(new Enemy(canvas.width, canvas.height));
// xu ly quai vay xuat hien
    function handleEnemies(daltaTime) {
        // Implement enemy handling if necessary
        if (enemyTimer > enemyInterval + ramdomEnemyInterval) {
            enemies.push(new Enemy(canvas.width, canvas.height));
            ramdomEnemyInterval = Math.random() * 100 + 500;
            // ramdomEnemyInterval -= 100
            enemyTimer = 0;
        } else {
            enemyTimer += 7;
        }
        enemies.forEach(enemy => {
            enemy.draw(ctx)
            enemy.update(daltaTime);
        });
        enemies = enemies.filter(enemy => !enemy.markedForDeletion);
    }




    function displayStatusText(context) {
        // Implement status text if necessary
        // tao bong tao diem
        context.font = '40px Helvetica';
        context.fillStyle = 'black';
        context.fillText('Score:' + score,20,50);
        context.fillStyle = 'white';
        context.fillText('Score:' + score,22,52);
        if (gameOver){
            context.font = '90px Helvetica';
            context.textAlign = 'center';
            context.fillStyle = 'white';
            context.fillText('game over, try again!', canvas.width/2,200)
            context.fillStyle = 'black';
            context.fillText('game over, try again!', canvas.width/2 + 2,202)
        }
    }
    function restartGane (){
        player.restart();
        player3.restart();
        background.restart();
        enemies = [];
        enemies2 = [];
        enemies3 =[];
        score = 0;
       gameOver = false;
        animate(0);
        gold = [];
        item = [];

    }
    function stopSound(sound) {
        sound.pause();
        sound.currentTime = 0;
    }


    const input = new InputHandler();
    const player = new Player(canvas.width, canvas.height);
    const background = new Background(canvas.width, canvas.height);
    const  enemy2 = new Enemy2(canvas.width, canvas.height);
    const player1 = new Play2(canvas.width, canvas.height);
    const player3 = new Player3(canvas.width, canvas.height);
    const cl = new Projectile(canvas.width, canvas.height);




// doi nhan vat


    let currentCharacter;
    let character1 = new Player(canvas.width, canvas.height);
    let character3 = new Player3(canvas.width, canvas.height);
    currentCharacter = character1;
    function switchCharacter() {
        if (currentCharacter === character1) {
            currentCharacter = character3;
        } else {
            currentCharacter = character1;
        }
    }


let lastTime = 0;
let  enemyTimer = 0;
let  enemy2Timer = 0;
let  enemy3Timer = 0;
let  itemTimer = 0;
let  clTimer = 0;
let  goldTimer = 0;
let enemyInterval = 2000;
let  ramdomEnemyInterval= 1500


    function animate(timeStamp) {
       const dalteTime =  timeStamp - lastTime;
        // console.log(timeStamp, lastTime)
       lastTime =  timeStamp;
       ctx.clearRect(0, 0, canvas.width, canvas.height);
        background.draw(ctx);
        background.update();
       // player.draw(ctx)
       // player3.draw(ctx)
       currentCharacter.draw(ctx)
        player1.draw(ctx);
        // audio.play();
        currentCharacter   .update(input, dalteTime,enemies,enemies2,item,gold,enemies3);
        // player.update(input, dalteTime,enemies,enemies2,item,gold,enemies3);
        // player3.update(input, dalteTime,enemies,enemies2,item,gold,enemies3);
        player1.update(input,dalteTime, enemies, enemies2,enemies3);
        handleEnemie2(dalteTime);
        handleEnemies3(dalteTime);
        handleEnemies(dalteTime);
       // handchuongluc(dalteTime)
        handItem(dalteTime);
        handGold(dalteTime);
        displayStatusText(ctx)
cl.draw(ctx);
        cl.update();
        if(!gameOver)requestAnimationFrame(animate);
        }

    animate(0);
});











