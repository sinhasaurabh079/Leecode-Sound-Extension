chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log("sound play...");
    if (request.type === "play-sound") {
      var audio = new Audio("sound.mp3");
      audio.play();
    }
  });
