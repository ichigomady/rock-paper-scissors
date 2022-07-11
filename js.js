const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const btn_pvp = document.querySelector(".btn-pvp");
const btn_pvc = document.querySelector(".btn-pvc");
const round_html = document.querySelector(".round-container")
const player1_win_html = document.querySelector(".player-1-win")
const player2_win_html = document.querySelector(".player-2-win")
const p1_res_text_html = document.querySelector(".p1-res-text")
const p2_res_text_html = document.querySelector(".p2-res-text")
const log_html = document.querySelector(".game-log")
const player1_playing = document.querySelector(".player-1")
const player2_playing = document.querySelector(".player-2")
player1_playing.classList.toggle("playing")
let player1_win = 0;
let player2_win = 0;
let current_round = 1;
let current_player = 1;
let current_round_selection = [];
var game_status = "on";
var game_mode = "pvp";
let whosPlayer2 = "Player 2";
let options = ['rock', 'paper', 'scissors'];
let computerPlay = () => options[Math.floor(Math.random() * options.length)];

btn_pvc.addEventListener('click', () => {
    if(!btn_pvc.classList.contains("btn-active"))
        btn_pvc.classList.toggle("btn-active");
    
    if(btn_pvp.classList.contains("btn-active"))
        btn_pvp.classList.toggle("btn-active");
        
    game_mode = "pvc";
    if(current_round > 1){
        // clear_log_html();
        stats_ui_reset();
        const div = document.createElement("div");
        div.innerHTML = '<span style="color:brown; font-weight: 300;font-size: large;">A new PVC game started...</span>'
        log_html.appendChild(div)
    }
});

btn_pvp.addEventListener('click', () => {
    if(!btn_pvp.classList.contains("btn-active"))
        btn_pvp.classList.toggle("btn-active");
    if(btn_pvc.classList.contains("btn-active"))
        btn_pvc.classList.toggle("btn-active");
        
    game_mode = "pvp";
    if(current_round > 1){
        // clear_log_html();
        stats_ui_reset();
        const div = document.createElement("div");
        div.innerHTML = '<span style="color:brown; font-weight: 300;font-size: large;">A new PVP game started...</span>'
        log_html.appendChild(div)
    }
});


rock.addEventListener('click', () => {
    if(game_mode === "pvp"){
        playRoundpvp("rock");
    }else {
        playRoundpvc("rock");
    }
});

paper.addEventListener('click', () => {
    if(game_mode === "pvp"){
        playRoundpvp("paper");
    }else {
        playRoundpvc("paper");
    }
        
});

scissors.addEventListener('click', () => {
    if(game_mode === "pvp"){
        playRoundpvp("scissors");
    }else {
        playRoundpvc("scissors");
    }
        
});

function playRoundpvp(selection) {
    if (game_status === "on") {
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
            current_player = 2
        }
        else {
            current_player = 1
            player2_playing.classList.toggle("playing")
            player2_playing.textContent = "Player 2";
            player1_playing.classList.toggle("playing")
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
            btn_pvc.disabled = true;
            btn_pvp.disabled = true;
        }

    }

}

function playRoundpvc(selection){
    if (game_status === "on") {
        round_html.textContent = "Round " + current_round;
        player2_playing.textContent = 'Computer';
        
        current_round_selection[0] = selection;
        current_round_selection[1] = computerPlay();
       
        if (current_round_selection.length == 2) {
            winner = check_winner(current_round_selection)

            if(winner == 1) {
                text_winner = 'Player 1'
            }else {
                text_winner = 'Computer'
            }
            const div = document.createElement("div");
            if(winner != 'Tie'){            
                div.innerHTML = `Round ${current_round}: <span style='color:green'>${text_winner}</span> wins the round!`;
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
        
        if(!player1_playing.classList.contains("playing")){
            player1_playing.classList.toggle("playing")
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
            btn_pvc.disabled = true;
            btn_pvp.disabled = true;
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

function clear_log_html(){
        while(log_html.childNodes.length > 2){
            log_html.removeChild(log_html.lastChild)
        }
    }

function stats_ui_reset(){
    player1_win = 0;
    player2_win = 0;
    current_round = 1;
    player1_win_html.textContent = 0;
    player2_win_html.textContent = 0;
    round_html.textContent = 'Game yet to start';
    if(!player1_playing.classList.contains("playing")){
        player1_playing.classList.toggle("playing");
    }
    if(player2_playing.classList.contains("playing")){
        player2_playing.classList.toggle("playing");
    }

}