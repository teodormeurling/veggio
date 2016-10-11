  randomNumber = Math.floor(Math.random()*4+1);

  window.onload = function() {
  	if (randomNumber == 1) {
  		document.getElementById("cook1").style.display = "inline";
  		document.getElementById("cook2").style.display = "none";
  		document.getElementById("cook3").style.display = "none";
  		document.getElementById("cook4").style.display = "none";
  	}
  	if (randomNumber == 2) {
  		document.getElementById("cook1").style.display = "none";
  		document.getElementById("cook2").style.display = "inline";
  		document.getElementById("cook3").style.display = "none";
  		document.getElementById("cook4").style.display = "none";
  	}
  	if (randomNumber == 3) {
  		document.getElementById("cook1").style.display = "none";
  		document.getElementById("cook2").style.display = "none";
  		document.getElementById("cook3").style.display = "inline";
  		document.getElementById("cook4").style.display = "none";
  	}
  	if (randomNumber == 4) {
  		document.getElementById("cook1").style.display = "none";
  		document.getElementById("cook2").style.display = "none";
  		document.getElementById("cook3").style.display = "none";
  		document.getElementById("cook4").style.display = "inline";
  	}
    if (randomNumber == 1) {
      document.getElementById("eat1").style.display = "inline";
      document.getElementById("eat2").style.display = "none";
      document.getElementById("eat3").style.display = "none";
      document.getElementById("eat4").style.display = "none";
    }
    if (randomNumber == 2) {
      document.getElementById("eat1").style.display = "none";
      document.getElementById("eat2").style.display = "inline";
      document.getElementById("eat3").style.display = "none";
      document.getElementById("eat4").style.display = "none";
    }
    if (randomNumber == 3) {
      document.getElementById("eat1").style.display = "none";
      document.getElementById("eat2").style.display = "none";
      document.getElementById("eat3").style.display = "inline";
      document.getElementById("eat4").style.display = "none";
    }
    if (randomNumber == 4) {
      document.getElementById("eat1").style.display = "none";
      document.getElementById("eat2").style.display = "none";
      document.getElementById("eat3").style.display = "none";
      document.getElementById("eat4").style.display = "inline";
    }
  }
