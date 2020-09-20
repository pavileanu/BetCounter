calculateMoneyForSecond = (moneyForFirst, oddFirst, oddSecond) => {
    let arrayReturn = new Array(2);
    arrayReturn[0] = moneyForFirst*(1/(oddSecond - 1));
    arrayReturn[1] = moneyForFirst*(oddFirst - 1);

    return arrayReturn;
};

module.exports = calculateMoneyForSecond;
