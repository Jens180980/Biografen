const select = document.getElementById('kategori');
const form = document.querySelector('form');
select.addEventListener('change', function(event){
    if(select.value){
        form.style.display = 'block';
        document.getElementById('selectedOption').value = select.value;

    } else {
        form.style.display = 'none';
    }
})
function openPayment(){
    if(validate(form)){
        document.getElementById('betaling').style.display ='block';
    }

}

const inputs = document.querySelectorAll('input,textarea');

inputs.forEach(function(elem) {
    

    elem.addEventListener("keydown", function() {
        
        if(elem.nextElementSibling){
            elem.nextElementSibling.remove();
        }       
    });
});

function validate (formElm){

    if(!formElm.name.value){
        if(!formElm.name.nextElementSibling){
            formElm.name.insertAdjacentHTML('afterend','<span class="errormessage">Du skal udfylde feltet navn!</span>')
        }   
        formElm.name.focus();

        return false;

    } else if(!isValidAlpha(formElm.name.value)){
        if(!formElm.name.nextElementSibling){
            formElm.name.insertAdjacentHTML('afterend','<span class="errormessage">Du skal udfylde feltet med en gyldigt navn!</span>')
        }   
        formElm.name.focus();

        return false;
    }


    if(!formElm.adress.value){
        if(!formElm.adress.nextElementSibling){
            formElm.adress.insertAdjacentHTML('afterend','<span class="errormessage">Du skal udfylde feltet adresse!</span>')
        } 
            
        formElm.adress.focus();
        return false;

    }

    if(!formElm.zip.value){
        if(!formElm.zip.nextElementSibling){
            formElm.zip.insertAdjacentHTML('afterend','<span class="errormessage">Du skal udfylde feltet post kode!</span>')
        } 
            
        formElm.zip.focus();
        return false;
    } else if(!isValidLength(formElm.zip.value,4,4)){
        if(!formElm.zip.nextElementSibling){
            formElm.zip.insertAdjacentHTML('afterend','<span class="errormessage">Du skal udfylde med en gyldig post kode!</span>')
        } 
            
        formElm.zip.focus();
        return false;
    }

    if(!formElm.city.value){
        if(!formElm.city.nextElementSibling){
            formElm.city.insertAdjacentHTML('afterend','<span class="errormessage">Du skal udfylde feltet by!</span>')
        } 
            
        formElm.city.focus();
        return false;

    }


    if(!formElm.email.value){
        if(!formElm.email.nextElementSibling){
            formElm.email.insertAdjacentHTML('afterend','<span class="errormessage">Du skal udfylde feltet email!</span>')
        }
        formElm.email.focus();
        return false;
    } else if(!isValidEmail(formElm.email.value)){
        if(!formElm.email.nextElementSibling){
            formElm.email.insertAdjacentHTML('afterend','<span class="errormessage">Du skal udfylde feltet med en gyldigt email!</span>')
        }   
        formElm.email.focus();
        return false;
    }

    if(!formElm.telefon.value){
        if(!formElm.telefon.nextElementSibling){
            formElm.telefon.insertAdjacentHTML('afterend','<span class="errormessage">Du skal udfylde feltet telefon!</span>')
        } 
            
        formElm.telefon.focus();
        return false;
    } else if(!isValidLength(formElm.telefon.value,8,10)){
        if(!formElm.telefon.nextElementSibling){
            formElm.telefon.insertAdjacentHTML('afterend','<span class="errormessage">Du skal udfylde med en gyldig telefon!</span>')
        } 
            
        formElm.telefon.focus();
        return false;
    }

    if(!formElm.textarea.value){
        if(!formElm.textarea.nextElementSibling){
            formElm.textarea.insertAdjacentHTML('afterend','<span class="errormessage">Du skal udfylde feltet textarea!</span>');
            formElm.textarea.focus();
            return false;
        }
    } 
     return true;
}
function succes(){
    formElm.textarea.insertAdjacentHTML('afterend','<span class="feedback">Du har tilmeldt dig.</span>');
}


// Herunder kommer den kode der m??ler m??nstre. fx @, tal mm (SIDE FUNKTIONER)
//Tjekker om v??rdi er et nummer
function isValidNumber(value) {
let pattern = /^[0-9]+$/;
return pattern.test(value);
}

//Tjekker om v??rdi er alfabet
function isValidAlpha(value) {
let pattern = /^[A-Z??????a-z?????? ]+$/;
return pattern.test(value);
}

//Tjekker om v??rdi har en gyldig email syntaks
function isValidEmail(value) {
let pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
return pattern.test(value);
}

//Tjekker at v??rdi har en gyldig l??ngde
function isValidLength(value, min, max) {
let pattern = RegExp('^[0-9A-Za-z@#$%]{' + min + ',' + max + '}$');
return pattern.test(value);
}