window.addEventListener("load", function(){
    let loader = document.querySelector(".loader");
    loader.classList += " hidden";
});

//vi kan se mere tekst ved at klikke på
function toggleExpand(link) { 
    const element = document.querySelector('.toggleText');
    element.classList.toggle('texthidden');
    if(link.innerText === '↓ Læs videre'){
        link.innerText = '↑ Læs mindre'
    }else {
        link.innerText = '↓ Læs videre'
    }
  }


  //play video
  const videoPlayer = document.querySelector('.video');
  // VIDEO play and stop
  function playVideo(videolink){
      const video = document.createElement('video')
      video.src = videolink;
      video.setAttribute('controls','controls');
      videoPlayer.prepend(video);
      videoPlayer.classList.add('active');
  }

  //closing the video
  function closeVideo(){
    const video = document.querySelector('video');
    video.remove();
    videoPlayer.classList.remove('active');
  }
