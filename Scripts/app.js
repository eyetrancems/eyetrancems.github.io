// IIFE -- Immediately Invoked Function Express
// AKA anonymous self-executing function
"use strict";
(function(){

    function DisplayHome()
    {
        console.log("Home Page");
        
        //let AboutUsButton = document.getElementById("AboutUsButton");


        // 1st fattest-  jQuery way - returns a array of elements that matchthe query and attaches a click event
        // $("#AboutUsButton").on("click", () =>
        // {
        //     location.href = "about.html";
        // });

        // 2nd fattest - javascript was - returns a array (collection) of elements and loops through all of them
        // document.querySelectorAll("#AboutUsButton").forEach("click", function(element){
            
        //     // attach a click even to each element in the list
        //     element.addEventListener("click", function(){
        //         location.href = "about.html";
        //     });
            
        // });


        // Lean - > javascript was but return  one element and attaches a click event to it
        document.querySelector("#AboutUsButton").addEventListener("click", () =>{
            location.href = "about.html";
        });
        
        // 3rd leanest - javascript was but only returns  one element and attaches a click event to it
        // document.getElementById("AboutUsButton").addEventListener("click", function(){
        //     location.href = "about.html";
        // });
        
        


        // AboutUsButton.addEventListener("click", function()
        // {
        //     location.href = "about.html";
        // });

        // Step 1 - get a reference to an entry point(s) (insertion / deletion point)
        //let MainContent = document.getElementsByTagName("main")[0];
        let DocumentBody = document.body;
        //console.log(MainContent);

        // Step 2 - create a HTML Element in memory
        let MainParagraph = document.createElement("p");
        let Article = document.createElement("article");
        let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3">This is the Article Paragraph"</p>`

        
        // Step 3 - configure new element

        // MainParagraph.setAttribute("id", "MainParagraph");
        // MainParagraph.setAttribute("class", "mt-3");

        // let FirstString = "This is";
        // let SecondString = `${FirstString} the Main Paragraph`;

        // MainParagraph.textContent = "This is the Main Paragraph!";    

        Article.setAttribute("class", "container");

        // Step 4 - perform insertion / deletion

        // example of insert after
        //MainContent.appendChild(MainParagraph);
        $("main").append(`<p id="MainParagraph" class"mt-3">This is the Main Paragraph.</p>`);

        //Article.innerHTML = ArticleParagraph;
        $("body").append(`<article class="container"><p id="ArticleParagraph" class="mt-3">This is the Article Paragraph</p>`);
        // DocumentBody.innerHTML = `
        //     <div class = "container">
        //     <h1 class = "display-1">Hello, World!</h1>
        //     <p class="mt-5">and ... what do you think of this!
        //     </p>
        //     </div>     
        // `;

        // example of insert before
        //MainContent.before(MainParagraph);

        // example of deletion
        //document.getElementById("AboutUsButton").remove();
        //AboutUsButton.remove();

        // ES6 and HTML5 =>

        

    }

    function DisplayAboutPage()
    {
        console.log("About Us");
    }

    function DisplayProjectsPage()
    {
        console.log("Our Projects Page");
    }

    function DisplayServicesPage()
    {
        console.log("Our Services Page");
    }

    function TestFullName()
    {
        let messageArea = $("#messageArea").hide();

        let fullNamePattern = /^([A-Z][a-z]{1,3}.?\s)?([A-Z][a-z]{1,})+([\s,-]([A-Z][a-z]{1,}))*$/;

        $("#fullName").on("blur", function()
        {
            let fullNameText = $(this).val();

            if (!fullNamePattern.test(fullNameText)){

                $(this).trigger("focus").trigger("select"); // trigger the focus and select
                //$(this).trigger("focus");
                //$(this).trigger("select");
                messageArea.show().addClass("alert alert-danger").text("Please enter a valid Full Name.");
                // messageArea.show();
                // messageArea.addClass
                // messageArea.text
            }
            else
            {
                messageArea.removeAttr("class").hide();
            }
        });

    }

    function TestContactNumber()
    {
        let messageArea = $("#messageArea").hide();

        let contactNumberPattern = /^(\+\d{1,3}[\s-.])?\(?\d{3}\)?[\s-.]?\d{3}[\s-.]?\d{4}$/;


        $("#contactNumber").on("blur", function()
        {
            let contactNumberText = $(this).val();

            if (!contactNumberPattern.test(contactNumberText)){

                $(this).trigger("focus").trigger("select"); // trigger the focus and select
                //$(this).trigger("focus");
                //$(this).trigger("select");
                messageArea.show().addClass("alert alert-danger").text("Please enter a valid contact number.");
                // messageArea.show();
                // messageArea.addClass
                // messageArea.text
            }
            else
            {
                messageArea.removeAttr("class").hide();
            }
        });

    }

    function TestEmailAddress()
    {
        let messageArea = $("#messageArea").hide();

        let emailAddressPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/;

        $("#emailAddress").on("blur", function()
        {
            let emailAddressText = $(this).val();

            if (!emailAddressPattern.test(emailAddressText)){

                $(this).trigger("focus").trigger("select"); // trigger the focus and select
                //$(this).trigger("focus");
                //$(this).trigger("select");
                messageArea.show().addClass("alert alert-danger").text("Please enter a valid email address.");
                // messageArea.show();
                // messageArea.addClass
                // messageArea.text
            }
            else
            {
                messageArea.removeAttr("class").hide();
            }
        });

    }
    
    
    /**
     * This method replaces three validations for fullName, contactNumber and emailAddress
     * 
     * @param {string} input_field_ID 
     * @param {RegExp} regular_expression 
     * @param {string} error_message 
     */    
    function ValidateField(input_field_ID, regular_expression, error_message)
    {
        let messageArea = $("#messageArea").hide();

        $("#" + input_field_ID).on("blur", function()
        {
            let inputFieldText = $(this).val();

            if (!regular_expression.test(inputFieldText)){

                $(this).trigger("focus").trigger("select"); // trigger the focus and select
                //$(this).trigger("focus");
                //$(this).trigger("select");
                messageArea.show().addClass("alert alert-danger").text(error_message);
                // messageArea.show();
                // messageArea.addClass
                // messageArea.text
            }
            else
            {
                messageArea.removeAttr("class").hide();
            }
        });
    }

    function ContactFormValidation()
    {
        ValidateField("fullName", /^([A-Z][a-z]{1,3}.?\s)?([A-Z][a-z]{1,})+([\s,-]([A-Z][a-z]{1,}))*$/, "Please enter a valid Full Name.");
        ValidateField("contactNumber", /^(\+\d{1,3}[\s-.])?\(?\d{3}\)?[\s-.]?\d{3}[\s-.]?\d{4}$/, "Please enter a valid contact number.")
        ValidateField("emailAddress", /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/ , "Please enter a valid email address.")
    }

    function DisplayContactPage()
    {
        console.log("Contact Us Page");

        ContactFormValidation();

        let sendButton = document.getElementById("sendButton");
        let subscribeCheckbox = document.getElementById("subscribeCheckbox");

        //localStorage.setItem("Test1", "This is my test");
        //localStorage.setItem("Test2", "This is my second test");
        //console.log(localStorage.getItem("Test2"));

        sendButton.addEventListener("click", function()
        {
            
            if(subscribeCheckbox.checked)
            {
                AddContact (fullName.value, contactNumber.value, emailAddress.value);
                
                // let contact = new core.Contact(fullName.value, contactNumber.value, emailAddress.value);
                // if (contact.serialize())
                // {
                //     let key = contact.FullName.substring(0,1) + Date.now();

                //     localStorage.setItem(key, contact.serialize());
                // }

                //console.log(contact.toString());
                //console.log("Checkbox checked!");
            }
        });
    }

    /**
     * Adds a Contact Object to localStorage
     *
     * @param {string} fullName
     * @param {string} contactNumber
     * @param {string} emailAddress
     */
    function AddContact(fullName, contactNumber, emailAddress){
        let contact = new core.Contact(fullName, contactNumber, emailAddress);
        if (contact.serialize())
        {
            let key = contact.FullName.substring(0,1) + Date.now();

            localStorage.setItem(key, contact.serialize());
        }
    }

    function DisplayContactListPage()
    {
        console.log("Contact-List Page");
        if (localStorage.length > 0){
            let contactList = document.getElementById("contactList");

            let data = ""; // data container -> add deserialized data from localStorage

            let keys = Object.keys(localStorage); // return a string array of keys

            let index = 1; // counts how many keys

            // for every key in the keys array (collection), loop
            for (const key of keys)
            {
                let contactData = localStorage.getItem(key); // get localStorage data value related to the key

                let contact = new core.Contact(); // create a new empty contact object
                contact.deserialize(contactData);

                data += `<tr>
                <th scope="row" class="text-center">${index}</th>
                <td>${contact.FullName}</td>
                <td>${contact.ContactNumber}</td>
                <td>${contact.EmailAddress}</td>
                <td class="text-center"><button value="${key}" class="btn btn-primary btn-sm edit"><i class="fas fa-edit fa-sm"></i> Edit</button></td>
                <td class="text-center"><button value="${key}" class="btn btn-danger btn-sm delete"><i class="fas fa-trash-alt fa-sm"></i> Delete</button></td>
                </tr>
                `;

                index++;
            }
            contactList.innerHTML = data;

            $("#addButton").on("click", () =>
            {
                location.href = "edit.html#add";
            });
            
            $("button.delete").on("click", function() 
            {
                if(confirm("Are you sure?"))
                {
                   localStorage.removeItem($(this).val());
                }
                // refresh after deleting
                location.href = "contact-list.html";
            });

            $("button.edit").on("click", function() 
            {
                location.href = "edit.html#" + $(this).val();
            });

        }
    }

    function DisplayEditPage()
    {
        console.log("Edit Page");

        ContactFormValidation();

        //console.log(location);
        let page = location.hash.substring(1);

        switch (page){
            case "add":
                {
                    $("main>h1").text("Add Contact");
                    
                    $("#editButton").html(`<i class="fas fa-plus-circle fa-lg"></i> Add`);

                    $("#editButton").on("click", (event) => {

                        event.preventDefault();
                        AddContact (fullName.value, contactNumber.value, emailAddress.value);

                        location.href = "contact-list.html";
                    });

                    // gather form info (name, contact number, email address)

                    $("#cancelButton").on("click", () =>{
                        location.href = "contact-list.html";
                    });
                    

                }
                break;
            default:
                {
                    //get the contact infor from localStorage

                    let contact = new core.Contact();
                    contact.deserialize(localStorage.getItem(page));

                    // display the contact info in the edit form
                    $("#fullName").val(contact.FullName);
                    $("#contactNumber").val(contact.ContactNumber);
                    $("#emailAddress").val(contact.EmailAddress);

                    // when editButton is pressed - update the contact

                    $("#editButton").on("click", (event) => {
                    
                        event.preventDefault();

                        // get any changes from the form
                        contact.FullName = $("#fullName").val();
                        contact.ContactNumber = $("#contactNumber").val();
                        contact.EmailAddress = $("#emailAddress").val();

                        // replace the item in localStorage

                        localStorage.setItem(page, contact.serialize());

                        //return tto the contact list

                        location.href = "contact-list.html";
                    
                    });

                    $("#cancelButton").on("click", () =>{
                        location.href = "contact-list.html";
                    });

                }
                break;
        }
    }

    function DisplayLoginPage()
    {
        console.log("Login Page");
    }

    function DisplayRegisterPage()
    {
        console.log("Register Page");
    }

    // named function
    function Start()
    {
        console.log("App Started!!")

        switch(document.title)
        {
            case "Home":
                DisplayHome();
                break;
            case "About Us":
                DisplayAboutPage();
                break;
            case "Our Projects":
                DisplayProjectsPage();
                break;
            case "Our Services":
                DisplayServicesPage();
                break;
            case "Our Contact-List":
                DisplayContactListPage();
                break;
            case "Our Contact Us":
                DisplayContactPage();
                break;
            case "Edit":
                DisplayEditPage();
                break;
            case "Login":
                DisplayLoginPage();
                break;
            case "Register":
                DisplayRegisterPage();
                break;
        }                    
    }
    

    
    window.addEventListener("load", Start);

})();