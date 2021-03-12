const user = {
    name: "Qasim Asad",
    age: "25",
    city: "san francisco",
    lastActivity: new Date().getTime()
}

const inactiveFirstStage = () => {
    console.log("User has been inactive for the past 1-2 minutes");
}

const inactiveSecondStage = () => {
    console.log("User has been inactive for the past 3-4 minutes");
}

const inactiveThirdStage = () => {
    console.log("User has been inactive for the past 5-6 minutes");
}


// this is the main method that acts like a worker and runs every 1 minute
setInterval(function(){
    var currentTime = new Date();
    var diffMs = (user.lastActivity - currentTime)
    var minutes = Math.floor((diffMs/1000)/60) % 6

    if(minutes > 4){
    	inactiveThirdStage()
    } else if(minutes > 2)  {
    	inactiveSecondStage()
    } else {
    	inactiveFirstStage()
    }

}, 1000);