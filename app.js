document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".page-scroll");

  navItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault(); // stops the URL from being updated

      const targetSectionId = this.getAttribute("href");
      const targetSection = document.querySelector(targetSectionId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
