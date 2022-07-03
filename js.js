let player_win_count = 0;
let comp_win_count = 0;
let options = ['rocks', 'scissors', 'papers'];

let computerPlay = () => options[Math.floor(Math.random() * options.length)];
function gameplay(player, computer){
    if(player === 'rocks' && computer === 'scissors'){
        console.log('You win! ' + player + ' beats ' + computer );
        player_win_count++;
    }
    else if(player==='scissors' && computer==='papers'){
        console.log('You win! ' + player + ' beats ' + computer );
        player_win_count++;
    }
    else if(player==='papers' && computer==='rocks'){
        console.log('You win! ' + player + ' beats ' + computer );
        player_win_count++;
    }
    else if(computer === 'rocks' &&  player=== 'scissors'){
        console.log('You lose! ' + computer + ' beats ' + player );
        comp_win_count++;
    }
    else if(computer==='scissors' && player==='papers'){
        console.log('You lose! ' + computer + ' beats ' + player );
        comp_win_count++;
    }
    else if(computer==='papers' && player==='rocks'){
        console.log('You lose! ' + computer + ' beats ' + player );
        comp_win_count++;
    }
    else
        console.log('Tie')
}
for (let i = 0; i<5; i++){
    player_ch = prompt('Enter your choice:');
    gameplay(player_ch.toLowerCase(), computerPlay());
}

if(player_win_count>comp_win_count){
    console.log('You won!!');
}
else if(player_win_count === comp_win_count)
    console.log('Draw');
else {
    console.log('GIT GUD')
}