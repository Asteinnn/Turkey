document.addEventListener("DOMContentLoaded", function() {
    // Carousel Variables
    let slideIndex = 0;
    showSlides(slideIndex);
  
    function showSlides(n) {
      let slides = document.querySelectorAll('.slide');
      let dots = document.querySelectorAll('.dot');
  
      if (n >= slides.length) { slideIndex = 0; }
      if (n < 0) { slideIndex = slides.length - 1; }
  
      slides.forEach((slide) => slide.style.display = 'none');
      dots.forEach((dot) => dot.classList.remove('active'));
  
      slides[slideIndex].style.display = 'block';
      dots[slideIndex].classList.add('active');
    }
  
    function nextSlide() {
      showSlides(++slideIndex);
    }
  
    function prevSlide() {
      showSlides(--slideIndex);
    }
  
    function currentSlide(n) {
      showSlides(slideIndex = n - 1);
    }
  
    // Attach event listeners to carousel buttons
    document.querySelector('.arrow.left').addEventListener('click', prevSlide);
    document.querySelector('.arrow.right').addEventListener('click', nextSlide);
  
    // Attach event listeners to carousel dots
    document.querySelectorAll('.dot').forEach((dot, index) => {
      dot.addEventListener('click', () => currentSlide(index + 1));
    });
  
    // Smooth scrolling for specific sections
    document.getElementById('tourism').addEventListener('click', function() {
      document.getElementById('scroll1').scrollIntoView({ behavior: 'smooth' });
    });
  
    document.getElementById('hotels').addEventListener('click', function() {
      document.getElementById('box6').scrollIntoView({ behavior: 'smooth' });
    });
  
    document.getElementById('destination').addEventListener('click', function() {
      document.getElementById('box5').scrollIntoView({ behavior: 'smooth' });
    });
  
    document.getElementById('history').addEventListener('click', function() {
      document.getElementById('box7').scrollIntoView({ behavior: 'smooth' });
    });
  
    document.getElementById('nature').addEventListener('click', function() {
      document.getElementById('box8').scrollIntoView({ behavior: 'smooth' });
    });
  
    // Add "More Information" alert to all images within cards
    document.querySelectorAll('.card img').forEach((img) => {
      img.addEventListener('click', function() {
        alert('More information coming soon');
      });
    });
  
   
    document.querySelector('.search-bar').addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        performSearch();
      }
    });
  
    
    function performSearch() {
      const searchTerm = document.querySelector('.search-bar').value.toLowerCase();
  
      switch (searchTerm) {
        case 'tourism':
          document.getElementById('scroll1').scrollIntoView({ behavior: 'smooth' });
          break;
        case 'hotels':
          document.getElementById('box6').scrollIntoView({ behavior: 'smooth' });
          break;
        case 'destinations':
          document.getElementById('box5').scrollIntoView({ behavior: 'smooth' });
          break;
        case 'history':
          document.getElementById('box7').scrollIntoView({ behavior: 'smooth' });
          break;
        case 'nature':
          document.getElementById('box8').scrollIntoView({ behavior: 'smooth' });
          break;
        default:
          alert('Section not found. Try searching for "tourism", "hotels", "destinations", "history", or "nature".');
      }
    }
  
   
    let currentSlidePosition = 0;
    const cardsContainer = document.querySelector('.cards');
    const cardWidth = document.querySelector('.card').offsetWidth + 20; 
  
    function slideLeft() {
      if (currentSlidePosition > 0) {
        currentSlidePosition--;
        updateSlider();
      }
    }
  
    function slideRight() {
      const totalCards = document.querySelectorAll('.card').length;
      const visibleCards = 5;
  
      if (currentSlidePosition < totalCards - visibleCards) {
        currentSlidePosition++;
        updateSlider();
      }
    }
  
    function updateSlider() {
      cardsContainer.style.transform = `translateX(-${currentSlidePosition * cardWidth}px)`;
    }
  
    // Attach event listeners to card slider arrows
    document.querySelector('.slider-arrow.left').addEventListener('click', slideLeft);
    document.querySelector('.slider-arrow.right').addEventListener('click', slideRight);
  });
  document.querySelector('.subscribe-btn').addEventListener('click', function () {
    const emailInput = document.querySelector('.email-input').value;
    if (!emailInput.includes('@')) {
      alert('Please provide a correct email address');
    } else {
      alert('Email sent successfully');
    }
  });
  
  