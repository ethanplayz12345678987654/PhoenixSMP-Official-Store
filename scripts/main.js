// scripts/main.js
document.addEventListener('DOMContentLoaded',()=>{
  const buys = document.querySelectorAll('.buy');
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const modalLink = document.getElementById('modal-link');
  const modalClose = document.getElementById('modal-close');

  // Redirect BUY buttons to Venmo by default. Replace with your real checkout links if needed.
  function checkoutUrlFor(rank){
    return 'https://venmo.com/';
  }

  buys.forEach(btn=>{
    btn.addEventListener('click',()=>{
      const rank = btn.dataset.rank || 'Rank';
      // Directly redirect the user to the checkout/payment page (Venmo)
      window.location.href = checkoutUrlFor(rank);
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
