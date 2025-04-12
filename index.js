// fetching the elements from the DOM
const qrContentInput = document.getElementById("qr-content");
const qrGenerationForm = document.getElementById("qr-generation-form");
const qrCodeContainer = document.getElementById("qr-code");
const qrLink = document.getElementById("qr-link");
let qrCode;

// function to generate QR code
function generateQrCode(qrContent) {
  return new QRCode(qrCodeContainer, {
    text: qrContent,
    width: 256,
    height: 256,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });
}

qrGenerationForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const qrContent = qrContentInput.value.trim();
  qrCodeContainer.innerHTML = ""; 
  qrLink.style.display = "none";

  if (qrContent !== "") {
    qrCode = generateQrCode(qrContent);

    // Check if input looks like a URL
    const urlPattern = /^https?:\/\/.+/i;
    if (urlPattern.test(qrContent)) {
      qrLink.href = qrContent;
      qrLink.textContent = "Click to visit: " + qrContent;
      qrLink.title = "Preview: " + qrContent;
      qrLink.style.display = "block";
    }
  }
});

