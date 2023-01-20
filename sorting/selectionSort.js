
function swap(arr,a,b){
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
//
function selectionSort(arr, n){
    var i, j, smallest;
    //traverse the array
    for ( i = 0; i < n-1; i++) {
    //find the smallest member 
       smallest = i;
        for (j = i+1; j < n; j++) {
            if (arr[j] < arr[smallest]) {
                smallest = j;
            }
            //swap for the new small value
            swap(arr,i,smallest);
        }
        
    }
}    
   // show results
function printArray(arr,size){
        var i;
        for (i = 0; i < size; i++) {
            console.log(arr[i] + " ");
            
        }
}
//example
var arr = [6,2,4,9,1];
var n = 5;
    selectionSort(arr, n);
    console.log("Sorted array: "); 
    printArray(arr, n);
