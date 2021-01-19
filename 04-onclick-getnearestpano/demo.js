const elementId = "as1";
const data = {layers: []};
const aerialSphere = new AerialSphere(document.getElementById(elementId), data);

aerialSphere.onClick = function () {
    console.log("onClick")
    this.getVar("mouse.x", function(mouseX) {
        this.mouseX = mouseX;
        this.getVar("mouse.y", function(mouseY) {
            this.mouseY = mouseY;
            this.getPositionInfo(this.mouseX, this.mouseY, function() {
                const lat = arguments[0];
                const lon = arguments[1];
                const pan = arguments[2];
                const tilt = arguments[3];

                const message = "Clicked at " + this.mouseX + ", " + this.mouseY + "\n"
                    + "Latitude: " + lat + "\n"
                    + "Longitude: " + lon + "\n"
                    + "Pan: " + pan + "\n"
                    + "Tilt: " + tilt + "\n";

                console.log(message);
                alert(message);
            });
        });
    });
};
activeAerialSphere.getNearestPano(lat, lon, (result) => {
    console.log("gerNearestPano returns:", result);
});