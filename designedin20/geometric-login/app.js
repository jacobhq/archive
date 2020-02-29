function randombg(){
    var random= Math.floor(Math.random() * 3) + 0;
    var bigSize = ["url('./images/bg-01.jpg')",
                   "url('./images/bg-02.jpg')",
                   "url('./images/bg-03.jpg')"];
    document.getElementById("random").style.backgroundImage=bigSize[random];
  }