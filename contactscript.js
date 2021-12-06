const bars = document.querySelector('#bars3');
const menu = document.querySelector('#menu3');

bars.addEventListener('click', () => {
    if (menu.classList.contains('hidden') && window.innerWidth < 768) {
        menu.classList.remove('hidden');
        menu.classList.add(
            'flex',
            'flex-col',
            'text-center',
            'bg-yellow-700',
            'w-full',
            'absolute',
            'top-16'
        )
    } else {
        menu.classList.add('hidden')
    }
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        menu.classList.remove(
            'flex',
            'flex-col',
            'text-center',
            'bg-yellow-700',
            'w-full',
            'absolute',
            'top-16'
        );
    }
})