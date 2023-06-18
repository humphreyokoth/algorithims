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
  