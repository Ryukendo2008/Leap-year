function check() {
    const input = document.getElementById('floatingInputValue').value;
    const output = document.getElementById('leap');

    if (input % 4 == 0 || input % 400 == 0 && input % 100 != 0) {
        output.innerText = "Yes ! This is a leap year 366 DAYS!!!!"
    }
    else {
        output.innerText = "NOO ! This isn't a leap year 731 DAYS!!!!!!!"
    }
}