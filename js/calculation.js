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
        const playerExpenseTotal = document.getElementById('player-expenses');
        const playerExpense = elementValue * playerNumber;
        if (isNaN(playerExpense)) {
            alert("Inputfield can not be empty!!!   *OR*  Pls input valid number!!!")
            playerExpenseTotal.innerText = 0;
            return;
        }
        playerExpenseTotal.innerText = playerExpense;
    })

}




// grand total calculation

document.getElementById('calculate-total-btn').addEventListener('click', function () {
    const playerExpense = document.getElementById('player-expenses');
    const playerExpenseString = playerExpense.innerText;
    const playerExpenseValue = parseInt(playerExpenseString);
    const managerExpense = getElementNumber('manager-expense');
    const coachExpense = getElementNumber('coach-expense');
    const grandtotal = document.getElementById("grand-total");
    const updatedGrandTotal = playerExpenseValue + managerExpense + coachExpense;
    if (isNaN(updatedGrandTotal)) {
        alert("Inputfield can not be empty!!!   *OR*  Pls input valid number!!!")
        grandtotal.innerText = 0;
        return;
    }
    grandtotal.innerText = updatedGrandTotal;


})


// done
// done
// done
// done