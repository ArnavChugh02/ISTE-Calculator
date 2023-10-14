let display = document.getElementById('display');

function appendToDisplay(value) {
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    display.innerText = '0';
}

function calculate() {
    try {
        display.innerText = eval(display.innerText);
    } catch (error) {
        display.innerText = 'Error';
    }
}

var toggles = document.getElementsByClassName("button1");
var arr = [...toggles];

arr.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.style.opacity = "1";
    document.body.classList.remove("theme1", "theme2", "theme3");
    if (index == 0) {
      document.body.classList.toggle("theme1");
    } else if (index == 1) {
      document.body.classList.toggle("theme2");
    } else if (index == 2) {
      document.body.classList.toggle("theme3");
    }

    arr
      .filter(function (item) {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});

