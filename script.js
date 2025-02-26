function scrollToElement(elementSelector, instance = 0) {
    const elements = document.querySelectorAll(elementSelector);
    if (elements.length > instance) {
      elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
  }
  document.addEventListener("DOMContentLoaded", function() {
    const link4 = document.getElementById('link4');
    
    if (link4) {
      link4.addEventListener('click', function(event) {
        event.preventDefault(); // prevent the default link behavior
        scrollToElement('.price-title'); // scrolls to the Pricing section
      });
    }
  });