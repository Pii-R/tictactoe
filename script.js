window.onload = function(){ 
    
let b1 = document.getElementById('button1')
let b2 = document.getElementById('button2')
let b_reset = document.getElementById('button3')
let choices_array  = ["x","o",""]
let choice = null
let count_click = 0 //it will follow how many clicks on button there are
let win = false
let grid = [-1,-1,-1,-1,-1,-1,-1,-1,-1]
let dict_img_to_sym = {"images/circle.png":"o","images/cross.png":"x"}
//eventListener
document.addEventListener('click',change_text, false);
document.addEventListener('click',update_grid,false)


function check_array(arr){
    s = new Set(arr)
    if (s.size == 1 & (s.has("x") | s.has("o"))){
        alert(s.values().next().value+ " has win")
        return true
    }
    return false
}

function update_grid(){
    // update grid when player click on the board

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
        case "images/cross.png":
            next_choice = "images/circle.png"
            return next_choice
        case "images/circle.png":
            next_choice = "images/cross.png" 
            return next_choice
    }
}

function change_text(e) {
    var tgt= e.target
    if (choice !== null){
        if (tgt.parentElement.className=='grid-container' &
            tgt.className!='grid-container' & 1){
            tgt.children[0].src = choice
            tgt.children[0].style.display="block"
            index = parseInt(tgt.id)
            grid[index]=dict_img_to_sym[choice]
            console.log(grid)
            // tgt.innerHTML =  choice
            choice = get_next_choice(choice) 
            count_click++
            console.log("next_choice is " + choice,count_click)
            }
        else if (!choices_array.includes(tgt.innerHTML) & tgt.parentElement.className=='grid-container') {
            tgt.innerHTML="";
        }
    }
}

b1.onclick = function(){ // button to choose cross
    if (count_click == 0){
    choice ="images/cross.png";
    }
}

b2.onclick = function(){// button to choose circle
    if (count_click == 0){
    choice ="images/circle.png";  
    }
}
   
b_reset.onclick = function(){
    for (i=0;i<9;i++){
        document.getElementById(i).children[0].src = "";
    }
    win = false
    count_click = 0
    choice = null
    grid = [-1,-1,-1,-1,-1,-1,-1,-1,-1]
}
};