document.addEventListener("DOMContentLoaded", () => {
    let apiKey = "0948a7f0f2dd40f9ac665655231202"

    document.querySelector(".btn-search").addEventListener("click", () => {
        const request = new XMLHttpRequest();
        const keyword = document.querySelector(".keyword");
        
        
        request.onload = function(){
            console.log(JSON.parse(this.responseText));
            let element = "";
            
            element = showElement(JSON.parse(this.responseText));
            
            container.innerHTML = element;
        }
        request.open('GET', `http://api.weatherapi.com/v1/current.json?key=${apiKey}&aqi=no&q=${keyword.value}`);
        request.send();
    })

    function showElement(data) {
        
        return `<h3>${data.location.name}, ${data.location.region}, ${data.location.country}</h3>
        <div class="box">
            <img src="https:${data.current.condition.icon}" alt="">
            <h1>${data.current.temp_c} ℃</h1>
        </div>
        <p>${data.current.last_updated}</p>
        <p>${data.current.condition.text}</p>`;
    }
    const body = document.querySelector("body");
    
    const dateHeader = `${data.current.last_updated}`;
    const time = dateHeader.split(" ")[4];
    const hour = time.split(":")[0];
    
    if (hour >= 5 && hour < 11) {
      body.style.background = "url(image0.jpg)";
    } else if (hour >= 11 && hour < 16) {
      body.style.background = "url(image0.jpg)";
    } else if (hour >= 16 && hour < 20) {
      body.style.background = "url(image0.jpg)";
    } else {
      body.style.background = "url(image0.jpg)";
    }
})




