const modal = document.getElementById("modal-bg");
const downloadBtn = document.getElementById("downloadBtn");
const confirmBtn = document.getElementById("confirmDownload");
const cancelBtn = document.getElementById("cancelDownload");
const fileUrl = "/application-3c7489b0-8fcf-426f-b97f-c9ba100fbbd4.aab"; // Replace with your actual file URL

// Hide modal initially

function download() {
  //   modal.style.display = "none";
  window.location.href = fileUrl;
}

function cancel() {
  document.getElementById("modal-bg").style.display = "none";
}
