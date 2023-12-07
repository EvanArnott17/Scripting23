console.log('Test 1 2 Test 1 2')

function write(){
    var CityName = document.getElementById('City').value;
    console.log(CityName);

    var RestaurantName = document.getElementById('Restaurant').value;
    console.log(RestaurantName)

    var FoodDish = document.getElementById('Dish').value;
    console.log(FoodDish)

    var Country = document.getElementById('Country').value;
    console.log(Country)

    var DayOfWeek = document.getElementById('Weekday').value;
    console.log(DayOfWeek)

    var Color = document.getElementById('Color').value;
    console.log(Color)

    var Vehicle = document.getElementById('Vehicle').value;
    console.log(Vehicle)

    var Celebrity = document.getElementById('Celebrity').value;
    console.log(Celebrity)

    var Number = document.getElementById('Number').value;
    console.log(Number)

    var Edible = document.getElementById('Food').value;
    console.log(Edible)

    var SocialMedia;

    if(document.querySelector('input[name="SocialMedia"]:checked') !=null){

    SocialMedia=document.querySelector('input[name="SocialMedia"]:checked').value;

    }

    else{

    SocialMedia="";

    }

    console.log(SocialMedia)

    document.getElementById('output').innerHTML = "<h2>The Secret Ingredient</h2>"
    document.getElementById('output').innerHTML += "	Located in the heart of the city of " + CityName + " there was a famous restaurant called " + RestaurantName + ". This restaurant was famous for it’s " + FoodDish + ". The dish was so good that tourists would come from as far as " + Country + " just to try it. People were unable to understand what it was that made the dish so delicious. Most people assumed that it was due to the addition of some secret ingredient, and it was a well-known fact that every " + DayOfWeek + " a mysterious " + Color + " package was dropped off at the restaurant by a " + Vehicle + ". The contents of this package were a highly debated topic among the restaurant customers. Well, it was widely agreed that the secret ingredient was delivered in this package some people had concerns about what that secret ingredient was. Some people like " + Celebrity + " thought that the reason that no one knew what the secret ingredient was because it was something that should not be consumed by humans. So,  a plan was hatched to find out once and for all what was in the package. The plan was to get hired as a chef at the restaurant. The chefs had to be using whatever was in the package so, if they were hired as a chef they would get to see firsthand what the secret ingredient was. It didn’t take long for them to get a job interview, probably due to their celebrity status.  The interview was over quickly, and they were hired on the spot, but before they were hired, they were given a contract to sign that made them promise that they would not share anything that went on in the kitchen. After signing the contract in all " + Number + " places they were told that they would start on " + DayOfWeek + ", the same day the package was delivered. On that day the time finally came the package was delivered and looking inside they saw that the secret ingredient was " + Edible + ". " + Celebrity + " was shocked and using " + SocialMedia + " spread the news all over the internet. "

    document.getElementById('output').innerHTML += "<img class='img-fluid mt-3' src='images/Mystery_Parcel.jpg' alt='a picture of a mysterious box'>"
}