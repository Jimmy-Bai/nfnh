function foobar() {
    var x = 0;
    var result = "";
    var resultDescription = "";
    
    //console.log(typeof array);
    
    /*array.forEach(item => {
        //x += item.value;
        console.log(item);
    });*/

    x += parseInt(document.forms["sammich-form"]["bread"].value);
    x += parseInt(document.forms["sammich-form"]["meat"].value);
    x += parseInt(document.forms["sammich-form"]["cheese"].value);
    x += parseInt(document.forms["sammich-form"]["veggie"].value);
    x += parseInt(document.forms["sammich-form"]["hType"].value);
    x += parseInt(document.forms["sammich-form"]["holdIt"].value);

    console.log(x);

    if (x < 11) {
        result = "Wholesome";
        resultDescription = "You’re the wholesome one of the group! You radiate kindness and everyone wants to be around you. Maybe you’re not the most talkative but everyone definitely loves talking to you. You participate in so many activities and everyone is in awe on how you stay happy despite being so busy. People aspire to have your positivity.";
    }
    else if (x < 16) {
        result = "Mom Friend";
        resultDescription = "You’re the Mom Friend! You always have bandages in your purse ahead of time and Advil for those who don’t feel well. You probably have a strong phobia of dirtiness which manifests itself in your constant need to clean. You’re overprotective of your friends but it’s okay because you give good advice when they seek it.";
    }
    else if (x < 21) {
        result = "Eccentric";
        resultDescription = "It’s hard to get to know you because you don’t easily trust anyone, but once you let someone into your life, they realize you’re actually really funny! You have a lot of opinions but you keep them to yourself because you feel like people will judge you. You’re extremely loyal to your friends until they give you a reason not to trust them anymore. Second chances are not your thing.";
    }
    else {
        result = "Showoff";
        resultDescription = "You just want to be the center of the room, the star of the show. You expect heads to turn when you walk into a room, and you declare that the party doesn’t start until you arrive (and you arrive “fashionably late”). Physical Education is your favorite subject and you’re currently playing at least 3 sports. What CAN’T you do?";
    }

    $.post('/submitquiz', {result: result, resultDescription: resultDescription})
	
	return false;
}