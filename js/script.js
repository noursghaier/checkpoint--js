function myFunction1() {

    document.getElementById("myP").classList.toggle('bold')
   
    

}
function myFunction2() {
document.getElementById("myP").classList.toggle('italic')
}

function myFunction3() {
    document.getElementById("myP").classList.toggle('underline') 

}
function myFunction4() {
    listValue = document.querySelector('#list').value
    document.getElementById("myP").style.fontSize = listValue;
}

function myFunction5() {
    listValue = document.querySelector('#list2').value
    document.getElementById("myP").style.fontFamily = listValue;
}
        


