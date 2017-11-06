$(function () {
    $.getJSON("./data/info.json",function (res) {
        console.log(res)
        var img = $("#container .tour img");
        var productName = $("#container .tour h2");
        var description = $("#container .tour h3");
        var transport = $("#container .tour li:first-child");
        var date = $("#container .tour li:nth-child(1)");
        var origPrice = $("#container .price s");
        var price = $("#container .price strong");
        var type = $("#container .type");
        var discount = $("#container .disc span");

    });
});
