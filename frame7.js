<<<<<<< HEAD
document.querySelectorAll('.stars span').forEach(star => {
    star.addEventListener('click', function () {
      const rating = this.getAttribute('data-value');
      alert(`You rated us ${rating} stars!`);
    });
  });
  
  document.querySelector(".back-button").addEventListener("click", function () {
    const previousURL = this.getAttribute("data-url");
    if (previousURL) {
      window.location.href = previousURL;
    } else {
      console.error("No URL specified for the back button.");
    }
  });
=======
document.querySelectorAll('.stars span').forEach(star => {
    star.addEventListener('click', function () {
      const rating = this.getAttribute('data-value');
      alert(`You rated us ${rating} stars!`);
    });
  });
>>>>>>> b7b098dcb413c12b2bf709b1681e1262f054e233
  