




var count = 20;

const fizbuzz = (count) => {

    for (let index = 1; index < count; index++) {
        let modThree = index % 3;
        let modFive = index % 5;
        console.log("index",index);
       if(modThree == 0 && modFive == 0 ){

            console.log("fuzzbizz");
       }else if(modThree == 0){
        console.log("fuzz");
       }
       else if(modFive == 0){
        console.log("buzz");
       }
        
    }

}

fizbuzz(count);