const initDetailsToggle = () => {
  if (window.location.href.match(/events/)){
    const eventDetailsBtn = document.getElementById("event-details-btn");
    const organiserDetailsBtn = document.getElementById("organiser-details-btn");
    const eventCard = document.getElementById("event-card");
    const organiserCard = document.getElementById("organiser-card");
    const interests = document.querySelectorAll(".event-interest");
    const userList = document.getElementById("attendee-list-event");
    const interestsLists = document.querySelectorAll(".interest-event-list");
    const attendeeBtn = document.getElementById("event-attendee-btn");

    interests.forEach((interest) => {
      interest.addEventListener("click", (event) => {
        interestsLists.forEach((interestList) => {
          interestList.style.display = "none";
        });
        document.getElementById(event.target.dataset.interest).style.display = "block";
        attendeeBtn.style.display = "none";
        userList.style.display = "none";
      });
    });

    eventDetailsBtn.addEventListener("click", (event) => {
      userList.style.display = "block";
      interestsLists.forEach((interestList) => {
        interestList.style.display = "none";
      });
      eventCard.style.display = "block";
      organiserCard.style.display = "none";
      attendeeBtn.style.display = "block";
    });

    organiserDetailsBtn.addEventListener("click", (event) => {
      interestsLists.forEach((interestList) => {
        interestList.style.display = "none";
      });
      eventCard.style.display = "none";
      organiserCard.style.display = "block";

    });
  }
  if (window.location.href.match(/users/)){
    const profileDetailsBtn = document.getElementById("profile-details-btn");
    const followDetailsBtn = document.getElementById("follow-details-btn");
    const profileEventsList = document.getElementById("profile-events-list");
    const profileOrganisersList = document.getElementById("profile-organisers-list");
    const profileCard = document.querySelector(".body-card");
    const originalHeigth = profileCard.offsetHeight;

    followDetailsBtn.addEventListener("click", (event) => {
      profileEventsList.classList.remove("animated", "fadeInUp");
      profileEventsList.classList.add("animated", "fadeOutDown");
      setTimeout(()=>{
        console.log(originalHeigth);
        profileEventsList.style.display = "none";
        profileOrganisersList.classList.remove("animated", "fadeOutDown");
        profileOrganisersList.classList.add("animated", "fadeInUp");
        profileOrganisersList.style.display = "block";
        profileCard.style.height = originalHeigth + "px";
      }, 600);
    });

    profileDetailsBtn.addEventListener("click", () => {
      profileOrganisersList.classList.remove("animated", "fadeInUp");
      profileOrganisersList.classList.add("animated", "fadeOutDown");
      setTimeout(()=>{
        profileOrganisersList.style.display = "none";
        profileEventsList.classList.remove("animated", "fadeOutDown");
        profileEventsList.classList.add("animated", "fadeInUp");
        profileEventsList.style.display = "block";
      }, 600);
    });

  }

};

export { initDetailsToggle };
