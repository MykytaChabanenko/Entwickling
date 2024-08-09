document.querySelector('.time-input').addEventListener('click', function () {
    const timePickerPopup = document.querySelector('.time-picker-popup');
    timePickerPopup.classList.toggle('visible');
});
function generateTimePicker() {
    const timePickerPopup = document.getElementById('time-picker-popup');
    timePickerPopup.innerHTML = '';

    for (let hour = 0; hour < 24; hour++) {
        for (let minute = 0; minute < 60; minute += 15) {
            const timeOption = document.createElement('div');
            timeOption.textContent = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
            timeOption.classList.add('time-picker__option');
            timeOption.addEventListener('click', function () {
                selectTime(timeOption.textContent);
            });
            timePickerPopup.appendChild(timeOption);
        }
    }
}

function selectTime(time) {
    document.getElementById('time-input').value = time;
    document.getElementById('time-picker-popup').classList.remove('visible');
}

// Initialisieren der Picker
generateTimePicker();