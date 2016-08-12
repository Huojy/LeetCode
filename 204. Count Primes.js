/**
 * Count the number of prime numbers less than a non-negative number, n.
 * @param {number} n
 * @return {number}
 */
 var countPrimes = function(n) {
//法一（超时）
    var count=0;
    for(var i=1;i<n;i++){
        if(isPrimes(i)){
           count++; 
        }
    }
    return count;
	//定义一个判断是否为质数的函数
    function isPrimes(n){
        if(n<2){
            return false;
        }
        for(var j=2;j<n/2+1;j++){
            if(n%j===0){
                return false;
            }
        }
        return true;
    }
//法二
    //像上面这样按一般方法判断会超时，所以换另一种思路，即用厄拉多塞筛法
    /*
    方法描述：先将 2~n 的各个数放入表中，然后在2的上面画一个圆圈，然后划去2的其他倍数；第一个既未画圈又没有被划去的数是3，将它画圈，再划去3的其他倍数；现在既未画圈又没有被划去的第一个数是5，将它画圈，并划去5的其他倍数……依次类推，一直到所有小于或等于n的各数都画了圈或划去为止。这时，表中画了圈的以及未划去的那些数正好就是小于 n 的素数。
    其实，当你要画圈的素数的平方大于 n 时，那么后面没有划去的数都是素数，就不用继续判了
    */
	var primes=[];
	var count=0;
	for(var i=1;i<n;i++){
		if(isPrimes(i)){
		   count++;
		   primes.push(i);
		}
	}
	return count;
	//定义一个判断是否为质数的函数
	function isPrimes(n){
		if(n&2===0){
			return false;
		}
		if(n<2){
			return false;
		}
		if(n===2){
			return true;
		}
		for(var j=0;j<primes.length;j++){
			var prime=primes[j];
			if(prime>Math.sqrt(n)){
				break;
			}
			if(n%prime===0){
				return false;
			}
		}
		return true; 
	}
};