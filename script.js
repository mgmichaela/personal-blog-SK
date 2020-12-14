let currentDay = document.getElementById('current-day');

function getToday() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    today = dd + '.' + mm + '.' + yyyy;
    document.getElementById('current-day').innerHTML = today;
};

getToday();