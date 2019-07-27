var qrcode = null;

//googleapi key: AIzaSyDcpVC9umEGksTi8flWYz1q5QZSUzJfGw4

function run() {
    qrcode = new QRCode(document.getElementById("qrcode"), {
        text: "",
        width: 256,
        height: 256,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });

    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        let url = tabs[0].url;
        console.log(url);
        let inqr = document.getElementById("inqr");
        inqr.value = url;

        qrcode.makeCode(url);
    });
}

function inputQR(e) {
    if (e.keyCode==13) { 
        let inqr = document.getElementById("inqr");
        
        qrcode.makeCode(inqr.value);
        //inqr.value = ""
        return true;
    }
    return false;
}


run();
document.getElementById("inqr").onkeypress = function(e){inputQR(e)};
