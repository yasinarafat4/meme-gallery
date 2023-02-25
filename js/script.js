const loadMeme = () => {
  const URL = "https://meme-api.com/gimme/20";
  fetch(URL)
    .then((res) => res.json())
    .then((data) => showMeme(data.memes));
};
const showMeme = (memes) => {
  //   console.log(memes);
  memes.forEach((meme) => {
    // console.log(meme.url);
    const memeContainer = document.getElementById("section-container");
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card w-96 glass">
    <figure><img class="w-full h-64" src="${meme.url}" alt="car!"/></figure>
    </div>
    `;
    memeContainer.appendChild(div);
  });
};
loadMeme();
