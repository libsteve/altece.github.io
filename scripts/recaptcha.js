class sbrun {
    static requestJson(method, path, parameters, callback) {
        const xhttp = new XMLHttpRequest();
        xhttp.open(method, path, true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.setRequestHeader("Accept", "application/json");
        xhttp.responseType = "json";
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState === XMLHttpRequest.DONE && xhttp.status === 200) {
                callback(xhttp.response);
            }
        };
        xhttp.send(parameters);
    }
}

sbrun.recaptcha = class {
    // static siteKey: string
    // static serverPath: string

    static didGenerateToken(userToken) {
        if (siteKey == undefined) { throw "sbrun.recaptcha.serverPath is not set."; }
        sbrun.requestJson('POST', sbrun.recaptcha.serverPath, response => {
            const element = document.getElementById('email-address-location');
            if (response.success) {
                const link = document.createElement('a');
                link.setAttribute('href', `mailto:${response.email}`);
                link.innerText = response.email;
                element.appendChild(link);
            } else {
                element.innerText = 
                    `Sorry, but reCAPTCHA seems to think you might not be human,
                     so I won't divulge my email address.`;
            }
        });
    }

    static didLoad() {
        if (siteKey == undefined) { throw "sbrun.recaptcha.siteKey is not set."; }
        const elementId = 'email-recaptcha';
        grecaptcha.render(elementId, {
            'siteKey': sbrun.recaptcha.siteKey,
            'callback': 'sbrun.recaptcha.didGenerateToken'
        });
        grecaptcha.execute(elementId);
    }
}

(function() {
    const grecaptcha = 'https://www.google.com/recaptcha/api.js';
    const onload = 'sbrun.recaptcha.didLoad';
    const source = `${grecaptcha}?onload=${onload}&render=explicit`;
    const script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', source);
    script.setAttribute('async', '');
    script.setAttribute('defer', '');
    document.head.appendChild(recaptchaScript);
}());
