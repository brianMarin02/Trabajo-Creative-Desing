document.addEventListener("DOMContentLoaded", function() {
    const flexContainer = document.querySelector('.flex-container');
    const alignItemsSelect = document.getElementById('align-items');

    alignItemsSelect.addEventListener('change', updateAlignItems);

    function updateAlignItems() {
        flexContainer.style.alignItems = alignItemsSelect.value;
    }
});
