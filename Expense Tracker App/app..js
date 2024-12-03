const state ={
    earnings:0,
    expenses:0,
    net:0,
    transactions:[]
};

let isUpdate = false;
let tid;

const transactionFormEl = document.getElementById("transactionFormId");

const renderTransactions = ()=>{
    const transactionsContainerEl = document.querySelector(".transactions");
    const netAmountEl = document.getElementById("netAmount");
    const earningsEl = document.getElementById("earnings");
    const expensesEl = document.getElementById("expenses");

    const transactions = state.transactions ;

    let earnings=0;
    let expenses=0;
    let net=0;
    transactionsContainerEl.innerHTML = "";

    transactions.forEach((transaction)=>{
        const {id,amount,text,type} = transaction;
        const isCredit = type === "credit" ? true : false;
        const sign = isCredit ? "+" : "-";

        const transactionEl = 
    `<div class="transaction" id="${id}">
                <div class="content" onClick="showEdit(${id})">
                            <div class="left">
                                <p>${text}</p>
                                <p>${sign} ₹ ${amount}</p>
                            </div>
                            <div class="right ${isCredit ? "credit" : "debit"}"> 
                                ${isCredit ? "C" : "D"}
                            </div>
                </div>

        <div class="lower">
            <div class="icon" onClick="handleUpdate(${id})">
                <img src="pen.svg" alt="Pen">
            </div>
            <div class="icon" onClick="handleDelete(${id})">
                <img src="trash.svg" alt="trash">
            </div>
        </div>
    </div>`


       

        earnings += isCredit ? amount : 0;
        expenses += !isCredit ? amount : 0;
        net = earnings - expenses; 
        transactionsContainerEl.insertAdjacentHTML("afterbegin",transactionEl); 
    });

    console.log({net,earnings,expenses});

     netAmountEl.innerHTML = `₹ ${net}`;
     earningsEl.innerHTML =  `₹ ${earnings}`;
     expensesEl.innerHTML = `₹ ${expenses}`;
};

const addTransaction = (e)=>{
    e.preventDefault();

    const isEarn = e.submitter.id === "earningsButton" ? true:false;
    // console.log(e.submitter.id);
    const formData = new FormData(transactionFormEl);
    const tData = {};

    formData.forEach((value,key)=>{
tData[key] = value;
    });


    const{text,amount} = tData;


    const transaction ={
        id: isUpdate ? tid : Math.floor(Math.random() * 1000),
        text:text,
        amount: +amount,
        type: isEarn ? "credit":"debit",
    };

    if(isUpdate){
const tIndex = state.transactions.findIndex(t=>t.id===tid);
state.transactions[tIndex] = transaction;
isUpdate=false;
tid=null;
    }else{
        state.transactions.push(transaction);
    }


    
    renderTransactions();
transactionFormEl.reset();

    console.log({state});
};
renderTransactions();
const showEdit = (id) =>{
    console.log("id",id);
    const selectedTransaction = document.getElementById(id)
    const lowerEl = selectedTransaction.querySelector(".lower")

    lowerEl.classList.toggle("showTransaction");
};

const handleUpdate = (id) =>{
    const transaction = state.transactions.find((t) => t.id ===  id);
    const {text,amount} = transaction;
    
    const textInput = document.getElementById("text");
    const amountInput = document.getElementById("amount");
    textInput.value = text;
    amountInput.value = amount;
    tid = id;
    isUpdate = true;
};
const handleDelete = (id) =>{
    const filteredTransaction = state.transactions.filter((t)=>t.id !== id);
    state.transactions = filteredTransaction;
    renderTransactions();
};
renderTransactions();
transactionFormEl.addEventListener('submit',addTransaction)