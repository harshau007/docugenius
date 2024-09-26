export const goDummyData = `
<h1 id="function1">Function: calculateFactorial</h1>
<p>This function calculates the factorial of a given number using recursion.</p>
<pre><code>func calculateFactorial(n int) int {
    if n == 0 || n == 1 {
        return 1
    }
    return n * calculateFactorial(n-1)
}</code></pre>

<h1 id="function2">Function: fibonacci</h1>
<p>This function returns the nth number in the Fibonacci sequence.</p>
<pre><code>func fibonacci(n int) int {
    if n <= 1 {
        return n
    }
    return fibonacci(n-1) + fibonacci(n-2)
}</code></pre>

<h1 id="struct1">Struct: Person</h1>
<p>This struct represents a person with name and age fields.</p>
<pre><code>type Person struct {
    Name string
    Age  int
}

func (p Person) SayHello() string {
    return fmt.Sprintf("Hello, my name is %s and I'm %d years old.", p.Name, p.Age)
}</code></pre>

<h1 id="interface1">Interface: Shape</h1>
<p>This interface defines a shape with methods to calculate area and perimeter.</p>
<pre><code>type Shape interface {
    Area() float64
    Perimeter() float64
}</code></pre>
`

export const jsDummyData = `
<h1 id="function1">Function: debounce</h1>
<p>This function creates a debounced version of the provided function.</p>
<pre><code>function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}</code></pre>

<h1 id="function2">Function: memoize</h1>
<p>This function creates a memoized version of the provided function.</p>
<pre><code>function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}</code></pre>

<h1 id="class1">Class: EventEmitter</h1>
<p>This class implements a simple event emitter pattern.</p>
<pre><code>class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach(listener => listener(...args));
    }
  }
}</code></pre>

<h1 id="async1">Async Function: fetchData</h1>
<p>This async function fetches data from an API and handles errors.</p>
<pre><code>async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}</code></pre>
`

export const pythonDummyData = `
<h1 id="function1">Function: quick_sort</h1>
<p>This function implements the quick sort algorithm to sort a list of numbers.</p>
<pre><code>def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)</code></pre>

<h1 id="function2">Function: generate_primes</h1>
<p>This function generates a list of prime numbers up to a given limit using the Sieve of Eratosthenes.</p>
<pre><code>def generate_primes(limit):
    sieve = [True] * (limit + 1)
    sieve[0] = sieve[1] = False
    for i in range(2, int(limit**0.5) + 1):
        if sieve[i]:
            for j in range(i*i, limit + 1, i):
                sieve[j] = False
    return [i for i in range(limit + 1) if sieve[i]]</code></pre>

<h1 id="class1">Class: BinaryTree</h1>
<p>This class implements a binary tree data structure with methods for insertion and traversal.</p>
<pre><code>class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinaryTree:
    def __init__(self):
        self.root = None

    def insert(self, value):
        if not self.root:
            self.root = TreeNode(value)
        else:
            self._insert_recursive(self.root, value)

    def _insert_recursive(self, node, value):
        if value < node.value:
            if node.left is None:
                node.left = TreeNode(value)
            else:
                self._insert_recursive(node.left, value)
        else:
            if node.right is None:
                node.right = TreeNode(value)
            else:
                self._insert_recursive(node.right, value)

    def inorder_traversal(self):
        result = []
        self._inorder_recursive(self.root, result)
        return result

    def _inorder_recursive(self, node, result):
        if node:
            self._inorder_recursive(node.left, result)
            result.append(node.value)
            self._inorder_recursive(node.right, result)</code></pre>

<h1 id="decorator1">Decorator: timer</h1>
<p>This decorator measures the execution time of a function.</p>
<pre><code>import time

def timer(func):
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        print(f"{func.__name__} executed in {end_time - start_time:.4f} seconds")
        return result
    return wrapper</code></pre>
`