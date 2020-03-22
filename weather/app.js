window.addEventListener("load", ()=> {
    let long;
    let lat;
    let temperatureDescription = document.querySelector(".desc");
    let temperatureDegree = document.querySelector(".degree");
    let timezone = document.querySelector(".location-timezone");
    let temperatureSection = document.querySelector(".temp");
    const temperatureSpan = document.querySelector("span");


    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
            long = position.coords.latitude;
            lat = position.coords.latitude;
            // Link Api
            const proxy = "http://cors-anywhere.herokuapp.com/"
            const api = `${proxy}https://api.darksky.net/forecast/399529fd46ffda2ac11cc053d25edaf1/${lat},${long}`;
            fetch(api)
            .then(response =>{
                return response.json();
            })
            .then(data =>{
                console.log(data);
                const { temperature, summary, icon } = data.currently;
                // Set DOM elements from the API
                temperatureDegree.textContent = temperature;
                temperatureDescription.textContent = summary;
                timezone.textContent = data.timezone;
                // Set Icon
                setIcons(icon, document.querySelector(".icon"));
                // Change temp
                temperatureSection.addEventListener('click', () =>{
                    if (temperatureSpan === "F") {
                        temperatureSpan.textContent = "C";
                    } else{
                        temperatureSpan.textContent = "F";
                    }
                })

            })
        });
    }
    function setIcons(icon, iconID) {
        const skycons = new Skycons({color: "white"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }
});

// else{ h1.textContent = "Whoops! Please allow geo location in site settings."; };