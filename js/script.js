   
       var inputMessage = document.getElementById("message")
       var welcomeMessage = document.getElementById("welcomeMessage")

       var inputMessage1 = document.getElementById("message1")
       var welcomeMessage1 = document.getElementById("welcomeMessage1")

       var inputMessage2 = document.getElementById("message2")
       var welcomeMessage2 = document.getElementById("welcomeMessage2")

       var inputMessage3 = document.getElementById("message3")
       var welcomeMessage3 = document.getElementById("welcomeMessage3")

       var inputMessage4 = document.getElementById("message4")
       var welcomeMessage4 = document.getElementById("welcomeMessage4")

       var inputMessage5 = document.getElementById("message5")
       var welcomeMessage5 = document.getElementById("welcomeMessage5")

       var inputMessage6 = document.getElementById("message6")
       var welcomeMessage6 = document.getElementById("welcomeMessage6")



       function saveMessage() {
           welcomeMessage.innerHTML = inputMessage.value;
           welcomeMessage1.innerHTML = inputMessage1.value;
           welcomeMessage2.innerHTML = inputMessage2.value;
           welcomeMessage3.innerHTML = inputMessage3.value;
           welcomeMessage4.innerHTML = inputMessage4.value;
           welcomeMessage5.innerHTML = inputMessage5.value;
           welcomeMessage6.innerHTML = inputMessage6.value;
       }