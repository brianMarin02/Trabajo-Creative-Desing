document.addEventListener("DOMContentLoaded", function() {
    const flexContainer = document.querySelector('.flex-container');
    const flexDirectionSelect = document.getElementById('flex-direction');

    flexDirectionSelect.addEventListener('change', updateFlexDirection);

    function updateFlexDirection() {
        flexContainer.style.flexDirection = flexDirectionSelect.value;
    }
});
