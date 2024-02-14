function calculateTriangleArea(){
   const triangleBaseContent = document.getElementById('triangle-base');
   const triangleBaseText = triangleBaseContent.value;
   const base = parseFloat(triangleBaseText);
   const triangleHeightContent = document.getElementById('triangle-height');
   const triangleHeightText = triangleHeightContent.value;
   const height = parseFloat(triangleHeightText);
   const area = 0.5 * base * height;
   //console.log('Area of the triangle is:', area);
   const triangleAreaSpan = document.getElementById('triangle-area');
   triangleAreaSpan.innerText = area;
}