document.getElementById('account-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const thankYouMessage = document.getElementById('thank-you-message');
    thankYouMessage.classList.add('show');
  
    document.getElementById('account-form').reset();
  });
=======
document.getElementById('account-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const thankYouMessage = document.getElementById('thank-you-message');
    thankYouMessage.classList.add('show');
  
    document.getElementById('account-form').reset();
  });
  
