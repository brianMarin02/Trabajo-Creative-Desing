document.addEventListener("DOMContentLoaded", function() {
    const flexItem1 = document.querySelector('.flex-item:nth-child(1)');
    const flexItem2 = document.querySelector('.flex-item:nth-child(2)');
    const flexItem3 = document.querySelector('.flex-item:nth-child(3)');
    
    const flexGrow1Input = document.getElementById('flex-grow-1');
    const flexGrow2Input = document.getElementById('flex-grow-2');
    const flexGrow3Input = document.getElementById('flex-grow-3');
    
    flexGrow1Input.addEventListener('input', updateFlexGrow);
    flexGrow2Input.addEventListener('input', updateFlexGrow);
    flexGrow3Input.addEventListener('input', updateFlexGrow);
    
    function updateFlexGrow() {
        flexItem1.style.flexGrow = flexGrow1Input.value;
        flexItem2.style.flexGrow = flexGrow2Input.value;
        flexItem3.style.flexGrow = flexGrow3Input.value;
    }
});
