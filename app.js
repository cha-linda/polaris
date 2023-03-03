window.addEventListener("DOMContentLoaded", () => {

        if (window.screen.width <= 991) {
            console.log('start');
            let modal = document.getElementById('modal');
            let main = document.getElementById('container');

                modal.style.display = "block";
                main.style.display = "none";
            
        }

    /* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */
    /* |||                                                                                                  ||| */
    /* |||   NAVIGATION BY TABS SYSTEM - DESKTOP                                                            ||| */
    /* |||                                                                                                  ||| */
    /* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */

    //// Select all ".tabs" and all ".content" divs.
    let tabs = document.querySelectorAll(".tabs");
    let content = document.querySelectorAll(".content");
    //// Iterate in tabs Nodelist + add event listener on each tab.
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener("click", function () {
            // Delete ".forground-tab" class from the active tab to set it on the one clicked.
            let currentTab = document.querySelector(".foreground-tab");
            currentTab.classList.remove("foreground-tab");
            this.className += (" foreground-tab");
            //// Get the value of "data-tab" from clicked tab.
            let tabID = this.getAttribute('data-tab');
            // console.log(tabID);
            //// Create an array and iterate in with .map to get id of element with ".content" class.
            Array.from(content).map(element => {
                let result = element.getAttribute('data-content');
                // console.log(element.classList);
                // console.log(result);
                //// Compare id with each tab id, if ===, run the ".foreground-content" change.
                if (result === tabID) {
                    let currentContent = document.querySelector(".foreground-content");
                    currentContent.classList.remove("foreground-content");
                    element.classList.add("foreground-content");
                }
            });
        });
    }
    for (var i = 0; i < tabs.length; i++) {
        content[i].addEventListener("click", function () {
            let currentContent = document.querySelector(".foreground-content");
            currentContent.classList.remove("foreground-content");
            this.className += (" foreground-content");
            let contentID = this.getAttribute('data-content');
            Array.from(tabs).map(element => {
                let result = element.getAttribute('data-tab');
                if (result === contentID) {
                    let currentTab = document.querySelector(".foreground-tab");
                    currentTab.classList.remove("foreground-tab");
                    element.classList.add("foreground-tab");
                }
            });
        });
    }

    /* Collapse Team Tab */

    let btns = document.getElementsByClassName("collapse-btn");
    var el;
    console.log(btns);
    for (el = 0; el < btns.length; el++) {
        btns[el].addEventListener("click", function () {
            let content = this.nextElementSibling;
            let target = this.querySelector("#collapse-target");
            console.log(target);
            if (target.textContent === '+') {
                target.textContent = "-";
            } else {
                target.textContent = '+';
            }

            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }

});










