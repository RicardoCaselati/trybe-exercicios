function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};
createDaysOfTheWeek();



function calendar() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const dezDays = document.getElementById("days");

    for (const date of dezDaysList) {
        const dateListItem = document.createElement("li");
        dateListItem.classList.add("day")

        if (date === 24 || date === 25 || date === 31) {
            dateListItem.classList.add("holiday")
        }

        if (date === 4 || date === 11 || date === 18 || date === 25) {
            dateListItem.classList.add("friday")
        }

        dateListItem.innerHTML = date;

        dezDays.appendChild(dateListItem);
    }
}
calendar();


function buttonHolidays(param) {
    const button = document.createElement("button");
    button.innerHTML = "Feriados";
    const divTag = document.getElementsByClassName("buttons-container")[0];

    // const changeBg = document.getElementsByClassName("holiday")[0];
    const changeBg = document.querySelectorAll(".holiday");


    button.addEventListener("click", colorBg);

    function colorBg() {
        const changeBg = document.getElementsByClassName("holiday");
        for (let element of changeBg) {
            element.classList.toggle("bg-red");
        }
    }

    divTag.appendChild(button);
}

buttonHolidays("Feriados")

function fridayButton(param){
    const divTag = document.getElementsByClassName("buttons-container")[0];
    const button2 = document.createElement("button");
    button2.innerHTML = param;
    button2.setAttribute("id", "btn-friday");

    
    divTag.appendChild(button2);
}

fridayButton("Sexta-feira")
