document.addEventListener("DOMContentLoaded", () => {
    // =========================================
    // Mobile Navigation
    // =========================================

    const menuButton = document.getElementById("menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuButton && mobileMenu) {
        menuButton.addEventListener("click", () => {
            const isExpanded =
                menuButton.getAttribute("aria-expanded") === "true";

            menuButton.setAttribute(
                "aria-expanded",
                String(!isExpanded)
            );

            menuButton.setAttribute(
                "aria-label",
                isExpanded ? "メニューを開く" : "メニューを閉じる"
            );

            mobileMenu.classList.toggle("hidden");
        });


        // Close mobile menu after clicking a navigation link
        const mobileMenuLinks = mobileMenu.querySelectorAll("a");

        mobileMenuLinks.forEach((link) => {
            link.addEventListener("click", () => {
                mobileMenu.classList.add("hidden");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuButton.setAttribute(
                    "aria-label",
                    "メニューを開く"
                );
            });
        });
    }


    // =========================================
    // FAQ Accordion
    // =========================================

    const faqButtons = document.querySelectorAll(".faq-button");

    faqButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const answer = button
                .closest("article")
                .querySelector(".faq-answer");

            const icon = button.querySelector(".faq-icon");

            const isExpanded =
                button.getAttribute("aria-expanded") === "true";


            // Close all FAQ items
            faqButtons.forEach((otherButton) => {
                const otherAnswer = otherButton
                    .closest("article")
                    .querySelector(".faq-answer");

                const otherIcon =
                    otherButton.querySelector(".faq-icon");

                otherButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                otherAnswer.classList.add("hidden");

                if (otherIcon) {
                    otherIcon.textContent = "+";
                }
            });


            // Open selected FAQ if it was previously closed
            if (!isExpanded) {
                button.setAttribute(
                    "aria-expanded",
                    "true"
                );

                answer.classList.remove("hidden");

                if (icon) {
                    icon.textContent = "−";
                }
            }
        });
    });
});