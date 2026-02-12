// numver counter

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / 200;
    if (count < target) {
      counter.innerText = `${Math.ceil(count + increment)}`;
      setTimeout(updateCounter, 1);
    } else counter.innerText = target;
  };
  updateCounter();
});


// for AOS Animation

AOS.init();

const cursor = document.querySelector(".custom-cursor");
const cursorText = cursor.querySelector(".cursor-text");

// 1. Mouse Follower Logic
const xTo = gsap.quickTo(cursor, "x", { duration: 0.4, ease: "power3" }),
  yTo = gsap.quickTo(cursor, "y", { duration: 0.4, ease: "power3" });

window.addEventListener("mousemove", e => {
  xTo(e.clientX - (cursor.offsetWidth / 2));
  yTo(e.clientY - (cursor.offsetHeight / 2));
});

// 2. Interaction Logic for Phase 4 (Slider)
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    cursor.classList.add("active");
    cursorText.innerText = "DRAG";
  });
  card.addEventListener("mouseleave", () => {
    cursor.classList.remove("active");
    cursorText.innerText = "";
  });
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_pgrs7fc",
    "template_4j7bu8a",
    this
  ).then(function () {
    document.getElementById("formStatus").innerHTML =
      "<span class='text-success'>Message sent successfully!</span>";
    document.getElementById("contactForm").reset();
  }, function (error) {
    document.getElementById("formStatus").innerHTML =
      "<span class='text-danger'>Failed to send message. Try again.</span>";
    console.log("EmailJS Error:", error);
  });
});