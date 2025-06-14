
document.addEventListener("DOMContentLoaded", function () {
    const mega_menu_trigger = document.getElementById('meqa_menu_trigger');
    const megamenuContainer = document.querySelector('.mega_menu');
    const navbar = document.getElementById("mainNavbar");

    let menuTimeout;

    const showMenu = () => {
        clearTimeout(menuTimeout);
        megamenuContainer.style.display = 'block';
    };

    const hideMenu = () => {
        menuTimeout = setTimeout(() => {
            megamenuContainer.style.display = 'none';
        }, 200);
    };

    if (mega_menu_trigger) {
        mega_menu_trigger.addEventListener('mouseenter', showMenu);
        mega_menu_trigger.addEventListener('mouseleave', hideMenu);
    }

    megamenuContainer.addEventListener('mouseenter', showMenu);
    megamenuContainer.addEventListener('mouseleave', hideMenu);

    document.querySelectorAll('.tab_item').forEach(tab => {
        tab.addEventListener('mouseover', function () {
            document.querySelectorAll('.tab_item').forEach(item => item.classList.remove('active'));
            document.querySelectorAll('.tab_content').forEach(content => content.style.display = 'none');

            this.classList.add('active');

            const contentId = this.getAttribute('data-content');
            if (contentId) {
                const tabContent = document.getElementById(contentId);
                if (tabContent) {
                    tabContent.style.display = 'grid';

                    const allSubtabs = tabContent.querySelectorAll('.sub_tabs_content');
                    allSubtabs.forEach(st => st.style.display = 'none');
                    if (allSubtabs.length) allSubtabs[0].style.display = 'block';
                }
            }
        });
    });

    document.querySelectorAll('.side_menu_item').forEach(sideTab => {
        sideTab.addEventListener('mouseover', function () {
            document.querySelectorAll('.sub_tabs_content').forEach(subTabContent => subTabContent.style.display = 'none');

            const subContentId = this.getAttribute('data-content');
            if (subContentId) {
                const subContent = document.getElementById(subContentId);
                if (subContent) subContent.style.display = 'block';
            }
        });
    });

    window.addEventListener("scroll", function () {
        navbar.classList.toggle("scrolled", window.scrollY > 50);
    });
});
