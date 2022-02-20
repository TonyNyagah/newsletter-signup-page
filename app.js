// require("dotenv").config({ path: __dirname + '/.env' });

const mailchimp = require("@mailchimp/mailchimp_marketing");

const express = require("express");
const bodyParser = require("body-parser");
const md5 = require("md5");
const app = express();
const port = process.env.port || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html");
});

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_SERVER,
})

app.post("/", function (req, res) {
    const firstName = req.body.firstname;
    const lastName = req.body.lastname;
    const email = req.body.email;

    const listId = process.env.MAILCHIMP_LIST_ID;

    const subscribingUser = {
        firstName: firstName,
        lastName: lastName,
        email: email
    }

    const subscriberHash = md5((subscribingUser.email).toLowerCase());

    const run = async () => {
        const response = await mailchimp.lists.setListMember(listId, subscriberHash, {
            email_address: subscribingUser.email,
            status: "subscribed",
            merge_fields: {
                FNAME: subscribingUser.firstName,
                LNAME: subscribingUser.lastName
            }
        });
        // res.send(`${response}`);
        // console.log(`Successfully added contact as an audience member. The contact's id is ${response.id}.`);
        console.log(`${firstName} ${lastName} with email ${email} has been added to the audience.`);
        res.sendFile(__dirname + "/success.html");
    }

    try {
        run();
    } catch (error) {
        res.sendFile(__dirname + "/failure.html");
    }
});

app.post("/failure", (req, res) => {
    res.redirect("/");
});