let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

    for (let i = 0; i < arr1.length; i++) {
        let j = arr1[i] + arr2[i];
        console.log(j)
        for (let j = 0; j < arr2.length; j++) {
            let ats = arr2[i] + arr2[j];
            console.log(ats);
        }}