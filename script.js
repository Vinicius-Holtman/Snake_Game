window.onload = () => {
    let stage = document.getElementById('stage');
    let ctx = stage.getContext("2d");

    document.addEventListener("keydown", keyPush);

    setInterval(game, 80);

    const vel = 1;
    
    //Comecar com velocidade X e Y = 0
    let vx = vy = 0;
    // Comecar no ponto X e Y ambos com inicio 10
    let px = 10;
    let py = 15;
    // Tamanho de cada quadrado [lq] = lenght cube
    let lc = 20;
    // Quantidade de quadrados que tera no no X/Y
    let lq = 30;
    // Posicao inicial da maca [ax, ay] = apple X e apple Y
    let ax = ay = 15;

    let trail = [];
    tail = 5


    function game() {
        px += vx;
        py += vy;

        if (px < 0) {
            px = lq - 1;
        }
        if (px > lq - 1) {
            px = 0;
        }
        if (py < 0) {
            py = lq - 1;
        }
        if (py > lq - 1) {
            py = 0;
        }

        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, stage.width, stage.height);

        ctx.fillStyle = "red";
        ctx.fillRect(ax * lc, ay * lc, lc,lc);

        ctx.fillStyle = "gray";
        for (let i = 0; i < trail.length; i++) {
            ctx.fillRect(trail[i].x * lc, trail[i].y * lc, lc,lc);
            if (trail[i].x == px && trail[i].y == py) {
                vx = vy = 0;
                tail = 5;
            }
        }

        trail.push({x:px, y:py})
        while (trail.length > tail) {
            trail.shift();
        }
        
        if (ax == px && ay == py) {
            tail++;
            ax = Math.floor(Math.random() * lq);
            ay = Math.floor(Math.random() * lq);
        }
    }

    function keyPush(event) {
        switch (event.keyCode) {
            case 37: //left
                vx = -vel;
                vy = 0;
                break;
            case 38: //up
                vx = 0;
                vy = -vel;
                break;
            case 39: //right
                vx = vel;
                vy = 0;
                break;
            case 40: //down
                vx = 0;
                vy = vel;
                break;
            default:
                break;
        }
    }
}