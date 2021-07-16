player1 = localStorage.getItem("player_1");
player2 = localStorage.getItem("player_2");

player1_score = 0
player2_score = 0

document.getElementById("player_1").innerHTML = player1 + ":";
document.getElementById("player_2").innerHTML = player2 + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = player1;
document.getElementById("player_answer").innerHTML = player2;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();

    char3 = word.charAt(lengthmines1);

    replaceword3 = word.replace(char3, "");
    console.log(replaceword3);

    question_word = "<h4 id='word_display'> Q. "+replaceword3+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}
function check() {
 get_answer = document.getElementById("input_check_box").value;
 answer = get_answer.toLowerCase();
 console.log(answer);
}