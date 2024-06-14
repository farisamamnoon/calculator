const result = document.getElementById("result");
const nums = document.querySelectorAll(".num");
const compute = document.getElementById("compute");
const clear = document.getElementById("clear");
const back = document.getElementById("back");

clear.addEventListener("click", () => {
  result.textContent = "0";
});
back.addEventListener("click", () => {
  if (result.textContent.length == 1) {
    result.textContent = 0;
    return;
  }
  result.textContent = result.textContent.slice(0, -1);
});

nums.forEach((num) => {
  num.addEventListener("click", () => {
    if (result.textContent === "0") {
      result.textContent = num.textContent;
      return;
    }
    result.textContent += num.textContent;
  });
});

compute.addEventListener("click", () => {
  try {
    result.textContent = eval(result.textContent);
  } catch (error) {
    console.log(error);
    result.textContent = error.message;
  }
});

// AC.addEventListener("click", () => {
// //   document.getElementById("result").innerHTML = AC.textContent;
// console.log(object);
// });
