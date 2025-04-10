# Factory (*a.k.a.* Virtual Constructor)
## Structure
![](../images/factory_structure.png)
1. **Product interface** provides interface for all types of products
2. **Concrete products** implement non-abstract types of products
3. **Creator** class can be an `abstract` class that provides an `abstract` method that returns objects of type `Product`
4. **Concrete creators** are classes that `override` *createProduct()* method

## Benefits and use-cases
- separates the *client code* (code that uses **Product** objects) from *product construction code*
- Provides a way to extend the code easily (by adding new **Concrete creator**) and a new **Product**
- Can save system resources

## Dangers
- Introduces many new classes and can make the code more complicated

## How to implement 
1. Make all products follow the same interface. This interface should declare methods that make sense in every product.
2. Add an empty factory method inside the creator class. The return type of the method should match the common product interface.
3. In the creator’s code find all references to product constructors. One by one, replace them with calls to the factory method, while extracting the product creation code into the factory method.
4. You might need to add a temporary parameter to the factory method to control the type of returned product.
5. At this point, the code of the factory method may look pretty ugly. It may have a large switch statement that picks which product class to instantiate. But don’t worry, we’ll fix it soon enough.
6. Now, create a set of creator subclasses for each type of product listed in the factory method. Override the factory method in the subclasses and extract the appropriate bits of construction code from the base method.
7. If there are too many product types and it doesn’t make sense to create subclasses for all of them, you can reuse the control parameter from the base class in subclasses.
8. For instance, imagine that you have the following hierarchy of classes: the base Mail class with a couple of subclasses: AirMail and GroundMail; the Transport classes are Plane, Truck and Train. While the AirMail class only uses Plane objects, GroundMail may work with both Truck and Train objects. You can create a new subclass (say TrainMail) to handle both cases, but there’s another option. The client code can pass an argument to the factory method of the GroundMail class to control which product it wants to receive.
9. If, after all of the extractions, the base factory method has become empty, you can make it abstract. If there’s something left, you can make it a default behavior of the method.

## Source 
* [refractoring.guru](https://refactoring.guru/design-patterns/factory-method)