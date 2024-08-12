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
    $.post({
        url: 'http://127.0.0.1:5001/api/v1/places_search/',
        contentType: 'application/json',
        data: JSON.stringify({}),
        success: function(places) {
            $.each(places, function(index, place) {
                $('.places').append(`
	<article>
	  <div class="title_box">
	    <h2>${place.name}</h2>
	    <div class="price_by_night">$${place.price_by_night}</div>
	  </div>
	  <div class="information">
	    <div class="max_guest">${place.max_guest} ${place.max_guest > 1 ? 'Guests' : 'Guest' }</div>
            <div class="number_rooms">${place.number_rooms} ${place.number_rooms > 1 ? 'Bedrooms' : 'Bedroom'}</div>
            <div class="number_bathrooms">${place.number_bathrooms} ${place.number_bathrooms > 1 ? 'Bathrooms' : 'Bathroom'}</div>
	  </div>
	  <div class="user">
          </div>
          <div class="description">
	    ${place.description ? place.description : 'safe'}
          </div>
	</article>
                    `)
            })
        },
    });
    
  });
  