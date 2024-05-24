document.addEventListener("DOMContentLoaded", function() {
    const flexContainer = document.querySelector('.flex-container');
    const flexWrapSelect = document.getElementById('flex-wrap');

    flexWrapSelect.addEventListener('change', updateFlexWrap);

    function updateFlexWrap() {
        flexContainer.style.flexWrap = flexWrapSelect.value;
    }
});
