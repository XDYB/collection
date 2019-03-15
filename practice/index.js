//  动态规划 钢条切割
function steelBarCut(n) {
    let p = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30];
    if (n == 0) return 0
    let q = Number.MIN_VALUE;
    for (let i = 1; i <= n; ++i) {
        q  = Math.max(q, steelBarCut(n - i) + p[i]);
    }
    return q;
}

console.log(steelBarCut(10));
console.log(steelBarCut(4));
console.log(steelBarCut(6));
console.log('==========');


function steelBarCut_BottomUp(n) {
    let p = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30];
    let r = new Array(n + 1);
    r[0] = 0;
    for (let i = 1; i <= n; ++i) {
        let ret = Number.MIN_VALUE;
        for (let j = 1; j <= i; ++j) {
            ret = Math.max(ret, p[j] + r[i - j]);
        }
        r[i] = ret;
    }
    return r[n];
}

console.log(steelBarCut_BottomUp(10));
console.log(steelBarCut_BottomUp(4));
console.log(steelBarCut_BottomUp(6));
