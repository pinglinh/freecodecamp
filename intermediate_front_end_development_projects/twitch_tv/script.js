function get_user(user, data) {
  var link = `https://www.twitch.tv/${user}`;
  console.log(data);
  if (data.stream === null) {
    $(".channels").append(
      `
      <div class="single-channel-off">
        <p><a href="${link}">${user}</a></p>
        <p>Offline</p>
      </div>
      `
    );
  }
  else if (data.stream.stream_type === "live") {
    $(".channels").append(
      `
      <div class="single-channel-on">
          <img class="logo" src="${data.stream.channel.logo}">
           <p><a href="${link}">${user}</a></p>
           <p>Online</p>
      </div>
      `
    );
  }
}

$(document).ready(function() {
  var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

  for (let user of users) {
    console.log(JSON.stringify(user));
    $.getJSON(`https://wind-bow.gomix.me/twitch-api/streams/${user}?callback=?`, function(data) {
        get_user(user, data);
        console.log("WTF", user);
        JSON.stringify(data);
    });
  }
});
