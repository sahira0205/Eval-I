function goToProduct(productName) {
  window.location.href = `Men_product.html?name=${productName}`;
}

function showProductDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const productName = urlParams.get('name');

  if (productName) {
    document.querySelector('.products-container').style.display = 'none';
    document.getElementById('details-header').style.display = 'none';
    const allProductDetails = document.querySelectorAll('.product-detail');
    allProductDetails.forEach(detail => {
      detail.classList.remove('active');
    });

    const targetDetail = document.querySelector(`.product-detail[data-target="${productName}"]`);
    if (targetDetail) {
      targetDetail.classList.add('active');
    }
  }
}
showProductDetails();