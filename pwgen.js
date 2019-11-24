alert("Password Generator!")
alert("You must choose between 8-128 chars, and at least one special variant for your password!")


var randomPassGen = {
        stringLength : " ",
        randString : " ",
        textTag : document.createElement("textarea"),
        ppTag : document.createElement("p"),
        divTag : document.createElement("div"),
        cpybtn : document.createElement("button"),
        br : document.createElement("br"),
        

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
            this.textTag.textContent = this.randString
            this.textTag.setAttribute("id","passW")
            this.cpybtn.setAttribute("type", "button")
            this.cpybtn.setAttribute("class", "btn btn-danger btn-outline-dark btn-lg")
            this.cpybtn.setAttribute("onclick", "copyPass()")
            this.cpybtn.textContent = "Copy Generated Password"
            document.body.appendChild(this.divTag)
            this.divTag.appendChild(this.ppTag)
            this.divTag.appendChild(this.textTag)
            this.divTag.appendChild(this.br)
            this.divTag.appendChild(this.cpybtn)
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

    function copyPass () {
        var copyText = document.querySelector("#passW").select()

        document.execCommand("copy")
        } 

    
    randomPassGen.pageCreate()
    
    
        