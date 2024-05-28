import { Player } from './player'


window.addEventListener('load',function () {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width =900;
    canvas.height = 700;
    class player {
        constructor(width, height) {
            this.width = 200;
            this.height = 200;
            this.x = 0
            this.y = 100
        }
        draw(context){
            context.fillStyle = 'white';
            context.fillRect(this.x,this.y,this.width,this.height)
        }
    }
    const input =  new player(canvas.width, canvas.height);
    input.draw(ctx);


});
