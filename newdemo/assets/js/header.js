// selecting dom elements
const otherList = document.querySelector('.other-lists');
const genreDropdown = document.querySelector('.genre-dropdown');


// adding event listener to each element for the Genre
otherList.addEventListener('mouseover', displayContents);
genreDropdown.addEventListener('mouseout', hideContents);



// fires off when the mouse enters the father LI
function displayContents(e){
  e.preventDefault();
  
  genreDropdown.style.display = 'block';
}

// fires off when the mouse leaves the UL inside the LI
function hideContents(e){
  e.preventDefault();

  genreDropdown.style.display = 'none';
}



// SEARCH MODAL SECTION STRTS HERE
const searchIcon = document.querySelector('.search-icon');
const searchModal = document.getElementById('search-modal');
const backButton = document.querySelector('.search-modal-top1');

searchIcon.addEventListener('click', displaySearchModal);
backButton.addEventListener('click', hideSearchModal);

function displaySearchModal(e){
  e.preventDefault();

  searchModal.style.display = 'block';
}

function hideSearchModal(e){
  e.preventDefault();

  searchModal.style.display = 'none';
}

// SEARCH MODAL SECTION ENDS HERE



// NOTIFICATION AREA STARTS HERE

const notificationBell = document.querySelector('.notification-bell');
const notificationClose = document.querySelector('.notification-close');
const notificationModal = document.querySelector('.notification-controller');

notificationBell.addEventListener('click', openNotification);
notificationClose.addEventListener('click', closeNotification);

function openNotification(e){
  e.preventDefault();

  notificationModal.style.display = 'block';
}

function closeNotification(e){
  e.preventDefault();

  notificationModal.style.display = 'none';
}


// NOTIFICATION AREA ENDS HERE






//MENU MODAL STARTS HERE 

const menuCloseBtn = document.querySelector('.menu-close');
const menuModal = document.querySelector('.menu-modal');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const settingBtn = document.querySelector('.my-item2');
const hamburgerModal = document.querySelector('.hamburger-modal');
const theXButton = document.querySelector('.the-x');

menuCloseBtn.addEventListener('click', closeMenuModal);
hamburgerIcon.addEventListener('click', openMenuModal);
settingBtn.addEventListener('click', openSettings);
theXButton.addEventListener('click', closeHamburgerModal);

function openMenuModal(e){
  e.preventDefault();

  menuModal.style.display = 'block';
}

function closeMenuModal(e){
  e.preventDefault();

  menuModal.style.display = 'none';
}

function openSettings(e){
  hamburgerModal.style.display = 'block';
  menuModal.style.display = 'none';
}

function closeHamburgerModal(e){
  e.preventDefault()

  hamburgerModal.style.display = 'none';
}


//MENU MODAL STARTS HERE 


// USER PROFILE MODAL STARTS HERE

const profileIcon = document.querySelector('.profile-icon');
const profileCloseBtn = document.querySelector('.profile-close-btn');
const profileModal = document.querySelector('.user-profile-modal');
const changeProfileBtn = document.querySelector('.change-profile');
const displayProfileModal = document.querySelector('.change-profile-modal');



profileIcon.addEventListener('click', openProfile);
profileCloseBtn.addEventListener('click', closeProfile);
changeProfileBtn.addEventListener('click', displayChngProfile);


function displayChngProfile(e){
  e.preventDefault();

  displayProfileModal.style.display = 'block';
}


function openProfile(e){
  e.preventDefault();

  profileModal.style.display = 'block';
}

function closeProfile(e){
  e.preventDefault();

  profileModal.style.display = 'none';
}


// USER PROFILE MODAL ENDS HERE 


// CHANGE PROFILE MODAL STARTS HERE


// DOM Elements

const changeProfileBackBtn = document.querySelector('.change-profile-back');
const deleteAllModal = document.querySelector('.change-profile-delete');
const deleteProfileDiv = document.querySelector('.delete-profile');
const deleteBtnModal = document.querySelectorAll('#display-all-db');
const changeProfileDel = document.querySelector('.change-profile-x');
const profileGoBack = document.querySelector('.change-profile-back');
const deleteAllBtn = document.querySelector('#deleteAllBtn');
const deleteConfrimModal = document.querySelector('.delete-confirmtation-modal');
const confirmCloseBtn = document.querySelector('.confirm-close-btn');

// DOM Elements


// Event listeners


changeProfileBackBtn.addEventListener('click', goBackToProfile);
deleteProfileDiv.addEventListener('click', toggleDeleteScreen);
changeProfileDel.addEventListener('click', closeDelAllModal);
deleteAllBtn.addEventListener('click', confrimDel);
confirmCloseBtn.addEventListener('click', closeConfirmmodal);

// Event listeners

// if confirm === no
let yesDel = document.querySelector('.noDel').addEventListener('click', function(e){
  e.preventDefault();

  deleteConfrimModal.style.display = 'none';
});

// if confirm === yes
let noDel = document.querySelector('.yesDel').addEventListener('click', function(e){
  e.preventDefault();

  let deleteAllUse = document.querySelectorAll('.deleteAllUse');

  [].forEach.call(deleteAllUse, function(deleteAll){
    let returned = [];
    returned.push(deleteAll);
    returned.remove()
  });

  // cpAvatarEmpt = [];

  // cpAvatar.map(function(result){
  //   console.log(result);
  // })
  
});


function closeConfirmmodal(e){
  e.preventDefault();

  deleteConfrimModal.style.display = 'none';
}

function confrimDel(e){
  e.preventDefault();

  deleteConfrimModal.style.display = 'block';
}

// Go back function
function goBackToProfile(e){
  e.preventDefault();

  profileModal.style.display = 'block';
  displayProfileModal.style.display = 'none';
}


// function for looping through list of del
function loopThroughDelBlock(){
  [].forEach.call(deleteBtnModal, function(delModal){
    delModal.style.display = 'block';
  });
}

function loopThroughDelNone(){
  [].forEach.call(deleteBtnModal, function(delModal){
    delModal.style.display = 'none';
  });
}
// function for looping through list of del

// function for close del modal
function closeDelAllModal(e){
  e.preventDefault();

  deleteAllModal.style.display = 'none';
  loopThroughDelNone();
  const delAndEdit = document.querySelectorAll('#delete-and-edit');

  [].forEach.call(delAndEdit, function(delEd){
    delEd.style.display = 'block';
  });
}
// function for close del modal



// function to toggle del screen
function toggleDeleteScreen(e){
  e.preventDefault();

  deleteAllModal.style.display = 'block';
  loopThroughDelBlock()

  const delAndEdit = document.querySelectorAll('#delete-and-edit');

  [].forEach.call(delAndEdit, function(delEd){
    delEd.style.display = 'none';
  });
}
// function to toggle del screen


// CHANGE PROFILE MODAL STARTS HERE