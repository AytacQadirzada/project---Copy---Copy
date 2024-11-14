let icon1 = document.querySelector(".icon1")
let icon2 = document.querySelector(".icon2")

icon1.addEventListener("mouseover", ()=>{
    icon1.classList.toggle("none")
    icon2.classList.toggle("none")
})

icon1.addEventListener("mouseout", ()=>{
    icon1.classList.toggle("none")
    icon2.classList.toggle("none")
})

let clear = document.querySelector(".clear-icon")
let sort = document.querySelector(".sort-icon")

clear.addEventListener("mouseover", ()=>{
    clear.classList.toggle("none")
    sort.classList.toggle("none")
})

clear.addEventListener("mouseout", ()=>{
    clear.classList.toggle("none")
    sort.classList.toggle("none")
})

let iconX = document.querySelector(".clear-icon")
iconX.addEventListener("click",()=>{
    input.value = ""
} )


let buttonContainer = document.querySelector(".button-container");
        let input = document.querySelector("input");
        // let ol = document.querySelector(".todo-list");
        let ol = document.querySelector("ol");

        buttonContainer.addEventListener("click", () => {
            let inputValue = input.value.trim();
            if (inputValue !== "") {
                ol.style.display = "block";
                let li = document.createElement("li");
                li.textContent = inputValue;

                let xButton = document.createElement("img");
                xButton.src = "./Frame-3.svg";
                xButton.alt = "Clear";
                xButton.classList.add("clear-icon-li");

                xButton.addEventListener("mouseover", () => {
                    xButton.src = "./3.svg"; 
                });
        
                xButton.addEventListener("mouseout", () => {
                    xButton.src = "./Frame-3.svg"; 
                })

                
               
                xButton.addEventListener("click", () => {
                    li.remove();
                    if (ol.children.length === 0) {
                        ol.style.display = "none";
                    }
                });

                li.appendChild(xButton);
                ol.appendChild(li);
                input.value = "";
            }
            
});