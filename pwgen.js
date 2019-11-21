alert("Password Generator!")
alert("You must choose between 8-128 chars, and at least one special variant for your password!")


var randomPassGen = {
        stringLength : " ",
        randString : " ",
        pTag : document.createElement("p"),
        ppTag : document.createElement("p"),
        divTag : document.createElement("div"),
        cpybtn : document.createElement("button"),
        
        askLength : function() {
            this.stringLength = prompt("Pick a length between 8 and 128 characters: ")
            console.log(randomPassGen.stringLength)
        },

        randomizer : function() {
            for (var i=0;i < this.stringLength; i++) {
            var randNum = Math.floor(Math.random() * this.stringLength)
            this.randString += window.specials.toString().substring(randNum,randNum+1)
            } console.log(this.stringLength)
                console.log(specials)
        },

        pageCreate : function() {
            this.ppTag.textContent = "Here is your password!" 
            this.pTag.textContent = this.randString
            document.body.appendChild(this.divTag)
            this.pTag.setAttribute("id","passW")
            this.cpybtn.setAttribute("type", "button")
            this.cpybtn.setAttribute("class", "btn btn-primary btn-lg btn-block")
            this.cpybtn.setAttribute("onclick", "randomPassGen.copyPass()")
            this.cpybtn.textContent = "Copy!"
            this.divTag.appendChild(this.ppTag)
            this.divTag.appendChild(this.pTag)
            this.divTag.appendChild(this.cpybtn)
        },  

        copyPass : function() {
            document.getElementById(passW)
            document.execCommand("copy");
            alert("Copied the text: " + copyText.value);
        },
}
randomPassGen.askLength()
 

for (;randomPassGen.stringLength < 8 || isNaN(randomPassGen.stringLength) || randomPassGen.stringLength > 128;) {
    alert("You must choose a number between 8 and 128. Use of text strings are also restricted.")
    randomPassGen.askLength()
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