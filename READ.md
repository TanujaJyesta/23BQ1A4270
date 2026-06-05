# Stage 1

## Priority Rules

Placement notifications have highest priority.

Result notifications have medium priority.

Event notifications have lowest priority.

Weights:
- Placement = 3
- Result = 2
- Event = 1

## Approach

1. Fetch notifications.
2. Assign weights.
3. Sort by weight.
4. If weights are same, sort by timestamp.
5. Display top 10 notifications.

## Efficient Top 10 Maintenance

For continuous incoming notifications, a Min Heap of size 10 can be used.

This avoids sorting all notifications repeatedly.

## Complexity

Sorting Approach:
O(n log n)

Heap Approach:
O(n log 10)