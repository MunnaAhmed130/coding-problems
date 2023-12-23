#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

// Structure to represent an edge in the graph
struct Edge {
    int src, dest, weight;
};

// Structure to represent the graph
struct Graph {
    int V, E; // Number of vertices and edges
    struct Edge* edges;
};

// Function to initialize the graph with V vertices and E edges
struct Graph* createGraph(int V, int E) {
    struct Graph* graph = (struct Graph*)malloc(sizeof(struct Graph));
    graph->V = V;
    graph->E = E;
    graph->edges = (struct Edge*)malloc(E * sizeof(struct Edge));
    return graph;
}

// Function to perform Bellman-Ford algorithm
void bellmanFord(struct Graph* graph, int src) {
    int V = graph->V;
    int E = graph->E;
    int dist[V];

    // Initialize distances from src to all other vertices as INFINITE
    for (int i = 0; i < V; i++)
        dist[i] = INT_MAX;
    dist[src] = 0;

    // Relax all edges V-1 times
    for (int i = 1; i <= V - 1; i++) {
        for (int j = 0; j < E; j++) {
            int u = graph->edges[j].src;
            int v = graph->edges[j].dest;
            int weight = graph->edges[j].weight;
            if (dist[u] != INT_MAX && dist[u] + weight < dist[v])
                dist[v] = dist[u] + weight;
        }
    }

    // Check for negative-weight cycles
    for (int i = 0; i < E; i++) {
        int u = graph->edges[i].src;
        int v = graph->edges[i].dest;
        int weight = graph->edges[i].weight;
        if (dist[u] != INT_MAX && dist[u] + weight < dist[v]) {
            printf("Graph contains negative weight cycle. Cannot find shortest paths.\n");
            return;
        }
    }

    // Print the distance array
    printf("Vertex \t Distance from Source\n");
    for (int i = 0; i < V; i++)
        printf("%d \t %d\n", i, dist[i]);
}

int main() {
    // Example graph represented by the number of vertices (V) and edges (E)
    int V = 5;
    int E = 8;
    struct Graph* graph = createGraph(V, E);

    // Example edges with source, destination, and weight
    graph->edges[0].src = 0;
    graph->edges[0].dest = 1;
    graph->edges[0].weight = -1;

    graph->edges[1].src = 0;
    graph->edges[1].dest = 2;
    graph->edges[1].weight = 4;

    graph->edges[2].src = 1;
    graph->edges[2].dest = 2;
    graph->edges[2].weight = 3;

    graph->edges[3].src = 1;
    graph->edges[3].dest = 3;
    graph->edges[3].weight = 2;

    graph->edges[4].src = 1;
    graph->edges[4].dest = 4;
    graph->edges[4].weight = 2;

    graph->edges[5].src = 3;
    graph->edges[5].dest = 2;
    graph->edges[5].weight = 5;

    graph->edges[6].src = 3;
    graph->edges[6].dest = 1;
    graph->edges[6].weight = 1;

    graph->edges[7].src = 4;
    graph->edges[7].dest = 3;
    graph->edges[7].weight = -3;


    // Source vertex
    int src = 0;

    // Perform Bellman-Ford algorithm
    bellmanFord(graph, src);

    // Free allocated memory
    free(graph->edges);
    free(graph);

    return 0;
}
