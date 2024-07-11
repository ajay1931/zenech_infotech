let currentUser = null;
let users = [
    { username: "user1", password: "1234", balance: 1000 },
    { username: "user2", password: "1234", balance: 500 },
    { username: "user3", password: "1234", balance: 300 },
    { username: "user4", password: "1234", balance: 100 },
    { username: "user5", password: "1234", balance: 0 },
];
let login = (event) => {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let user = users.find((value) => value.username === username && value.password === password);
    if (user) {
        currentUser = user;
        document.getElementById("user_name").textContent = currentUser.username;
        document.getElementById("current_balance").textContent = currentUser.balance;
    } else {
        alert("Invalid user name or password")
    }
};

let deposit = () => {
    if (!currentUser) {
        alert("Please login first");
        return;
    }

    let depositAmount = Number(document.getElementById("depositAmount").value);
    if (isNaN(depositAmount) || depositAmount <= 0) {
        alert("Enter valid amount")
        return;
    }
    currentUser.balance += depositAmount;
    document.getElementById("current_balance").textContent = currentUser.balance;
    transcation(`deposit:₹${depositAmount}`)
};

let withdrawal = () => {
    if (!currentUser) {
        alert("please login first")
    }
    let withdrawalAmount = parseFloat(document.getElementById("WithdrawalAmount").value);
    if (isNaN(withdrawalAmount) || withdrawalAmount <= 0) {
        alert("enter valid amount")
    }
    if (withdrawalAmount > currentUser.balance) {
        alert("Insufficient balance.");
        return;
    }
    currentUser.balance -= withdrawalAmount;
    document.getElementById("current_balance").textContent = currentUser.balance;
    transcation(`withdrawal:₹${withdrawalAmount}`)
};

let transcation = (message) => {
    let transcationDetails = document.getElementById("transcationDetails");
    let currentDate = new Date().toDateString();
    transcationDetails.innerHTML = (`${currentDate} and ${message}`)
    let ul=document.getElementById("ul")
    let listitem = document.createElement("li")
    listitem.innerHTML = transcationDetails.innerHTML
    ul.append(listitem)
};
