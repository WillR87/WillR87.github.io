const epicMix = [
  "Baba O’ Riley – The Who",
  "Smoke On The Water – Deep Purple",
  "Comfortably Numb – Pink Floyd",
  "Purple Haze – Jimi Hendrix",
  "Bohemian Rhapsody – Queen",
  "Another Brick On The Wall Pt. 2 – Pink Floyd",
  "Rock You Like A Hurricane – Scorpions",
  "You Shook Me All Night – AC/DC",
  "Sweet Child O’ Mine – Guns N’ Roses",
  "Immigrant Song – Led Zeppelin",
  "Under Pressure – Queen & David Bowie",
  "Hotel California – Eagles",
];

const mixList = document.querySelector(".mix");
const button = document.querySelector(".show-list");
const total = document.querySelector(".total");
document.getElementById("topHead").style.color = 'orange'

button.addEventListener("click", function () {
  mixInfo(epicMix);
  mixList.classList.remove("hide");
  button.classList.add("hide");
});

total.innerText = `${epicMix.length} of the greatest classic rock hits!`;

const mixInfo = function (mix) {
  mix.forEach(function (song, index) {
    let li = document.createElement("li");
    li.classList.add("song");
    li.innerHTML = `<span class="song-number">#${index + 1}</span> ${song}`;
    mixList.append(li);
  });
};
