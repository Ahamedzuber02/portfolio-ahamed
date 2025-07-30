

const access = {
  service_id: "service_fwngunr",
  public_key: "ate9hYfsrLGTYqKLk",
  template_id: "template_1107ybq",
};

(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: access.public_key,
  });
})();

window.onload = function () {
  const formElement = document.getElementById("contact-form");
  
  formElement.addEventListener("submit", function (event) {
    event.preventDefault();
    // these IDs from the previous steps
    emailjs.sendForm(access.service_id, access.template_id, formElement).then(
      () => {
        alert("SENT SUCCESS!");
        formElement.reset();
      },
      (error) => {
        alert("SENT FAILED!. SOMETHING WENT WRONG");
      }
    );
  });
};
