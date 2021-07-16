document.addEventListener('DOMContentLoaded', function(event) {
  function successCbk(res)
  {   res = JSON.parse(res);
	  var response = { data: res };
	  templateUrl = EV.USER_DETAILS_HB;
	  function renderUserDetails(data){
        var template = Handlebars.compile(data);
        var html_data = template(response);
        document.getElementById("handlebarCont").innerHTML = html_data;
		registerEvents();
      };
	  asyncRequest(templateUrl,renderUserDetails);
 }
  asyncRequest(EV.DETAIL_URL,successCbk);
  console.log("DOM LOADED SUCCESS");
});
