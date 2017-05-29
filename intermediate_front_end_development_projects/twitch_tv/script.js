function get_user(user, data) {
  var link = `https://www.twitch.tv/${user}`;
  console.log(data);
  if (data.stream === null) {
    $(".channels").append(
      `
      <div class="single-channel-off">

        <div class="logo-and-link">

          <img class="logo" src="http://placehold.it/150x150">


          <p>Channel: <a href="${link}">${user}</a></p>

        </div>

        <div class="offline-and-online-text">

          <p>Offline</p>

        </div>

      </div>
      `
    );
  }
  else if (data.stream.stream_type === "live") {
    $(".channels").append(
      `
      <div class="single-channel-on">

        <div class="logo-and-link">

          <img class="logo" src="${data.stream.channel.logo}">

          <p>Channel: <a href="${link}">${user}</a></p>

          <p>Streaming: ${data.stream.channel.game}</p>

        </div>

        <div class="offline-and-online-text">

          <p>Online</p>

        </div>
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
