const heart = document.getElementById("heart");
const btnHeart = document.querySelector(".btn-heart");

const heartColorChange = () => {
  console.log("!");
  if ((heart.style.background = white)) {
    alert("클릭1");
    return (heart.style.background = red);
  } else {
    alert("클릭2");
    return (heart.style.background = grey);
  }
};

btnHeart.addEventListener("click", heartColorChange);
