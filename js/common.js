

// playername selection:

function addToList(element) {

    const playerName = element.parentNode.children[0].innerText;
    const playerObj = {
        playerName: playerName
    }
    playerArray.push(playerObj);

    if (playerArray.length > 5) {
        alert('You cannot add more than five!!!')
        return;
    }
    display(playerArray);
    count(playerArray);

    const playerExpenseTotal = document.getElementById('player-expenses');
    playerExpenseTotal.innerText = "";
    const grandtotal = document.getElementById("grand-total");
    grandtotal.innerText = "";
}

// common get element function
function getElementNumber(elementId) {
    const element = document.getElementById(elementId);
    const elementString = element.innerText;
    const elementValue = parseInt(elementString);
    return elementValue;
}










