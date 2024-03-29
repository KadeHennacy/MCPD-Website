function sendTextMessage(){
    var link;
    var location = document.getElementById('locationField').value;
    var name = document.getElementById('nameField').value;
    var clothes = document.getElementById('clothesField').value;
    var destination = document.getElementById('destinationField').value;
    var vehicle = document.getElementById('vehicleField').value;
    if(getOS() == "Windows" || getOS() == "Mac OS" || getOS() == "Linux"){
        link = 'mailto:mcpd@marietta.edu?subject=Escort request from MCPD website&';
    }
    else link = 'sms://+17402360217/&';
    if(getOS() == 'Android') link = 'sms://+17402360217/?';
    link += encodeURI('body=Escort request from MCPD website: Student name: "' + name + '" Location description: "' + location + '" Destination description: "' + destination + '" Clothing description: "' + clothes + '" Vehicle description: "' + vehicle + '"');
    window.location.href = link;
    return false;
    
}
function sendComplaint(type){
    var complaintName = document.getElementById('complaintNameField').value;
    var complaintDate = document.getElementById('dateField').value;
    var incidentType = document.querySelector('input[name="typeField"]:checked').value;
    var incidentLocation = document.getElementById('incidentLocation').value
    var incidentDescription = document.getElementById('incidentDescription').value;
    var suspectGender = document.querySelector('input[name="gender"]:checked').value;
    var suspectRace = document.querySelector('input[name="race"]:checked').value;
    var suspectDescription = document.getElementById('suspectDescription').value;
    var suspectName = document.getElementById('suspectName').value;
    var suspectAddress = document.getElementById('suspectAddress').value;
    var suspectVehicle = document.getElementById('suspectVehicle').value;
    var otherInfo = document.getElementById('otherInfo').value;
    var link;
    if(type == 'text'){
        link = 'sms://+17402360217/&';
    }
    else{
        link = 'mailto:mcpd@marietta.edu?subject=Complaint from MCPD Website&';
    }
    if(getOS() == 'Android' && type == 'text') link = 'sms://+17402360217/?';
    link += encodeURI('body=Complaint from MCPD website: Complaint name: "' + complaintName + '" Complaint date: "' + complaintDate + '" Incident type: "' + incidentType + '" Incident location: "' + incidentLocation + '" Incident Description: "' + incidentDescription + '" Suspect gender: "' + suspectGender + '" Suspect race: "' + suspectRace + '" Suspect description: "' + suspectDescription + '" Suspect name: "' + suspectName + '" Suspect address: "' + suspectAddress + '" Suspect vehicle: "' + suspectVehicle + '" Other information: "' + otherInfo + '"');
    window.location.href = link;
    return false;
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
