import kaplay from "kaplay";
import "kaplay/global"; // uncomment if you want to use without the   prefix
import { crew } from "@kaplayjs/crew";

kaplay({
    width: 640,
    height: 480,
    font: "sans-serif",
    background: [ 255, 225, 225, ],
    plugins: [crew],
})

let music = play("music", {
    loop: true,
    volume: 0.3,
})

loadRoot(".");

let sfxEnabled = true;

loadSprite("bgMenu", "/sprites/bg-overlay.png"); //bg overlay
loadSprite("bg", "/sprites/bg-2.png"); //bg overlay
loadSprite("mark", "/sprites/mark-o.png"); 
loadSprite("bean", "/sprites/bean.png");
loadSprite("pinkbean", "/sprites/been-o.png");
loadSprite("purplebean", "/sprites/beant-o.png");
loadSprite("kat", "/sprites/kat.png"); //ball load
loadSprite("paddle-red", "/sprites/paddle-red.png") //red paddle load
loadSprite("paddle-blue", "/sprites/paddle-blue.png") //red paddle load
loadSprite("play", "/sprites/play-o.png"); //play btn
loadSprite("pause", "/sprites/pause-o.png"); //pause btn
loadSprite("menu", "/sprites/menu-o.png"); //menu btn
loadSprite("changeBall", "/sprites/assetbrew-o.png"); //changeball btn
loadSprite("refresh", "/sprites/refresh.png"); //refresh btn
loadSprite("soundBTN", "/sprites/sound-o.png");
loadSprite("musicBTN", "/sprites/music-o.png");
loadSprite("settings", "/sprites/config-o.png");
loadSprite("blue-on", "sprites/btn-on.png");
loadSprite("red-on", "sprites/btn-on-red.png");
loadSprite("blue-off", "sprites/btn-off.png");
loadSprite("red-off", "sprites/btn-off-red.png");

loadMusic("music", "/audio/music.mp3"); //music
loadSound("bounce", "/audio/bounce.mp3");
loadSound("start", "/audio/start.mp3");
loadSound("unpause", "/audio/unpause.mp3");
loadSound("boing", "/audio/boing.mp3");
loadSound("ding", "/audio/ding.mp3");
loadSound("pauseSound", "/audio/pauseSound.mp3");
loadSound("pauseSound", "/audio/pauseSound.mp3");

loadCrew("font", "happy");

music = play("music", {
    loop: true,
    volume: 0.3,
});

