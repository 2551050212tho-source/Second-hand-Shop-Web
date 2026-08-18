
    const categoryBtn = document.getElementById('category-btn');
    const categoryMenu = document.getElementById('category-menu');

    categoryBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        categoryMenu.classList.toggle('active');
    });

    document.addEventListener('click', function(e) {
        if (!categoryMenu.contains(e.target) && e.target !== categoryBtn) {
            categoryMenu.classList.remove('active');
        }
    });

    document.getElementById('mobile-search-toggle').addEventListener('click', function() {
    document.getElementById('mobile-search-bar').classList.toggle('active');
    });