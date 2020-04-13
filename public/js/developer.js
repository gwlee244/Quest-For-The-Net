$.get("/api/developer", (data) => {
    if (data.length !== 0) {
        for (var i = 0; i < data.length; i++) {
        let card = $(`
        <div class="row player-div">
            <div class="col-md-6">
            <div class="player-card">
                    <div class="player-card__side player-card__side--front">
                        <div class="player-card__picture player-card__picture--2">
                            &nbsp;
                        </div>
                        <div class="player-card__details">
                        <span class="game-details game-details--name">${data[i].names} ${data[i].github}</span>
                        </div>
                    </div>
                    
            <div class="col-md-6">
                    <div class="player-card__side player-card__side--back player-card__side--back-1">
                        <div class="player-card__cta">
                        <div class="card__price-box">
                        <span class="game-details game-details--stats">Name: ${data[i].names} Email: ${data[i].email} GitHub: ${data[i].github} <br><br> </span>
                        <span class="game-details game-details--icon"><i class="fas fa-basketball-ball fa-4x icon-back"></i></span>
                    </div>
                        </div>
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
