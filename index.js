const input = document.querySelectorAll('.email-password');
const label = document.querySelector('.label-email-senha');
const BtnPassword = document.querySelector('.visibilitySvg')
const SaibaMais = document.querySelector('.saiba-mais');
const PsaibaMais = document.querySelector('.p-saiba-mais')

const handleFocus = ({ target }) => {
    const label = target.previousElementSibling
    label.classList.add('label-transition')

}
const handleFocusOut = ({ target }) => {

    if (target.value == '') {
        const label = target.previousElementSibling
        label.classList.remove('label-transition')
    }
}

input.forEach((input) => input.addEventListener('focus', handleFocus))
input.forEach((input) => input.addEventListener('focusout', handleFocusOut))

BtnPassword.addEventListener('click', ({ target }) => {
    if (input[1].type == 'password') {
        input[1].type = 'text'
        target.src = './assets/visibility_off.svg'
    } else {
        input[1].type = 'password'
        target.src = './assets/visibility.svg'
    }
})
SaibaMais.addEventListener('click', ({target}) => {
    PsaibaMais.style.visibility = 'visible';
    PsaibaMais.style.opacity = 1;
    target.style.visibility = 'hidden'
    
});