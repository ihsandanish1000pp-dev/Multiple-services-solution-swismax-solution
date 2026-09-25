// ============================================
// SERVICES DATA
// ============================================
let services = [

    {
        id: 1,
        name: "Construction",
        category: "Business",
        icon: "🏗️",
        price: 50000,
        description: "Professional construction and building services."
    },

    {
        id: 2,
        name: "Travel & Tourism",
        category: "Travel",
        icon: "✈️",
        price: 15000,
        description: "Complete travel and tourism solutions."
    },

    {
        id: 3,
        name: "Shopping",
        category: "Business",
        icon: "🛒",
        price: 5000,
        description: "Online shopping and product sourcing services."
    },

    {
        id: 4,
        name: "Logistics",
        category: "Business",
        icon: "🚚",
        price: 20000,
        description: "Fast and reliable logistics solutions."
    },

    {
        id: 5,
        name: "IT Solutions",
        category: "Technology",
        icon: "💻",
        price: 30000,
        description: "Website, software and IT solutions."
    },

    {
        id: 6,
        name: "Real Estate",
        category: "Property",
        icon: "🏠",
        price: 100000,
        description: "Property buying, selling and consultation."
    },

    {
        id: 7,
        name: "Trading",
        category: "Business",
        icon: "📦",
        price: 25000,
        description: "Professional trading and business solutions."
    },

    {
        id: 8,
        name: "Consultancy",
        category: "Business",
        icon: "📊",
        price: 10000,
        description: "Professional business consultancy services."
    }

];


// ============================================
// VARIABLES
// ============================================

let servicesContainer =
    document.getElementById("servicesContainer");

let searchInput =
    document.getElementById("searchInput");

let searchBtn =
    document.getElementById("searchBtn");

let categoryButtons =
    document.querySelectorAll(".category-btn");

let wishlistContainer =
    document.getElementById("wishlistContainer");

let wishlistCount =
    document.getElementById("wishlistCount");

let wishlist =
    JSON.parse(localStorage.getItem("wishlist")) || [];


// ============================================
// FUNCTION: DISPLAY SERVICES
// ============================================

function displayServices(serviceList) {

    servicesContainer.innerHTML = "";

    if (serviceList.length === 0) {

        servicesContainer.innerHTML = `
            <p>No services found.</p>
        `;

        return;
    }


    // map()
    let cards = serviceList.map(function (service) {

        return `
            <div class="service-card">

                <div class="service-icon">
                    ${service.icon}
                </div>

                <h3>${service.name}</h3>

                <p>
                    ${service.description}
                </p>

                <div class="price">
                    Starting from Rs. ${service.price}
                </div>

                <div class="card-buttons">

                    <button
                        class="view-btn"
                        onclick="viewService(${service.id})">
                        View More
                    </button>

                    <button
                        class="wishlist-btn"
                        onclick="addToWishlist(${service.id})">
                        ❤️
                    </button>

                </div>

            </div>
        `;

    });


    servicesContainer.innerHTML =
        cards.join("");

}


// ============================================
// FUNCTION: VIEW SERVICE
// ============================================

function viewService(id) {

    try {

        let service = services.find(function (item) {
            return item.id === id;
        });


        if (!service) {
            throw new Error("Service not found");
        }


        switch (service.category) {

            case "Business":
                alert(
                    service.name +
                    "\n\nBusiness Service"
                );
                break;


            case "Technology":
                alert(
                    service.name +
                    "\n\nTechnology Service"
                );
                break;


            case "Travel":
                alert(
                    service.name +
                    "\n\nTravel Service"
                );
                break;


            case "Property":
                alert(
                    service.name +
                    "\n\nProperty Service"
                );
                break;


            default:
                alert(service.name);

        }

    } catch (error) {

        alert("Sorry! Service not found.");

        console.log(error);

    }

}


// ============================================
// FUNCTION: ADD TO WISHLIST
// ============================================

function addToWishlist(id) {

    let service = services.find(function (item) {
        return item.id === id;
    });


    if (!service) {
        return;
    }


    let alreadyAdded = wishlist.find(function (item) {
        return item.id === id;
    });


    if (alreadyAdded) {

        alert("Service already in wishlist!");

        return;
    }


    wishlist.push(service);


    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );


    displayWishlist();

}


