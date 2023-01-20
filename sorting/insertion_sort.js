let target = arr[n-1];
    for(let i = n-2; i >= 0; i--){
        if(arr[i] < target){
            arr[i+1] = target;
            console.log(...arr); 
            break; 
        }
        else{
            arr[i+1] = arr[i]; 
            console.log(...arr);
            if (i-1 < 0){
                arr[0] = target;
                console.log(...arr);
              
            } 
        
    
