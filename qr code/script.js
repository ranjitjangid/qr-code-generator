const qrInput = document.getElementById('qr-input');
const generateButton = document.getElementById('generate-button');
const qrCode = document.getElementById('qr-code');
const downloadButton = document.getElementById('download-button');
const closeButton = document.getElementById('close-button');

generateButton.addEventListener('click', () => {
  const qrValue = qrInput.value;
  if (!qrValue) {
    alert('Please enter text or URL');
    return;
  }


  qrCode.innerHTML = '';

  const qrCodeElement = new QRCode(qrCode, {
    text: qrValue,
    width: 200,
    height: 200,
    colorDark: '#000', 
    colorLight: '#fff',
    correctLevel: QRCode.CorrectLevel.H
  });

  qrCode.style.display = 'block';
  downloadButton.style.display = 'block';
  closeButton.style.display = 'block';

  downloadButton.addEventListener('click', () => {
    const qrCodeImage = qrCode.querySelector('img');
    const canvas = document.createElement('canvas');
    canvas.width = qrCodeImage.naturalWidth;
    canvas.height = qrCodeImage.naturalHeight;
    canvas.getContext('2d').drawImage(qrCodeImage, 0, 0);
    const a = document.createElement('a');
    a.href = canvas.toDataURL('image/png');
    a.download = 'qr-code.png';
    a.click();
  });

  closeButton.addEventListener('click', () => {
    qrCode.style.display = 'none';
    downloadButton.style.display = 'none';
    closeButton.style.display = 'none';
  });
});