scene ("menu", () => {
    if (sfxEnabled) play("unpause");

    add ([
        sprite("bgMenu"),
        pos(0,0),
        opacity(0.8),
    ]) //bg

    let katRandomDir = rand(-360, 360); //kat ball dir
    const katMenu = add([
        sprite("kat"),
        scale(2.5),
        pos(0,0),
        area(), 
        "katMenu",
        anchor("center"),
    ]); //add ball

    katMenu.vel = Vec2.fromAngle(katRandomDir).scale(300); //ball velocity

    katMenu.onUpdate(() => {
        katMenu.move(katMenu.vel);
        if (katMenu.pos.x < 40 || katMenu.pos.x > 600) { // 640 - sprite width
            katMenu.vel.x = -katMenu.vel.x;
            katMenu.pos.x = clamp(katMenu.pos.x, 40, 600); // prevent sticking
        }
        if (katMenu.pos.y < 40 || katMenu.pos.y > 440) { // 480 - sprite height
            katMenu.vel.y = -katMenu.vel.y;
            katMenu.pos.y = clamp(katMenu.pos.y, 40, 440);
        }
    }); //move ball

    let beanRandomDir = rand(-360, 360); //bean ball dir
    const beanMenu = add([
        sprite("bean"),
        pos(500,500),
        scale(2.5),
        area(),
        anchor("center"),
        "beanMenu",
    ]); //add ball 

    beanMenu.vel = Vec2.fromAngle(beanRandomDir).scale(300); //ball velocity

    beanMenu.onUpdate(() => {
        beanMenu.move(beanMenu.vel);
        if (beanMenu.pos.x < 40 || beanMenu.pos.x > 600) { // 640 - sprite width
            beanMenu.vel.x = -beanMenu.vel.x;
            beanMenu.pos.x = clamp(beanMenu.pos.x, 40, 600); // prevent sticking
        }
        if (beanMenu.pos.y < 40 || beanMenu.pos.y > 440) { // 480 - sprite height
            beanMenu.vel.y = -beanMenu.vel.y;
            beanMenu.pos.y = clamp(beanMenu.pos.y, 40, 440);
        }
    }); //move ball

    let markRandomDir = rand(-360, 360); //mark ball dir
    const markMenu = add([
        sprite("mark"),
        pos(100,40),
        scale(2.5),
        area(),
        "markMenu",
        anchor("center"),
    ]); //add ball 

    markMenu.vel = Vec2.fromAngle(markRandomDir).scale(300); //ball velocity

    markMenu.onUpdate(() => {
        markMenu.move(markMenu.vel);
        if (markMenu.pos.x < 40 || markMenu.pos.x > 600) { // 640 - sprite width
            markMenu.vel.x = -markMenu.vel.x;
            markMenu.pos.x = clamp(markMenu.pos.x, 16, 600); // prevent sticking
        } 
        if (markMenu.pos.y < 40 || markMenu.pos.y > 440) { // 480 - sprite height
            markMenu.vel.y = -markMenu.vel.y;
            markMenu.pos.y = clamp(markMenu.pos.y, 40, 440);
        }
    }); //move ball

    let pinkbeanRandomDir = rand(-360, 360); //pinkbean ball dir
    const pinkbean = add([
        sprite("pinkbean"),
        pos(200,200),
        scale(2.5),
        area(),
        "pinkbean",
        anchor("center"),
    ]); //add ball 

    pinkbean.vel = Vec2.fromAngle(pinkbeanRandomDir).scale(300); //ball velocity

    pinkbean.onUpdate(() => {
        pinkbean.move(pinkbean.vel);
        if (pinkbean.pos.x < 40 || pinkbean.pos.x > 600) { // 640 - sprite width
            pinkbean.vel.x = -pinkbean.vel.x;
            pinkbean.pos.x = clamp(pinkbean.pos.x, 16, 600); // prevent sticking
        } 
        if (pinkbean.pos.y < 40 || pinkbean.pos.y > 440) { // 480 - sprite height
            pinkbean.vel.y = -pinkbean.vel.y;
            pinkbean.pos.y = clamp(pinkbean.pos.y, 40, 440);
        }
    }); //move ball

    let purplebeanRandomDir = rand(-360, 360); //purplebean ball dir
    const purplebean = add([
        sprite("purplebean"),
        pos(500, 100),
        scale(2.5),
        area(),
        "purplebean",
        anchor("center"),
    ]); //add ball 

    purplebean.vel = Vec2.fromAngle(purplebeanRandomDir).scale(300); //ball velocity

    purplebean.onUpdate(() => {
        purplebean.move(purplebean.vel);
        if (purplebean.pos.x < 40 || purplebean.pos.x > 600) { // 640 - sprite width
            purplebean.vel.x = -purplebean.vel.x;
            purplebean.pos.x = clamp(purplebean.pos.x, 16, 600); // prevent sticking
        } 
        if (purplebean.pos.y < 40 || purplebean.pos.y > 440) { // 480 - sprite height
            purplebean.vel.y = -purplebean.vel.y;
            purplebean.pos.y = clamp(purplebean.pos.y, 40, 440);
        }
    }); //move ball

    onCollide("markMenu", "beanMenu", (mark, bean) => {
        const temp = mark.vel.clone(); //temp clone to make sure the vec2 collisions work
        mark.vel = bean.vel.clone();
        bean.vel = temp;
        if (sfxEnabled) play("boing")
    });
    onCollide("katMenu", "beanMenu", (kat, bean) => {
        const temp = kat.vel.clone();
        kat.vel = bean.vel.clone();
        bean.vel = temp;
        if (sfxEnabled) play("boing")
    });
    onCollide("markMenu", "katMenu", (mark, kat) => {
        const temp = mark.vel.clone();
        mark.vel = kat.vel.clone();
        kat.vel = temp;
        if (sfxEnabled) play("boing")
    });     
    onCollide("markMenu", "pinkbean", (mark, kat) => {
        const temp = mark.vel.clone();
        mark.vel = kat.vel.clone();
        kat.vel = temp;
        if (sfxEnabled) play("boing")
    });    
    onCollide("beanMenu", "pinkbean", (mark, kat) => {
        const temp = mark.vel.clone();
        mark.vel = kat.vel.clone();
        kat.vel = temp;
        if (sfxEnabled) play("boing")
    });   
    onCollide("katMenu", "pinkbean", (mark, kat) => {
        const temp = mark.vel.clone();
        mark.vel = kat.vel.clone();
        kat.vel = temp;
        if (sfxEnabled) play("boing")
    });             
        onCollide("markMenu", "purplebean", (mark, kat) => {
        const temp = mark.vel.clone();
        mark.vel = kat.vel.clone();
        kat.vel = temp;
        if (sfxEnabled) play("boing")
    });    
    onCollide("beanMenu", "purplebean", (mark, kat) => {
        const temp = mark.vel.clone();
        mark.vel = kat.vel.clone();
        kat.vel = temp;
        if (sfxEnabled) play("boing")
    });   
    onCollide("katMenu", "purplebean", (mark, kat) => {
        const temp = mark.vel.clone();
        mark.vel = kat.vel.clone();
        kat.vel = temp;
        if (sfxEnabled) play("boing")
    }); 
    onCollide("pinkbean", "purplebean", (mark, kat) => {
        const temp = mark.vel.clone();
        mark.vel = kat.vel.clone();
        kat.vel = temp;
        if (sfxEnabled) play("boing")
    });                 

    add ([
        sprite("bgMenu"),
        pos(0,0),
        opacity(0.2),
    ]) //bg overlay

    const settings = add ([
       sprite("settings"),
       pos(575, 50),
       area(), 
       "settings",
       anchor("center"),
    ]);

    onHover("settings", () => {
        settings.scale = vec2(1.1);
    })
    onHoverEnd ("settings", () => {
        settings.scale = vec2(1);
    })
    onClick ("settings", () => {
        settings.scale = vec2(0.8);
        wait (0.05, () => {
            go("settings");
        })
    })
    
    add([
        text("KaPong", {
            size: 80,
            width: 400,
            align: "center",
            font: "happy",
        }),
        color(0, 0, 0),
        pos(124, 284),
    ]); //shadow title

    add([
        text("KaPong", {
            size: 80,
            width: 400,
            align: "center",
            font: "happy",
        }),
        pos(120, 280),
    ]); //main text title   
    const playTextShadow = add([
        text("click me to play!", {
            size: 32,
            width: 400,
            align: "center",
            font: "happy",
        }),
        color(0, 0, 0),
        pos(324, 404),
        anchor("center"),
        "playTextShadow",
        area(),
    ]); //shadow play

    const playText = add([
        text("click me to play!", {
            size: 32,
            width: 400,
            align: "center",
            font: "happy",
        }),
        pos(320, 404),
        "playText",
        anchor("center"),
        area(),
    ]); //main text play     

        //text hover fx main
    onHover ("playText", () => {
        playText.scale = vec2(0.95);
    });
    onHoverEnd ("playText", () => {
        playText.scale = vec2(1);
    });
    onClick ("playText", () => {
        playText.scale = vec2(0.8);
        if (sfxEnabled) play("start")
        wait (0.05, () => {
            go("main");
        })
    });
    
    //text hover fx shadow
    onHover ("playTextShadow", () => {
        playTextShadow.scale = vec2(0.95);
    });
    onHoverEnd ("playTextShadow", () => {
        playTextShadow.scale = vec2(1);
    });
    onClick ("playTextShadow", () => {
        playTextShadow.scale = vec2(0.8);
        if (sfxEnabled) play("start")
        wait (0.05, () => {
            go("main");
        })
    });

});

