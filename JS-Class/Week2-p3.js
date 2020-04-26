/*
Compute the volume of a cylinder

area = radius * radius * p
volume = area * length
 */
function calculateCylinder() {
    var radius = 100;
    var length = 50;
    var pi = 3.14;
    var area = radius * radius * pi;
    var volume = area * length;
    console.log(volume)
}