let selectedMood;
let selectedBodyPart = [];
let entries = JSON.parse(localStorage.getItem("Entries")) || [];
///const svgParts = document.querySelectorAll(".svgPart")

function happybtn(){
  let happy = document.getElementById('Happy');
  happy.classList.add('selected-btn');
  selectedMood = {
    mood: "happy",
    color: "#ffc7f1",
    emoji:"😊"
  };
  document.getElementById("Calm").classList.remove("selected-btn");
  document.getElementById("Anxious").classList.remove("selected-btn");
  document.getElementById("Angry").classList.remove("selected-btn");
  document.getElementById("Sad").classList.remove("selected-btn");
  document.getElementById("Excited").classList.remove("selected-btn");
  updataColor(selectedMood.color);
}

function calmbtn(){
  let calm = document.getElementById('Calm');
  calm.classList.add('selected-btn');
  selectedMood = {
    mood: "calm",
    color: "#ffe3c7",
    emoji:"😌"
  };
  document.getElementById("Happy").classList.remove("selected-btn");
  document.getElementById("Anxious").classList.remove("selected-btn");
  document.getElementById("Angry").classList.remove("selected-btn");
  document.getElementById("Sad").classList.remove("selected-btn");
  document.getElementById("Excited").classList.remove("selected-btn");
  updataColor(selectedMood.color);
}
function anxiousbtn(){
  let anxious = document.getElementById('Anxious');
  Anxious.classList.add('selected-btn');
  selectedMood = {
    mood: "anxtious",
    color: "#e3ffc7",
    emoji:"😰"
  };
  document.getElementById("Happy").classList.remove("selected-btn");
  document.getElementById("Calm").classList.remove("selected-btn");
  document.getElementById("Angry").classList.remove("selected-btn");
  document.getElementById("Sad").classList.remove("selected-btn");
  document.getElementById("Excited").classList.remove("selected-btn");
  updataColor(selectedMood.color);
}
function excitedbtn(){
  let excited = document.getElementById('Excited');
  excited.classList.add('selected-btn');
  selectedMood = {
    mood: "excited",
    color: "#c7c7ff",
    emoji:"🤩"
  };
  document.getElementById("Happy").classList.remove("selected-btn");
  document.getElementById("Calm").classList.remove("selected-btn");
  document.getElementById("Anxious").classList.remove("selected-btn");
  document.getElementById("Angry").classList.remove("selected-btn");
  document.getElementById("Sad").classList.remove("selected-btn");
  updataColor(selectedMood.color);
}
function angrybtn(){
  let angry = document.getElementById('Angry');
  angry.classList.add('selected-btn');
  selectedMood = {
    mood: "angry",
    color: "#ffc7c7",
    emoji:"😡"
  };
  document.getElementById("Happy").classList.remove("selected-btn");
  document.getElementById("Calm").classList.remove("selected-btn");
  document.getElementById("Anxious").classList.remove("selected-btn");
  document.getElementById("Sad").classList.remove("selected-btn");
  document.getElementById("Excited").classList.remove("selected-btn");
  updataColor(selectedMood.color);
}
function sadbtn(){
  let sad = document.getElementById('Sad');
  sad.classList.add('selected-btn');
  selectedMood = {
    mood: "sad",
    color: "#c7e3ff",
    emoji:"😢"
  };
  document.getElementById("Happy").classList.remove("selected-btn");
  document.getElementById("Calm").classList.remove("selected-btn");
  document.getElementById("Anxious").classList.remove("selected-btn");
  document.getElementById("Angry").classList.remove("selected-btn");
  document.getElementById("Excited").classList.remove("selected-btn");
  updataColor(selectedMood.color);
}
function selectedPart(partID){
  if(!selectedMood){
    alert("please select a mood first!");
    return;
  };
  if(selectedBodyPart.includes(partID)){
    selectedBodyPart = selectedBodyPart.filter(id => id ==! partID);
    document.getElementById(partID).style.fill = "#eec8ff";
    document.getElementById(partID).classList.remove("selected-svg");
  }
  else{
  document.getElementById(partID).style.fill = selectedMood.color;
  document.getElementById(partID).classList.add("selected-svg");
  selectedBodyPart.push(partID);}
}
function savebtn(){
  const note = document.getElementById("notes").value;
  const intensity = document.getElementById("moodrange").value;
  const entry = {
    mood: selectedMood,
    bodypart: selectedBodyPart,
    note: note,
    intensity: intensity
  };
  entries.push(entry);
  window.localStorage.setItem("Entries", JSON.stringify(entries));
  clear();
}
function updataColor(color){
 selectedBodyPart.forEach((partID)=> {
   const selectedId = document.getElementById(partID);
    if(selectedId){
      selectedId.style.fill = color;}
 }); 
 }
 function unSeletBodyPart(){
  selectedBodyPart.forEach((partID)=> {
    const selectedId = document.getElementById(partID);
    if (selectedId) {
      selectedId.style.fill = "";
      selectedId.classList.remove("selected-svg");
    }
  });
  selectedBodyPart = [];
 }
 unSeletBodyPart()
 function clear(){
  const angry = document.getElementById('Angry');
  const happy = document.getElementById('Happy');
  const sad = document.getElementById('Sad');
  const calm = document.getElementById('Calm');
  const anxious = document.getElementById('Anxious');
  const excited = document.getElementById('Excited');
  const bodySvg = document.querySelectorAll('.svgPart')
  const noteText = document.getElementById('notes');
  angry.classList.remove('selected-btn');
  happy.classList.remove('selected-btn');
  calm.classList.remove('selected-btn');
  anxious.classList.remove('selected-btn');
  sad.classList.remove('selected-btn');
  excited.classList.remove('selected-btn');
  bodySvg.forEach(part =>{
    part.style.fill = "#eec8ff";
  });
  noteText.value = "";
}
function linkbtn(pagelink){
window.location.href= pagelink;
}