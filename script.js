
function cache(e){
  e.preventDefault();
  var el = document.querySelector('#cacheLien');
  var arrow = document.querySelector('.arrow');
  if(el.style.display==='')
  {
    el.style.display='flex';
  }
  if (el.style.display === 'flex')
  {
    el.style.display = 'none';
    arrow.className ='fas fa-angle-double-down arrow';
  }
  else{
    el.style.display = 'flex';
    arrow.className ='fas fa-angle-double-up arrow';
  };
}
function cacheOut(e){
  e.preventDefault();
  var el = document.querySelector('#cacheOut');
  var arrow = document.querySelector('.arrow2');

  if (el.style.display === 'flex')
  {
    el.style.display = 'none';
    arrow.className ='fas fa-angle-double-up arrow2';
  }
  else{
    el.style.display = 'flex';
    arrow.className ='fas fa-angle-double-down arrow2';
  };
}
function cacheIn(e){
  e.preventDefault();
  var el = document.querySelector('#cacheIn');
  var arrow = document.querySelector('.arrow3');

  if (el.style.display === 'flex')
  {
    el.style.display = 'none';
    arrow.className ='fas fa-angle-double-up arrow3';
  }
  else{
    el.style.display = 'flex';
    arrow.className ='fas fa-angle-double-down arrow3';
  };
}


function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
function madate(){

  let date = new Date();
  let minute = addZero(date.getMinutes());
  let hour = addZero(date.getHours());
  let day = date.getDate();
  let month = date.getMonth() + 1;


  let result = [day, month].join("/") + " - " + [hour, minute].join(":");
  return result;

}

function affiche() {
  var myVar = setInterval(affiche, 1000);
  let el = document.querySelectorAll('.result')
  for (var i = 0; i < el.length; i++) {
    el[i].innerHTML= madate();
  }
}

// appels des fonctions :
affiche();

let boutons = document.querySelectorAll(".tocopy");
// on parcourt toutes les classes et on lui asigne un ID
for (var i = 0; i < boutons.length; i++) {
  boutons[i].id=i;
  boutons[i].childNodes[3].className="output "+i;
  boutons[i].addEventListener("click", (e)=>{
    let copyText;
    let range = document.createRange();
    // on va rechercher la classe correspondant au click
    if(e.target.className.startsWith("elem tocopy")){ //si on clique dans la div
      copyText = document.getElementsByClassName("output "+e.target.id);
    }

    if(e.target.className.startsWith("fas")) { // si on clique sur le 1er <P>
      copyText = document.getElementsByClassName(e.target.nextElementSibling.className);
    }

    if(e.target.className.startsWith("output")) { //si on clique sur le <P> avant le span
      copyText = document.getElementsByClassName(e.target.className);
    }
    if(e.target.className.startsWith("result")) { //si on clique sur le <span>
      copyText = document.getElementsByClassName(e.target.parentElement.className);
    }

    range.selectNode(copyText[0]);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    try {
      // Exécution de la commande de copie
      var result = document.execCommand('copy');
    }
    catch(err) {
      // Une erreur est surevnue lors de la tentative de copie
      alert(err);
    }
  });
}
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
modal.style.display = "block";
modalImg.src = this.src;
captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}

document.querySelector("#title").addEventListener("click", cache);
document.querySelector("#title2").addEventListener("click", cacheOut);
document.querySelector("#title3").addEventListener("click", cacheIn);
