function countdown(time){
    var clock = setInterval(function(){
        time--;
        if(time <= 0){clearInterval(clock);
        console.log("DONE!");} else {console.log(time);}
    },2000)
}

function randomPick(){
    var num;
    var time = 0;
    var newPick = setInterval(function(){
    num = Math.random();
    time++;
    if(num > .75){clearInterval(newPick);
    console.log("The number of times i did Math random is " + time);}},2000)};
    
    function isEven(num){
        return num % 2 === 0};
  
        function isOdd(num){
            return num % 2 === 1
        };


        function isPrime(num){
            if(num === 2){
            return true }
            else if (num === 1){
            return false}
            else{
            for(var i =2; i < num;i++){
            if(num % i === 0){
            return false}
            }
            return true;}
            }


            function numberFact(num,fn){
                return fn(num)
            };

            function find(arr,fn){
                for(var i =0; i < arr.length; i++){
                    if(fn(arr[i])) return arr[i];
                }
            }

            function findIndex(arr,fn){
                for(var i =0; i < arr.length; i++){
                    if(fn(arr[i])) return i;
                }
            }

            function specialMultiply(a,b){
                if(arguments.length === 1){
                    return function anootherPick(b){
                        return a * b;
                    }
                }
                return a * b
            }