document.getElementById("open-btn").onclick=function () {
    document.getElementsByClassName("main-navigation")[0].style.minHeight="286px";
    document.getElementById("menu-list").style.display="flex";
    document.getElementById("open-btn").style.display="none";
    document.getElementById("close-btn").style.display="flex";
}
document.getElementById("close-btn").onclick=function () {
    document.getElementsByClassName("main-navigation")[0].style.minHeight="0px";
    document.getElementById("menu-list").style.display="none";
    document.getElementById("close-btn").style.display="none";
    document.getElementById("open-btn").style.display="flex";
}


window.addEventListener("resize",function(){
    if(window.innerWidth>780){
        document.getElementsByClassName("main-navigation")[0].style.minHeight="0px";
        document.getElementById("open-btn").style.display="none";
        document.getElementById("close-btn").style.display="none";
        document.getElementById("menu-list").style.display="flex";
    }else{
        if(document.getElementById("close-btn").style.display=='none'){
            document.getElementById("open-btn").style.display="flex";
            document.getElementById("menu-list").style.display="none";
        }
    }
    if(window.innerWidth<500){
        document.getElementById('search-form-modal').style.display='none';
    }

});

window.addEventListener("orientationchange", function() {
    if(window.innerWidth<500){
        document.getElementById('search-form-modal').style.display='none';
    }
});


ymaps.ready(function () {
    var map = new ymaps.Map("map", {
        center: [40.436305, 50.184816],
        zoom: 12
    });

    if (map) {
        ymaps.modules.require(['Placemark', 'Circle'], function (Placemark, Circle) {
            var placemark = new Placemark([40.436305, 50.184816]);
        });
    }
});

var date_field=document.getElementsByClassName('date-field');
var today = new Date();

for(var i=0;i<date_field.length;i++){
     date_field[i].setAttribute('data-date',getFormattedDate(today));
     date_field[i].addEventListener('change',function () {
        this.setAttribute('data-date',getFormattedDate(this.value));
     });


 }
function getFormattedDate(val) {
    var date = new Date(val);
    var day='',month='',fullDate;
    var monthList=['Январь','Февраль','Март','Апрель','Май','Июнь',
        'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
    if(date.getDate()<10){
        day=0+''+date.getDate();
    }else{
        day=date.getDate();
    }
    month=monthList[date.getMonth()];
    fullDate=day+' '+month+' '+date.getFullYear();
    return fullDate;
}

var minus_icon=document.getElementsByClassName('minus-icon');
var plus_icon=document.getElementsByClassName('plus-icon');

var i='',attr='',input_field;

for (i=0;i<minus_icon.length;i++){
    minus_icon[i].addEventListener('click',function () {
        attr=this.getAttribute('data-field');
         if(attr=='parent' || attr=='children'){
             input_field=document.getElementsByName(attr)[0];

             if(input_field.value==1){
                 alert("PARENT OR CHILDREN MUST BE 1")
             }else{
              input_field.textContent=input_field.value--;
             }
        }
    });
}

for (i=0;i<plus_icon.length;i++){
    plus_icon[i].addEventListener('click',function () {
        attr=this.getAttribute('data-field');
        if(attr=='parent' || attr=='children'){
            input_field=document.getElementsByName(attr)[0];

            if(input_field.value>=10){
                alert("PARENT OR CHILDREN MUST BE 10")
            }else{
                input_field.textContent=input_field.value++;
            }
        }
    });
}


document.getElementById('close-search-modal').addEventListener('click',function () {
       document.getElementById('search-form-modal').style.display='none';
});
document.getElementById('show-search-modal').addEventListener('click',function () {
    document.getElementById('search-form-modal').style.display='block';
});


