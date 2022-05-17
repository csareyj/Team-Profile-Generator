const generateHTML = (managerCard, engineerCard, internCard) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <title>My Team</title>
            <!-- Required meta tags -->
            <meta charset="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
    
            <link
                rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossorigin="anonymous"
            />
       
        </head>
        <body>
            <div class="jumbotron jumbotron-fluid bg-dark">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <h1 class="display-4 text-left text-danger">My Team</h1>
                            <p class="lead"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
            <div class="row">
                <div class="col-12 d-flex justify-content-around mt-4">
                    ${managerCard}
                    ${engineerCard}
                    ${internCard}
                </div>
            </div>
        </div>
    
            
            <script
                src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                crossorigin="anonymous"
            ></script>
            <script
                src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
                integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
                crossorigin="anonymous"
            ></script>
            <script
                src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
                integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
                crossorigin="anonymous"
            ></script>
        </body>
    </html>
    `;
};

module.exports = generateHTML;