const Responses = ["c", "a", "b", "a", "c"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];

const form = document.querySelector("form");
const titleResult = document.querySelector(".results h2");
const markResult = document.querySelector(".mark");
const helpResult = document.querySelector(".help");
const questionBlock = document.querySelectorAll(".question-block");
const inputs = document.querySelectorAll("input[type='radio']");
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const result = [];
  const radioButtons = document.querySelectorAll("input[type='radio']:checked");
  radioButtons.forEach((radioButton, index) => {
    if (radioButton.value === Responses[index]) {
      result.push(true);
    } else {
      result.push(false);
    }
  });

  showResult(result);
  addColors(result);
}

function showResult(result) {
  const errors = result.filter((res) => res === false).length;

  switch (errors) {
    case 0:
      titleResult.textContent =
        "Félicitations ! Tu as eu toutes les bonnes réponses !";
      markResult.style.display = "block";
      markResult.innerHTML = "Score : <span> 5/5 </span>";
      markResult.style.color = "green";
      helpResult.style.display = "block";
      helpResult.textContent = "🎉🎉🎉";
      break;
    case 1:
      titleResult.textContent = "✨ Vous y êtes presque ! ✨";
      markResult.style.display = "block";
      markResult.innerHTML = "Score : <span> 4/5 </span>";
      helpResult.style.display = "block";
      helpResult.textContent =
        "Retentez une autre réponse dans la case rouge, puis re-validez !";
      break;
    case 2:
      titleResult.textContent = "✨ Encore un effort ... 👀";
      markResult.style.display = "block";
      markResult.innerHTML = "Score : <span> 3/5 </span>";
      helpResult.style.display = "block";
      helpResult.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      break;
    case 3:
      titleResult.textContent = "👀 Il reste quelques erreurs. 😭";
      markResult.style.display = "block";
      markResult.innerHTML = "Score : <span> 2/5 </span>";
      helpResult.style.display = "block";
      helpResult.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      break;
    case 4:
      titleResult.textContent = "😭 Peut mieux faire ! 😭";
      markResult.style.display = "block";
      markResult.innerHTML = "Score : <span> 1/5 </span>";
      helpResult.style.display = "block";
      helpResult.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      break;
    case 5:
      titleResult.textContent = "👎 Peut mieux faire ! 👎";
      markResult.style.display = "block";
      markResult.innerHTML = "Score : <span> 0/5 </span>";
      helpResult.style.display = "block";
      helpResult.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      break;

    default:
      titleResult.textContent = "Tu n'as pas répondu à toutes les questions !";
  }
}

function addColors(result) {
  result.forEach((res, index) => {
    if (res === true) {
      questionBlock[index].style.backgroundImage =
        "linear-gradient(to right, #a8ff78, #78ffd6)";
    } else {
      questionBlock[index].style.backgroundImage =
        "linear-gradient(to right, #f5567b, #fd674c)";
    }
  });
}

inputs.forEach((input) => {
  input.addEventListener("input", resetColor);
});

function resetColor(e) {
  const index = e.target.getAttribute("name").slice(1) - 1;
  questionBlock[index].style.backgroundImage = "none";
}
