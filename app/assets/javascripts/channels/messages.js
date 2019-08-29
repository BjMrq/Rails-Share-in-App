function createMessageChannel() {
  App.messages = App.cable.subscriptions.create({
        channel: 'MessagesChannel', chat_id: parseInt($("#message_chat_id").val())
        },
        {
        received: function(data) {
          $("#messages").removeClass('hidden');
          document.getElementById('messages').insertAdjacentHTML("beforeend", this.renderMessage(data));
        },
        renderMessage: function(data) {
          var user_status = (window.username == data.user_name) ? "current" : "other" ;
          if (user_status == "other"){
            document.getElementById("notification-area").insertAdjacentHTML("beforeend", '<span class="badge badge-light">New</span>');
            document.getElementById("user-" + data.user_id).style.fontWeight = "bold";
          }
    return '<div class="' + user_status + '-user-custom-row"><a href="/users/' + data.user_id + '"><img class="avatar" src="' + data.user_avatar + '"></a><p class="' + user_status + '-user-message">' + data.message + '</p><p class="time-indicator-message">just now</p></div>';
  },
      });
return App.messages;
}
