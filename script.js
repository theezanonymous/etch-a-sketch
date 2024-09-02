const container = document.querySelector("#container");
fill(16);
const button = document.querySelector("#setDimensions");
button.addEventListener("click", ()=> {
    const x = prompt("Enter new width and height dimensions.");
    fill(x);
})

function fill(dims){
    dims = Math.min(dims, 100);
    removeAllChildNodes(container)
    for(let i = 0; i < dims; i++){
            const temp = document.createElement("div");
            temp.id = "gridRow";
            for(let j = 0; j < dims; j++){
                const temp2 = document.createElement("div");
                temp2.id = "gridBox";
                temp2.addEventListener("mouseover",()=>{
                    temp2.style.backgroundColor = "red";
                })
                temp.appendChild(temp2);
            }
            container.appendChild(temp);
        }
    }
function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
 }