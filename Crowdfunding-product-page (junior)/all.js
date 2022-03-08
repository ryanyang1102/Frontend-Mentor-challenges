;(function() {

  const modal = document.querySelector('.modal');
  const total_layer = document.querySelector('.total-layer');
  const modal__inner = document.querySelectorAll('.modal__inner');
  const pledge = document.getElementsByName('pledge');
  const modal__pledge = document.querySelectorAll('.modal__pledge');


  const menuList = document.querySelector('.menuList');
  const menuListBtn = document.getElementById('menuListBtn');
  const menuListIcon = document.getElementById('menuListIcon');
  let isMenuOpen = false;


  const modal_thanks = document.querySelector('.modal-thanks');
  let rewardBtn = document.querySelectorAll('.rewardBtn');
  const gotIt = document.getElementById('gotIt');
  let isDisplayThanks = true;


  const bookmark_btn = document.querySelector('.bookmark-btn');
  const bookmark_img = document.getElementById('bookmark-img');
  const bookmark_text = document.querySelector('.bookmark');

  // display menuBtn
  menuListBtn.addEventListener('click', () => {
    console.log('123');

    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
      menuList.classList.add('show');
      total_layer.classList.add('show');
      menuListIcon.src ='images/icon-close-menu.svg';
    } else {
      menuList.classList.remove('show');
      total_layer.classList.remove('show');
      menuListIcon.src ='images/icon-hamburger.svg';
    }
  })


  // open & close modal
  document.getElementById('close-modal').addEventListener('click', () => {
    modal.classList.remove('show');
    total_layer.classList.remove('show');
  });

  document.getElementById('open-modal').addEventListener('click', () => {

    modal.classList.add('show');
    total_layer.classList.add('show');
  });

  // open modal__pledge
  for (let i = 0; i < pledge.length; i++) {
    pledge[i].addEventListener('click', () => {
      clearPledge();
      modal__inner[i].classList.add('display-pledge');
      modal__pledge[i].innerHTML = `
        <h4 class="pledge-title">
          Enter your pledge
        </h4>
        <div class="btn-group">
          <label for="pledge">
            <span class="sub-text">$</span>
            <input type="text" id="pledge"/>
          </label>
          <button class="rewardBtn" type="submit">
            Continue
          </button>
        </div>
      `;
    });
  }

  function clearPledge() {
    for (let i = 0; i < pledge.length; i++) {
      modal__inner[i].classList.remove('display-pledge');
      modal__pledge[i].innerHTML = "";
    }
  }

  // open & close modal-thanks
  rewardBtn.forEach(ele => {
    ele.addEventListener('click', displayThanks);
  })
  pledge.forEach(ele => {
    ele.addEventListener('click', () => {
      rewardBtn = document.querySelectorAll('.rewardBtn');
      rewardBtn.forEach(ele => {
        ele.addEventListener('click', displayThanks);
      })
    })

  })
  gotIt.addEventListener('click', displayThanks);

  function displayThanks() {
    if (isDisplayThanks) {
      modal_thanks.classList.add('show');
      total_layer.classList.add('show');
      modal.classList.remove('show');
      clearPledge();
      pledge.forEach(ele => ele.checked = false)
      type.classList.add("type");
    } else {
      modal_thanks.classList.remove('show');
      total_layer.classList.remove('show');
      clearPledge();
      type.classList.remove("type");
    }
    isDisplayThanks = !isDisplayThanks;
  }


  // Bookmark
  let bookmarked = false;

  bookmark_btn.addEventListener('click', () => {
    bookmarked = !bookmarked;
    if (bookmarked) {
      bookmark_text.textContent = 'Bookmarked';
      bookmark_img.src = 'images/icon-bookmarked.svg';
    } else {
      bookmark_text.textContent = 'Bookmark';
      bookmark_img.src = 'images/icon-bookmark.svg';
    }
  })
})()
