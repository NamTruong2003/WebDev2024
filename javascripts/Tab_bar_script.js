document.addEventListener('DOMContentLoaded', function() {
    let expand_btns = document.querySelectorAll(".ionc-links");
    expand_btns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            let parentLi = e.target.closest('li');
            parentLi.classList.toggle("showMenu");
        });
    });

    let sidebar = document.querySelector(".sidebar");
    let sidebarBtn = document.querySelector(".bx-menu");
    console.log(sidebarBtn);
    sidebarBtn.addEventListener("click", () => {
        sidebar.classList.toggle("close");
    });
});