var randomPassGen = {
        stringLength : document.pwLength,
        randString : " ",
        pTag : document.createElement("p"),
        divTag : document.createElement("div"),
        cpybtn : document.createElement("button"),
        randomizer : function() {
            for (var i=0;i < this.stringLength; i++) {
            var randNum = Math.floor(Math.random() * this.stringLength)
            this.randString += document.specials.toString().substring(randNum,randNum+1)
            } console.log(this.randString)
        },

        copyPass : function() {
            document.getElementById(passW)
            document.execCommand("copy");
            alert("Copied the text: " + copyText.value);
        },

        pageCreate : function() {
            this.pTag.textContent = "Here is your password!" + this.randString
            document.body.appendChild(this.divTag)
            this.pTag.setAttribute("id","passW")
            this.cpybtn.setAttribute("type", "button")
            this.cpybtn.setAttribute("class", "btn btn-primary btn-lg btn-block")
            this.cpybtn.setAttribute("onclick", "randomPassGen.copyPass()")
            this.cpybtn.textContent = "Copy!"
            this.divTag.appendChild(this.pTag)
            this.divTag.appendChild(this.cpybtn)
        },  
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
        var specials = ["0123456789!@#$%^&*?/\<>`~abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"]
        randomPassGen.randomizer()
    } else if (spChar===true && numChar===false && upChar===true) {
        var specials = ["!@#$%^&*?/\<>`~abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"]
        randomPassGen.randomizer()
    } else if (spChar===false && numChar===true && upChar===true) {
        var specials = ["0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"]
        randomPassGen.randomizer()
    } else if (spChar===true && numChar===true && upChar===false) {
        var specials = ["0123456789!@#$%^&*?/\<>`~abcdefghijklmnopqrstuvwxyz"]
        randomPassGen.randomizer()
    } else if (spChar===true && numChar===false && upChar===false) {
        var specials = ["!@#$%^&*?/\<>`~abcdefghijklmnopqrstuvwxyz"]
        randomPassGen.randomizer()
    } else if (spChar===false && numChar===true && upChar===false) {
        var specials = ["0123456789abcdefghijklmnopqrstuvwxyz"]
        randomPassGen.randomizer()
    } else {
        var specials = ["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"]
        randomPassGen.randomizer()    
    }

    randomPassGen.pageCreate()