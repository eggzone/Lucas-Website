$(function() {
    var btn3 = $("#btn3")
    var sk = $(".sekuai")
    var word = $("#word")
    $("#btn1").click(function() {
        sk.each(function() {
            var red = num()
            var green = num()
            var blue = num()
            var col = 'rgb(' + red + ',' + green + ',' + blue + ')'
            // $(".sekuai")
            // console.log(col)
            $(this).css('background-color', col)
        })
    })
    // console.log(sk.css('display'))
    $("#btn2").click(function() {
        if (sk.css('display') == 'inline-block') {
            console.log(sk.css('display'))
            sk.slideUp(2000)
        } else {
            sk.slideDown(2000)
        }
        console.log(sk.css)
    })
    btn3.click(function() {
        word.load("/static/ajax_files/test1.txt")
    })

})
    





function num() {
    var col = Math.floor(Math.random() * 256)
    return col
    // console.log(col)
}