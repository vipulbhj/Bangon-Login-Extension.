$(document).ready(function() {
    $("#button").click(function(){
        $.post("http://203.122.12.242:2002/userportal/newlogin.do",
            {
                type : "2",    
                username: "Bangon Username",
                password: "Bangon Password",
                phone : "0",
                jsonresponse : true
            },
            function(data,status){
                $(".data").show();
                console.log(data);
                if(data.errorKey === "success") {
                    // Successfully logged in.
                    $("#button").hide();
                    $(".data").text("Logged in successfully.");
                } else if(data.errorKey === "redirect_to_nas") {
                	chrome.tabs.create({url : 'http://1.254.254.254'});
		        } else if(data.errorMessage === "Incorrect internet service Username/password."){
                    // Wrong username or password.
                    $(".data").text("Wrong username/pass.");
                } else {
                    // Session already logged in.
                    $("#button").hide();
                    $(".data").text("Already Logged in");
                }
            }
        );
    });
});
