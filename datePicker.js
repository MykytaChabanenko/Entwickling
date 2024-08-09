document.querySelector('.date-input').addEventListener('click', function () {
    const calendar = document.querySelector('.calendar');
    calendar.classList.toggle('visible');
});
document.getElementById('date-input').addEventListener('click', function () {
    const calendar = document.getElementById('calendar');
    calendar.classList.toggle('visible');
});

function generateCalendar() {
    const calendar = document.getElementById('calendar');
    const currentDate = new Date();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    calendar.innerHTML = '';

    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.textContent = day;
        dayElement.classList.add('date-picker__day');
        dayElement.addEventListener('click', function () {
            selectDate(`${year}-${month + 1}-${day}`);
        });
        calendar.appendChild(dayElement);
    }
}

function selectDate(date) {
    document.getElementById('date-input').value = date;
    document.getElementById('calendar').classList.remove('visible');
}

document.getElementById('time-input').addEventListener('click', function () {
    const timePickerPopup = document.getElementById('time-picker-popup');
    timePickerPopup.classList.toggle('visible');
});
generateCalendar();