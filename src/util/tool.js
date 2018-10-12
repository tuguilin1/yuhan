export const getMin = (arr)=>{
	let left=100,num;
	arr.forEach((item,index)=>{
		if(Math.abs(left) > Math.abs(item)){
			left = item;
			num = index
		}
	});
	return {left,num}
}