function addTwoDigits(n: any): number {
    const number = n.toString().split('');

    return number.reduce((a, b) => {
        return parseInt(a) + parseInt(b);
    });
}

 console.log(addTwoDigits(20));