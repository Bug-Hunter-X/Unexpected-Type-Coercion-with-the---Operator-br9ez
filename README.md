# Unexpected Type Coercion in JavaScript
This example demonstrates a common pitfall in JavaScript: unexpected type coercion with the + operator. When one operand is a string, the + operator performs string concatenation rather than numerical addition. This can lead to unexpected results if not carefully considered.

## Bug
The `foo` function attempts to add two numbers, but if one of them is a string, the result will be a string concatenation.

## Solution
The solution involves explicitly converting the operands to numbers using `parseInt()` or `parseFloat()` before performing the addition.