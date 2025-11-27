function sendToWhatsapp() {
    let number = "+917377785172";

    let name = encodeURIComponent(document.getElementById('name').value);
    let email = encodeURIComponent(document.getElementById('email').value);
    let message = encodeURIComponent(document.getElementById('message').value);

    let url = "https://wa.me/" + number + "?text="
        + "Name%20:%20" + name + "%0a"
        + "Email%20:%20" + email + "%0a"
        + "Message%20:%20" + message + "%0a%0a";

    window.open(url, '_blank').focus();
}
