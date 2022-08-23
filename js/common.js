// playername display section:
const playerArray = [];

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

// playername selection:

function addToList(element) {

    const playerName = element.parentNode.children[0].innerText;
    const playerObj = {
        playerName: playerName
    }
    playerArray.push(playerObj);
    // console.log(playerArray);
    // console.log(playerArray.length);
    if (playerArray.length > 5) {
        alert('You cannot add more than five!!!')
        return;
    }
    display(playerArray);
    count(playerArray);
    const playerExpenseTotal = document.getElementById('player-expenses');
    playerExpenseTotal.innerText = "";
}

// player expense calculation:
function count(number) {
    const playerNumber = number.length;
    document.getElementById('calculate-btn').addEventListener('click', function () {
        const perPlayerExpense = document.getElementById('per-player-expenses');
        const perPlayerExpenseString = perPlayerExpense.innerText;
        const perPlayerExpenseValue = parseInt(perPlayerExpenseString);
        const playerExpense = perPlayerExpenseValue * playerNumber;
        const playerExpenseTotal = document.getElementById('player-expenses');
        playerExpenseTotal.innerText = playerExpense;
    })
}




