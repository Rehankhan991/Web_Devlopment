
const myjoke = () => {
  fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single")
    .then((response) => response.json())
    .then((value) => {
      console.log(value.joke)
      document.getElementById("joke").innerHTML = `${value.joke}`;
      // add the content-fade class

    })
}
myjoke();

