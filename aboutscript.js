const bars = document.querySelector('#bars2');
const menu = document.querySelector('#menu2');

bars.addEventListener('click', () => {
    if (menu.classList.contains('hidden') && window.innerWidth < 768) {
        menu.classList.remove('hidden');
        menu.classList.add(
            'flex',
            'flex-col',
            'text-center',
            'bg-yellow-800',
            'w-full',
            'absolute',
            'top-16'           
        );
    } else {
        menu.classList.add('hidden');
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        menu.classList.remove(
            'flex',
            'flex-col',
            'text-center',
            'bg-yellow-800',
            'w-full',
            'absolute',
            'top-16'           
        );
    }
})