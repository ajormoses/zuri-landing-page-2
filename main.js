var faq = document.querySelectorAll(".faq");

faq.forEach((faq) => {
  faq.addEventListener("click", (e) => {
    var id = e.target.id;
    var content = document.querySelector(`.${id}-content`);
    var plus = document.querySelector(`.${id}-plus`);
    content.classList.toggle("show");
    plus.classList.toggle("show");
  });
});
