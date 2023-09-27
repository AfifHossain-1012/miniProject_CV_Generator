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
function generateCV(){
    // console.log("GeneratingCV");
    let nameField = document.getElementById('nameField').value;

    document.getElementById("nameT1").innerHTML = nameField;
    document.getElementById("nameT2").innerHTML = nameField;

    let contactField = document.getElementById('contactField').value;
    document.getElementById("contactT").innerHTML = contactField;

    let addressField = document.getElementById('addressField').value;
    document.getElementById("addressT").innerHTML = addressField;

    let fbField = document.getElementById('fbField').value;
    document.getElementById("fbT").innerHTML = fbField;

    let igField = document.getElementById('igField').value;
    document.getElementById("igT").innerHTML = igField;

    let liField = document.getElementById('liField').value;
    document.getElementById("liT").innerHTML = liField;

    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

     

    // WORK EXPERIENCE
    let wes = document.getElementsByClassName('weField');
    let str = "";

    for(let e of wes)
    {
        str = str + '<li>' + e.value + '</li>';
    }
    let weTElement = document.getElementById("weT");
    if (weTElement) {
        weTElement.innerHTML = str;
    }



    // // ACADEMIC QUALIFICATION
    let aqs = document.getElementsByClassName('aqField');
    let str1 = "";

    for (let e of aqs) {
        str1 = str1 + '<li>' + e.value + '</li>';
    }
    let aqTElement = document.getElementById("aqT");
    if (aqTElement) {
        aqTElement.innerHTML = str1;
    }

    document.getElementById('cv-form').style.display = "none";
    document.getElementById('cv-tamplate').style.display = "block";

}

function printCV(){
    window.print();
}