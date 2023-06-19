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


class ListNode {
    public $val;
    public $next;

    public function __construct($val = 0, $next = null) {
        $this->val = $val;
        $this->next = $next;
    }
}

function addTwoNumbers($l1, $l2) {
    $dummy = new ListNode(0);
    $curr = $dummy;
    $carry = 0;

    while ($l1 || $l2 || $carry) {
        $sum = ($l1 ? $l1->val : 0) + ($l2 ? $l2->val : 0) + $carry;
        $carry = floor($sum / 10);
        $curr->next = new ListNode($sum % 10);
        $curr = $curr->next;

        if ($l1) $l1 = $l1->next;
        if ($l2) $l2 = $l2->next;
    }

    return $dummy->next;
}
