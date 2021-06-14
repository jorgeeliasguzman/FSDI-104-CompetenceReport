function saveTask() {

    let text = $("#taskInput").val();

    if(text.length == 0){
        alert("Error: Enter New Task");
        return;
    }

    let syntax = "<li class='taskItem'>" + text + "<button onclick='deleteSelf()' class='btn btn-sm btn-danger'>Delete</button> </li>";
    $("#taskContainer").append(syntax);
    $("#taskInput").val('');
    $("#taskInput").focus();

}
function deleteSelf() {
    console.log("Delete function")
    $(this).remove();
};

function init() {
    console.log("Task Page")

    $("#btnSave").click(saveTask);
    $("#taskInput").keypress(function(args){
        if(args.key == "Enter") {
            saveTask();
        }

});

$("#taskItem").click('btn-danger', function(){
    console.log("Removing Item");
    $(this).remove();
});
}

window.onload =init;

