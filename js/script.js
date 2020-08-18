


let http = new XMLHttpRequest();
let myData = [];
getData('general')

function getData(Category){
    http.open("GET","http://newsapi.org/v2/top-headlines?country=eg&category="+Category+"&apiKey=534f070a5315482788ab95d9fd8fa01f");
    http.send();
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ==200)
        {
            myData = JSON.parse(this.response).articles ;
            displayData();
        }
}
}

function displayData(){
    let data = ``;
    for(let i=0 ; i<myData.length ; i++)
    {
        data+= `<div class="col-md-3 pb-2">
            <div>
                <img class="w-100" src="`+myData[i].urlToImage+`"/>
                <h5>`+myData[i].title+`</h5>
                <p class="text-right">`+myData[i].description+`</p>
                <a class="btn btn-primary" href="`+myData[i].url+`">source</a>
            </div>
        </div>`
    }
    document.getElementById('rowResult').innerHTML = data ;
}


let links = document.getElementsByClassName('nav-link');
for(let i=0 ; i<links.length ; i++){
    links[i].addEventListener('click',function(e){
        getData(e.target.text)
    })
}

