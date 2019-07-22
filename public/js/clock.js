function toDouble(n) {
    if (n<10) {
        n = '0' + n
        return n
    } else {
        return n = '' + n
    }
}

function clk_update() {
    odate = new Date()
    var ti_str = toDouble(odate.getHours()) + toDouble(odate.getMinutes()) + toDouble(odate.getSeconds())
    for (var i = 0; i < gimg.length; i++) {
        gimg[i].src = "/static/img/clock/" + ti_str[i] + ".png"
    }
    var da_str = (odate.getMonth() + 1) + '月' + odate.getDate() + '日'
    document.getElementById("date").innerHTML = da_str
}

window.onload = function clk() {
    gimg = document.getElementsByTagName('img')
    setInterval(clk_update, 1000)
    clk_update()   
  }

  str = '121250'
