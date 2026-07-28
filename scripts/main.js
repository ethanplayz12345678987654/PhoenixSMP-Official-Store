// scripts/main.js
document.addEventListener('DOMContentLoaded',()=>{
  const buys = document.querySelectorAll('.buy');
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const modalLink = document.getElementById('modal-link');
  const modalClose = document.getElementById('modal-close');

  // Helper: open Venmo. Try deep link first, then fallback to web URL in a new tab.
  function openVenmo(recipient, amount){
    const encodedRecipient = encodeURIComponent(recipient);
    const encodedAmount = encodeURIComponent(amount);

    const venmoUri = `venmo://paycharge?txn=pay&recipients=${encodedRecipient}&amount=${encodedAmount}`;
    const webUrl = `https://venmo.com/${encodedRecipient}?txn=pay&amount=${encodedAmount}`;

    // Try opening the native app via URI. Some browsers block this; we still fallback to web URL.
    try {
      // Attempt to open deep link (this will navigate away if the app handles it)
      window.location.href = venmoUri;

      // Fallback: if the deep link didn't open the app, open the web URL in a new tab after a short delay.
      setTimeout(()=>{
        window.open(webUrl, '_blank');
      }, 800);
    } catch (e){
      // If anything goes wrong, just open web URL in new tab.
      window.open(webUrl, '_blank');
    }
  }

  // Build checkout URL per-rank or trigger app/web opening.
  function checkoutFor(rank){
    if(!rank) return () => { window.open('https://venmo.com/', '_blank'); };

    if(rank === 'Netherite Rank'){
      // send $11.49 to phone number 646-318-8264
      // Use the phone number as the recipient path; Venmo may prefer usernames — test and change if needed.
      return () => openVenmo('6463188264', '11.49');
    }

    // Default action: open Venmo homepage
    return () => { window.open('https://venmo.com/', '_blank'); };
  }

  buys.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
      const rank = btn.dataset.rank || '';
      const action = checkoutFor(rank);
      action();
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
