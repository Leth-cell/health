let Health = 0
input.onButtonPressed(Button.A, function () {
    if (Health < 6) {
        basic.showIcon(IconNames.Yes)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Health != 3) {
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.B, function () {
    if (Health < 6) {
        basic.showIcon(IconNames.Sad)
    }
})
