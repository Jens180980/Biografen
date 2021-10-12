
burger.addEventListener('mouseover', () => navigation.classList.add('show-nav'))

header.addEventListener('mouseleave', () => {
navigation.classList.remove('show-nav')
kinoList.classList.remove('show-nav-items')
facilitiesList.classList.remove('show-nav-items')
moviesList.classList.remove('show-nav-items')
})

kinoMain.addEventListener('mouseover', () => kinoList.classList.add('show-nav-items'))
facilitiesMain.addEventListener('mouseover', () => facilitiesList.classList.add('show-nav-items'))
moviesMain.addEventListener('mouseover', () => moviesList.classList.add('show-nav-items'))

