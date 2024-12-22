const fetch = require("node-fetch");

exports.handler = async (event) => {
    const formData = JSON.parse(event.body);

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            access_key: process.env.WEB3FORMS_ACCESS_KEY,
            ...formData,
        }),
    });

    const result = await response.json();
    return {
        statusCode: response.status === 200 ? 200 : 500,
        body: JSON.stringify(result),
    };
};
