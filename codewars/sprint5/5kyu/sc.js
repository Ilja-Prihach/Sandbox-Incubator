// Task:
//     Give you some chars, and they can combine many animal names.
//
//     Return the maximum number of animal names that can be combined by chars.
//
//     Animal names have been preload by variable names


function sc(chars) {
    const memo = new Map();
    return dfs(chars.split('').sort().join(''));

    function dfs(s) {
        if (!s.length) return 0;
        if (memo.has(s)) return memo.get(s);

        let best = 0;

        for (const animal of names) {
            let temp = s;
            let ok = true;

            for (const ch of animal) {
                const idx = temp.indexOf(ch);
                if (idx === -1) {
                    ok = false;
                    break;
                }
                temp = temp.slice(0, idx) + temp.slice(idx + 1);
            }

            if (ok) {
                const candidate = 1 + dfs(temp);
                if (candidate > best) best = candidate;
            }
        }

        memo.set(s, best);
        return best;
    }
}