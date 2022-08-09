// function processConfirm(answer){
//     let result ='';
//     if ( answer){
//         result = "Excellent. We'll play a nice game of chess";

//     } else {
//         result = "Maybe later then";
    
//     }
//     return result;
// }
//  let confirmAnswer = confirm('Shall we play a game');
//  let theAnswer = processConfirm(confirmAnswer);
//  alert(theAnswer);





//  bai2
// function temperatureConverter (){
    
//     let C = prompt('Nhập độ C');
//     let F = 1.8*C + 32;
//     alert(`${C}oC = ${F}oF`)
// }
// temperatureConverter();
//bai3
function minArray(arr){
        let min = Number(arr[0]);
        if (arr.length==0){
            return "ham rong";
        }
        for (i=1;i<arr.length;i=i+1){
            
            if( min> Number(arr[i])){
                min=arr[i];
            }
        }
        return min;
    }
    
    let arr1 =prompt('nhap day so bat ki cach nhau boi dau phay').split(',');console.log(arr1);
    let min = minArray(arr1);
    alert(`min arr1 la: ${min}`);
    console.log(`min arr1 la: ${min}`)