go("menu");

let redScore = 0;
let blueScore = 0;
let ballType = "kat";

scene("main", () => {
    
    add ([
        sprite("bg"),
    ])

    let  ballX = 92;
    let  ballY = 210;
    let ballDirection = 0; //0 = going to the left, 1 = going to the right

    onDraw(() => {
        drawLine({
            p1: vec2(342, 0),
            p2: vec2(342, 480),
            width: 5,
            color: rgb(0, 0, 0),
        }) //shadow

        drawLine({
            p1: vec2(340, 0),
            p2: vec2(340, 480),
            width: 5,
            color: rgb(255, 255, 255),
        });
    }); //divider line

    const redScoreTextShadow = add([
        text(redScore, {
            font: "happy",
            size: 128,
        }),
        color(0,0,0),
        pos(184, 179),
        {value: redScore}
    ])

    const redScoreText = add([
        text(redScore, {
            font: "happy",
            size: 128,
        }),
        pos(180, 175),
        {value: redScore}
    ])

    const blueScoreTextShadow = add([
        text(blueScore, {
            font: "happy",
            size: 128,
        }),
        color(0,0,0),
        pos(404, 179),
        {value: blueScore}
    ])

    const blueScoreText = add([
        text(blueScore, {
            font: "happy",
            size: 128,
        }),
        pos(400, 175),
        {value: blueScore}
    ])

    const redPaddle = add([
        pos(0, 180),
        sprite("paddle-red"),
        scale(0.35),
        area({shape: new Rect(vec2(-50, 50), 50, 100)}),
        "paddle-red",
    ]);
    const bluePaddle = add([
        pos(570, 180),
        sprite("paddle-blue"),
        scale(0.35),
        area({shape: new Rect(vec2(-50, 50), 50, 100)}),
        "paddle-blue",
    ]);

    let speed = 400;

    const ball = add([
        pos( ballX, ballY),
        sprite(ballType),
        scale(1.25),
        area({shape: new Rect(vec2(-32), 64, 64)}), {vel: Vec2.fromAngle(rand(-0.5, 0.5))}
    ]);  

    ball.onUpdate(() => {
        ball.move(ball.vel.unit().scale(speed));
        
        if (ball.pos.x < (-80)) {
            blueScore++;
            blueScoreText.text = blueScore.toString(); // update text  
            blueScoreTextShadow.text = blueScore.toString(); // update text shadow                      
            ball.pos = center()
            ball.vel = Vec2.fromAngle(rand(-40,0));
            speed = 320;
            if (sfxEnabled) play("ding")
        }

        if (ball.pos.x > (640)) {
            redScore++;
            redScoreText.text = redScore.toString(); // update text 
            redScoreTextShadow.text = redScore.toString(); // update text shadow           
            ball.pos = center()
            ball.vel = Vec2.fromAngle(rand(-40,0));
            speed = 320;
            if (sfxEnabled) play("ding")
        }

        if (ball.pos.y < 0 || ball.pos.y > (440)) {
            ball.vel.y = -ball.vel.y;
            if (sfxEnabled) play("boing")
            ball.scale = (vec2(1.35, 0.8));
            wait (0.05, () => {
                ball.scale = (vec2(1.25,1.25));
            })
        }
    });

    function bounceOffPaddle(paddle) {
        speed += 60;
        ball.vel.x = -ball.vel.x;
        let offset = ball.pos.y - paddle.pos.y;
        ball.vel.y = offset * 0.1; //hitting near edges make it go down more
        ball.vel = Vec2.fromAngle(ball.pos.angle(paddle.pos));
        if (sfxEnabled) play("boing")
        ball.scale = (vec2(0.95, 1.35));
        wait (0.05, () => {
            ball.scale = (vec2(1.25,1.25));
        })
    }

    ball.onCollide("paddle-red", (p) =>{ bounceOffPaddle(p)});
    ball.onCollide("paddle-blue", (p) => {bounceOffPaddle(p)});

    //easing for paddles with velocity property
    redPaddle.vel = vec2(0, 0);
    bluePaddle.vel = vec2(0, 0);

    onUpdate(() => {
        const keys = {
            w: false,
            s: false,
            up: false,
            down: false,
        }
        
        if (isKeyDown("w")) {
            keys.w = true
        } else { keys.w = false }

        if (isKeyDown("s")) {
            keys.s = true
        } else { keys.s = false }

        if (isKeyDown("up")) {
            keys.up = true
        } else { keys.up = false }
        
        if (isKeyDown("down")) {
            keys.down = true
        } else { keys.down = false }  
        
        let dirRed = (isKeyDown("w") ? -1:0) + (isKeyDown("s") ? 1:0);
        let dirBlue = (isKeyDown("up") ? -1:0) + (isKeyDown("down") ? 1:0);       

        const easing = 0.2;
        const maxSpeed = 600; //px/s

        //lerp = linear interpolation
        redPaddle.vel.y = lerp(redPaddle.vel.y, dirRed * maxSpeed, easing);
        bluePaddle.vel.y = lerp(bluePaddle.vel.y, dirBlue * maxSpeed, easing);

        redPaddle.pos.y += redPaddle.vel.y * dt();
        bluePaddle.pos.y += bluePaddle.vel.y * dt();

        //limit paddle movement red
        if (redPaddle.pos.y < 0) {redPaddle.pos.y = 0;}
        if (redPaddle.pos.y > 340) {redPaddle.pos.y = 340;} 
        
        //limit paddle movement blue
        if (bluePaddle.pos.y < 0) {bluePaddle.pos.y = 0;}
        if (bluePaddle.pos.y > 340) {bluePaddle.pos.y = 340;} 
    });

    function lerp(a, b, t) {
        return a + (b - a) * t;
    }

    onKeyPress("escape", () => {
        if (sfxEnabled) play("pauseSound")
        go("pause");
    });
        
    const pauseBTN = add([
        sprite("pause"),
        pos(590, 50),
        "pauseBTN",
        area(),
        scale(0.8),
        anchor("center"),
    ])
    
    const refresh = add([
        sprite("refresh"),
        pos(50, 50),
        "refresh",
        area(),
        scale(0.5),
        anchor("center"),
    ])
    const refreshTextShadow = add([
        text("new game", {
            size: 24,
            width: 350,
            font: "happy",
        }),
        color(0,0,0),
        pos(92, 37),
    ])

    const refreshText = add([
        text("new game", {
            size: 24,
            width: 350,
            font: "happy",
        }),
        pos(90, 35),
    ])

    onHover ("refresh", () => {
        refresh.scale = vec2(0.6);
    });
    onHoverEnd ("refresh", () => {
        refresh.scale = vec2(0.5);
    });
    onClick ("refresh", () => {
        refresh.scale = vec2(0.3);
        if (sfxEnabled) play("pauseSound")
        redScore = 0;
        blueScore = 0;
        blueScoreText.text = blueScore.toString(); // update text  
        blueScoreTextShadow.text = blueScore.toString(); // update text shadow                      
        redScoreText.text = redScore.toString();
        redScoreTextShadow.text = redScore.toString();
        
        ball.pos = center()
        ball.vel = Vec2.fromAngle(rand(-40,0));
        speed = 320;
    });

    onHover ("pauseBTN", () => {
        pauseBTN.scale = vec2(0.9);
    });
    onHoverEnd ("pauseBTN", () => {
        pauseBTN.scale = vec2(0.8);
    });
    onClick ("pauseBTN", () => {
        pauseBTN.scale = vec2(0.6);
        if (sfxEnabled) play("pauseSound")
        wait (0.05, () => {
            go("pause");
        })
    });
});

