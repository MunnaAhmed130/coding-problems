#include <stdio.h>
#include <limits.h>

// Number of vertices in the graph
#define V 4

// Function to perform Floyd-Warshall algorithm
void floydWarshall(int graph[V][V]) {
    int dist[V][V];

    // Initialize the distance matrix
    for (int i = 0; i < V; i++) {
        for (int j = 0; j < V; j++) {
            dist[i][j] = graph[i][j];
        }
    }

    // Main loop for intermediate vertex
    for (int k = 0; k < V; k++) {
        // Iterate over all pairs of vertices (i, j)
        for (int i = 0; i < V; i++) {
            for (int j = 0; j < V; j++) {
                // If vertex k is on the shortest path from i to j, update the distance
                if (dist[i][k] != INT_MAX && dist[k][j] != INT_MAX && dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }

    // Print the result
    printf("Shortest distances between every pair of vertices:\n");
    for (int i = 0; i < V; i++) {
        for (int j = 0; j < V; j++) {
            if (dist[i][j] == INT_MAX) {
                printf("INF ");
            } else {
                printf("%d   ", dist[i][j]);
            }
        }
        printf("\n");
    }
}

int main() {
    // Example graph represented as an adjacency matrix
    int graph[V][V] = {
        {0, INT_MAX, 3, INT_MAX},
        {2, 0, INT_MAX, INT_MAX},
        {INT_MAX, 7, 0, 1},
        {6, INT_MAX, INT_MAX, 0}
    };

    // Perform Floyd-Warshall algorithm
    floydWarshall(graph);

    return 0;
}
