/*
    Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

    You may assume that each input would have exactly one solution, and you may not use the same element twice.

    You can return the answer in any order.
*/

// version 1

const twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        console.log("i", nums[i], target);
        for (let j = i + 1; j < nums.length; j++) {
            console.log("j", nums[j]);

            if (nums[i] + nums[j] === target) {
                console.log(nums[i], nums[j], target);
                return;
            }
        }
    }
};

// time complexity O(n^2)

// twoSum([2, 7, 11, 15], 9);
// twoSum([3, 2, 4], 6);
// twoSum([3, 3], 6);
// twoSum([-1, -2, -3, -4, -5], -8);

// version 2

const twoSum2 = function (nums, target) {
    const hashMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (hashMap.has(diff)) {
            console.log([diff, nums[i]]);
            return [nums[diff], nums[i]];
        }
        hashMap.set(nums[i], i);
    }
};

// O(n)

// version 3

const twoSum3 = function (nums, target) {
    const prevMap = {};
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (prevMap[diff] !== undefined) return [prevMap[diff], i];
        prevMap[nums[i]] = i;
    }
    return [];
};

// O(n)

// twoSum3([2, 7, 11, 15], 9);
// twoSum3([3, 2, 4], 6);
// twoSum3([3, 3], 6);
// twoSum3([-1, -2, -3, -4, -5], -8);

// const nums = [2, 7, 11, 15];

// for (let [i, num] of nums.entries()) {
//     console.log(i, num);
// }

// const obj = { 2: 0, 7: 1 };
// if (obj[2] !== undefined) {
//     console.log(true);
//     console.log(obj["2"]);
// } else {
//     console.log(false);
// }

// console.log(obj[2]);
// [["num", 1]]
// const map = new Map();
// map.set("num", 1);
// console.log(map, map.has());
