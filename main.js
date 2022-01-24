document.addEventListener('DOMContentLoaded', () => {

    const rangeInput = document.querySelector(".range__input"),
          rangeTrack = document.querySelector(".range__track"),
          rangeNum = document.querySelector(".range-num");

    rangeInput.addEventListener('input', function() {
        let val = +this.value,
            min = +this.getAttribute('min'),
            max = +this.getAttribute('max'),
            step = +this.getAttribute('step'),
            position = 100 / (max - step) * (val - step);

        rangeTrack.style.width = `${position}%`;
        rangeNum.textContent = `${val}`;
    });

});