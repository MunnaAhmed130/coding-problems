#include <stdio.h>
#include <stdlib.h>

// Structure to represent each item
struct Item {
    int weight;
    int value;
    double ratio; // value-to-weight ratio
};

// Function to compare items based on the ratio for sorting
int compare(const void *a, const void *b) {
    return ((struct Item*)b)->ratio - ((struct Item*)a)->ratio;
}

// Function to perform fractional knapsack
double fractionalKnapsack(int capacity, struct Item items[], int n) {
    // Calculate value-to-weight ratio for each item
    for (int i = 0; i < n; i++) {
        items[i].ratio = (double)items[i].value / items[i].weight;
    }

    // Sort items based on the ratio in non-ascending order
    qsort(items, n, sizeof(items[0]), compare);

    double result = 0.0; // Total value of the knapsack

    // Iterate through the sorted items
    for (int i = 0; i < n; i++) {
        // If the current item can be fully taken
        if (items[i].weight <= capacity) {
            result += items[i].value;
            capacity -= items[i].weight;
        } else {
            // Take the fraction that fits
            result += (double)capacity / items[i].weight * items[i].value;
            break;
        }
    }

    return result;
}

int main() {
    int capacity = 50;
    struct Item items[] = {{10, 60}, {20, 100}, {30, 120}};
    int n = sizeof(items) / sizeof(items[0]);

    double max_value = fractionalKnapsack(capacity, items, n);

    printf("Maximum value in Knapsack = %.2lf\n", max_value);

    return 0;
}