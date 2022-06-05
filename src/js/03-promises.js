import Notiflix from "notiflix";

const form = document.querySelector(".form");
const submitBtn = document.querySelector("button");
const delay = document.querySelector(".delay");
const amount = document.querySelector(".amount");
const step = document.querySelector(".step");
submitBtn.addEventListener("click", promisesHandler);
  
function promisesHandler(e) {
  e.preventDefault();
  let resultDelay = Number(delay.value);
  for (let i = 1; i <= amount.value; i += 1) {
      createPromise(i, resultDelay);
      resultDelay += Number(step.value);
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  setTimeout(() => {
    if (shouldResolve) {
    // Fulfill    
      Promise.resolve(`Fulfilled promise ${position} in ${delay}ms`).then((value) => Notiflix.Notify.success(value));  
  } else {
    // Reject
      Promise.reject(`Rejected promise ${position} in ${delay}ms`).catch((error) => Notiflix.Notify.failure(error));
  }
  }, delay)
  
}


// Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`)
// Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`)