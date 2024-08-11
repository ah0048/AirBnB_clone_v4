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
    console.log(AmenityList);
  });
});
