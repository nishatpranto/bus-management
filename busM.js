document.addEventListener('DOMContentLoaded', () => {

    const navLinks = document.querySelectorAll('.nav ul li a');
    const dashboardLink = document.querySelector('.nav ul li a.active');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {

            navLinks.forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');
        });
    });


    const addBusLink = document.querySelector('.sidebar ul li a:first-child');
    if (addBusLink) {
        addBusLink.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Simulating: Form to add a new bus would appear here!');

        });
    }


});