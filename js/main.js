let elHeader = document.querySelector('.insta-header');
let elBtnOne = document.querySelector('.btn-one');
let elBtnTwo = document.querySelector('.btn-two');
let elBtnThree = document.querySelector('.btn-three');
let elDown = document.querySelector('.down');
let elUp = document.querySelector('.up');
let elBtnPersonal = document.querySelector('.personal__down-btn');
let elUserModal = document.querySelector('.user-modal');
let elPersonalBtnUser = document.querySelector('.personal__user-btn');
let elCloseUserModal = document.querySelector('.user-modal__link-close');
let elDoodModal = document.querySelector('.dood');
let elPersonalDoodBtn = document.querySelector('.personal__dood');
let elDoodModalClose = document.querySelector('.dood__link-close');
let elContentListTwo = document.querySelector('.content__list-two');
let elContentListThree = document.querySelector('.content__list-three');
// variabls
// functions 
elBtnPersonal.addEventListener("click" ,(e) => {
  elUp.classList.toggle('found-active');
  elDown.classList.toggle('found-noactive');
});
elPersonalBtnUser.addEventListener("click", (e) => {
  elUserModal.classList.add('modal-active');
  // elHeader.classList.add('backgr');
});
elCloseUserModal.addEventListener("click", (e) => {
  elUserModal.classList.remove('modal-active');
  // elHeader.classList.remove('backgr');
});
elPersonalDoodBtn.addEventListener("click", (e) => {
  elDoodModal.classList.add('dood-active');
});
elDoodModalClose.addEventListener("click", (e) => {
  elDoodModal.classList.remove('dood-active');
})
elBtnOne.addEventListener("click", (e) => {
  elBtnOne.classList.add('active');
  e.target.parentElement.classList.add('active-top');
  elBtnTwo.classList.remove('active');
  elBtnThree.classList.remove('active');
  elBtnTwo.parentElement.classList.remove('active-top');
  elBtnThree.parentElement.classList.remove('active-top');
});

elBtnTwo.addEventListener("click", (e) => {
  elBtnTwo.classList.add('active');
  e.target.parentElement.classList.add('active-top');
  elBtnOne.classList.remove('active');
  elBtnThree.classList.remove('active');
  elBtnOne.parentElement.classList.remove('active-top');
  elBtnThree.parentElement.classList.remove('active-top');
  for(let j of bigArr) {
    if(j.id % 2 == 0) {
      elContentList.style.display = "none";
      elContentListThree.style.display = "none"
      let contentItem = document.createElement('li');
      let contentDiv = document.createElement('div');
      let contentLink = document.createElement('a');
      let contentImg = document.createElement('img');
      contentItem.className = "content__item";
      contentDiv.className = "content__inner";
      contentLink.className = "content__link";
      contentLink.href = "#";
      contentImg.className = "content__img";
      contentImg.src = j.img;
      contentLink.appendChild(contentImg)
      contentDiv.appendChild(contentLink);
      contentItem.appendChild(contentDiv);
      elContentListTwo.appendChild(contentItem);
    }
    else {
      console.log();
    }
  }
});
elBtnThree.addEventListener("click", (e) => {
  elBtnThree.classList.add('active');
  e.target.parentElement.classList.add('active-top');
  elBtnOne.classList.remove('active');
  elBtnTwo.classList.remove('active');
  elBtnOne.parentElement.classList.remove('active-top');
  elBtnTwo.parentElement.classList.remove('active-top');
  for(let k of bigArr) {
    if(k.id % 2 == 1) {
      elContentList.style.display = "none";
      elContentListTwo.style.display = "none";
      let contentItem = document.createElement('li');
      let contentDiv = document.createElement('div');
      let contentLink = document.createElement('a');
      let contentImg = document.createElement('img');
      contentItem.className = "content__item";
      contentDiv.className = "content__inner";
      contentLink.className = "content__link";
      contentLink.href = "#";
      contentImg.className = "content__img";
      contentImg.src = k.img;
      contentLink.appendChild(contentImg)
      contentDiv.appendChild(contentLink);
      contentItem.appendChild(contentDiv);
      elContentListThree.appendChild(contentItem);
    }
  }
})
// function