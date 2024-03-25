function toggleHamburger() {
    const hamburgerMenu = document.getElementsByClassName("HamburgerMenu")[0];
    hamburgerMenu.classList.toggle("active");
    console.log("toggled");
}

function toggleSwitchTab() {
    console.log("switch tab");

    const tutoring = document.getElementById('tutoring');
    const projects = document.getElementById('projects');
    tutoring.classList.toggle('active');
    projects.classList.toggle('active');

    const tutoring_page = document.getElementById('tutoring_page');
    const projects_page = document.getElementById('projects_page');
    tutoring_page.classList.toggle('inactive');
    projects_page.classList.toggle('inactive');
}