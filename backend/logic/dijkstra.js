const graph = require("./metroGraph");

// ===============================
// MIN HEAP (Priority Queue)
// ===============================

class MinHeap {
  constructor() {
    this.heap = [];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  insert(station, distance) {
    const node = {
      station,
      distance,
    };

    this.heap.push(node);

    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);

      if (this.heap[parent].distance <= this.heap[index].distance) break;

      [this.heap[parent], this.heap[index]] = [
        this.heap[index],
        this.heap[parent],
      ];

      index = parent;
    }
  }

  extractMin() {
    if (this.heap.length === 0) return null;

    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];

    this.heap[0] = this.heap.pop();

    this.heapifyDown(0);

    return min;
  }

  heapifyDown(index) {
    while (true) {
      let smallest = index;

      let left = 2 * index + 1;
      let right = 2 * index + 2;

      if (
        left < this.heap.length &&
        this.heap[left].distance < this.heap[smallest].distance
      ) {
        smallest = left;
      }

      if (
        right < this.heap.length &&
        this.heap[right].distance < this.heap[smallest].distance
      ) {
        smallest = right;
      }

      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];

      index = smallest;
    }
  }
}

// ===============================
// DIJKSTRA
// ===============================

function shortestPath(source, destination) {
  if (!graph[source] || !graph[destination]) {
    return {
      success: false,
      message: "Invalid Station Name",
    };
  }

  const distances = {};
  const previous = {};
  const previousLine = {};
  const visited = new Set();

  const pq = new MinHeap();

  for (let station in graph) {
    distances[station] = Infinity;
    previous[station] = null;
    previousLine[station] = null;
  }

  distances[source] = 0;

  pq.insert(source, 0);

  while (!pq.isEmpty()) {
    const current = pq.extractMin();

    const currentStation = current.station;

    if (visited.has(currentStation)) continue;

    visited.add(currentStation);

    if (currentStation === destination) break;

    for (const neighbour of graph[currentStation]) {
      const nextStation = neighbour.station;

      if (visited.has(nextStation)) continue;

      const newDistance = distances[currentStation] + neighbour.distance;

      if (newDistance < distances[nextStation]) {
        distances[nextStation] = newDistance;

        previous[nextStation] = currentStation;

        previousLine[nextStation] = neighbour.line;

        pq.insert(nextStation, newDistance);
      }
    }
  }

  // ===============================
  // RECONSTRUCT PATH
  // ===============================

  const path = [];
  const lines = [];

  let current = destination;

  while (current !== null) {
    path.push(current);

    if (previousLine[current] !== null) lines.push(previousLine[current]);

    current = previous[current];
  }

  path.reverse();
  lines.reverse();
  // ===============================
  // COUNT INTERCHANGES
  // ===============================

  let interchanges = 0;

  for (let i = 1; i < lines.length; i++) {
    if (lines[i] !== lines[i - 1]) {
      interchanges++;
    }
  }

  return {
    success: true,

    source,

    destination,

    path,

    totalDistance: Number(distances[destination].toFixed(2)),

    interchanges,

    lines,
  };
}

module.exports = shortestPath;