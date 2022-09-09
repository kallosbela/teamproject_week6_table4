alert("This page is a copy of part of mubasic.com. Made for learning purposes.");

function playM() {
  var audio = document.getElementById("m");
  audio.play();
}
function playU() {
  var audio = document.getElementById("u");
  audio.play();
}
function playB() {
  var audio = document.getElementById("b");
  audio.play();
}
function playA() {
  var audio = document.getElementById("a");
  audio.play();
}
function playS() {
  var audio = document.getElementById("s");
  audio.play();
}
function playI() {
  var audio = document.getElementById("i");
  audio.play();
}
function playC() {
  var audio = document.getElementById("c");
  audio.play();
}

var totalBody = document.getElementById("root")


var playLetter = ["M","U","B","A","S"]
var letter = ["M","B","A","I","C"]
var mp3List = ["https://oimachi.cloud/clients/mubasic/m.mp3","https://oimachi.cloud/clients/mubasic/u.mp3","https://oimachi.cloud/clients/mubasic/b.mp3","https://oimachi.cloud/clients/mubasic/a.mp3"]
var idList = ["m","u","b","a","s"]

var keysString =""

for (let index = 0; index < 5; index++) {
   
   keysString += `<div id="key_${index+1}" class="key">
   <div onclick="play${playLetter[index]}()">
   ${letter[index]}
   <audio preload="auto" src="${mp3List[index]}" id="${idList[index]}"></audio>
   </div>
   </div>
   ` 
}

var totalContent = `
<div class="loader">
        <div class = "zerofirst_half">
        </div>
    
        <div class = "zerofirst_half_layer-2">
        </div>
    
        <div class = "zerofirst_half_layer-3">
        </div>
    
        <div class = "zerosecond_half">
            <div class="loading">loading</div>
        </div>
    </div>

    <div class="page1">
        <div class = "first_half">
                <div class="head">
                    <div class="Name">
                        <img src="https://uploads-ssl.webflow.com/62a300b973c161526ec2e4a8/62a9e3cb087cda5420b622eb_LOGOTYPE_BLACK_SVG_X1.svg" loading="lazy" alt="Mubasic" class="top__logo">
                    </div>
                    <div class="logo">
                        <svg width="35" height="36" viewBox="0 0 356 373" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M248 9.53571C248 4.26928 252.269 0 257.536 0H346.464C351.731 0 356 4.26928 356 9.53571V114.464C356 119.731 351.731 124 346.464 124H257.536C252.269 124 248 119.731 248 114.464V9.53571Z" fill="#1B1A19"/>
                            <rect y="139.996" width="108" height="123.964" rx="9.53571" fill="#1B1A19"/>
                            <rect x="124" y="62.1211" width="108" height="309.911" rx="9.53571" fill="#1B1A19"/>
                            <rect x="248" y="139.996" width="108" height="123.964" rx="9.53571" fill="#1B1A19"/>
                        </svg>
                    </div>
                </div>
                <div class="content">
                    <p>
                        The <span class="Number">#1</span><br> source for children<span class="tick">'</span>s music.
                    </p>
                </div>
                <div class="footer">
                    <p>
                        An ever-growing catalogue of high-quality children's music, sourced by talented music creators from all over the world.
                    </p>
                </div>
            </div>

            <div class="second_half">
                <div class="coloured_keys">`+keysString+`
                </div>
                <div class="black_keys">
                    <div id="smaller_key1" class="key">
                        <div onclick="playI()">U
                            <audio preload="auto" src="https://oimachi.cloud/clients/mubasic/i.mp3" id="i"></audio>
                        </div>
                    </div>
                    <div id="smaller_key2" class="key">
                        <div onclick="playC()">S
                            <audio preload="auto" src="https://oimachi.cloud/clients/mubasic/c.mp3" id="c"></audio>
                        </div>
                    </div>
                </div>
            </div>
    </div>


`
totalBody.innerHTML = totalContent

var colorList = ["#91c3ce","#f5e1be","#f37925","#c0a8e6"]

var randomColor1Index = Math.floor(Math.random()*4) // 0,1,2,3

var randomColor2Index = (randomColor1Index+Math.floor(Math.random()*3+1))%4

const boxes2 = Array.from(
    document.getElementsByClassName('zerofirst_half_layer-2')
  );
  
  boxes2.forEach(box => {
    box.style.backgroundColor = colorList[randomColor1Index];
    
  });

const boxes3 = Array.from(
    document.getElementsByClassName('zerofirst_half_layer-3')
  );
  
  boxes3.forEach(box => {
    box.style.backgroundColor = colorList[randomColor2Index];
    
  });


