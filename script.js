const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');
const uploadBtn = document.getElementById('uploadBtn');
const takePhotoBtn = document.getElementById('takePhotoBtn');

// Open file dialog on click
dropZone.addEventListener('click', () => fileInput.click());

// Show file name after selection
fileInput.addEventListener('change', (e) => {
  if (e.target.files.length > 0) {
    dropZone.querySelector('.drop-message').innerHTML = `
      <p><strong>Selected:</strong> ${e.target.files[0].name}</p>
    `;
  }
});

// Drag and drop handling
dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropZone.style.backgroundColor = '#d8fce0';
});

dropZone.addEventListener('dragleave', () => {
  dropZone.style.backgroundColor = '#e9fcef';
});

dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  fileInput.files = e.dataTransfer.files;
  dropZone.querySelector('.drop-message').innerHTML = `
    <p><strong>Dropped:</strong> ${e.dataTransfer.files[0].name}</p>
  `;
  dropZone.style.backgroundColor = '#e9fcef';
});

// Toggle button styles
uploadBtn.addEventListener('click', () => {
  uploadBtn.classList.add('active');
  takePhotoBtn.classList.remove('active');
});

takePhotoBtn.addEventListener('click', () => {
  takePhotoBtn.classList.add('active');
  uploadBtn.classList.remove('active');
});

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show-step');
      }
    });
  });

  document.querySelectorAll('.step-card').forEach(card => {
    observer.observe(card);
  });
  const tipObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  });

  document.querySelectorAll(".tip").forEach(tip => {
    tip.classList.add("fade-init");
    tipObserver.observe(tip);
  });
  console.log("Smart Farming Tips section loaded!");
  document.addEventListener('DOMContentLoaded', function() {
    const categoryFilters = document.querySelectorAll('.category-filters li');
    const searchInput = document.querySelector('.search-bar input[type="text"]');
    const resultsContainer = document.querySelector('.results-container');

    // Initially, you might want to load and display all items or a default set.
    // For this example, we'll just log a message.
    console.log("Pest & Disease Library loaded.");

    // Add event listeners to the category filters
    categoryFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            // Remove active class from all filters
            categoryFilters.forEach(item => item.classList.remove('active'));
            // Add active class to the clicked filter
            this.classList.add('active');
            const category = this.dataset.category;
            console.log(`Filtering by: ${category}`);
            // In a real application, you would fetch and display data
            // based on the selected category here.
            resultsContainer.innerHTML = `<p>Displaying results for: ${category}</p>`;
        });
    });

    // Add event listener to the search input (for basic logging)
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        console.log(`Searching for: ${searchTerm}`);
        // In a real application, you would filter the data based on the
        // search term and update the results container.
        resultsContainer.innerHTML = `<p>Searching for: ${searchTerm}...</p>`;
    });
});