// let balance = 0;
// let transactionHistory = [];
// let users = [
//     { username: 'user1', password: 'pass1', name: 'User One', balance: 500 },
//     { username: 'user2', password: 'pass2', name: 'User Two', balance: 300 }
// ];
// let currentUser = null;

// function updateBalance() {
//     document.getElementById('balance').textContent = currentUser.balance.toFixed(2);
// }

// function showMessage(message, isError = false) {
//     const messageElement = document.getElementById('message');
//     messageElement.textContent = message;
//     messageElement.style.color = isError ? 'red' : 'green';
// }

// function addTransaction(type, amount) {
//     const transaction = {
//         type,
//         amount: amount.toFixed(2),
//         date: new Date().toLocaleString()
//     };
//     transactionHistory.push(transaction);
//     updateTransactionHistory();
// }

// function updateTransactionHistory() {
//     const transactionList = document.getElementById('transaction-list');
//     transactionList.innerHTML = '';
//     transactionHistory.forEach(transaction => {
//         const li = document.createElement('li');
//         li.textContent = `${transaction.date} - ${transaction.type}: $${transaction.amount}`;
//         transactionList.appendChild(li);
//     });
// }

// function deposit() {
//     const amount = parseFloat(document.getElementById('amount').value);
//     if (isNaN(amount) || amount <= 0) {
//         showMessage('Please enter a valid amount.', true);
//         return;
//     }
//     currentUser.balance += amount;
//     updateBalance();
//     showMessage(`Successfully deposited $${amount.toFixed(2)}.`);
//     addTransaction('Deposit', amount);
// }

// function withdraw() {
//     const amount = parseFloat(document.getElementById('amount').value);
//     if (isNaN(amount) || amount <= 0) {
//         showMessage('Please enter a valid amount.', true);
//         return;
//     }
//     if (amount > currentUser.balance) {
//         showMessage('Insufficient funds.', true);
//         return;
//     }
//     currentUser.balance -= amount;
//     updateBalance();
//     showMessage(`Successfully withdrew $${amount.toFixed(2)}.`);
//     addTransaction('Withdraw', amount);
// }

// function login() {
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
//     const user = users.find(u => u.username === username && u.password === password);
    
//     if (user) {
//         currentUser = user;
//         document.getElementById('user-name').textContent = currentUser.name;
//         updateBalance();
//         document.getElementById('login-container').style.display = 'none';
//         document.getElementById('atm-container').style.display = 'block';
//     } else {
//         document.getElementById('login-message').textContent = 'Invalid username or password.';
//     }
// }
