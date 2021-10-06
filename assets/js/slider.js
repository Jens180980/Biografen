//time autoplay ms 
let i = -1;
let time = 3000;
// bliver brugt i fuction
let slideTimer;

// Her henter vi vores div classer og laver dem til en variabel
let slides = document.getElementsByClassName('slide');
let slideDots = document.getElementsByClassName('dot');

// Opretter fuction
//n paramenter (kan være hvad som helst) - N er vores slide fra index i dette tilfælde 
function clickChangeSlide(n) {
    //Handler der reagere på tal - den nustiller auto tid - når vi clikker skal der ikke gå 3000ms
    clearTimeout(slideTimer);
    console.log(n);
    // Når der bliver klikket skal den skifte
    changeSlide(n, true);
}
// 
function changeSlide(n = i, manual = false) {

    for (let j = 0; j < slides.length; j++) {

        if (j == i) {
            // tilføj eller fjern det slide der kom før - Vi slider det ene slide før det andet
            slides[j].classList.add('prev-slide');
            slides[j].classList.remove('active-slide');
            slideDots[j].classList.remove('active-dot');
            // loop skal forsætte med at køre
            continue;
        }
        //Her fjerne vi det slide der kom før - Vi slider det ene slide før det andet
        slideDots[j].classList.remove('active-dot');
        slides[j].classList.remove('prev-slide');
        slides[j].classList.remove('active-slide');
    }

    // manual er false længere oppe
    if (manual) {
        // hvis n er mindre end 0 så er i = antal slide - 1
        // n = -1
        if (n < 0) i = slides.length - 1;
        else if (n > slides.length - 1) i = 0;
        else i = n;
        //? er en afslutning betyder &
    }
    // hvis vi ikke kan få noget ud af det ovenover så skriv:
    else i = i < slides.length - 1 ? i + 1 : 0;

    //laver en class til scss
    slides[i].classList.add('active-slide');
    slideDots[i].classList.add('active-dot');

    //Finder vores changeslide og køre function igennem i forhold til den tid der skal køre (3000)
    slideTimer = setTimeout('changeSlide()', time);
}
//når vores side loades skal den køre changeslide = den køre autoplay
window.onload = changeSlide();