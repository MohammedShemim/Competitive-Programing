/**
 * @param {number} num
 * @return {string}
 */
function numberToWords(num) {
    if (num === 0) {
        return 'Zero';
    }
    let billion = Math.floor(num / 1000000000);
    let million = Math.floor((num - billion * 1000000000) / 1000000)
    let thousand = Math.floor((num - billion * 1000000000 - million * 1000000) / 1000);
    let rest = num - billion * 1000000000 - million * 1000000 - 1000 * thousand;
    let result = "";
    if (billion !== 0) {
        result += lessThanThousand(billion) + ' ' + 'Billion'
    }
    if (million !== 0) {
        if (result.length !== 0) {
            result += ' ';
        }
        result += lessThanThousand(million) + ' ' + 'Million'
    }
    if (thousand !== 0) {
        if (result.length !== 0) {
            result += ' ';
        }
        result += lessThanThousand(thousand) + ' ' + 'Thousand'
    }
    if (rest !== 0) {
        if (result.length !== 0) {
            result += ' ';
        }
        result += lessThanThousand(rest)
    }
    return result;
}

function ten(number) {
    switch(number) {
        case 1: return 'One';
        case 2: return 'Two';
        case 3: return 'Three';
        case 4: return 'Four';
        case 5: return 'Five';
        case 6: return 'Six';
        case 7: return 'Seven';
        case 8: return 'Eight';
        case 9: return 'Nine';
    }    
    return ""
}

function twenty(number) {
    switch(number) {
        case 10: return 'Ten';
        case 11: return 'Eleven';
        case 12: return 'Twelve';
        case 13: return 'Thirteen';
        case 14: return 'Fourteen';
        case 15: return 'Fifteen';
        case 16: return 'Sixteen';
        case 17: return 'Seventeen';
        case 18: return 'Eighteen';
        case 19: return 'Nineteen';
    }    
    return ""
}


function tenties(number) {
    switch(number) {
        case 2: return 'Twenty';
        case 3: return 'Thirty';
        case 4: return 'Forty';
        case 5: return 'Fifty';
        case 6: return 'Sixty';
        case 7: return 'Seventy';
        case 8: return 'Eighty';
        case 9: return 'Ninety';
    }    
    return ""
}

function lessThanThousand(number) {
    const hundred = Math.floor(number / 100);
    let res = "";
    if (hundred !== 0) {
        res += ten(hundred) + ' Hundred';
    }
    if (number % 100 !== 0) {
        if (res.length !== 0) {
            res += ' '
        }
        res += lessThanHundred(number % 100);    
    }
    return res;
}

function lessThanHundred(number) {
    const tenty = Math.floor(number / 10);
    let res = '';
    if (number === 0) {
        return 'Zero';
    }
    if (number < 10) {
        return ten(number);
    }
    if (number < 20) {
        return twenty(number);
    }
    if (number <= 99) {
        if (number % 10 === 0) {
            return tenties(tenty);
        }
        return tenties(tenty) + ' ' + ten(number % 10);
    }
}
