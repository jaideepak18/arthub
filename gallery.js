const pics = [
    {src:"images/starry-night.jpg", cap:"Painting 1"},
    {src:"images/image3.jpg", cap:"Painting 2"},
    {src:"images/kansas.jpg", cap:"Painting 3"}
];

let i = 0;

const img = document.getElementById("painting");
const cap = document.getElementById("caption");
const next = document.getElementById("nextBtn");
const prev = document.getElementById("prevBtn");

function showPic(){
    img.src = pics[i].src;
    cap.textContent = pics[i].cap;

    // hide prev at first pic
    prev.style.display = (i === 0) ? "none" : "inline-block";

    // hide next at last pic
    next.style.display = (i === pics.length-1) ? "none" : "inline-block";
}

next.onclick = () => {
    if(i < pics.length-1){
        i++;
        showPic();
    }
};

prev.onclick = () => {
    if(i > 0){
        i--;
        showPic();
    }
};

showPic();
