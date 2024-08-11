$(document).ready(function () {
    let amenities = {};
    $('input[type="checkbox"]').change(function () {
        let id = $(this).data('id');
        let name = $(this).data('name');
        if ($(this).is(':checked')) {
            amenities[id] = name;
        } else {
            delete amenities[id];
        }
        $('div.amenities h4').text(Object.values(amenities).join(', '));
    });

    $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
        if (data.status === "OK") {
            $('#api_status').addClass('available');
        } else {
            $('#api_status').removeClass('available');
        }
    });
});

