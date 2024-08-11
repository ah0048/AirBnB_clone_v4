$(document).ready(function () {
  const CheckedAmenities = {};
  $('input[type="checkbox"]').change(function () {
    const AmenityId = $(this).data('id');
    const AmenityName = $(this).data('name');
    if ($(this).is(':checked')) {
      CheckedAmenities[AmenityId] = AmenityName;
    } else {
      delete CheckedAmenities[AmenityId];
    }
    console.log(CheckedAmenities);
    const AmenityList = Object.values(CheckedAmenities).join(', ');
    if (AmenityList.length === 0) {
      $('.amenities h4').html('&nbsp;');
    } else {
      if (AmenityList.length > 30) {
        $('.amenities h4').text(AmenityList.substring(0, 29) + '...');
      } else {
        $('.amenities h4').text(AmenityList);
      }
    }
  });
  $.get('http://127.0.0.1:5001/api/v1/status/', function (data) {
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });
});
