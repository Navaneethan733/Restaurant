document.addEventListener("DOMContentLoaded", () => {
const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(item => {
      const minusBtn = item.querySelector(".minus");
      const plusBtn = item.querySelector(".plus");
      const countEl = item.querySelector(".count");

let count = 0;

      plusBtn.addEventListener("click", () => {
        count++;
        countEl.textContent = count;
      });

      minusBtn.addEventListener("click", () => {
        if (count > 0) {
          count--;
          countEl.textContent = count;
        }
      });
    });
  });
