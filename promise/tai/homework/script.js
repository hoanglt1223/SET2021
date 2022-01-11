const downloadsFolder = require('downloads-folder');

console.log(downloadsFolder());
  
  function reqListener () {
    console.log(this.responseText);
  }

  const timesheetWebsite = "https://udt-timesheet.site/api/ping"
  const youtubeWebsite = "https://www.youtube.com/watch?v=iBQ67cd0lq4"
  const exampleFile = "https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_1920_18MG.mp4"

  const url = timesheetWebsite

  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.onreadystatechange = () => {
    console.log("oReq.readyState:", oReq.readyState);
    const readyState = oReq.readyState;
    switch (readyState) {
        case 1: console.log('After the open method has been invoked successfully, the readyState property of the XMLHttpRequest object should be assigned a value of 1 (OPENED)\n');
        break;
        case 2: console.log('After the send method has been invoked and the HTTP response headers have been received, the readyState property of the XMLHttpRequest object should be assigned a value of 2 (HEADERS_RECEIVED).\n');
        break;
        case 3: console.log('Once the HTTP response content begins to load, the readyState property of the XMLHttpRequest object should be assigned a value of 3 (LOADING).\n');
        break;
        case 4: console.log('Once the HTTP response content has finished loading, the readyState property of the XMLHttpRequest object should be assigned a value of 4 (DONE).\n');
        break;
    }
  }

  oReq.addEventListener("progress", updateProgress);
  oReq.addEventListener("load", transferComplete);
  oReq.addEventListener("error", transferFailed);
  oReq.addEventListener("abort", transferCanceled);
  oReq.addEventListener("timeout", abortTooBigFile);

  // progress on transfers from the server to the client (downloads)
  function updateProgress (oEvent) {
    if (oEvent.lengthComputable) {
      let percentComplete = oEvent.loaded / oEvent.total * 100;
      console.log('percentComplete:', percentComplete)
      progress.value = percentComplete;
      if (percentComplete == 80) {
        oReq.abort()
      }
    } else {
      // Unable to compute progress information since the total size is unknown
      oReq.abort()

    }
  }

  function transferComplete(evt) {
    console.log("The transfer is complete.");
  }

  function transferFailed(evt) {
    console.log("An error occurred while transferring the file.");
  }

  function transferCanceled(evt) {
    console.log("The transfer has been canceled by the user.");
  }

  function abortTooBigFile(evt) {
    console.log("File is too big");
  }

  function download(){
    oReq.open("GET", url);
    oReq.timeout = 3000;
    oReq.send();
  }