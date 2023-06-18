<?php


function twoSum($nums, $target){

    for ($i=0; $i < count($nums) ; $i++) { 
      for ($j=1+$i; $j < count($nums); $j++) { 
        if ($nums[$i] + $nums[$j] === $target) {
            return [$i,$j];
        }
      }
    }

}
$nums = [2,7,15,11];
$target = 9;
$result = twoSum($nums,$target);
echo $result;
print_r($result);
