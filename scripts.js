// Write your JavaScript code here.
// Remember to pay attention to page loading!

//load event handler
window.addEventListener("load", function (){
    window.confirm("Confirm that the shuttle is ready for takeoff.")

    this.document.getElementById("flightStatus").innerHTML = "Shuttle in flight";

    this.document.getElementById("shuttleBackground").style.backgroundColor = "blue";

    let currHeight = this.document.getElementById('spaceShuttleHeight').innerHTML;

    let newHeight = Number(currHeight) + 10000;

    this.document.getElementById('spaceShuttleHeight').innerHTML = newHeight;
});