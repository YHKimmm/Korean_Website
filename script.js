let searchIcon = document.getElementById('search-icon');

const openNav = () => {
    document.getElementById('mySidenav').style.width = '100%';
    searchIcon.style.display = 'none';
};

const closeNav = () => {
    document.getElementById('mySidenav').style.width = '0';
    searchIcon.style.display = 'block';
}

