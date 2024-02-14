function calculateRectangleArea(){
    const rectangleWidthContent = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidthContent.value;
    const width = parseFloat(rectangleWidthText);
    const rectangleLengthContent = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLengthContent.value;
    const length = parseFloat(rectangleLengthText);
    area = width * length;
    // console.log('Area of this rectangle is:', area);
    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;
}