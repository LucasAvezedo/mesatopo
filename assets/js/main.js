const paginationItems = document.querySelectorAll('.page-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentPage = 0; 

function updatePagination() {
  paginationItems.forEach((item, index) => {
    item.classList.remove('active');
   
    if (index === currentPage + 1) { 
      item.classList.add('active');
    }
  });
}

prevBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (currentPage > 0) {
    currentPage--;
    updatePagination();
  }
});


nextBtn.addEventListener('click', (e) => {
  e.preventDefault(); 
  if (currentPage < paginationItems.length - 3) { 
    currentPage++; 
    updatePagination(); 
  }
});


updatePagination();