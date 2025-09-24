document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll("h1").forEach(h1 => {
    h1.innerHTML = h1.textContent
      .split("")
      .map(char =>
        char === " " ? " " : `<span class="wavy-letter">${char}</span>`
      ).join("");
  });
});
