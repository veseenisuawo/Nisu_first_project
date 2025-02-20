document.getElementById('mobile-menu').addEventListener('click', function() {
    const navItems = document.getElementById('nav_items');
    const toggleIcon = document.querySelector('.menu-toggle i');

    if (navItems.style.display === 'flex') {
        navItems.style.display = 'none';
        toggleIcon.classList.remove('fa-times');
        toggleIcon.classList.add('fa-bars');
    } else {
        navItems.style.displ
ay = 'flex';
        toggleIcon.classList.remove('fa-bars');
        toggleIcon.classList.add('fa-times');
    }
});
