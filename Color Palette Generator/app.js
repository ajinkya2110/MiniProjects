const generateButtonEl = document.getElementById("generateButton");

const singleHexColorGenerator = () =>{
    const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let hexColor = "#";

    for(let i = 0; i < 6 ; i++){
        let random = Math.floor(Math.random() * hex.length) ;
        hexColor = hexColor + hex[random];
    }
    return hexColor;
};

const colorPaletteGenerator = () =>{
    const colorPalette = [];
    for(let i = 0; i < 4 ; i++){
        colorPalette.push(singleHexColorGenerator());
    }
    return colorPalette;
};


const renderColorPalette = () =>{
    const colorsContainerEl = document.querySelector(".colorsContainer")
    colorsContainerEl.innerHTML= "";

    const colorPalette = colorPaletteGenerator();

    colorPalette.forEach((color,i)=>{
        const colorDiv = document.createElement("div");
        colorDiv.id = `color${i + 1}`;
        colorDiv.style.background = color;
        colorDiv.className = "colorBox";

        const colorTag = document.createElement("p");
        colorTag.id = `color${i + 1}Tag`;
        colorTag.className = "colorTag";
        colorTag.innerHTML = color; 
        colorDiv.appendChild(colorTag);

        colorsContainerEl.appendChild(colorDiv); 
    });

    // console.log({colorPalette});
    //  console.log("btn pressed");
const copyToClipboard = (id)=>{
const el = document.getElementById(id);
// console.log(el);

navigator.clipboard 
.writeText(el.innerText)
.then(()=>{
    alert("Copied to Clipboard");
})
.catch((err)=>{
    alert("Could not copy");
});
};

    const colorTags = document.querySelectorAll(".colorTag");
    colorTags.forEach((colorTag,i)=>{
        colorTag.addEventListener("click",()=> 
        copyToClipboard(`color${i + 1}Tag`)
        );
    });
};
renderColorPalette();

generateButtonEl.addEventListener("click",renderColorPalette);