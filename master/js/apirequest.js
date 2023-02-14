//newsletter
function sendEmailRequest() {
    const form = document.getElementById("api-form");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const email = document.querySelector("#email").value;
      // Make the API request
      fetch("https://localhost:7179/api/ContactForm/NewsLetter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          // The data you want to send in the API request
                email:email,
        })
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("API request failed");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Success:", data);
          // Handle the success
    
          // For example, you could show a success message
          const successMessage = document.createElement("success-message");
          successMessage.innerHTML = "NewsLetter added Successfully!";
          successMessage.classList.add("success-message");
          form.appendChild(successMessage);
          document.getElementById("success-message").style.display = "flex";
          // Or you could clear the form fields
          form.reset();
        })
        .catch((error) => {
          console.error("Error:", error);
          // Handle the error
    
          // For example, you could show an error message
          const errorMessage = document.createElement("p");
          errorMessage.innerHTML = "API request failed. Please try again later.";
          errorMessage.classList.add("error-message");
          form.appendChild(errorMessage);
        });
    });
}