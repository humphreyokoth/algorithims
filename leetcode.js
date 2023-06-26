const twoSum = (nums, target) => {
    // Iterate through each number in the array
    for (let i = 0; i < nums.length; i++) {
        // Iterate through the remaining numbers to find pairs
        for (let j = i + 1; j < nums.length; j++) {
            console.log("Checking pair:", nums[i], nums[j]);
            console.log("Checking pair:",j);
            // Check if the sum of current pair equals the target
            if (nums[i] + nums[j] === target) {
                console.log("Match found:", nums[i], "+", nums[j], "=", target);
                // Return the indices of the two numbers that sum up to the target
                return [i, j];
            }
        }
    }
    // No pair found, return undefined (implicitly)
    return undefined;
};
  
  // Example usage:
  const nums = [2, 7, 11, 15];
  const target = 9;
  const result = twoSum(nums, target);
  console.log("Result:", result);
  


/**
 /**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0
    let begin = 0
    let map = {}

    for(let end = 0;end<s.length;end ++){
        if(map[s[end]] !== undefined && map[s[end]]>= begin){
            begin = map[s[end]] +1
        }
        map[s[end]] = end
        max = Math.max(max,end-begin +1)
    }
    return max
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let begin = 0;
    let map = {};
  
    for (let end = 0; end < s.length; end++) {
      console.log("Current Character:", s[end]);
      console.log("Current Substring:", s.slice(begin, end + 1));
  
      if (map[s[end]] !== undefined && map[s[end]] >= begin) {
        console.log(
          "Repeating Character Found:",
          s[end],
          "at index",
          end,
          "within the current substring"
        );
        begin = map[s[end]] + 1;
        console.log("New Begin Index:", begin);
      }
  
      map[s[end]] = end;
      max = Math.max(max, end - begin + 1);
  
      console.log("Current Max Length:", max);
      console.log("-----------------");
    }
  
    return max;
  };
  
  // Example usage:
  const input = "abcabcbb";
  const results = lengthOfLongestSubstring(input);
  console.log("Result:", results);
  

  function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  
  var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);
    let curr = dummy;
    let carry = 0;
  
    while (l1 || l2 || carry) {
      let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
      carry = Math.floor(sum / 10);
      curr.next = new ListNode(sum % 10);
      curr = curr.next;
  
      if (l1) l1 = l1.next;
      if (l2) l2 = l2.next;
    }
  
    return dummy.next;
  };
  

  var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1)
    let x = nums1.length
    let y = nums2.length
    let low = 0, high = x
    while(low <= high) {
        const partitionX = (high + low) >> 1
        const partitionY = ((x + y + 1) >> 1) - partitionX
        
        const maxX = partitionX == 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1]
        const maxY = partitionY == 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1]
        
        const minX = partitionX == nums1.length ? Number.POSITIVE_INFINITY : nums1[partitionX]
        const minY = partitionY == nums2.length ? Number.POSITIVE_INFINITY : nums2[partitionY ]
        
        if(maxX <= minY && maxY <= minX) {
            const lowMax = Math.max(maxX, maxY)
            if( (x + y) % 2 == 1)
                return lowMax
            return (lowMax + Math.min(minX, minY)) / 2
        } else if(maxX < minY) {
            low = partitionX + 1
        } else 
            high = partitionX - 1
    }
    /**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const mergeArray = [...nums1, ...nums2].sort((a, b) => a - b);
 if (mergeArray.length % 2 === 0) {
   let specificPlace = Math.floor(mergeArray.length / 2);
   let median =
     (mergeArray[specificPlace - 1] + mergeArray[specificPlace]) / 2;
   return median;
 } else {
   let median = Math.floor(mergeArray.length / 2);
   return mergeArray[median];
 } 
};
};