# Sorting Algorithms

## Bubble Sort

Bubble Sort is a sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.The basic concept is we test every element with the succeeding one to check whether the element is in order or not.

### Applications

- Due to its simplicity, bubble sort is often used to introduce the concept of a sorting algorithm
- Used to identify whether the list is already sorted. When the list is already sorted (which is the best-case scenario), the complexity of bubble sort is only
- In real life, bubble sort can be visualised when people in a queue wanting to be standing in a height wise sorted manner swap their positions among themselves until everyone is standing based on increasing order of heights.

### Time Complexity

```sh
Best Case -- O(N)
Worst Case -- O(N^2)
```

## Selection Sort

It is a searching algorithm that sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.

### Applications

- Can be useful when memory write is a costly operation.

### Time Complexity

```sh
Best Case - O(N^2)
Worst Case - O(N^2)
```

## Insertion Sort

It is a sorting method that builds of the sort by gradually creating a larger left half which is always sorted.The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.

### Applications

- How tailors arrange shirts in a cupboard, they always keep them in sorted order of size and thus insert new shirts at the right position very quickly by moving other shirts forward to keep the right place for a new shirt.
- Use if the input list is already mostly sorted

### Time Complexity

```sh
Best Case - O(N)
Worst Case - O(N^2)
```

## Merge Sort

Merge Sort is a Divide and Conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves.

### Applications

- Merge Sort is useful for sorting linked lists in O(n Log n) time.
- Merge sort is used for counting inversions in a list.

#### Inversion

Inversion Count for an array indicates – how far (or close) the array is from being sorted. If the array is already sorted, then the inversion count is 0, but if the array is sorted in the reverse order, the inversion count is the maximum.

```sh
Example: 

Input: arr[] = {8, 4, 2, 1}
Output: 6
```

### Time Complexity

```sh
BEST - O(N log N)
AVERAGE - O(N log N)
WORST - O(N log N)

```

### Space Complexity

```sh
O(N)
```

## Quick Sort

QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot.The key process in quickSort is partition(). Target of partitions is, given an array and an element x of array as pivot, put x at its correct position in sorted array and put all smaller elements (smaller than x) before x, and put all greater elements (greater than x) after x.

### Applications

- Quick Sort is an in-place sort that is does not require any extra storage.As per the broad definition of in-place algorithm it qualifies as an in-place sorting algorithm as it uses extra space only for storing recursive function calls but not for manipulating the input. 
- Variants of quicksort are used to separate the k smallest or largest elements
- It is used to implement primitive type methods.

### Time Complexity

```sh
BEST - O(N log N)
AVERAGE - O(N log N)
WORST - O(N^2)
```

### Space Complexity

```sh
O(log N)
```
## Radix Sort

Radix sort is an integer sorting algorithm that sorts data with integer keys by grouping the keys by individual digits that share the same significant position and value (place value). Radix sort uses counting sort as a subroutine to sort an array of numbers.


### Applications

- Radix sort can be applied to data that can be sorted lexicographically, be they integers, words, punch cards, playing cards, or the mail.
-  The recursive sorting algorithm has particular application to parallel computing, as each of the bins can be sorted independently
### Time Complexity

```sh
BEST - O(NK)
AVERAGE - O(NK)
WORST - O(NK)
```

### Space Complexity

```sh
O(N+K)
```
