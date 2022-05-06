let arr1 = [[353, 789], [418, 749], [443, 713]]
let arr2 = [
[604, 838],
[623, 819],
[632, 800],
[529, 685]
]
let arr3 = [
[282, 604],
[343, 596],
[682, 658],
[713, 656]
]
let arr4 = [
[349, 487],
[375, 482],
[449, 486],
[593, 520],
[650, 521]
]
let arr5 = [
[468, 594],
[497, 569],
[501, 550],
[497, 429],
[480, 406]
]
let arr6 = [
[208, 364],
[260, 353],
[460, 376],
[706, 415],
[746, 416],
[791, 407]
]
let arr7 = [
[261, 229],
[281, 223],
[331, 224],
[524, 255],
[678, 272],
[754, 253]
]
let arr8 = [
[436, 353],
[466, 332],
[481, 310],
[466, 204],
[432, 121],
[401, 77],
[356, 34],
[266, -12],
[201, -30]
]
let arr9 = [
[505, 222],
[510, 208],
[610, 112],
[736, 7],
[769, -3],
[916, -16]
]
let x_offset = 100
let y_offset = 100
function robotWrite(arr: number[][]) {
    let x: number;
    let y: number;
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        x = arr[i][0] * 0.08
        y = arr[i][1] * 0.08
        x = x + x_offset
        y = y + y_offset
        basic.pause(400)
        writingrobot.moveXYZunblock(x, y, -34)
    }
    // 抬笔
    writingrobot.moveXYZ(x, y, 0)
}
writingrobot.autoHome()
// 归位
writingrobot.moveXYZ(x_offset, y_offset, 0)
robotWrite(arr1)
robotWrite(arr2)
robotWrite(arr3)
robotWrite(arr4)
robotWrite(arr5)
robotWrite(arr6)
robotWrite(arr7)
robotWrite(arr8)
robotWrite(arr9)
writingrobot.autoHome()
basic.forever(function () {
	
})
