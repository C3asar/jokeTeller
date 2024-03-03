const gategory = document.getElementById('category');
const btn = document.getElementById('btn');
const jokeContainer = document.querySelector('.joke');


async function joke() {
    const response = await fetch(`https://v2.jokeapi.dev/joke/${category.value}?type=single`);
    const result = await response.json();
    jokeContainer.hidden = false;
    jokeContainer.textContent = result.joke;
    const utterance = new SpeechSynthesisUtterance(result.joke);
    speechSynthesis.speak(utterance)
}


btn.addEventListener('click', joke);
