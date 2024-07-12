document.addEventListener('DOMContentLoaded', function() {
    loadEvents();
    loadMessages();
    loadProfile();
    showSlides(); // Call the slideshow function

    const messageForm = document.getElementById('message-form');
    messageForm.addEventListener('submit', function(event) {
        event.preventDefault();
        sendMessage();
    });

    const editProfileButton = document.getElementById('edit-profile');
    editProfileButton.addEventListener('click', function() {
        editProfile();
    });
});

// Automatic slideshow function
function showSlides() {
    var slideIndex = 0;
    const slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Function to load events
function loadEvents() {
    const eventList = document.getElementById('event-list');
    const events = [
        'projects peer review - july 24',
        'Closing ceremony - july 25',
        'bye bye - july 25'
    ];
    events.forEach(event => {
        const li = document.createElement('li');
        li.textContent = event;
        eventList.appendChild(li);
    });
}

// Function to load messages
function loadMessages() {
    const messageContainer = document.getElementById('message-container');
    const messages = [
        { from: 'Mentor A', content: 'Please submit your lab report by next week.' },
        { from: 'Mentor B', content: 'Contact prof.mohamed and ask him if we can use his Microscope.' }
    ];
    messages.forEach(msg => {
        const div = document.createElement('div');
        div.className = 'message';
        div.innerHTML = `<strong>${msg.from}:</strong> <p>${msg.content}</p>`;
        messageContainer.appendChild(div);
    });
}

// Function to send a message
function sendMessage() {
    const mentor = document.getElementById('mentor').value;
    const message = document.getElementById('message').value;
    alert(`Message sent to ${mentor}: ${message}`);
    // Here you can add code to send the message to your server
}

// Function to load profile information
function loadProfile() {
    const profileInfo = document.getElementById('profile-info');
    const profile = {
        name: 'FIRAS ALGHAMDI',
        email: 'TEST@TEST.COM',
        major: 'CHEMISTRY'
    };
    profileInfo.innerHTML = `
        <p><strong>Name:</strong> ${profile.name}</p>
        <p><strong>Email:</strong> ${profile.email}</p>
        <p><strong>Major:</strong> ${profile.major}</p>
    `;
}

// Function to edit profile (placeholder)
function editProfile() {
    alert('Edit Profile functionality not yet implemented');
    // Here you can add code to edit the profile
}
