const qrFormEl = document.getElementById("qrForm");
const qrImageEl = document.getElementById("qrImage");
const qrContainerEl = document.getElementById("qrContainerId");
const qrInputEl = document.getElementById("qrInput");
const generateButtonEl = document.getElementById("generateButton");

const renderQrCode = (url) => {
    if(!url) return;
    generateButtonEl.innerText = "Generating QR Code...";
    qrImageEl.src = url;
    

    const onImageLoad = () =>{
        const interval = setInterval(() =>{
            qrContainerEl.classList.add("show");
            clearInterval(interval);
        generateButtonEl.innerText = "Generate QR Code";
    },400);
        
    };

    qrImageEl.addEventListener("load",onImageLoad);

};




qrFormEl.addEventListener("submit", (event)=>{
    event.preventDefault();

    const formData = new FormData(qrFormEl);
    const text = formData.get("qrText");
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
    renderQrCode(qrCodeUrl)
});

qrInputEl.addEventListener("keyup", ()=>{
    if(!qrInputEl.value.trim()){
        qrContainerEl.classList.remove("show");
    }

    
});