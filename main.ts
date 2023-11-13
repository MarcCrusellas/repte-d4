basic.forever(function () {
    if (input.temperature() > 22) {
        basic.showString("calor")
    } else {
        basic.showString("fred")
    }
})
