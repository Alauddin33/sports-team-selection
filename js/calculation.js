// playername display section:



function display(playerName) {
    const selectedPlayerName = document.getElementById('selected-player-name');
    selectedPlayerName.innerHTML = "";
    for (let i = 0; i < playerName.length; i++) {
        const name = playerArray[i].playerName;
        const li = document.createElement('li');
        li.innerText = name;
        selectedPlayerName.appendChild(li);
    }

}



// player expense calculation:

function count(number) {
    const playerNumber = number.length;
    document.getElementById('calculate-btn').addEventListener('click', function () {
        const elementValue = getElementNumber('per-player-expenses')
        const playerExpense = elementValue * playerNumber;
        const playerExpenseTotal = document.getElementById('player-expenses');
        playerExpenseTotal.innerText = playerExpense;
    })

}




// grand total calculation

document.getElementById('calculate-total-btn').addEventListener('click', function () {
    const playerExpenseValue = getElementNumber('player-expenses')
    const managerExpense = getElementNumber('manager-expense');
    const coachExpense = getElementNumber('coach-expense');
    const grandtotal = document.getElementById("grand-total");
    grandtotal.innerText = playerExpenseValue + managerExpense + coachExpense;

})


// done
// done
// done
// done