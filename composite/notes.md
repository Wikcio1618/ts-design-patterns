# Composite
## Structure
![](../images/composite_structure.png)

## Benefits and use-cases
- Use the Composite pattern when you have to implement a tree-like object structure
- Use the pattern when you want the client code to treat both simple and complex elements uniformly
- You can work with complex tree structures more conveniently: use polymorphism and recursion to your advantage
- *Open/Closed Principle*. You can introduce new element types into the app without breaking the existing code, which now works with the object tree
  
## Dangers
- It might be difficult to provide a common interface for classes whose functionality differs too much. In certain scenarios, you’d need to overgeneralize the component interface, making it harder to comprehend

## How to implement
1. Make sure that the core model of your app can be represented as a tree structure. Try to break it down into simple elements and containers. Remember that containers must be able to contain both simple elements and other containers.
2. Declare the component interface with a list of methods that make sense for both simple and complex components.
3. Create a leaf class to represent simple elements. A program may have multiple different leaf classes.
4. Create a container class to represent complex elements. In this class, provide an array field for storing references to sub-elements. The array must be able to store both leaves and containers, so make sure it’s declared with the component interface type.
    
    While implementing the methods of the component interface, remember that a container is supposed to be delegating most of the work to sub-elements.
5. Finally, define the methods for adding and removal of child elements in the container.

    Keep in mind that these operations can be declared in the component interface. This would violate the Interface Segregation Principle because the methods will be empty in the leaf class. However, the client will be able to treat all the elements equally, even when composing the tree.
   
## Source 
* [refractoring.guru](https://refactoring.guru/design-patterns/composite)