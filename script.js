function letterCombinations(input) {
  //Complete the function
	let table ={
		"2" : "abc",
		"3" : "def",
		"4" : "ghi",
		"5" : "jkl",
		"6" : "mno",
		"7" : "pqrs",
		"8" : "tuv",
		"9" : "wxyz"
	}
	let sol=[];
	function solve(currentIndex,calString){
		if(input.length <= currentIndex){
			sol.push(calString);
			return;
		}
		let currentchar = input[currentIndex]
		for(let i=0;i<table[currentchar].length ; i++)
			{
				solve(currentIndex+ 1,calString+ table[currentchar])
			}
	}
	solve(0,"")
	return sol;
}

module.exports = letterCombinations;
