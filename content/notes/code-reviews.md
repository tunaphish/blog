---
title: Code Reviews
---
reviews protect against the natural state of entropy that code tends to fall into. 
use this guide to refactor and to review other's code

# Gather Context
1. Read the SIM
2. Read the description
3. Draw code diagram | envision the grand scheme of code

# conventions
## General
- prefer readability over everything
- avoid comments
    comments shouldn't explain what something does. the source code does this and commenting is a crutch for poor readability. if you have to have comments it should be to explain why something is the way it is.

- prefer excessive logging and metrics
    logging business logic is a good idea

## Package
- Avoid Multiple responsibilities (will this package change for multiple reasons)
- Avoid Dispersed responsibilities (will a change effect multiple packages)
- Avoid YAGNI
- Inheritence → Favor Composition

## Class
- Avoid Large classes
- Avoid coupling classes
- Remember Injection, Non null
- Avoid Object Instantiation and Favor Factories or Builders
    1. Implementation need not exist at compile time (???)
    2. Vary return type based on inputs Compact API
    3. Return type can be subtyped eg Return a different type of Enum based on size
    4. Is named eg getInstance()
    5. Control instance creation eg object pools
- Minimize Accessibility of Classes
    - Design a minimal public API
    - Reduce accessibility of internals as much as possible
    - Benefits
    1. Change structure however you like
    2. Minimize APIs you have to maintain
    3. Decoupling = develop|test|modify in parallel
    4. Decrease risk of building large systems

## Function
- Avoid Pointless Indirection
- prefer defensive programming, validate inputs
- prefer smaller parameter sizes
  - try more methods that use different parameters
  - try helper methods that encompass the parameter list
  - try parameter objects
- prefer interfaces in params over classes
- avoid side effects and mutations
  - Anything that returns a value should have no observable side effects!
  - return defensive copies
- Avoid Flag Parameters
- Avoid Optionals
- Prefer Method References > Lambdas > Anonymous Classes
  - Lambdas essentially do the job of anonymous classes but with a lot less boilerplate.
  - Method references should be used over lambdas. They provide a bit more documentation and are generally less verbose. This isn't always the case however.
- avoid varargs for performance issues
- use optionals to force clients to deal with missing data

## Data
- avoid global data
- avoid strings over more precise datatypes
- prefer immutability
- avoid primitive
- avoid clumps (data that tends to appear together but not grouped)
- avoid ethereal (temporary)
- avoid chaining (person.name.last)

## Exception Handling
- Favor Try with Resources
- avoid exceptions over conditions (performance)
- Use Checked Exceptions for Recoverable States and Unchecked for Programming Errors

## Style

- Avoid Switches or Loops and prefer functional programming
- avoid (complex) conditionals
  - try early exits
  - try strategy pattern
  - try special case object pattern
  - consider predicate classes for overly complicated predicates
    - when will this class change. it changes for one reason. and that one reason is isolated to this one class. 


---
# Resources
1. Clean Code - Robert Martin
2. Effective Java - Joshua Bloch
3. Refactoring - Martin Fowler