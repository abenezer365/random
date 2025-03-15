$("#button").on("click", random);
async function random() {
    try {
        $("#button").text("Regenerating...").css({
            "background-color": "gray",
            "color": "white"
        });

        $("#wrapper").html(`<div class="loader"></div>`);
        
        let randomData = await fetch("https://randomuser.me/api/");
        let json = await randomData.json();
        let user = json.results[0];
        $("#wrapper").html(`
            <img src="${user.picture.large}" alt="">
            <h2>Name:${user.name.title}. ${user.name.first} ${user.name.last}</h2>
            <h3>Age:${user.dob.age} </h3>
            <h3>Location: ${user.location.city}, ${user.location.country}</h3>
            <h3> Phone number:${user.phone} </h3>
            `).css({
                "padding-top": "100px",
                "margin-left": "auto",
                "margin-right": "auto",
                "text-align": "center",
                "font-family": "'Times New Roman', Times, serif",
                "font-weight": "700"
            })
            // user data loaded succesfully
            setTimeout(()=>{
                $("#button").text("Regenerate")
            $("#button").css({
                "background-color": "chartreuse"
            })
            }, 100)
        
    } catch (error) {
        alert("Unable to load user's data due to API problem")
    }
}
