const grabToggle = document.getElementById('menu-toggle');
const showcase = document.getElementById('main-showcase');

grabToggle.addEventListener('click', () => {
    grabToggle.classList.toggle('active');
    showcase.classList.toggle('active');

});

// while (showcase.classList.contains('active')) {
//     showcase.addEventListener('click', () => {
//         showcase.classList.remove('active');
//     });
// }

if (showcase.classList.contains('active')) {
    console.log('hello');
    // showcase.addEventListener('click', () => {
    //     showcase.classList.remove('active');
    // });
}


