// scripts/main.js
document.addEventListener('DOMContentLoaded',()=>{
  const buys = document.querySelectorAll('.buy');
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const modalLink = document.getElementById('modal-link');
  const modalClose = document.getElementById('modal-close');

  // Replace this function to point to your real store/checkout links
  function checkoutUrlFor(rank){
    // example: return `https://yourstore.example/checkout?rank=${encodeURIComponent(rank)}`;
    return '#';
  }

  buys.forEach(btn=>{
    btn.addEventListener('click',()=>{
      const rank = btn.dataset.rank || 'Rank';
      modalTitle.textContent = `Buy ${rank}`;
      modalBody.textContent = `You selected the ${rank} rank. Click Complete Purchase to continue to checkout.`;
      modalLink.href = checkoutUrlFor(rank);
      modalLink.textContent = 'Complete Purchase';
      modal.setAttribute('aria-hidden', 'false');
    })
  })

  modalClose.addEventListener('click',()=>{
    modal.setAttribute('aria-hidden','true');
  })

  // close when clicking outside content
  modal.addEventListener('click',(e)=>{
    if(e.target===modal) modal.setAttribute('aria-hidden','true');
  })
})
