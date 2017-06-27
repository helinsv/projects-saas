function initMap() {
  var uluru = {lat: 50.216584, lng: 22.899826};        
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: uluru,  
    zoomControl: false,
    scrollwheel: false,  
  });

  var marker = new google.maps.Marker({
    position: uluru,
    map: map, 
    draggable: true,
    animation: google.maps.Animation.DROP,
    title: 'GrillBar',
    icon: {
      url: "img/marker.png",
      scaledSize: new google.maps.Size(24, 30)
    }
  });
  marker.addListener('click', toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

