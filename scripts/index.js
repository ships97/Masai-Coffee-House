// Add the coffee to local storage with key "coffee"
const url = `https://masai-mock-api.herokuapp.com/coffee/menu`;

const container = document.getElementById("menu");

fetch(url).then(function(res){
    return res.json();
})
.then(function(res){
    // console.log(res);
    res = res.menu.data;
    append(res);
})
.catch(function(err){
    console.log(err);
})

let count = 0;
data = JSON.parse(localStorage.getItem("coffee")) || [];
function append(res){
    res.forEach(function(el){
        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = el.image;

        let name = document.createElement("p");
        name.setAttribute("id","name");
        name.innerText = el.title;

        let price = document.createElement("p");
        price.setAttribute("id","price");
        price.innerText = el.price;

        let button = document.createElement("button");
        button.setAttribute("id","add_to_bucket");
        button.innerText = "Add to bucket";
        button.addEventListener("click",function(){
            addtobucket(el);
        })

        div.append(image,name,price,button);

        container.append(div);

        function addtobucket(el){
            data.push(el);
            count++;
            document.querySelector("#coffee_count").innerText = count;
            localStorage.setItem("coffee",JSON.stringify(data));
        }
    })
}