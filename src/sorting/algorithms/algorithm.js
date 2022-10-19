const merge = (arr1, arr2) => 
{
	let sorted = [];
	
	while (arr1.length && arr2.length) 
	{
		if (arr1[0] < arr2[0]) sorted.push(arr1.shift());
		else sorted.push(arr2.shift());
	};
	
	return sorted.concat(arr1.slice().concat(arr2.slice()));
};
export const mergeSort = (arr) => 
{
	if (arr.length <= 1) return arr;
	let mid = Math.floor(arr.length / 2),
	left = mergeSort(arr.slice(0, mid)),
	right = mergeSort(arr.slice(mid));
	
	return merge(left, right); 
};
console.log(mergeSort([2,3,4,12,5,6321,123,451,2]))
console.log(merge([2, 5, 10, 57], [9, 12, 13]));
/*
export const mergesort =(array) =>
{
	if (array.length == 1)
	return array;
	const half = Math.floor(array.length/2);
	
	const left_half = mergesort(array.slice(0,half));
	const right_half = mergesort(array.slice(half));
	const sorted_arr = [];
	let i = 0, j = 0;
	while (i < left_half.length && j <right_half.length)
	{
		if (left_half[i] < right_half[j])
		{
			sorted_arr.push(left_half[i]);
			i++;
		}
		else 
		{
			sorted_arr.push(right_half[j++]);
			j++;
		}
	}
	while (i < left_half.left_half)
	
}
*/