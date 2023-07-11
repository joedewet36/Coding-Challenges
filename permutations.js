

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                            
});

process.stdin.on("end", function () {
   main(stdin_input);
});
var perm =[];
function main(input) {
    let data = input.split('\n');
  
    let max = 0;
    [n,q]=data[0].split(' ');
    perm = data[1].split(' ');
    process.stdout.write(`data :${perm.toString() }\n`);  
    let test = [];
    let no1 = 0;
    let no2 = 0;
     // process.stdout.write(`n:${n} q:${q}`);    
    for(let i = 2;i <=q + 1;i++){
        test = data[i].split(' ');
        let perm1 = perm;
        no1 = test[0] < n ? perm1.splice(test[0],1) : 0;
        no2 = test[1] < n ?  perm1.splice(test[1],1) :0 ;
   
        newarr =[no1,no2];
        process.stdout.write(`tnewarr :${newarr.toString() }\n`);   
        max = Math.max(...newarr);
        process.stdout.write(max.toString()  + "\n"); 
        //process.stdout.write(`n:${n} q:${q}`);    
    }

       
}

