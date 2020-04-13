
// GET route for registered players from users database
$.get("/api/all", (data) => {
    if (data.length !== 0) {
        for (var i = 0; i < data.length; i++) {
        let card = $(`
        <div class="player-div">
            <div class="col-md-6">
            <button type="submit" class="addbtn  btn btn-primary data-id="${data[i].id}"><i class="fas fa-plus"></i></button>
            <button type="submit" name="Remove" class="removebtn btn btn-danger  center-block off-set-70"><i class="fas fa-minus"></i></button>
            <div class="player-card">
                    <div class="player-card__side player-card__side--front">
                        <div class="player-card__picture player-card__picture--1">
                            &nbsp;
                        </div>
                        <div class="player-card__details">
                        <span class="game-details game-details--name">${data[i].firstname} ${data[i].lastname}</span>
                        </div>
                    </div>
                    
            <div class="col-md-6">
                    <div class="player-card__side player-card__side--back player-card__side--back-1">
                        <div class="player-card__cta">
                        <div class="card__price-box">
                        <span class="game-details game-details--stats">PTS: ${data[i].pointspergame} REB: ${data[i].rebounds} AST: ${data[i].assists} <br><br> </span>
                        <span class="game-details game-details--icon"><i class="fas fa-basketball-ball fa-4x icon-back"></i></span>
                    </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
        `);
         $(".available").append(card);
        //  $(".developer-container").prepend(card);
        }
    }
    });
////////////////////////////////////////////////////////////////////////////////////////////////////
////  READY TO EAT ////////////////
$(".available").on("click", ".addbtn", function(event) {
event.preventDefault();
console.log("this was clicked");
// let addplayer =  $(`
// <p>something</p>`);
let addplayer = $(event.target).closest(".player-div");
const id = $(event.target).data("id");
$.ajax({
    method: "PUT",
    url: "/api/players/" + id
  })
    .then(function(response) {
      $(".addedPlayers").append(addplayer);
        console.log("response", response);
       //window.location.reload();
    });
})
//// DEVOURED /////////////////////////
$(".addedPlayers").on("click", ".removebtn", function(event) {
event.preventDefault();
console.log("this was clicked");
// let addplayer =  $(`
// <p>something</p>`);
let removeplayer = $(event.target).closest(".player-div");
const id = $(event.target).data("id");
$.ajax({
    method: "PUT",
    url: "/api/players/" + id
  })
    .then(function(response) {
      $(".available").append(removeplayer);
        console.log("response", response);
       //window.location.reload();
    });
})
///////////////////////////////////////////////////////////////////////////////////////////////////   
    // $(".players-container").on("click", ".delete", function(event) {
    //     event.preventDefault();
    //     console.log("delete button clicked");
    //     const id = $(event.target).data("id");
    //     $.ajax({
    //         method: "DELETE",
    //         url: "/api/players/" + id
    //       })
    //         .done(function(response) {
    //           //getPosts(postCategorySelect.val());
    //             console.log("response", response);
    //             location.reload();
    //         });
    // })






              