scene("settings", () => {

    add ([
        sprite("bg"),
    ])

    const musicBTN = add ([
        sprite("musicBTN"),
        area(),
        pos(50, 100),
        scale(1.75),
    ])

    const musicON = add([
        sprite("red-on"),
        area(), 
        pos(320, 200),
        "musicON",
        anchor("center"),
    ])


    const musicOFF = add([
        sprite("red-off"),
        area(), 
        pos(510, 200),
        "musicOFF",
        anchor("center"),
    ])

    onHover("musicOFF", () => {
        musicOFF.scale = vec2(1.1);
    })

    onHoverEnd("musicOFF", () => {
        musicOFF.scale = vec2(1);
    })

    onClick("musicOFF", () => {
        if (music) {
            music.volume = 0;
        }
        if (sfxEnabled) play("pauseSound")
        musicOFF.scale = vec2(0.9);        
        wait(0.05, () => {
            musicOFF.scale = vec2(1);
        })   
    })

    onHover("musicON", () => {
        musicON.scale = vec2(1.1);
    })

    onHoverEnd("musicON", () => {
        musicON.scale = vec2(1);
    })    

    onClick("musicON", () => {
        if (music) {
            music.volume = 1;
        }
        if (sfxEnabled) play("pauseSound")
        musicON.scale = vec2(0.9);        
        wait(0.05, () => {
            musicON.scale = vec2(1);
        })       
    })

    const soundON = add([
        sprite("blue-on"),
        area(), 
        pos(320, 310),
        "soundON",
        anchor("center"),
    ])
    const soundOFF = add([
        sprite("blue-off"),
        area(), 
        pos(510, 310),
        "soundOFF",
        anchor("center"),
    ])

    onHover("soundON", () => {
        soundON.scale = vec2(1.1);
    })

    onHoverEnd("soundON", () => {
        soundON.scale = vec2(1);
    })    

    onClick ("soundON", () => {
        sfxEnabled = true;
        if (sfxEnabled) play("pauseSound")
        soundON.scale = vec2(0.9);        
        wait(0.05, () => {
            soundON.scale = vec2(1);
        })              
    })

    onHover("soundOFF", () => {
        soundOFF.scale = vec2(1.1);
    })

    onHoverEnd("soundOFF", () => {
        soundOFF.scale = vec2(1);
    })    
    
    onClick ("soundOFF", () => {
        sfxEnabled = false;
        soundOFF.scale = vec2(0.9);        
        wait(0.05, () => {
            soundOFF.scale = vec2(1);
        })   
    })

    const soundBTN = add ([
        sprite("soundBTN"),
        pos(50, 240),
        area(),
    ]) 

    onClick ("musicOFF", () => {
        music.volume = (0);
    })

    const playBTN = add([
        sprite("play"),
        pos(440, 50),
        "playBTN",
        area(),
        anchor("center"),
    ])

    onHover ("playBTN", () => {
        playBTN.scale = vec2(1.2);
    })
    onHoverEnd ("playBTN", () => {
        playBTN.scale = vec2(1);
    });
    onClick ("playBTN", () => {
        playBTN.scale = vec2(0.6);
        if (sfxEnabled) play("pauseSound")
        wait (0.05, () => {
            go("main");
        })
    });
    
    const changeBall = add([
        sprite("changeBall"),
        pos(515, 50),
        "changeBall",
        area(),
        anchor("center"),
    ])
    
    onHover ("changeBall", () => {
        changeBall.scale = vec2(1.2);
    });
    onHoverEnd ("changeBall", () => {
        changeBall.scale = vec2(1);
    });
    onClick ("changeBall", () => {
        changeBall.scale = vec2(0.6);
        if (sfxEnabled) play("pauseSound")
        wait (0.05, () => {
            go("changeBall");
        })
    });
    
    const menuBTN = add([
        sprite("menu"),
        pos(590, 50),
        "menuBTN",
        area(),
        anchor("center"),
    ])

    onHover ("menuBTN", () => {
        menuBTN.scale = vec2(1.2);
    });
    onHoverEnd ("menuBTN", () => {
        menuBTN.scale = vec2(1);
    });
    onClick ("menuBTN", () => {
        menuBTN.scale = vec2(0.6);
        if (sfxEnabled) play("pauseSound")
        wait (0.05, () => {
            go("menu");
        })
    });
});

