// IIFE -- Immediately Invoked Function Express
// AKA anonymous self-executing function
(function(){

    function DisplayHome()
    {
        let AboutUsButton = document.getElementById("AboutUsButton");
        
        AboutUsButton.addEventListener("click", function()
        {
            location.href = "about.html";
        });

        // Step 1 - get a reference to an entry point(s) (insertion / deletion point)
        let MainContent = document.getElementsByTagName("main")[0];
        let DocumentBody = document.body;
        //console.log(MainContent);

        // Step 2 - create a HTML Element in memory
        let MainParagraph = document.createElement("p");
        let Article = document.createElement("article");
        let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3">This is the Article Paragraph"</p>`

        // Step 3 - configure new element

        MainParagraph.setAttribute("id", "MainParagraph");
        MainParagraph.setAttribute("class", "mt-3");

        let FirstString = "This is";
        let SecondString = `${FirstString} the Main Paragraph`;

        MainParagraph.textContent = "This is the Main Paragraph!";    

        Article.setAttribute("class", "container");

        // Step 4 - perform insertion / deletion

        // example of insert after
        MainContent.appendChild(MainParagraph);

        Article.innerHTML = ArticleParagraph;
        DocumentBody.appendChild(Article);
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

    // named function
    function Start()
    {
        console.log("App Started!!")

        switch(document.title)
        {
            case "Home":
                DisplayHome();
                break;
        }
        
       
        
    }
    

    
    window.addEventListener("load", Start);

})();