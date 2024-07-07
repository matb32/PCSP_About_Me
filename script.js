document.addEventListener('DOMContentLoaded', function() {
    const tooltips = document.querySelectorAll('.tooltip');

    tooltips.forEach(function(tooltip) {
        tooltip.addEventListener('mouseenter', function() {
            this.querySelector(':after').style.display = 'block';
        });

        tooltip.addEventListener('mouseleave', function() {
            this.querySelector(':after').style.display = 'none';
        });
    });
});
