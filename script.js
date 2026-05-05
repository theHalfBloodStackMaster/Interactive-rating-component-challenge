
let selectedRating = null;

const ratingButton = document.querySelectorAll(".rating_button");

const submitButton = document.querySelector(".submit_button");

const ratingCard = document.querySelector('#rating-card');

const thankYouCard = document.querySelector('#thank-you-card');

const finalRating = document.querySelector('.selected-rating');

ratingButton.forEach((rating) => {
  
  rating.addEventListener('click', () => {
    console.log(rating.textContent ,"rating is selected");
    selectedRating = rating.textContent;

    ratingButton.forEach((notSelected) => {
      notSelected.classList.remove('selected');
    });

    rating.classList.add('selected');
    console.log(selectedRating);

    if(selectedRating !== null){
      submitButton.disabled = false;
    }

  });

});

submitButton.addEventListener('click', () => {

  ratingCard.hidden = true;
  thankYouCard.hidden = false;

  finalRating.textContent = `You selected ${selectedRating} out of 5`
  
});