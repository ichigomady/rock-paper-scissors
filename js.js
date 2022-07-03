// let player_win_count = 0;
// let comp_win_count = 0;
// let options = ['rocks', 'scissors', 'papers'];

// let computerPlay = () => options[Math.floor(Math.random() * options.length)];
// function gameplay(player, computer){
//     if(player === 'rocks' && computer === 'scissors'){
//         console.log('You win! ' + player + ' beats ' + computer );
//         player_win_count++;
//     }
//     else if(player==='scissors' && computer==='papers'){
//         console.log('You win! ' + player + ' beats ' + computer );
//         player_win_count++;
//     }
//     else if(player==='papers' && computer==='rocks'){
//         console.log('You win! ' + player + ' beats ' + computer );
//         player_win_count++;
//     }
//     else if(computer === 'rocks' &&  player=== 'scissors'){
//         console.log('You lose! ' + computer + ' beats ' + player );
//         comp_win_count++;
//     }
//     else if(computer==='scissors' && player==='papers'){
//         console.log('You lose! ' + computer + ' beats ' + player );
//         comp_win_count++;
//     }
//     else if(computer==='papers' && player==='rocks'){
//         console.log('You lose! ' + computer + ' beats ' + player );
//         comp_win_count++;
//     }
//     else
//         console.log('Tie')
// }
// for (let i = 0; i<5; i++){
//     player_ch = prompt('Enter your choice:');
//     gameplay(player_ch.toLowerCase(), computerPlay());
// }

// if(player_win_count>comp_win_count){
//     console.log('You won!!');
// }
// else if(player_win_count === comp_win_count)
//     console.log('Draw');
// else {
//     console.log('GIT GUD')
// }
const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const round_html = document.querySelector(".round-container")
const player1_win_html = document.querySelector(".player-1-win")
const player2_win_html = document.querySelector(".player-2-win")
const p1_res_text_html = document.querySelector(".p1-res-text")
const p2_res_text_html = document.querySelector(".p2-res-text")
const log_html = document.querySelector(".game-log")
const player1_playing = document.querySelector(".player-1")
const player2_playing = document.querySelector(".player-2")
player1_playing.classList.toggle("playing")
// player1_playing.textContent = "--> Player 1 <--";
let player1_win = 0;
let player2_win = 0;
let current_round = 1;
let current_player = 1;
let current_round_selection = []
let game_status = "on"

rock.addEventListener('click', () => {
    playRound("rock");
});

paper.addEventListener('click', () => {
    playRound("paper");
});

scissors.addEventListener('click', () => {
    playRound("scissors");
});

function playRound(selection) {
    if (game_status === "on") {
        // alert("Player " + current_player + " selected " + selection);
        round_html.textContent = "Round " + current_round;
        current_round_selection[current_player - 1] = selection
        if (current_round_selection.length == 2) {
            winner = check_winner(current_round_selection)
            const div = document.createElement("div");
            if(winner != 'Tie'){            
                div.innerHTML = `Round ${current_round}: <span style='color:green'>Player ${winner}</span> wins the round!`;
            }
            else {
                div.innerHTML = `Round ${current_round}: <span style='color:red'>TIE</span>`;
            }
            log_html.appendChild(div)
            
            current_round_selection = []
            current_round++
            player1_win_html.textContent = player1_win;
            player2_win_html.textContent = player2_win;

        }

        if (player1_win === 5 || player2_win === 5) {
            game_status = "off"
        }
        if (player1_win === 5) {
            player1_win_html.classList.add("winner");
            p1_res_text_html.textContent = "WINNER";
            p1_res_text_html.style.cssText = "color: green"
            player2_win_html.classList.add('loser');
            p2_res_text_html.textContent = "LOST";
            p2_res_text_html.style.cssText = "coler: red"

        }
        if (player2_win === 5) {
            player2_win_html.classList.add("winner");
            p2_res_text_html.textContent = "WINNER"
            p2_res_text_html.style.cssText = "color: green"
            player1_win_html.classList.add('loser');
            p1_res_text_html.textContent = "LOST";
            p1_res_text_html.style.cssText = "color: red"
        }
        if (current_player === 1){
            player1_playing.classList.toggle("playing")
            player1_playing.textContent = "Player 1";
            player2_playing.classList.toggle("playing")
            // player2_playing.textContent = "--> Player 2 <--";
            current_player = 2
        }
        else {
            current_player = 1
            player2_playing.classList.toggle("playing")
            player2_playing.textContent = "Player 2";
            player1_playing.classList.toggle("playing")
            // player1_playing.textContent = "--> Player 1 <--";
        }

        if(game_status==='off'){
            const restart = document.querySelector(".game-refresh")
            const btn = document.createElement('button')
            btn.textContent = "Play another round"
            btn.addEventListener('click', () => {
                window.location.reload();
            })
            restart.appendChild(btn)
            const check_last_player = document.querySelector(".playing")
            check_last_player.classList.toggle("playing")
            // if(check_last_player.textContent.includes('Player 1')){
            //     check_last_player.textContent = "Player 1"
            // }else {
            //     check_last_player.textContent = "Player 2"
            // }
        }

    }

}

function check_winner(sel) {
    if (sel[0] === 'rock' && sel[1] === 'scissors') {
        player1_win++;
        return '1'
    }
    else if (sel[0] === 'scissors' && sel[1] === 'paper') {
        player1_win++;
        return '1'
    }
    else if (sel[0] === 'paper' && sel[1] === 'rock') {
        player1_win++;
        return '1'
    }
    else if (sel[1] === 'rock' && sel[0] === 'scissors') {
        player2_win++;
        return '2'
    }
    else if (sel[1] === 'scissors' && sel[0] === 'paper') {
        player2_win++;
        return '2'
    }
    else if (sel[1] === 'paper' && sel[0] === 'rock') {
        player2_win++;
        return '2'
    }
    else
        return 'Tie'
}