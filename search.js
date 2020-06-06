const boxes=document.querySelectorAll('.portfolio-item-wrapper')//store all initial elements of class portfolio-item-wrapper
const searchBar = document.getElementById('searchBar'); //search bar element

searchBar.addEventListener('keyup',(e)=>{
    //searches the input and displays relevant boxes

    //remove all boxes currently on screen
    const currentBoxes=document.querySelectorAll('.portfolio-item-wrapper');
    currentBoxes.forEach(box1 => {
        identity=box1.id;
        removeElement(identity); //removes element from code
    });
    //store search input
    const searchString = e.target.value.toLowerCase();

    //if a box contains the input, display it on screen
    boxes.forEach(box => {
        if(box.childNodes[3].childNodes[3].firstChild.data.toLowerCase().includes(searchString)){
            identity=box.id;
            link=box.href;
            html=box.innerHTML;
            addElement("parent",'a',link,identity,html); //add element to code if it matches search query
        }
    });
})

function addElement(parentId, elementTag, link,elementId, html) {
    // Adds an element to the document
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('href',link);
    newElement.setAttribute('id', elementId);
    newElement.setAttribute('target',"_blank");
    newElement.setAttribute('class',"portfolio-item-wrapper");
    newElement.innerHTML = html;
    p.appendChild(newElement);
}

function removeElement(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}
//to display all content if search bar is cleared:
/*searchBar.addEventListener('keyup',(e)=>{
  if (e.keyCode==8 || e.keyCode==46){
    const searchString = e.target.value.toLowerCase();
    if(searchString=== ""){
      reBox=document.querySelectorAll('.portfolio-item-wrapper')
      reBox.forEach(box1 => {
        un=box1.id;
        removeElement(un);
      });
      boxes.forEach(box1 => {
        identity=box1.id;
        link=box1.href;
        html=box1.innerHTML;
        addElement("parent",'a',link,identity,html);
      });
    }
  }
})*/
