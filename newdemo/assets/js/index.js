let copied = null;

function dupicateElements() {
    let tobeDuplicated = document.getElementsByClassName("duplicate");
    let tobeDeleted = [];

    console.log(tobeDuplicated)
    for (let x = 0; x < tobeDuplicated.length; x++) {
        // alert(tobeDuplicated.length); 
        // alert(x)
        let element = tobeDuplicated[x];
        let len = parseInt(element.getAttribute("amount"));
        // console.log(element)

        for (let i = 0; i < len; i++) {
            objectCapture = element.innerHTML;
            allAttributes = element.attributes;


            copyElement = document.createElement(element.tagName);

            for (let attries = 0; attries < allAttributes.length; attries++) {
                const att = allAttributes[attries];

                if (att.name === "class") {
                    let attValue = att.value;
                    attValue = attValue.replace("duplicate ", "");
                    copyElement.setAttribute("class", attValue);
                } else if (att.name === "amount") {
                } else {
                    copyElement.setAttribute(att.name, att.value);
                }

            }
            
            copyElement.innerHTML = objectCapture;
            
            // console.log(copyElement);

            element.parentElement.appendChild(copyElement);

            // copied = {
            //     'count': len,
            //     'content': copyElement,
            //     'parent': element.parentElement
            // };
        }
        tobeDeleted[tobeDeleted.length] = element;
    }

    delIt(tobeDeleted);
    console.log(tobeDeleted);
}

function delIt(elements){
    for (let delID = 0; delID < elements.length; delID++) {
        const element = elements[delID];
        element.remove();
    }
}

function setListeners() {
    let stuffs = document.querySelectorAll(".continue-movie-item");
    // console.log(stuffs);

    stuffs.addEventListerner

    for (const cWatch of stuffs) {
        cWatch.addEventListener("mouseover", () => { hoverIn(cWatch) })
        cWatch.addEventListener("mouseout", () => { hoverOut(cWatch) })
        cWatch.addEventListener("mouseleave", () => { hoverOut(cWatch) })
        // const playElement = cWatch.childNodes[3];

        // const movieNLElement = cWatch.childNodes[5].childNodes[3].childNodes[1].childNodes[1];
        // const movieNameElement = cWatch.childNodes[5].childNodes[3].childNodes[1].childNodes[1].childNodes[1];
        // const movieLocatorElement = cWatch.childNodes[5].childNodes[3].childNodes[1].childNodes[1].childNodes[3];
        // const progressBarElement = cWatch.childNodes[5].childNodes[3].childNodes[1].childNodes[3];
        // const miniDescriptionElement = cWatch.childNodes[5].childNodes[1];

        // addCss(playElement, "hideOpacity");
        // addCss(movieNLElement, "hideOpacity");
        // addCss(miniDescriptionElement, "d-block");
        // console.log(cWatch.childNodes[5].childNodes[3].childNodes[1].childNodes[3]);
    }
}

function hoverIn(element) {
    const playElement = element.childNodes[3];
    const movieNLElement = element.childNodes[5].childNodes[3].childNodes[1].childNodes[1];
    const movieNameElement = element.childNodes[5].childNodes[3].childNodes[1].childNodes[1].childNodes[1];
    const movieLocatorElement = element.childNodes[5].childNodes[3].childNodes[1].childNodes[1].childNodes[3];
    const progressBarElement = element.childNodes[5].childNodes[3].childNodes[1].childNodes[3];
    const miniDescriptionElement = element.childNodes[5].childNodes[1];

    addCss(playElement, "hideOpacity");
    addCss(movieNameElement, "hideOpacity");
    addCss(miniDescriptionElement, "d-block");
    movieLocatorElement.innerHTML = "50M"
}

function hoverOut(element) {
    const playElement = element.childNodes[3];
    const movieNLElement = element.childNodes[5].childNodes[3].childNodes[1].childNodes[1];
    const movieNameElement = element.childNodes[5].childNodes[3].childNodes[1].childNodes[1].childNodes[1];
    const movieLocatorElement = element.childNodes[5].childNodes[3].childNodes[1].childNodes[1].childNodes[3];
    const progressBarElement = element.childNodes[5].childNodes[3].childNodes[1].childNodes[3];
    const miniDescriptionElement = element.childNodes[5].childNodes[1];

    removeCss(playElement, "hideOpacity");
    removeCss(movieNameElement, "hideOpacity");
    removeCss(miniDescriptionElement, "d-block");
    movieLocatorElement.innerHTML = "S1 E1"
    // addCss(miniDescriptionElement, "d-block");
}

function changeWatchListIcon(e) {
    alert;
    e.innerHTML === 'Added' ? e.innerHTML = '<img src="assets/image/plus.svg">' : e.innerHTML = 'Added';

}

function addCss(element, addClass) {
    let newClass = element.getAttribute("class");
    newClass += " " + addClass;
    element.setAttribute("class", newClass);
}

function removeCss(element, removeClass) {
    let newClass = element.getAttribute("class");
    newClass = newClass.replace(removeClass, "");
    element.setAttribute("class", newClass);
}

// function addMore(){
//     for (let l = 0; l < copied.count; l++) {
//         const element = copied.content;
//         copied.parent.appendChild(element);        
//     }
// }

// function getPercent(percent, value){
//     amount = (percent * value) / 100
//     return amount;
// }

function pinToRight() {
    // let items = document.getElementsByClassName('pin-right-inbox');
    // for (const item of items) {
    //     // let parentY = item.parentElement.childNodes[1].offsetHeight;
    //     // let parentX = item.parentElement.childNodes[1].offsetWidth;
    //     let parentY = item.parentElement.offsetHeight;
    //     let parentX = item.parentElement.offsetWidth;
    //     let iY = item.offsetHeight;
    //     let iX = item.offsetWidth;
    //     let middleX = parentX / 2;
    //     let middleY = parentY / 2;
    //     let itemMiddleX = iX / 2;
    //     let itemMiddleY = iY / 2;
    //     let offsetMiddleX = middleX - itemMiddleX;
    //     let offsetMiddleY = middleY - itemMiddleY;

    //     let sin = (parentX - iX);
    //     let sinner = ((document.body.clientWidth - parentX)/2);
    //     sin += sinner/2;
    //     // sin = ((document.body.clientWidth - parentX)/2);

    //     // item.style.top = offsetMiddleY + "px";
    //     item.style.left = sin + "px";
    //     item.style.left = "100%";
    //     console.log(item.style.left);
    //     console.log(sin);
    //     console.log(parentX, parentY, iX, iY);
    //     console.log(((document.body.clientWidth - parentX)/2));
    // }
}

window.onload = function () {
    dupicateElements();
    setListeners();
    // pinToRight();
};

// window.onresize = function () {
//     pinToRight();
// };