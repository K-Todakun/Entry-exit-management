const postIkku = document.querySelector('.postIkku');
//const postRoom1 = document.querySelector('postRoom1');
const postBtn = document.querySelector('.postBtn');
//const ikkulist = document.querySelector('.ikkuList');
const url = '/fetch';

const postFetch = () => {
 /*   const formData = {
        ikku: postIkku.value
    }; 
*/
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }/*,
        body: JSON.stringify(formData) */
    }).then((response) => {
        if(!response.ok) {
            console.log('error!');
        }
        console.log('ok!');
        console.log(response);
        return response.json();
    }).then((data)  => {
        console.log(data);
        alert(data);
        test1(data);
    }).catch((error) => {
        console.log(error);
    });
};

postBtn.addEventListener('click', postFetch, false);

function test() {
    var elm = document.getElementById('test_line');
    elm.classList.add("box");
    let n = 1
    if(n == "1"){
        //elm.classList.remove("cbox boxA")
        elm.classList.add("boxB");
    }else if(n == "2"){
        elm.style.background = '#000000';
    }else if(n == "3"){
    }
} 

function test1(data){
    alert(data);
    data101 = data[0];
    data102 = data[1];
    data103 = data[2];
    data201 = data[3];
    data202 = data[4];
    data203 = data[5];
    data301 = data[6];
    data302 = data[7];
    data303 = data[8];
    //alert(ninzuu);
    var elm1 = document.getElementById('101');
    change(elm1,average(data101));
    var elm2 = document.getElementById('102');
    change(elm2,average(data102));
    var elm3 = document.getElementById('103');
    change(elm3,average(data103));

    var elm4 = document.getElementById('201');
    change(elm4,average(data201));
    var elm5 = document.getElementById('202');
    change(elm5,average(data202));
    var elm6 = document.getElementById('203');
    change(elm6,average(data203));

    var elm7 = document.getElementById('301');
    change(elm7,average(data301));
    var elm8 = document.getElementById('302');
    change(elm8,average(data302));
    var elm9 = document.getElementById('303');
    change(elm9,average(data303));

}
function change(elm,n){
    elm.classList.remove("red");
    elm.classList.remove("yellow");
    elm.classList.remove("blue");
    elm.classList.remove("green");
    if(n>=75){
        elm.classList.add("red");
    }else if(n>=50){
        elm.classList.add("yellow");
    }else if(n>=25){
        elm.classList.add("blue");
    }else{
       // elm.classList.add("white")
    }
}
function average(number){
    //alert(number);
    var max3 = 30;  // 3階教室の定員
    var rate = (number/max3) * 100;
    //alert(rate);
    return rate;
}