$.get("/api/all", (data) => {
    if (data.length !== 0) {
        for (var i = 0; i < data.length; i++) {
        let card = $(`
        <div class="col-1-of-3">
                            <div class="player-card">
                                
                                    <span class="game-details game-details--name">${data[i].firstname} ${data[i].lastname}</span>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
        `);
        $(".players-container").prepend(card);
        }
    }
    });
