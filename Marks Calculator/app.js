const calculateFormEl = document.getElementById("calculateForm");
const resultEl = document.getElementById("result");

const calculateMarks = (event) =>{
    const maxMarks = 600;
    event.preventDefault();

    const formData = new FormData(calculateFormEl);
    const data = {};

    formData.forEach((value,key) =>{
        data[key] = +value;
    });
    const totalMarks = data.maths + data.english + data.science + data.marathi + data.sanskrit + data.hindi;
    const percentage = Math.trunc((totalMarks/maxMarks)*100);    
    
    
    resultEl.innerText = `You have got ${totalMarks} marks out of ${maxMarks} & your percentage is ${percentage}%`
    // console.log({totalMarks,percentage});

};