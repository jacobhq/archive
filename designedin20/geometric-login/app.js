function randombg(){
    var random= Math.floor(Math.random() * 3) + 0;
    var bigSize = ["url('https://olden.now.sh/designedin20/geometric-login/images/bg-01.jpg')",
                   "url('https://olden.now.sh/designedin20/geometric-login/images/bg-02.jpg')",
                   "url('https://olden.now.sh/designedin20/geometric-login/images/bg-03.jpg')"];
    document.getElementById("random").style.backgroundImage=bigSize[random];
  }
