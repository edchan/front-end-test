import '../css/main.scss';

console.log('Main JS loaded');

document.querySelectorAll('a[href="#"]').forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const linkText = event.target.innerText;
    console.log(`Clicked Link: ${linkText}`);
  });
});