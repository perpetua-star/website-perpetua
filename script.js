


<script>
    document.addEventListener('DOMContentLoaded', function() {
  function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
  }
  
  window.toggleMenu = toggleMenu;
});



    let slides=
    document.querySelectorAll('.slide');
    let index=0;

    function showSlides(){
        slides.forEach (slide=> slide.classList.remove("active"))

        index++;
        if (index >= slides.length) {
            index = 0
        }
        slides[index].classList.add("active");
        setTimeout(showSlides, 3000);
        </script>
    }
    showSlides();

    
const statuses = ["Available", "Busy", "Offline"];
const colors = {
  "Available": "green",
  "Busy": "orange",
  "Offline": "red"
};

setInterval(() =>{</script>
  const allStatus = document.querySelectorAll(".status");

  allStatus.forEach(status => {
    let random = statuses[Math.floor(Math.random() * statuses.length)];
    status.textContent = random;
    status.style.background = colors[random];
  });
}, 5000);

function bookNow(){
   alert("Redirecting to Appointment Booking Page...");
   window.location.href = "booking.html";
}

function openPopup(){
    document.getElementById("bookingPopup").style.display="flex";
}

function closePopup(){
    document.getElementById("bookingPopup").style.display="none";
}

    