scene ("changeBall", () => {
    
    add ([
        sprite("bg"),
    ])
    
    add ([
        text("choose your ball", {
            font: "happy",
            size: 48,
            width: 600,
            align: center,
        }),
        color(0,0,0),
        pos(40, 104),
    ]) //text shadow

    add ([
        text("choose your ball", {
            font: "happy",
            size: 48,
            width: 600,
            align: center,
        }),
        pos(36, 100),
    ]) //text

    const katIcon = add([
        sprite("kat"),
        scale(1.75),
        pos(80,250),
        anchor("center"),
        "katIcon",
        area(),
    ])

    onHover ("katIcon", () => {
        katIcon.scale = vec2(1.9);
    });

    onHoverEnd ("katIcon", () => {
        katIcon.scale = vec2(1.75);
    });

    onClick ("katIcon", () => {
        katIcon.scale = vec2(1.6);
        if (sfxEnabled) play("pauseSound"); 
        wait(0.05, () => {
            katIcon.scale = vec2(1.75);
        });
        ballType = "kat";   
    });    

    const beanIcon = add([
        sprite("bean"),
        pos(200,250),
        scale(1.75),
        anchor("center"),
        "beanIcon",
        area(),
    ])

    onHover ("beanIcon", () => {
        beanIcon.scale = vec2(1.9);
    });

    onHoverEnd ("beanIcon", () => {
        beanIcon.scale = vec2(1.75);
    });

    onClick ("beanIcon", () => {
        beanIcon.scale = vec2(1.6);
        if (sfxEnabled) play("pauseSound"); 
        wait(0.05, () => {
            beanIcon.scale = vec2(1.75);
        });
        ballType = "bean";   
    });

    const markIcon = add([
        sprite("mark"),
        pos(320,250),
        scale(1.75),
        anchor("center"),
        "markIcon",
        area(),
    ])

    onHover ("markIcon", () => {
        markIcon.scale = vec2(1.9);
    });

    onHoverEnd ("markIcon", () => {
        markIcon.scale = vec2(1.75);
    });

    onClick ("markIcon", () => {
        markIcon.scale = vec2(1.6);
        if (sfxEnabled) play("pauseSound"); 
        wait(0.05, () => {
            markIcon.scale = vec2(1.75);
        });
        ballType = "mark";   
    });

    const pinkbeanIcon = add([
        sprite("pinkbean"),
        pos(440,250),
        scale(1.75),
        anchor("center"),
        "pinkbeanIcon",
        area(),
    ])

    onHover ("pinkbeanIcon", () => {
        pinkbeanIcon.scale = vec2(1.9);
    });

    onHoverEnd ("pinkbeanIcon", () => {
        pinkbeanIcon.scale = vec2(1.75);
    });

    onClick ("pinkbeanIcon", () => {
        pinkbeanIcon.scale = vec2(1.6);
        if (sfxEnabled) play("pauseSound"); 
        wait(0.05, () => {
            pinkbeanIcon.scale = vec2(1.75);
        });
        ballType = "pinkbean";   
    });

    const purplebeanIcon = add([
        sprite("purplebean"),
        pos(560,250),
        scale(1.75),
        anchor("center"),
        "purplebeanIcon",
        area(),
    ]) 
    
    onHover ("purplebeanIcon", () => {
        purplebeanIcon.scale = vec2(1.9);
    });

    onHoverEnd ("purplebeanIcon", () => {
        purplebeanIcon.scale = vec2(1.75);
    });

    onClick ("purplebeanIcon", () => {
        purplebeanIcon.scale = vec2(1.6);
        if (sfxEnabled) play("pauseSound"); 
        wait(0.05, () => {
            purplebeanIcon.scale = vec2(1.75);
        });
        ballType = "purplebean";   
    });    

    const playBTN = add([
        sprite("play"),
        pos(440, 50),
        "playBTN",
        area(),
        anchor("center"),
    ])

    onHover ("playBTN", () => {
        playBTN.scale = vec2(1.2);
    })
    onHoverEnd ("playBTN", () => {
        playBTN.scale = vec2(1);
    });
    onClick ("playBTN", () => {
        playBTN.scale = vec2(0.6);
        if (sfxEnabled) play("pauseSound")
        wait (0.05, () => {
            go("main");
        })
    });
    
    const settingsBTN = add([
        sprite("settings"),
        pos(515, 50),
        "settingsBTN",
        area(),
        anchor("center"),
    ])
    
    onHover ("settingsBTN", () => {
        settingsBTN.scale = vec2(1.2);
    });
    onHoverEnd ("settingsBTN", () => {
        settingsBTN.scale = vec2(1);
    });
    onClick ("settingsBTN", () => {
        settingsBTN.scale = vec2(0.6);
        if (sfxEnabled) play("pauseSound")
        wait (0.05, () => {
            go("settings");
        })
    });
    
    const menuBTN = add([
        sprite("menu"),
        pos(590, 50),
        "menuBTN",
        area(),
        anchor("center"),
    ])

    onHover ("menuBTN", () => {
        menuBTN.scale = vec2(1.2);
    });
    onHoverEnd ("menuBTN", () => {
        menuBTN.scale = vec2(1);
    });
    onClick ("menuBTN", () => {
        menuBTN.scale = vec2(0.6);
        if (sfxEnabled) play("pauseSound")
        wait (0.05, () => {
            go("menu");
        })
    });
});

