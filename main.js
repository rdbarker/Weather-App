var globalWeather={
  tempF : 0,
  tempC : 0,
  tempFfeel : 0,
  tempCfeel : 0,
  icon : "",
  summary: "",
};
function getLocationWeather(){ 
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      console.log(lat,long);
      getWeather(lat,long);
    });
  }
}
function getWeather(lat,long){
  var key="3f60ba914822b6ae58833312506ddcb7";
  var url= "https://api.darksky.net/forecast/8085fe41a32bb1fd0b9e0f4f554e5992/"+lat+","+long;
  console.log(url);
  if (long != 0 && lat !=0){
    $.ajax({
      url: url,
      type: "GET",
      dataType: "jsonp",
      success: function(data){
        
        globalWeather = {
          tempF : data.currently.temperature,
          tempC : covertDegrees(data.currently.temperature),
          tempFfeel : data.currently.apparentTemperature,
          icon : data.currently.icon,
          summary: data.currently.summary,
        }
        console.log(globalWeather);
      }
    });
  }
  else{
    console.log("error");
  }
}
function convertDegrees(temp){//f to c
  return (temp - 32) * (5/9)
} 
