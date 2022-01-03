const setProperty = (duration) => {
    document.documentElement.style.setProperty(
      "--animation-time",
      duration + "s"
    );
  };
  
  const changeAnimationTime = () => {
    const animationDuration = Math.random();
    setProperty(animationDuration);
  };
  
  setInterval(changeAnimationTime, 1000);
  
  window.ellipseOffset = 0.4;
  
  var letters = document.getElementsByTagName('span');
  for (i=0;i<letters.length;i++) {
    setRandomFlicker(letters[i]);
  }
  
  function setRandomFlicker(letterSpan) {
    if (letterSpan.getAttribute('class') && letterSpan.getAttribute('class').includes('ellipse')) {
      // handle cascading ellipse
      window.ellipseOffset += 1;
      letterSpan.style.animationIterationCount = 'infinite';
      letterSpan.style.animation = '6s step-end ' + window.ellipseOffset + 's infinite normal none running ellipseTurnOn';
      return;
    }
    
    if (Math.random() < 0.25) {
      // set the late turnon and infinite flicker
      return letterSpan.style.animation = 'turnOn ' + Math.random() + 's forwards step-end, flicker var(--animation-time) infinite step-end 1s';
    }
    letterSpan.style.animationDelay = Math.random() + 's';
  }