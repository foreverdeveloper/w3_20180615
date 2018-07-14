var i = 0;

function timedCount() {
    i = i + 1;
    // postMessage() method - which is used to post a message back to the HTML page.
    postMessage(i);
    setTimeout("timedCount()",500);
}

timedCount();