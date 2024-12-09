document.querySelectorAll('.stars span').forEach(star => {
    star.addEventListener('click', function () {
      const rating = this.getAttribute('data-value');
      alert(`You rated us ${rating} stars!`);
    });
  });
  