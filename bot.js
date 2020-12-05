function messageInput(m) {
    var l = document.getElementById('chatMessageInput');
    l.value = m;
}
 
function chatSend() {
    var b = document.getElementById('chatSendButton');
    b.click();
}
 
function chatEnd() {
    var e = document.getElementById('chatStartStopButton');
    e.click();
}
 
setTimeout(messageInput(mes), 5000);
setTimeout(chatSend, 5000);
window.setTimeout(function () {
    location.reload()
}, 5000)