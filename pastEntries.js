
let stored = JSON.parse(window.localStorage.getItem("Entries")) || [];
stored.forEach(element => {

  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div")
  const h = document.createElement("h1");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const hh = document.createElement("h4");
  div1.classList.add("pastEnteryStyle");
  h.textContent = element.mood.mood;
  p1.textContent = element.note;
  hh.textContent = element.bodypart.join(",");
  p2.textContent = element.intensity; 
  div2.textContent = element.mood.emoji; 
  div2.classList.add("emojiDiv")
  div3.classList.add("pastEntry1")
  div3.appendChild(hh);
  div3.appendChild(h);
  div3.appendChild(p1);
  div3.appendChild(p2);
  div1.style.backgroundColor = element.mood.color;
  div1.appendChild(div2);
  div1.appendChild(div3);
  document.getElementById("entriesData").appendChild(div1);
});
if (stored.length === 0) {
  const div1 = document.createElement("div");
  const hh = document.createElement("p");
  hh.textContent = "ur data is empty";
  hh.style.fontSize = "1.5rem"
  div1.appendChild(hh);
  document.getElementById("entriesData").appendChild(div1);
}
function linkbtn(pagelink){
window.location.href= pagelink;
}