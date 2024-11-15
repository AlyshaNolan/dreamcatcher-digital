
export default () => {
    return {
        show_form: true,

        submitForm(event, element) {
            event.preventDefault();

            var request = new XMLHttpRequest();
              
            request.addEventListener("load", () => {
                console.log(request.status)
                if (request.status === 303 || request.status === 200) { // CloudCannon redirects on success
                    console.log("success")
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