
const catImage = "https://i.pinimg.com/474x/db/32/23/db32232ee849096679c32d3392a87694.jpg"

const youtubeWebsite = "https://www.youtube.com/watch?v=iBQ67cd0lq4"
const exampleFile = "https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_1920_18MG.mp4"



function transferComplete(evt) {
  console.log("The transfer is complete.");
}

function transferFailed(evt) {
  console.log("An error occurred while transferring the file.");
}

function transferCanceled(evt) {
  console.log(error)
  console.log("The transfer has been canceled by the user.");
}

function abortTooBigFile(evt) {
  console.log("File is too big");
}

function updateProgress(oEvent, request) {
  console.log({ oEvent });

  if (oEvent.lengthComputable) {
    const percentComplete = (oEvent.loaded / oEvent.total) * 100;
    const processPercentElement = document.getElementById("process-percent");
    processPercentElement.innerHTML = `${percentComplete}%`;
  } else {
    request.abort();
  }
}

function download(content, filename, contentType) {
  if (!contentType) contentType = "application/octet-stream";
  const a = document.createElement("a");
  const blob = new Blob([content], { type: contentType });
  a.href = window.URL.createObjectURL(blob);
  a.download = filename;
  a.click();
}

function handleFetchSuccess(response) {
  download(response, "test.jpeg");
}

function fetchFile(xmlRequest, url) {
  xmlRequest.open("GET", url);
  xmlRequest.timeout = 3000;
  xmlRequest.send();
}

function main() {
  const downloadButtonElement = document.getElementById("download__button");
  const xmlRequest = new XMLHttpRequest();
  const downloadUrl = "http://localhost:8080/image";

  // event listeners
  downloadButtonElement.addEventListener("click", () => {
    fetchFile(xmlRequest, downloadUrl);
  });
  xmlRequest.addEventListener("progress", (event) => {
    updateProgress(event, xmlRequest);
  });
  xmlRequest.addEventListener("load", transferComplete);
  xmlRequest.addEventListener("error", transferFailed);
  xmlRequest.addEventListener("abort", transferCanceled);
  xmlRequest.addEventListener("timeout", abortTooBigFile);
  xmlRequest.onreadystatechange = function () {
    // INFO: readyState: 4 (DONE)
    switch (xmlRequest.readyState) {
            case 1: console.log('After the open method has been invoked successfully, the readyState property of the XMLHttpRequest object should be assigned a value of 1 (OPENED)\n');
            break;
            case 2: delete this.timeout
            console.log('After the send method has been invoked and the HTTP response headers have been received, the readyState property of the XMLHttpRequest object should be assigned a value of 2 (HEADERS_RECEIVED).\n');
            break;
            case 3: console.log('Once the HTTP response content begins to load, the readyState property of the XMLHttpRequest object should be assigned a value of 3 (LOADING).\n');
            break;
            case 4:
             console.log('Once the HTTP response content has finished loading, the readyState property of the XMLHttpRequest object should be assigned a value of 4 (DONE).\n');
             handleFetchSuccess(xmlRequest.response);
            break;
    }
  };
}

main();