// ============================================
// FUNCTION: DISPLAY WISHLIST
// ============================================

function displayWishlist() {

    wishlistContainer.innerHTML = "";


    if (wishlist.length === 0) {

        wishlistContainer.innerHTML =
            "<p>No services in wishlist.</p>";

        wishlistCount.innerText = 0;

        return;
    }


    // for...of
    for (let service of wishlist) {

        wishlistContainer.innerHTML += `

            <div class="wishlist-item">

                <div>
                    <strong>
                        ${service.icon}
                        ${service.name}
                    </strong>

                    <p>
                        ${service.category}
                    </p>
                </div>

                <button
                    class="remove-btn"
                    onclick="removeFromWishlist(${service.id})">
                    Remove
                </button>

            </div>

        `;

    }


    wishlistCount.innerText = wishlist.length;

}


// ============================================
// REMOVE FROM WISHLIST
// ============================================

function removeFromWishlist(id) {

    wishlist =
        wishlist.filter(function (service) {
            return service.id !== id;
        });


    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );


    displayWishlist();

}


// ============================================
// SEARCH
// ============================================

function searchServices() {

    let text =
        searchInput.value.toLowerCase();


    let result =
        services.filter(function (service) {

            return service.name
                .toLowerCase()
                .includes(text);

        });


    displayServices(result);

}


searchBtn.addEventListener(
    "click",
    searchServices
);


// Search while typing

searchInput.addEventListener(
    "input",
    searchServices
);


// ============================================
// CATEGORY FILTER
// ============================================

categoryButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            categoryButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });


            button.classList.add("active");


            let category =
                button.dataset.category;


            if (category === "All") {

                displayServices(services);

                return;
            }


            let result =
                services.filter(function (service) {

                    return service.category === category;

                });


            displayServices(result);

        }
    );

});


// ============================================
// MOBILE MENU
// ============================================

let menuBtn =
    document.getElementById("menuBtn");

let navLinks =
    document.getElementById("navLinks");






    




// ============================================
// CONTACT FORM
// ============================================

let contactForm =
    document.getElementById("contactForm");

let formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        let name =
            document.getElementById("userName").value;

        let email =
            document.getElementById("userEmail").value;

        let message =
            document.getElementById("userMessage").value;


        try {

            if (
                name === "" ||
                email === "" ||
                message === ""
            ) {

                throw new Error(
                    "Please fill all fields"
                );

            }


            formMessage.innerText =
                "Sending message...";


            setTimeout(function () {

                formMessage.innerText =
                    "✓ Message sent successfully!";

                contactForm.reset();

            }, 2000);

        } catch (error) {

            formMessage.innerText =
                "❌ " + error.message;

        }

    }
);


// ============================================
// STATISTICS COUNTER
// ============================================

function startCounter(elementId, target) {

    let count = 0;

    let element =
        document.getElementById(elementId);


    let timer =
        setInterval(function () {

            count++;

            element.innerText = count;


            if (count >= target) {

                clearInterval(timer);

            }

        }, 5);

}


// Start counters

startCounter(
    "clientCount",
    500
);

startCounter(
    "projectCount",
    150
);

startCounter(
    "serviceCount",
    services.length
);

startCounter(
    "experienceCount",
    10
);


// ============================================
// FOR LOOP PRACTICE
// ============================================

for (let i = 0; i < services.length; i++) {

    console.log(
        services[i].name
    );

}


// ============================================
// WHILE LOOP PRACTICE
// ============================================

let number = 0;

while (number < 3) {

    console.log(
        "Website loaded: " + number
    );

    number++;

}





// ============================================
// WISHLIST SIDE BAR
// ============================================

let wishlistBtn =
    document.getElementById("wishlistBtn");

let wishlistSidebar =
    document.getElementById("wishlistSidebar");

let closeWishlist =
    document.getElementById("closeWishlist");

let wishlistSideItems =
    document.getElementById("wishlistSideItems");


// Open Wishlist
wishlistBtn.addEventListener("click", function () {

    wishlistSidebar.classList.add("active");

    displaySideWishlist();

});


// Close Wishlist
closeWishlist.addEventListener("click", function () {

    wishlistSidebar.classList.remove("active");

});



menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    menuBtn.classList.toggle("active");

});







// ============================================
// INITIAL DISPLAY
// ============================================

displayServices(services);

displayWishlist();