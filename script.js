function addWEField()
{
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let weObj = document.getElementById("we");
    let weAddButtonObj = document.getElementById("weAddButtons")

    weObj.insertBefore(newNode, weAddButtonObj);
}

function addAQField() 
{
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let aqObj = document.getElementById("aq");
    let aqAddButtonObj = document.getElementById("aqAddButtons")

    aqObj.insertBefore(newNode, aqAddButtonObj);
}
