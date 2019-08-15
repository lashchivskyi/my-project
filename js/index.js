document.querySelector('.form input[type=submit]')
    .addEventListener('click', login);

function login(e) {
    e.preventDefault();
    fetch('login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
            name: document.querySelector('.username').value,
            email: document.querySelector('.email').value,
            telefon: document.querySelector('.tel').value,
            text: document.querySelector('.text').value
        })
    })
        .then(_ => document.querySelector('.form').reset());
}
