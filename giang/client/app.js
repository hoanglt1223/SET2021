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
  xmlRequest.send();
}

function main() {
  const downloadButtonElement = document.getElementById("download-button");
  const xmlRequest = new XMLHttpRequest();
  const downloadUrl = "http://localhost:3003/image";

  // event listeners
  downloadButtonElement.addEventListener("click", () => {
    fetchFile(xmlRequest, downloadUrl);
  });
  xmlRequest.addEventListener("progress", (event) => {
    updateProgress(event, xmlRequest);
  });
  xmlRequest.onreadystatechange = function () {
    // INFO: readyState: 4 (DONE)
    if (xmlRequest.readyState === 4) {
      handleFetchSuccess(xmlRequest.response);
    }
  };
}

main();
