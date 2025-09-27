*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
    border: none;
    outline: none;

}

:root{
    --bg-color: #081b29;
    --main-color: #FF66CC;
    --text-color: #333;
    --second-text-color: #555;
    --white-color: #fff;
    --cover-color: linear-gradient(45deg, #FF66CC, #FF99CC);
    --pages-color: linear-gradient(90deg, #fff, #ddd);
    --border: .125rem solid #FF66CC;
    --box-shadow: 0 0 0.6rem rgba(0, 0, 0, .2);
}

body{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: var(--bg-color);
    color: var(--text-color);
    overflow: hidden;
}


 .all {
  width: 80%;
  max-width: 65rem;
  height: auto;
  aspect-ratio: 65 / 45;
}



.wapper{
    position: relative;
    width: 100%;
    height: 100%;
    padding: 2rem;
    perspective: 250rem;
    animation: show-animation 2s forwards;
}

@keyframes show-animation{
    0%, 30%{
        opacity: 0;
        transform: rotate(-20deg);
    }
    100%{
        opacity: 1;
        transform: rotate(0deg);
    }
}

.cover{
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: var(--cover-color);
    box-shadow: var(--box-shadow);
    border-top-left-radius: .6rem;
    border-bottom-left-radius: .6rem;
    transform-origin: right;
}

.cover.cover-left{
    z-index: -1;
}

.cover.cover-right{
    z-index: 100;
     transition: transform 1s cubic-bezier(.645, .045, .355, 1);
}

.cover.cover-right.turn{
    transform: rotateY(180deg);
}

.book{
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    perspective: 250rem;
}

.book .book-page{
    position: absolute;
    width: 50%;
    height: 100%;
    background: var(--pages-color);
    box-shadow: 0 0 .6rem rgba(0, 0, 0, .1);
    display: flex;
    padding: 2rem;
}

.book-page.page-left{
    box-shadow: -.6rem .6rem .6rem rgba(0, 0, 0, .1);
}

.btn{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 9.5rem;
    height: 3rem;
    background: var(--main-color);
    border: var(--border);
    border-radius: .3rem;
    font-size: 1rem;
    color: var(--white-color);
    font-weight: 500;
    margin: 0 1rem;
    transition: .5s;
}

.btn:hover{
    background: transparent;
    color: var(--main-color);
}

.btn-box .btn:nth-child(2){
    background: transparent;
    color: var(--main-color);
}

.btn-box .btn:nth-child(2):hover{
    background: var(--main-color);
    color: var(--white-color);
}

.book-page.page-right{
    position: absolute;
    right: 0;
    transform-style: preserve-3d;
    transform-origin: left;
    transition: transform 1s cubic-bezier(.645, .045, .355, 1);
}

.book-page.page-right.turn{
    transform: rotateY(-180deg);
}

.book-page .page-front,
.book-page .page-back{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--pages-color);
    padding: 1.5rem 2rem;
}

.book-page .page-front{
    transform: rotateY(0deg) translateZ(1px);
}

.book-page .page-back{
    transform: rotateY(180deg) translateZ(1px);
}


.number-page{
    position: absolute;
    bottom: 1.2rem;
    left: 50%;
    transform: translateX(-50%);
}

.nextprev-btn{
    position: absolute;
    bottom: .9rem;
    right: 1.5rem;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    font-size: 2rem;
    color: var(--second-text-color);
    justify-content: center;
    align-items: center;
    transition: .5s;
}

.nextprev-btn:hover{
    color: var(--main-color);
}

.nextprev-btn.back{
    left: 1.5rem;
    
}

.nextprev-btn img{
    width: 100%;
}

.firt-img, .last-img{
    width: 48%;
    height: 17rem;
    border-radius: .5rem;
    border: var(--border);
    overflow: hidden;
}

.firt-img:hover, .last-img:hover{
    box-shadow: var(--box-shadow);    
}

.avatar{
    width: 50%;
    border-radius: .5rem;
}

.img{
    width: 100%;
    height: 100%;
    cursor: pointer;
}

.img:hover{
    transform: scale(1.05);
}

.profile-page{
    text-align: center;
}

.profile-page img{
    position: relative;
    top: 5rem;
}

.profile-page h1{
    position: relative;
    top: 30%;
    color: var(--main-color);
    font-family: "Dancing Script", cursive;
    font-weight: 400;
    font-style: 30%;
}

.page-front, .page-back{
    display: flex;
    flex-direction: column;

}

.last-img{
    position: relative;
    left: 50%;
    top: 1.5rem;
}


/* Modal */
    .modal {
      display: none;
      position: fixed;
      z-index: 1000;
      left: 0; top: 0;
      width: 100%; height: 100%;
      background: rgba(0,0,0,0.8);
      text-align: center;
    }

    .modal-content {
      max-width: 90%;
      max-height: 80%;
      margin-top: 5%;
      border-radius: 10px;
      box-shadow: 0 0 20px #000;
    }

    .close {
      position: absolute;
      top: 20px; right: 30px;
      font-size: 40px;
      color: white;
      cursor: pointer;
    }
