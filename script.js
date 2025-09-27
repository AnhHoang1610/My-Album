//turn pages when click next or prev button
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 30 - index;
            }, 500)
        }
        else{
            pageTurn.classList.add('turn');
             setTimeout(() => {
                pageTurn.style.zIndex = 30 + index;
            }, 500)
        }
    }
})

//contact me button when click 
const pages = document.querySelectorAll('.book-page.page-right');
//create reverse index funciton

let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
    pageNumber --;
    if (pageNumber < 0) {
        pageNumber = totalPages - 1;
    }
}


//openning animation
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

//opening animation(cover right animation)
setTimeout(() => {
    coverRight.classList.add('turn');
}, 2100)

setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 2800)

//openning animation(page left or profile page animation)
setTimeout(() => {
    pageLeft.style.zIndex = -1;
}, 3200)


//opening animation(all page right animation)
 pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 20 + index;
            }, 500)

        }, (index + 1) * 100 + 2500)
    })



     // Lấy modal
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modalImg");
    const closeBtn = document.querySelector(".close");

    // Gắn sự kiện cho tất cả ảnh có class="img"
    document.querySelectorAll(".img").forEach(img => {
      img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src; // load ảnh được click
      });
    });

    // Nút đóng
    closeBtn.onclick = () => {
      modal.style.display = "none";
    };

    // Click ra ngoài ảnh cũng đóng
    modal.onclick = (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    };
