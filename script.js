// make a age calculator function

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


function ageCalculate() {
    let today = new Date();
    let inputDate = new Date(document.getElementById("date-input").value);
    console.log(inputDate);

    let birthMonth, birthDate, birthYear;

    let birthDetails = {
        date : inputDate.getDate(),
        month : inputDate.getMonth(),
        year : inputDate.getFullYear()
    }

    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth();
    let currentDate = today.getDate();

    birthYear = currentYear - birthDetails.year;

    if (currentMonth >= birthDetails.month) {
        birthMonth = currentMonth - birthDetails.month;
    }
    else {
        birthYear--;
        birthMonth = currentMonth - birthDetails.month + 12;

    }
    if (currentDate >= birthDetails.date) {
        birthDate = currentDate - birthDetails.date;
    }
    else {
        birthMonth--;
        birthDate = currentDate - birthDetails.date + months[birthMonth];
    }
    displayResult(birthMonth, birthDate, birthYear);
}

function displayResult(bDate, bMonth, bYear) {
    document.getElementById("years").textContent = bYear;
    document.getElementById("months").textContent = bMonth;
    document.getElementById("days").textContent = bDate;
}