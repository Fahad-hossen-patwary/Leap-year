
function oninputFunc(){
    let yearr = document.querySelector('#inputYear').value;
    if(yearr == 0){
        document.querySelector('.errWrap').style.display = 'block';
    }else{
        document.querySelector('.errWrap').style.display = 'none';
    }
}
function isLeafYear(){
    let yearr = document.querySelector('#inputYear').value;
    if(yearr != 0){
        if(((yearr % 400) == 0 || (yearr % 100) != 0) && ((yearr % 4) == 0)){
            document.querySelector('#demo').innerHTML ='Leap Year';
        }else{
            document.querySelector('#demo').innerHTML ='Not Leap Year'
        };
    }else{
        document.querySelector('.errWrap').style.display = 'block';
    }
};
