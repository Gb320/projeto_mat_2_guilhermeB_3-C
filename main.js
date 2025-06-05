document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.burger');
  console.log(burger);
  const navbar = document.querySelector('.navbar');
  console.log(navbar);

  burger.addEventListener('click', () => {
    navbar.classList.toggle('navbar-expanded');
    console.log(navbar.classList.contains('navbar-expanded'));
  });
});
