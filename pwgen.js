function allTrue() {
    var specials = ["0123456789!@#$%^&*?/\<>`~abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"]
    var stringLength = pwLength
    var randString = " "
    for (var i=0;i < stringLength; i++) {
        var randNum = Math.floor(Math.random() * stringLength)
        randString += specials.toString().substring(randNum,randNum+1)
        } console.log(randString)
}

function spUpCharTrue() {
    var specials = ["!@#$%^&*?/\<>`~abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"]
    var stringLength = pwLength
    var randString = " "
    for (var i=0;i < stringLength; i++) {
        var randNum = Math.floor(Math.random() * stringLength)
        randString += specials.toString().substring(randNum,randNum+1)
        } console.log(randString)
}

function numUpCharTrue() {
    var specials = ["0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"]
    var stringLength = pwLength
    var randString = " "
    for (var i=0;i < stringLength; i++) {
        var randNum = Math.floor(Math.random() * stringLength)
        randString += specials.toString().substring(randNum,randNum+1)
        } console.log(randString)
} 

function spNumCharTrue() {
    var specials = ["0123456789!@#$%^&*?/\<>`~abcdefghijklmnopqrstuvwxyz"]
    var stringLength = pwLength
    var randString = " "
    for (var i=0;i < stringLength; i++) {
        var randNum = Math.floor(Math.random() * stringLength)
        randString += specials.toString().substring(randNum,randNum+1)
        } console.log(randString)
}

function spTrue() {
    var specials = ["!@#$%^&*?/\<>`~abcdefghijklmnopqrstuvwxyz"]
    var stringLength = pwLength
    var randString = " "
    for (var i=0;i < stringLength; i++) {
        var randNum = Math.floor(Math.random() * stringLength)
        randString += specials.toString().substring(randNum,randNum+1)
        } console.log(randString)
}

function numTrue() {
    var specials = ["0123456789abcdefghijklmnopqrstuvwxyz"]
    var stringLength = pwLength
    var randString = " "
    for (var i=0;i < stringLength; i++) {
        var randNum = Math.floor(Math.random() * stringLength)
        randString += specials.toString().substring(randNum,randNum+1)
        } console.log(randString)
}

function upTrue() {
    var specials = ["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"]
    var stringLength = pwLength
    var randString = " "
    for (var i=0;i < stringLength; i++) {
        var randNum = Math.floor(Math.random() * stringLength)
        randString += specials.toString().substring(randNum,randNum+1)
        } console.log(randString)
}