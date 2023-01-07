function checkSubmissionStatus() {
    console.log("Checking submission status...");
    var elements = document.getElementsByClassName("ant-tag ant-tag-green");
    if (elements.length > 0) {
      chrome.runtime.sendMessage({ type: "play-sound" });
    }
  }
  
  setInterval(checkSubmissionStatus, 1000);
