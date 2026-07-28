// Wait until the webpage has completely loaded
document.addEventListener("DOMContentLoaded", function () {

    console.log("Welcome Dishu ❤️");

    // Hero Button
    const button = document.getElementById("openHeart");

    button.addEventListener("click", function () {
        document.getElementById("story").scrollIntoView({
            behavior: "smooth"
        });
    });

    // Loader
    setTimeout(function () {
        document.getElementById("loader").style.opacity = "0";

        setTimeout(function () {
            document.getElementById("loader").style.display = "none";
        }, 1000);

    }, 2000);


    /* ===========================
       GALLERY LIGHTBOX
    =========================== */

    const photos = document.querySelectorAll(".photo-card img");

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-image");
    const closeBtn = document.getElementById("close-lightbox");

    photos.forEach(function(photo){

        photo.addEventListener("click", function(){

            lightbox.style.display = "flex";

            lightboxImg.src = photo.src;

        });

    });

    closeBtn.addEventListener("click", function(){

        lightbox.style.display = "none";

    });

    lightbox.addEventListener("click", function(e){

        if(e.target === lightbox){

            lightbox.style.display = "none";

        }

    });

    /* =====================
LOVE LETTER
===================== */

const openLetter = document.getElementById("openLetter");
const letterPaper = document.getElementById("letterPaper");

    if(openLetter){

    openLetter.addEventListener("click",function(){

        letterPaper.style.display="block";

        letterPaper.style.display="block";

        setTimeout(function(){

            letterPaper.style.opacity="1";
            letterPaper.style.transform="translateY(0)";

            },100);

        letterPaper.scrollIntoView({

            behavior:"smooth"

        });

        openLetter.style.display="none";

            });

        }   



    
    /* ==========================
   50 REASONS
========================== */

document.querySelectorAll(".reason-card").forEach(function(card){

    card.addEventListener("click",function(){

        const reason = card.dataset.reason;

        document.querySelectorAll(".reason-card").forEach(function(card){

    card.addEventListener("click", function(){

        const reason = card.getAttribute("data-reason");

        card.innerHTML = "<div style='font-size:18px; line-height:1.7;'>❤️<br><br>" + reason + "</div>";

    });

});

    });

        });




    /* ==========================
   VIDEO SECTION
========================== */

const playVideoBtn = document.getElementById("playVideoBtn");
const videoWrapper = document.getElementById("videoWrapper");
const birthdayVideo = document.getElementById("birthdayVideo");

if(playVideoBtn){

    playVideoBtn.addEventListener("click", function(){

        videoWrapper.style.display = "block";

        playVideoBtn.style.display = "none";

        birthdayVideo.play();

        videoWrapper.scrollIntoView({

            behavior:"smooth"

        });

    });

    }


    /* ==========================
   MEMORY JAR
========================== */

const memories = [

"❤️ The day we first met.",

"☕ Every coffee tasted better with you.",

"😂 The time we laughed so much that our stomachs hurt.",

"🏡 House Party – where we got to know each other better.",

"✈️ The excitement before Thailand.",

"🎂 You made my birthday unforgettable.",

"🌳 Everyday moments in Orris became my favorite routine.",

"🐅 Our Sariska trip will always be special.",

"🛕 Ujjain gave me peace because I was with you.",

"❤️ Every hug from you feels like home."

];

const memoryButton = document.getElementById("memoryButton");
const memoryCard = document.getElementById("memoryCard");

if(memoryButton){

  let lastMemory = -1;

memoryButton.addEventListener("click", function(){

    let random;

    do {
        random = Math.floor(Math.random() * memories.length);
    } while(random === lastMemory);

    lastMemory = random;

    memoryCard.style.opacity = "0";

    setTimeout(function(){

        memoryCard.innerHTML = memories[random];

        memoryCard.style.opacity = "1";

    }, 200);

});

}


/* ==========================
   GRAND FINALE
========================== */

const finalButton = document.getElementById("finalButton");
const finalMessage = document.getElementById("finalMessage");

if(finalButton){

    finalButton.addEventListener("click", function(){

        finalButton.style.display="none";

        finalMessage.style.display="block";

        finalMessage.scrollIntoView({

            behavior:"smooth"

        });

    });

}

const restart = document.getElementById("restartJourney");

if(restart){

restart.addEventListener("click",function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}




});
// Floating Hearts

function createHeart(){

const heart=document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(15+Math.random()*20)+"px";

heart.style.animationDuration=(6+Math.random()*4)+"s";

document.getElementById("hearts-container").appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

}

setInterval(createHeart,500);


