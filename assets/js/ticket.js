// MOVIETICKET
const arrTicketInfo =   // 
  {
    moviePick: '',
    datePick: null,
    hourPick: null,
    quanOfTickets: 0,
    totalPrice: 0
  }


function ticketBuilder() {
  movieHTML.innerText = arrTicketInfo.moviePick
  dayHTML.innerText = arrTicketInfo.datePick
  clockHTML.innerText = arrTicketInfo.hourPick
  numTicketHTML.innerText = `${arrTicketInfo.quanOfTickets} sæder`
  priceHTML.innerText = `Kr. ${arrTicketInfo.totalPrice}`
  console.log(arrTicketInfo);
}

buyBtn.addEventListener('click', () => ticketBuilder())

// MOVIEPICK
movieSelect.addEventListener('change', () => {
  arrTicketInfo.moviePick = movieSelect.value
  calendarContainer.classList.add('showSection')
})


// CALENDAR
let changeMonths = 0
let chosenDate
const daysOfWeekSHORT = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const daysOfWeekLONG = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// Dom creation preparation
const calendarWrap = document.createElement('section')
calendarWrap.setAttribute('id', 'calendar-wrap')
const prevBtn = document.createElement('button')
prevBtn.setAttribute('id', 'prev-btn')
prevBtn.innerText = '<'
const nextBtn = document.createElement('button')
nextBtn.setAttribute('id', 'next-btn')
nextBtn.innerText = '>'
let monthYearDisplay = document.createElement('div')
monthYearDisplay.setAttribute('id', 'month-year-display')

// CALLING INITIAL FUNCTION
buildInitHTML()

// FUNCTIONS

// BUILDS START HTML
function buildInitHTML() {
    appHook.innerHTML = ''
    const header = document.createElement('section')
    header.setAttribute('id', 'calendarHeader')
    header.innerHTML =

        `<div>
            ${prevBtn.outerHTML}
            ${nextBtn.outerHTML}
          </div>`

    buildCalendar()

    // Ships HTML to index.html
    header.prepend(monthYearDisplay)
    appHook.append(header)

    appHook.append(calendarWrap)

    activeBtns()
}

// BUILDS CALENDAR
function buildCalendar() {
    calendarWrap.innerHTML = null
    monthYearDisplay.innerText = ''
    let currDate = new Date() // creates new date instant from current time
    if (changeMonths !== 0) {
        currDate.setMonth(new Date().getMonth() + changeMonths) // set month back or forward according to changeMonth-value
    }

    const day = currDate.getDate() // logs current date to a constant
    const month = currDate.getMonth() // logs current month to a constant
    const year = currDate.getFullYear() // logs current year to a constant

    const daysInMonth = new Date(year, month + 1, 0).getDate() // gets date from day prior to first day of next month - finds # of days in current month

    const firstDayOfMonth = new Date(year, month, 1).toLocaleDateString('en-US', { // Shows day of week in text for current month
        weekday: 'long',
    })

    const fillEmptyDays = daysOfWeekLONG.indexOf(firstDayOfMonth) // finds # of empty day-slots before inserting the 1st of month

    monthString = new Date(year, month, 1).toLocaleString('default', { month: 'long' })
    monthYearDisplay.innerText = `${monthString} ${year}`

     for (i=0; i < daysOfWeekSHORT.length; i++) { // creates unordered list of weekdays
        const colTitles = document.createElement('div')
        colTitles.classList.add('weekdays')
        colTitles.innerHTML += `${daysOfWeekSHORT[i]}`
        calendarWrap.append(colTitles)
    }

    for(i = 0; i < fillEmptyDays; i++) { // creates HTML for empty day-slots
        const emptyDay = document.createElement('div')
        emptyDay.classList.add('day')
        emptyDay.classList.add('padding')
        calendarWrap.append(emptyDay)
    }

    for(let i = 0; i < daysInMonth; i++) { // creates HTML and eventlistener for days of month
        const actualDay = document.createElement('div')
        actualDay.classList.add('day')
        actualDay.innerText = `${i+1}`
        calendarWrap.append(actualDay)
        if (i + 1 == day && changeMonths == 0) { // styling to days date
            actualDay.setAttribute('id', 'currentDay')
          }
        let iterationDate = `${i + 1}/${month + 1}/${year}`
        actualDay.addEventListener('click', () => {
          arrTicketInfo.datePick = iterationDate
          actualDay.classList.add('dayPicked')
        })
    }
}

// Adding eventlisteners
function activeBtns() {
document.getElementById('prev-btn').addEventListener('click', () => {
    changeMonths--
    buildInitHTML()
})

document.getElementById('next-btn').addEventListener('click', () => {
    changeMonths++
    buildInitHTML()
})
}

// PICK TIME
timeSelect.addEventListener('change', () => {
  arrTicketInfo.hourPick = timeSelect.value
  pickSeat.classList.add('showSection')
})

// SEATING
const sits = document.querySelectorAll(".sitHover")
let totalSum = 0
let totalTickets = 0
let status = false

for (let item of sits) {
  item.addEventListener("click", function () {
    item.classList.toggle("valgt")
    if (item.classList.contains("valgt")){
      totalSum += 100
      totalTickets += 1
    } else{
      totalSum -=100
      totalTickets -= 1
    }
    arrTicketInfo.totalPrice = totalSum
    arrTicketInfo.quanOfTickets = totalTickets
    paymentWrap.classList.add('showSection')
  })
}
