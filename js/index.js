/***** clock */
setInterval( ()=> $('.clock').html((new Date()).toLocaleTimeString()), 1000 );

/*** form */

document.querySelector('#contact-submit').addEventListener('click',login);

function login(e) {
    e.preventDefault();
    fetch('login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
            name: document.querySelector('#userName').value,
            email: document.querySelector('#userEmail').value,
            phone: document.querySelector('#textarea').value
        })
    })
        .then(_ => document.querySelector('.feedback-form').reset());
}