function calculateParallelogramArea(){
    const base = getInputValueId('parallelogram-base');
    const height = getInputValueId('parallelogram-height');
    const area = base * height;
    setInnerTextById('parallelogram-area', area);
}
function getInputValueId(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}
function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}




// function calculateParallelogramArea(){
//     const parallelogramBaseContent = document.getElementById('parallelogram-base');
//     const parallelogramBase = parallelogramBaseContent.value;
//     const base = parseFloat(parallelogramBase);
//     const parallelogramHeightContent = document.getElementById('parallelogram-height');
//     const parallelogramHeight = parallelogramHeightContent.value;
//     const height = parseFloat(parallelogramHeight);
//     const area = base * height;
//     const parallelogramArea = document.getElementById('parallelogram-area');
//     parallelogramArea.innerText = area;
// }