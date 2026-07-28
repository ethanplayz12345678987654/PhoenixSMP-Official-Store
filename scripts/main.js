// scripts/main.js
document.addEventListener('DOMContentLoaded',()=>{
  const buys = document.querySelectorAll('.buy');
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const modalLink = document.getElementById('modal-link');
  const modalClose = document.getElementById('modal-close');

  // Build checkout URL per-rank. Netherite Rank sends $11.49 to phone number 646-318-8264.
  function checkoutUrlFor(rank){
    if(!rank) return 'https://venmo.com/';

    // Specific payment link for Netherite Rank (pre-fills amount). Note: Venmo uses usernames/profiles;
    // using a numeric profile (phone) may or may not prefill on desktop. Test on your device.
    if(rank === 'Netherite Rank'){
      return 'https://venmo.com/6463188264?txn=pay&amount=11.49';
    }

    // Default: generic Venmo homepage (or change to other rank-specific links)
    return 'https://venmo.com/';
  }

  buys.forEach(btn=>{
    btn.addEventListener('click',()=>{
      const rank = btn.dataset.rank || '';
      // Directly redirect the user to the checkout/payment page (Venmo)
      window.location.href = checkoutUrlFor(rank);
    })
  })

  if(modalClose){
    modalClose.addEventListener('click',()=>{
      modal.setAttribute('aria-hidden','true');
    })
  }

  // close when clicking outside content
  if(modal){
    modal.addEventListener('click',(e)=>{
      if(e.target===modal) modal.setAttribute('aria-hidden','true');
    })
  }
})
