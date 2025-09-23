// Function Declaration
function getRectangleAreaDecl(width, height) {
    return width * height;
}
console.log("Function Declaration:", getRectangleAreaDecl(5, 10));

// Function Expression
const getRectangleAreaExpr = function(width, height) {
    return width * height;
};
console.log("Function Expression:", getRectangleAreaExpr(5, 10));

// Arrow Function
const getRectangleAreaArrow = (width, height) => width * height;
console.log("Arrow Function:", getRectangleAreaArrow(5, 10));