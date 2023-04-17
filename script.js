window.onload = function(){
    var img = document.getElementById("POPPUNCH");
    var count = document.getElementById("score");
    var score = 0;
    var audio = new Audio("ลาตินตด.mp3");

    //mouse click
    img.addEventListener('mousedown', function (){
        increaseScore();
        img.src = 'punch2.png';
        audio.play();
    });

    img.addEventListener('mouseup', function(){
        img.src = 'punch1.png';
        audio.play();
    });

    //finger click touch screen
    img.addEventListener('touchmove', function (){
        increaseScore();
        img.src = 'punch1.png';
        audio.play();
    });

    img.addEventListener('touchstart', function(){
        img.src = 'punch3.png';
        audio.play();
    });
    
    function increaseScore(){
        score++;
        count.innerHTML = score
    }
}