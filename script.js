// let isHeartFilled = false;

// function toggleHeart() {
//   const heart = document.querySelector('.heart');
//   isHeartFilled = !isHeartFilled;

//   if (isHeartFilled) {
//     heart.style.backgroundColor = 'red';
//   } else {
//     heart.style.backgroundColor = 'transparent';
//   }
// }



let isHeartFilled = false;

function toggleHeart() {
  const heart = document.querySelector('.heart');
  isHeartFilled = !isHeartFilled;

  if (isHeartFilled) {
    heart.style.backgroundColor = '#d9534f';
  } else {
    heart.style.backgroundColor = 'red';
  }
}
