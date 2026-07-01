## Big O
Big O Notation helps us understand how long an 
algorithm will take to run or how much memory it 
will need as the amount of data it handles grows.

## For example:
Imagine you have a giant mess to clean. Big O
notation is like saying how the cleaning time
grows as the mess gets bigger.

## The Core Rule:
Big O doesn't measure time in seconds (because 
a fast computer runs code quicker than an old laptop).
Instead, it measures the number of operations or steps 
it takes to finish the job.


## Real-World Analogies for the Big 4
1. Constant Time: O(1)
    -The Analogy: You already know exactly where 
        your favorite movie is on the shelf. You walk 
        over and pick it up. It doesn't matter if you 
        own 5 movies or 5,000 movies; it always takes 1 step.
    
    -The Code: Accessing an array element by its index (groceries[0]).


2. Linear Time: O(n)
    -The Analogy: Your movies are in a messy pile. 
        To find Inception, you have to look at them one by one, 
        starting from the top. If you have 10 movies, 
        it takes up to 10 steps. If you have 1,000 movies, 
        it takes up to 1,000 steps. As the mess grows, 
        the time grows at the exact same rate.

    -The Code: A simple for loop searching for an item (like your grocery script).


3. Quadratic Time: O(n^2) // n square
    -The Analogy: You have a box of movies, and you want 
        to see if you accidentally bought any duplicates. 
        You pick up the first movie and compare it to every 
        other movie in the box. Then you pick up the second movie
        and compare it to every other movie again.
        
    -The Code: Nested loops (a loop inside a loop). If you have 10 movies, you do 10 * 10 = 100 comparisons.


4. Logarithmic Time: O(log n)
    -The Analogy: Your movies are perfectly alphabetized 
        on a shelf. You open the shelf exactly in the middle. 
        Is Inception before or after this point? It's before! 
        You just threw away half of the shelf without looking 
        at them. You repeat this, cutting the remaining movies 
        in half every time.

    -The Code: Binary Search. This is the ultimate goal 
        for handling massive datasets because even if you have 
        1,000,000 items, it only takes about 20 steps 
        to find what you need.