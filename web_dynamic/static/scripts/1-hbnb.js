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
});
