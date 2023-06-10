var formul = document.getElementById("formular");
function submitForm(event) {
    event.preventDefault();
}

formul.addEventListener('submit', submitForm);


function showInput() {
    var anujs = document.getElementById("year").value;
    var lunajs = document.getElementById("month").value;
    var ziuajs = document.getElementById("day").value;

    var dataziua = new Date(anujs, lunajs, ziuajs);

    var amu = new Date();

    console.log(amu);

    var amuyear = amu.getFullYear();
    var amumonth = amu.getMonth();
    var amuday = amu.getDate();

    console.log(anujs);

    var age = {};

    yearage = amuyear - anujs;
    if (amumonth >= lunajs) {
        var monthage = amumonth - lunajs;
    } else {
        yearage--;
        var monthage = 12 + amumonth - lunajs;
    }

    if (amuday >= ziuajs) {
        var dateage = amuday - ziuajs;
    } else {
        monthage--;
        var dateage = 31 + amuday - ziuajs;
        if (monthage < 0) {
            monthage = 11;
            yearage--;
        }
    }

    if (dataziua > amu) {
        return false;
    }

    document.getElementById('anu').innerHTML = yearage;
    document.getElementById('luna').innerHTML = monthage;
    document.getElementById('ziua').innerHTML = dateage;
}