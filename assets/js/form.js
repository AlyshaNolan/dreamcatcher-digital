
export default () => {
    return {
        show_form: true,

        // Helper function to get form data in the supported format
        getFormDataString(formEl) {
            var formData = new FormData(formEl),
            data = [];

            for (var keyValue of formData) {
                data.push(encodeURIComponent(keyValue[0]) + "=" + encodeURIComponent(keyValue[1]));
            }

            return data.join("&");
        },

        submitForm(event, element) {
            event.preventDefault();

            var request = new XMLHttpRequest();
              
            request.addEventListener("load", () => {
                if (request.status === 303 || request.status === 200) { // CloudCannon redirects on success
                    this.show = false;
                    let form = element.parentNode;
                    form.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            });

            request.open(element.method, element.action);
            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            request.send(this.getFormDataString(element));

            this.show_form = false;
        }
    }
}