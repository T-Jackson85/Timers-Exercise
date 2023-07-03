function countDown(time){
    const count = setInterval(function(){
        time--;
        if (time <=0){
            clearInterval(count);
            console.log ("Done!");
        }
        else{
            console.log(time);
        }
    },1000)

}