
function allTrue() {
    var specials = ["0123456789!@#$%^&*?/\<>`~abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"]
    var stringLength = pwLength
    var randString = " "
    for (var i=0;i < stringLength; i++) {
        var randNum = Math.floor(Math.random() * stringLength)
        randString += specials.toString().substring(randNum,randNum+1)
        }   var pTag = document.createElement("p")
            var divTag = document.createElement("div")
            var cpybtn = document.createElement("button")
                pTag.textContent = "Here is your password!" + randString
            document.body.appendChild(divTag)
            pTag.setAttribute("id","passW")
            cpybtn.setAttribute("type", "button")
            cpybtn.setAttribute("class", "btn btn-primary btn-lg btn-block")
            cpybtn.setAttribute("onclick", "copyPass()")
            cpybtn.textContent = "Copy!"
            divTag.appendChild(pTag)
            divTag.appendChild(cpybtn)
            console.log(randString)
}

function spUpCharTrue() {
    var specials = ["!@#$%^&*?/\<>`~abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"]
    var stringLength = pwLength
    var randString = " "
    for (var i=0;i < stringLength; i++) {
        var randNum = Math.floor(Math.random() * stringLength)
        randString += specials.toString().substring(randNum,randNum+1)
        } document.write(randString)
}

function numUpCharTrue() {
    var specials = ["0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"]
    var stringLength = pwLength
    var randString = " "
    for (var i=0;i < stringLength; i++) {
        var randNum = Math.floor(Math.random() * stringLength)
        randString += specials.toString().substring(randNum,randNum+1)
        } document.write(randString)
} 

function spNumCharTrue() {
    var specials = ["0123456789!@#$%^&*?/\<>`~abcdefghijklmnopqrstuvwxyz"]
    var stringLength = pwLength
    var randString = " "
    for (var i=0;i < stringLength; i++) {
        var randNum = Math.floor(Math.random() * stringLength)
        randString += specials.toString().substring(randNum,randNum+1)
        } document.write(randString)
}

function spTrue() {
    var specials = ["!@#$%^&*?/\<>`~abcdefghijklmnopqrstuvwxyz"]
    var stringLength = pwLength
    var randString = " "
    for (var i=0;i < stringLength; i++) {
        var randNum = Math.floor(Math.random() * stringLength)
        randString += specials.toString().substring(randNum,randNum+1)
        } document.write(randString)
}

function numTrue() {
    var specials = ["0123456789abcdefghijklmnopqrstuvwxyz"]
    var stringLength = pwLength
    var randString = " "
    for (var i=0;i < stringLength; i++) {
        var randNum = Math.floor(Math.random() * stringLength)
        randString += specials.toString().substring(randNum,randNum+1)
        } document.write(randString)
}

function upTrue() {
    var specials = ["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"]
    var stringLength = pwLength
    var randString = " "
    for (var i=0;i < stringLength; i++) {
        var randNum = Math.floor(Math.random() * stringLength)
        randString += specials.toString().substring(randNum,randNum+1)
        } document.write(randString)
}


function copyPass() {
    
  
   document.getElementById(passW)
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }

alert("Password Generator!")
alert("You must choose between 8-128 chars, and at least one special variant for your password!")



var pwLength = prompt("Pick a length between 8 and 128 characters: ")

for (;pwLength < 8 || isNaN(pwLength) || pwLength > 128;) {
    alert("You must choose a number between 8 and 128. Use of text strings are also restricted.")
    var pwLength = prompt("Pick a number length between 8 and 128 characters: ")
}

do {
var spChar=confirm("Would you like to include special characters?")
var numChar=confirm("Would you like to include numbers?")
var upChar=confirm("Would you like to include uppercase characters as well?")
} while (spChar===false && numChar===false && upChar===false) 

    alert("Settings confirmed, generating password now")

    if (spChar===true && numChar===true && upChar===true) {
        allTrue()
    } else if (spChar===true && numChar===false && upChar===true) {
        spUpCharTrue()
    } else if (spChar===false && numChar===true && upChar===true) {
        numUpCharTrue()
    } else if (spChar===true && numChar===true && upChar===false) {
        spNumCharTrue()
    } else if (spChar===true && numChar===false && upChar===false) {
        spTrue()
    } else if (spChar===false && numChar===true && upChar===false) {
        numTrue()
    } else {
        upTrue()
    }

    