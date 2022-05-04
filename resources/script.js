function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  
  sleep(2000).then(() => {
      document.getElementById('snake').src="./resources/images/Happy_Snake.jpg"
      document.getElementById('snake').width="700"
      document.getElementById('snake').height="850"
  });