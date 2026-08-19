const menuToggle = document.querySelector(".menu-toggle");
const mobileNavigation = document.querySelector("#mobile-navigation");

if (menuToggle && mobileNavigation) {
    menuToggle.addEventListener("click", () => {
        const isOpen = mobileNavigation.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );
    });

    mobileNavigation
        .querySelectorAll("a")
        .forEach((link) => {
            link.addEventListener("click", () => {
                mobileNavigation.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );
            });
        });
}