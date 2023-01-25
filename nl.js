function isTriangle() {

    a = document.getElementById("aOldal").value;
    b = document.getElementById("bOldal").value;
    c = document.getElementById("cOldal").value;

    if (a > 0 && b > 0 && c > 0) {
        if(Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2) || Math.pow(b,2) + Math.pow(c, 2) == Math.pow(a, 2)
        || Math.pow(a,2) + Math.pow(c, 2) == Math.pow(b, 2)) {
            alert("A derékszögű háromszög megszerkeszthető!")
        } 
        else {
            alert("Nem szerkeszthető meg!")
        }
    }
    else {
        alert("Adjon meg 0-nál nagyobb számot!")
    }
}

function cCalc() {

    a = document.getElementById("aOldal").value;
    b = document.getElementById("bOldal").value;

    document.getElementById("cOldal").value = Math.round(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)));   
}

function random() {
    a = document.getElementById("aOldal").value = Math.round(Math.random()*100);
    b = document.getElementById("bOldal").value = Math.round(Math.random()*100);
    c = document.getElementById("cOldal").value = Math.round(Math.random()*100);

    if (document.getElementById("aOldal").value < 10) {
        document.getElementById("aOldal").value =+ 10;
    }

    if (document.getElementById("bOldal").value < 10) {
        document.getElementById("bOldal").value =+ 10;
    }

    if (document.getElementById("cOldal").value < 10) {
        document.getElementById("cOldal").value =+ 10;
    }

    alert("Sikeres szám generálás!")
} 