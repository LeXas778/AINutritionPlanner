$(document).ready(function() {
    $("#personform").submit(function(e) {
        e.preventDefault();
        var message = "";
        let age = $("#age").val();
        let gender = $("#gender").val();
        let height = $("#height").val();
        let weight = $("#weight").val();
        let activitylevel = $("#activity_level").val();
        let allergies = $("#allergies").val();
        let medicalconditions = $("#medical_conditions").val();
        let goals = $("#goals").val();

        message = "I am a " + age + " year old " + gender + ", " + height + "cm tall and weigh " + weight + "kg. My acitivity level is: " + 
        activitylevel + ". Goals: " + goals + ". Allergies: " + allergies + ". Medical conditions: " + medicalconditions +
        ". Please create a nutrition plan that will help me reach my goals, taking into account my activity level and any nutrient deficiencies I may have. Also, give me 3 sample nutrition plans on what I should eat in a day.";

        console.log(message)
        $("#chatinput").val("");
        $.ajax({
            type: "POST",
            url: "/chat",
            data: JSON.stringify({ "message": message }),
            contentType: "application/json",
            success: function(data) {
                $("#chatlog").append("<div class='chat-response'>" +data.response + "</div></br>");
                $("#chatlog").scrollTop($("#chatlog")[0].scrollHeight);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
            }
        });
    });
});
