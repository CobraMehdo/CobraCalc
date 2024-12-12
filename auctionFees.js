// auctionFees.js
function calculateBuyFee(price) {
    if (price <= 250) return 95;
    if (price <= 500) return 95;
    if (price <= 999) return 175;
    if (price <= 1499) return 275;
    if (price <= 1999) return 295;
    if (price <= 2999) return 345;
    if (price <= 3999) return 365;
    if (price <= 4999) return 385;
    if (price <= 5999) return 395;
    if (price <= 6999) return 455;
    if (price <= 7999) return 475;
    if (price <= 8999) return 495;
    if (price <= 9999) return 550;
    if (price <= 10999) return 575;
    if (price <= 11999) return 595;
    if (price <= 12999) return 625;
    if (price <= 13999) return 675;
    if (price <= 14999) return 695;
    if (price <= 16999) return 755;
    if (price <= 18999) return 795;
    if (price <= 20999) return 795;
    if (price <= 22999) return 795;
    if (price <= 46999) return 795;
    if (price <= 49999) return 775;
    if (price <= 52999) return 805;
    if (price <= 54999) return 865;
    if (price <= 59999) return 920;
    if (price <= 64999) return 980;
    if (price <= 69999) return 1035;
    if (price <= 74999) return 1095;
    if (price <= 79999) return 1150;
    if (price <= 84999) return 1210;
    if (price <= 89999) return 1265;
    if (price <= 94999) return 1325;
    if (price <= 99999) return 1380;
    return 1440;
}

// floorInterest.js
function calculateFloorInterest(price, days = 60) {
    const dailyRate = 4.30; // Interest per day for $10,000 unit
    return (price / 10000) * dailyRate * days;
}

function calculateTotalFloorFees(price) {
    const days = 60; // Only calculate for the first 60 days
    const floorFee = 120; // Floor fee for the first 60 days

    const totalInterest = calculateFloorInterest(price, days);
    let totalFee = floorFee;

    // Luxury fee for cars over $40k
    if (price > 40000) {
        const luxuryFee = (price - 40000) * 0.005; // 0.5% of the price above $40,000
        totalFee += luxuryFee;
    }

    return {
        interest: totalInterest,
        fee: totalFee,
        total: totalInterest + totalFee
    };
}
