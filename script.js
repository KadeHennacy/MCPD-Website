function sendTextMessage(){
    var location = document.getElementById('locationField').value;
    var name = document.getElementById('nameField').value;
    var clothes = document.getElementById('clothesField').value;
    var destination = document.getElementById('destinationField').value;
    var vehicle = document.getElementById('vehicleField').value;
    var link = 'sms://+17402360217';
    if(getOS() == 'Android') link += '?';
    else{
        link += '&'
    }
    link += 'body=Escort request from MCPD website: Student name: "' + name + '" Location description: "' + location + '" Destination description: "' + destination + '" Clothing description: "' + clothes + '" Vehicle description: "' + '"';
    window.location.href = link;
    
}
function getOS() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;

    if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'Windows';
    } else if (/Android/.test(userAgent)) {
        os = 'Android';
    } else if (!os && /Linux/.test(platform)) {
        os = 'Linux';
    }
    return os;
}