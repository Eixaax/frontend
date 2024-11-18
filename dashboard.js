document.addEventListener("DOMContentLoaded", () => {
    const closeBtn = document.querySelector(".close-btn");
    const sideBarCont = document.querySelector(".side-bar");
    const account = document.querySelector(".account");
    const menunav = document.querySelectorAll(".menu-nav");
    const logoutNav = document.querySelector(".logout-nav");
    const accInfo = document.getElementById("acc-info");
    const sections = document.querySelectorAll(".dashboard, .statistics, .profile, .settings, .more");
    const logoutBtn = document.getElementById("logout-btn");
    const popup = document.getElementById("logout-popup");
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");

    logoutBtn.addEventListener("click", () => {
        popup.style.display = "flex";
    });

    yesBtn.addEventListener("click", () => {
        popup.style.display = "none"; 
    });

    noBtn.addEventListener("click", () => {
        popup.style.display = "none"; // Close the popup
    });

    popup.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.style.display = "none"; // Close the popup if clicked outside
        }
    })


    const hideAllSections = () => {
        sections.forEach(section => {
            section.style.display = "none";
        });
    };

    const showSection = (sectionClass) => {
        hideAllSections();
        const section = document.querySelector(`.${sectionClass}`);
        if (section) {
            section.style.display = "flex";
        }
    };

    const closeSidebar = () => {
        closeBtn.style.left = "2.2em";
        accInfo.style.display = "none";
        account.style.justifyContent = "center";
        logoutNav.querySelector(".labels").style.display = "none";
        logoutNav.style.justifyContent = "center";
        menunav.forEach(item => {
            item.querySelector(".labels").style.display = "none";
        });
        menunav.forEach(item => {
            item.style.justifyContent = "center";
        });
        closeBtn.querySelector("i").classList.replace("fa-angles-left","fa-angles-right", );
    };

    const openSidebar = () => {
        closeBtn.style.left = "7.5em";
        accInfo.style.display = "";
        account.style.justifyContent = "";
        logoutNav.style.justifyContent = "";
        logoutNav.querySelector(".labels").style.display = "";
        menunav.forEach(item => {
            item.querySelector(".labels").style.display = "";
        });
        menunav.forEach(item => {
            item.style.justifyContent = "";
        });
        closeBtn.querySelector("i").classList.replace("fa-angles-right","fa-angles-left");
    };

    // Event listener for the close button
    closeBtn.addEventListener("click", () => {
        const isClosed = sideBarCont.classList.toggle("closed");
        if (isClosed) {
            closeSidebar();
        } else {
            openSidebar();
        }
    });

    menunav.forEach(nav => {
        nav.addEventListener("click", () => {
            const targetSection = nav.querySelector(".labels").textContent.toLowerCase();

            showSection(targetSection);

            if (sideBarCont.classList.contains("closed")) {
                sideBarCont.classList.remove("closed");
                openSidebar();
            }
        });
    });

    showSection("dashboard");
});


