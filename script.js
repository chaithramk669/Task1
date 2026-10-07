"use strict";

const form = document.getElementById("contact-form");
const statusMessage = document.getElementById("form-status");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const subject = document.getElementById("subject");
        const message = document.getElementById("message");

        let isValid = true;

        form.querySelectorAll("[aria-invalid]").forEach((field) => {
            field.removeAttribute("aria-invalid");
        });

        if (!name.value.trim()) {
            name.setAttribute("aria-invalid", "true");
            isValid = false;
        }

        if (!email.validity.valid || !email.value.trim()) {
            email.setAttribute("aria-invalid", "true");
            isValid = false;
        }

        if (!subject.value.trim()) {
            subject.setAttribute("aria-invalid", "true");
            isValid = false;
        }

        if (!message.value.trim()) {
            message.setAttribute("aria-invalid", "true");
            isValid = false;
        }

        if (!isValid) {
            statusMessage.textContent =
                "Please complete all required fields correctly.";

            const firstInvalid =
                form.querySelector('[aria-invalid="true"]');

            if (firstInvalid) {
                firstInvalid.focus();
            }

            return;
        }

        statusMessage.textContent =
            "Thank you! Your message has been validated successfully.";

        form.reset();
    });
}