let bigArr = [
  {
    img:"media/img/img-yuksalish.jpg",
    id:1
  },

  {
    img:"media/img/img-kirgiz.jpg",
    id:2
  },

  {
    img:"media/img/img-masjid.jpg",
    id:3
  },

  {
    img:"media/img/img-america.jpg",
    id:4
  },

  {
    img:"media/img/img-mfaktor.jpg",
    id:5
  },

  {
    img:"media/img/img-book.jpg",
    id:6
  },

  {
    img:"media/img/img-blogger.jpg",
    id:7
  },

  {
    img:"media/img/img-human.jpg",
    id:8
  },

  {
    img:"media/img/img-spikers.jpg",
    id:9
  }

]
let elContentList = document.querySelector('.content__list');
let elImgModal = document.querySelector('.img-modals');
let elImgs = document.querySelector('.img-modal__img');
let elImgModalClose = document.querySelector('.img-modal__close');
for(let i of bigArr) {
    let contentItem = document.createElement('li');
    let contentDiv = document.createElement('div');
    let contentLink = document.createElement('a');
    let contentImg = document.createElement('img');
    contentItem.className = "content__item";
    contentDiv.className = "content__inner";
    contentLink.className = "content__link";
    contentLink.href = "#";
    contentImg.className = "content__img";
    contentImg.src = i.img;
    contentLink.appendChild(contentImg)
    contentDiv.appendChild(contentLink);
    contentItem.appendChild(contentDiv);
    elContentList.appendChild(contentItem);
    contentItem.addEventListener("click", (event) => {
     elImgModal.classList.add('img-active');
     elImgs.src = event.target.src;
    });
    elImgModalClose.addEventListener("click", (e) => {
      elImgModal.classList.remove('img-active');
    })
}
