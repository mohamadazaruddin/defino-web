const modal = document.getElementById("modal-bg");
// const downloadBtn = document.getElementById("downloadBtn");
const confirmBtn = document.getElementById("confirmDownload");
const cancelBtn = document.getElementById("cancelDownload");

// Hide modal initially

function cancel() {
  document.getElementById("modal-bg").style.display = "none";
}
function download() {
  const link = document.createElement("a");
  //link to the uploaded image
  //  in your local storage
  link.href = "defino.apk";
  link.download = "defino.apk";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
