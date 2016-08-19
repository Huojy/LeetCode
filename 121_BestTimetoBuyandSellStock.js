/**
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    var n=prices.length;
    var minPur=prices[0];
    var maxPro=0;
    if(n<=1){
        return 0;
    }
    for(var i=1;i<n;i++){
        minPur=Math.min(minPur,prices[i]);
        maxPro=Math.max(maxPro,prices[i]-minPur);
    }
    return maxPro;
};