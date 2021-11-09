window.onload = function(){ 
    
let b1 = document.getElementById('button1')
let b2 = document.getElementById('button2')
let b_reset = document.getElementById('button3')
let choices_array  = ["x","o",""]
let choice = null
let count_click = 0 //it will follow how many clicks on button there are
let x_button_click = 0
let o_button_click = 0
let first_choice
let win = false
document.addEventListener('click',change_text, false);
document.addEventListener('click',check_win,false)
let grid = [-1,-1,-1,-1,-1,-1,-1,-1,-1]

function check_array(arr){
    s = new Set(arr)
    if (s.size == 1 & (s.has("x") | s.has("o"))){
        return true
    }
    return false
}

function check_win(){
    for(i=0;i<9;i++){
        if (document.getElementById(i).innerHTML != null & document.getElementById(i).innerHTML != "" & (grid[i] != "x" | grid[i] != "o")){ 
        grid[i]=document.getElementById(i).innerHTML
        }
    }
    console.log(grid)
    // over line
    if (!win){
    s_diag_1 = new Set([grid[0],grid[4],grid[8]])
    s_diag_2 = new Set([grid[2],grid[4],grid[6]])

    if (check_array(s_diag_1)){
        alert("win over first diag")
        win = true
        return

    }
    else if (check_array(s_diag_2)) {
        alert("win over second diag")
        win = true
        return
    }

    
    for (let i=0;i<3;i++){
        s_line = new Set([grid[0+i*3],grid[i*3+1],grid[i*3+2]])
        s_col = new Set([grid[0+i],grid[3+i],grid[6+i]])
        console.log(s_line)
        if (check_array(s_line)){
            alert("win over line")
            win = true
            return
            
        }
        if (check_array(s_col)){
            alert("win over colums")
            win = true
            return
            
        }       
        }

    }
    }
    


function get_next_choice(choice){
    switch (choice){
        case "x":
            next_choice = "o"
            return next_choice
        case "o":
            next_choice = "x" 
            return next_choice
    }
}

function change_text(e) {
    var tgt= e.target
    if (choice !== null){
    if (tgt.innerHTML == "" & tgt.parentElement.className=='grid-container' &
    tgt.className!='grid-container'){  
    tgt.innerHTML =  choice
    choice = get_next_choice(choice) 
    count_click++
    console.log("next_choice is " + choice,count_click)
    }
    else if (!choices_array.includes(tgt.innerHTML) & tgt.parentElement.className=='grid-container') {
     tgt.innerHTML="";
    }
}
    
    else {
        console.log('choice not defined')
    }

}

b1.onclick = function(){
    if (count_click == 0){
    choice ="x";
    }
}

b2.onclick = function(){
    if (count_click == 0){
    choice ="o";  
    }
}
   

b_reset.onclick = function(){
    for (i=0;i<9;i++){
        document.getElementById(i).innerHTML = "";
    }
    win = false
    count_click = 0
    choice = null
    grid = [-1,-1,-1,-1,-1,-1,-1,-1,-1]
}

};