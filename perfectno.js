

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";
var count = 0;
var testCases = 0;
var infoputs = 1;
function countRead(no){
    no = parseInt(no.split('\n'),10);
    testCases = count === 0 ? no : testCases;
    count += 1;
    if(count === testCases + infoputs)
    main(stdin_input);
 
}

function isPerfect(n){
    let sum = 0;
    for(let i=0;i<=n/2;i++){

        if(n % i === 0){
            sum += i;
        }
    }
    if(sum === n && sum !== 0){
        return "YES";
    }
    else{
        return "NO";
    }

}
process.stdin.on("data", function (input) {
 
    stdin_input += input;  
    countRead(input);   
                        
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    var data = input.split('\n');
    var len = parseInt(data[0],10);
    let no = 0;
    if(len >= 1 && len <= 100){
        for(let i = 1;i<=len;i++){
           no = parseInt(data[i],10);
                if(no >= 1 && no <= Math.pow(10,9)){
                    process.stdout.write(isPerfect(no) + "\n");  
                }

            }
    }

}