scene("pause", () => {

    add ([
        sprite("bg"),
        opacity(0.5),
    ])

    const pause = add([
        sprite("play"),
        pos(320, 200),
        anchor("center"),
        scale(2),
        "play",
        area(),
    ]);

    const menuBTN = add([
        sprite("menu"),
        pos(590, 50),
        "menuBTN",
        area(),
        anchor("center"),
    ])

    const changeBall = add([
        sprite("changeBall"),
        pos(515, 50),
        "changeBall",
        area(),
        anchor("center"),
    ])

    add([
        text("your game is currently paused! to unpause, click the button or press esc", {
            size: 26,
            width: 400,
            align: "center",
            font: "happy",
        }),
        color(0, 0, 0),
        pos(122, 282),
    ]) //shadow


    add([
        text("your game is currently paused! to unpause, click the button or press esc", {
            size: 26,
            width: 400,
            align: "center",
            font: "happy",
        }),
        pos(120, 280),
    ]) //main text

    const settings = add ([
       sprite("settings"),
       pos(435, 50),
       area(), 
       "settings",
       anchor("center"),
    ]);

    onHover("settings", () => {
        settings.scale = vec2(1.1);
    })
    onHoverEnd ("settings", () => {
        settings.scale = vec2(1);
    })
    onClick ("settings", () => {
        settings.scale = vec2(0.8);
        wait (0.05, () => {
            go("settings");
        })
    })


    onHover ("play", () => {
        pause.scale = vec2(2.2);
    });
    onHoverEnd ("play", () => {
        pause.scale = vec2(2);
    });
    onClick ("play", () => {
        pause.scale = vec2(1.6);
        if (sfxEnabled) play("unpause")
        wait (0.05, () => {
            go("main");
        })
    }); //pause click fx

     onHover ("menuBTN", () => {
        menuBTN.scale = vec2(1.2);
    });
    onHoverEnd ("menuBTN", () => {
        menuBTN.scale = vec2(1);
    });
    onClick ("menuBTN", () => {
        menuBTN.scale = vec2(0.6);
        if (sfxEnabled) play("pauseSound")
        wait (0.05, () => {
            go("menu");
        })
    });

    onHover ("changeBall", () => {
        changeBall.scale = vec2(1.2);
    });
    onHoverEnd ("changeBall", () => {
        changeBall.scale = vec2(1);
    });
    onClick ("changeBall", () => {
        changeBall.scale = vec2(0.6);
        if (sfxEnabled) play("pauseSound")
        wait (0.05, () => {
            go("changeBall");
        })
    });
    
    onKeyPress("escape", () => {
        go("main");
        if (sfxEnabled) play("start");
    });
});