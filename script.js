document.getElementById('toggle-sidebar').addEventListener('click', function() {
    var sidebarLinks = document.querySelector('.sidebar-links');
    
    if (sidebarLinks.classList.contains('show')) {
        sidebarLinks.classList.remove('show');
    } else {
        sidebarLinks.classList.add('show');
    }
});