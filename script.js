// Function to calculate ticket prices
function calculateTotal(){
    const firstClassInput = document.getElementById('firstClass-ticket');
    const firstClassCount = parseInt(firstClassInput.value);

    const economyInput = document.getElementById('economy-ticket');
    const economyCount = parseInt(economyInput.value);

    const totalTicketPrice = firstClassCount * 150 + economyCount * 100;// First class ticket price = 150, Economy ticket price = 100
    document.getElementById('total-price').innerText = '$' + totalTicketPrice;

    const totalPriceVat = totalTicketPrice * 0.10;//10% vat of total ticket price
    document.getElementById('vat').innerText = '$' + totalPriceVat;

    const totalPayment = totalPriceVat + totalTicketPrice;//adding vat and ticket price
    document.getElementById('totalPayment').innerText = '$' + totalPayment;
}
//function for taking total ticket count
function ticketCount(product, isIncrease){
    const ticketInput = document.getElementById(product + '-ticket');
    const ticketCount = parseInt(ticketInput.value);
    let ticketNewCount = ticketCount;
    if(isIncrease == true){
        ticketNewCount = ticketCount + 1;
    }
    if(isIncrease == false && ticketCount > 0){
        ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount;
    calculateTotal();
}

const bookNowBtn = document.getElementById("bookNow");
bookNowBtn.addEventListener("click", function(){
    document.getElementById('firstClassTicket').innerText = document.getElementById('firstClass-ticket').value;
    document.getElementById('economyClassTicket').innerText = document.getElementById('economy-ticket').value;
    document.getElementById('totalPriceOfTicket').innerText = document.getElementById('total-price').innerText;
    document.getElementById('totalVat').innerText = document.getElementById('vat').innerText;
    document.getElementById('subTotalToPay').innerText = document.getElementById('totalPayment').innerText;
})




