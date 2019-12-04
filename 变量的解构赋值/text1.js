[[1, 2], [3, 4], [12, 4], [44, 44]].map(
    ([a, b]) => {
        if (a < b) {
            console.log(a + b)
        } else {
            console.log(a - b);
        }
    }
);