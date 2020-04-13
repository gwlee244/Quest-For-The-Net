$.get("/api/developer", (data) => {
    if (data.length !== 0) {
        for (var i = 0; i < data.length; i++) {
        let card = $(`
        
            <div class="col-1-of-3">
            <div class="developer-card">
                    <div class="developer-card__side developer-card__side--front">
                        <div class="developer-card__picture developer-card__picture--1">
                            &nbsp;
                        </div>
                        <div class="developer-card__details">
                        <span class="game-details game-details--name">${data[i].names}</span>
                        </div>
                    </div>
                    
           
                    <div class="developer-card__side developer-card__side--back developer-card__side--back-1">
                        <div class="developer-card__cta">
                        <div class="card__price-box">
                        <span class="game-details game-details--stats">Name: ${data[i].names} Email: ${data[i].email} GitHub: ${data[i].github} <br><br> </span>
                        <span class="game-details game-details--icon"><i class="fas fa-laptop-code fa-4x"></i></span>
                    </div>
                        </div>
                    </div>
                </div>
                </div>
                
        `);
         $(".developer-container").prepend(card);
        }
    }
    });
