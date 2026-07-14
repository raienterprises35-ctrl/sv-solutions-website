console.log("SV Solutions Website Loaded");

/*==========================
Animated Counter
===========================*/

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = +counter.dataset.target;

            let current = 0;

            const increment = target / 120;

            const updateCounter = () => {

                if(current < target){

                    current += increment;

                    counter.innerText = Math.ceil(current);

                    requestAnimationFrame(updateCounter);

                }else{

                    counter.innerText = target + "+";

                }

            }

            updateCounter();

            observer.unobserve(counter);

        }

    });

},{threshold:0.5});

counters.forEach(counter=>{

    observer.observe(counter);

});
/*==========================
Shipment Tracking
===========================*/

function trackShipment(){

    const company=document.getElementById("courierCompany").value;

    const tracking=document.getElementById("trackingNumber").value.trim();

    if(company===""){

        alert("Please select a courier company.");

        return;

    }

    const urls = {

    bluedart: "https://www.bluedart.com/tracking",

    delhivery: "https://www.delhivery.com/tracking",

    gati: "https://gaticouriertracking.com/",

    indiapost: "https://www.indiapost.gov.in/",

    dpworld: "https://www.logistics.dpworld.com/",

    movin: "https://www.movin.in/shipment/track"

    };

    window.open(urls[company],"_blank");

}
/*==========================
WhatsApp Quote
===========================*/

function sendQuote(){

    let name=document.getElementById("customerName").value;

    let phone=document.getElementById("customerPhone").value;

    let pickup=document.getElementById("pickup").value;

    let destination=document.getElementById("destination").value;

    let service=document.getElementById("serviceType").value;

    let weight=document.getElementById("weight").value;

    let date=document.getElementById("movingDate").value;

    if(name==="" || phone===""){

        alert("Please enter your Name and Mobile Number.");

        return;

    }

    let message=
`*New Quote Request*

Name: ${name}

Phone: ${phone}

Pickup: ${pickup}

Destination: ${destination}

Service: ${service}

Weight / Items: ${weight}

Moving Date: ${date}`;

    let url=`https://wa.me/919289663969?text=${encodeURIComponent(message)}`;

    window.open(url,"_blank");

}
/*==========================
Smooth Scroll
===========================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});
/*==========================
CONTACT FORM
===========================*/

function sendContact(){

    let name=document.getElementById("contactName").value;

    let phone=document.getElementById("contactPhone").value;

    let email=document.getElementById("contactEmail").value;

    let message=document.getElementById("contactMessage").value;

    if(name==="" || phone==="" || message===""){

        alert("Please fill all required fields.");

        return;

    }

    let whatsappMessage=

`*New Website Enquiry*

Name: ${name}

Phone: ${phone}

Email: ${email}

Message:

${message}`;

    let url=`https://wa.me/919289663969?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(url,"_blank");

}