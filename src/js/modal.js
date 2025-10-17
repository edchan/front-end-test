document.addEventListener('DOMContentLoaded', () => {
  const galleryImages = document.querySelectorAll('.gallery__image');
  let lastFocusedElement = null;

  // Open the modal when clicked
  galleryImages.forEach(image => {
    image.addEventListener('click', function(event) {
      lastFocusedElement = event.target;
      openModal(event.target.src);
    });
  });

  // Function to open the modal with the clicked image
  function openModal(imageSrc) {
    const modal = document.querySelector('.modal');
    const modalImage = document.getElementById('modal-image');
    modalImage.src = imageSrc;

    modal.setAttribute('aria-hidden', 'false');
    modal.style.display = 'flex';
    modal.removeAttribute('inert');
    modal.querySelector('.modal__close').setAttribute('tabindex', '0');
    modal.querySelector('.modal__close').focus();
  }

  // Function to close the modal
  function closeModal() {
    const modal = document.querySelector('.modal');
    modal.setAttribute('aria-hidden', 'true');
    modal.style.display = 'none'; 
    modal.querySelector('#modal-image').src = '';
    modal.setAttribute('inert', '');
    modal.querySelector('.modal__close').removeAttribute('tabindex'); 

    // Return focus to the last focused element that opened the modal
    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }

  // Close modal when X is clicked
  document.querySelector('.modal__close').addEventListener('click', closeModal);

  // Close modal whn the overlay is clicked
  document.querySelector('.modal').addEventListener('click', function(event) {
    if (event.target === this) {
      closeModal();
    }
  });

  // Close the modal when the Escape key is pressed
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
});
