const conteiner = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeImg = document.querySelector("#qr-code img");

// Eventos
function generateQrCode() {
    const qrCodeInputValue = qrCodeInput.value;

    if (!qrCodeInputValue) return;

    qrCodeBtn.innerHTML = "Gerando código..."

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?data=${qrCodeInputValue}&size=50x50" alt="" title="" `;
    console.log("Gerando")

    qrCodeImg.addEventListener("load", () => {
        conteiner.classList.add("active")
        qrCodeBtn.innerHTML = "Código criado"
    });
};

qrCodeBtn.addEventListener("click", () => {
    generateQrCode()
});

qrCodeInput.addEventListener("keydown", (e) => {
    if(e.conde === "Enter") {
        generateQrCode()
    }
});

// Limpar área de QR Code
qrCodeInput.addEventListener("kwyup", () =>  {
    if (!qrCodeInput.value) {
        conteiner.classList.remove("active");
        qrCodeBtn.innerHTML = "Gerar QR Code"
    }
})