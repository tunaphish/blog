---
title: Software Architect
---
# considerations when designing
industry standard unless you have a reason not to

# software architect's role
1. minimize effort to build and maintain software
2. predict and allow for change (software changes over it's lifetime)
3. defend the architecture

# goals for architecture
1. use cases → architecture screams it's purpose, it is clearly what it's intended to portray
2. operation → can handle hardware operations and future ones
3. development → architecture often reflects organizational structure. this is to faciliate multiple teams working independently
4. deployment →deployed right after being built

# Foundations of Architecture
The difference between good and bad architecture
- defects
- maintainability
- resources required
- customer trust, manager wrath, team morale
- effort to change

# Architecture Requirements

### reliability
work through faults (hardware, human, software)

### scalability
load → TPS, read/write, throughput
performance →
1. how it degrades with increased load and resources kept the same
2. how it stays the same with increased load and resources increased

### maintainability
1. operability
2. simplicity
3. evolvability

### volatility
1. what is most likely to change?
2. how do you allow for it 

# Systems
## 1. clean architecture
Their general plan for a clean architecture
> Dependency Rule → source code dependencies must point only inward, towards higher lvl policies.

Code is separated into four layers
1. Entities
2. Use cases
3. Interface adapters (controllers presenters adapters)
4. Frameworks and tools (web ui db devices)

## 2. create plugin architecture
layers, especially lower ones should be hot swappable

---

# Service

## Dependency Injection > Hard Coding Resources
Flexibility → Use different resources
Testability → Easier Mocking
Reusability → More generic components

### Package Organization
Horizontal - Doesn't scream architecture.. looks like anything else
Vertical - Leaves Potentential to skip layers
Component - persistence and business logic are combined

### Separation of Concerns
Object orientated Programming

### Functions
Functional Programming

### Data Management
Structural Programming

## Screaming architecture
Your architecture should plainly state its use cases.

Not the framework. Not the database. Not the delivery system. It should be about the use cases. You should be able to defer those decisions.  Someone should be able to look at the source and base directory and immediately say oh this is an rpg or this is a an inventory system. 

Testable without knowledge of database or delivery system. 

## Defining Partial Partial Boundaries
As an architect you are often going to run into [[you-are-not-going-to-need-it]] But it's your job to think... I might need it. This need evolves overtime and with business needs.
Restrict volatility on things that don’t matter. This is where experience comes in handy. You can tell what doesn’t matter.
1. Design a service as if they were two. But deploy them in the same package. That way you can easily separate. 
2. One way boundaries. 
3. Facades → A client calls a class which just serves to call other classes that the client never has access to. There’s still a transitive dependency however though. The boundary is very weak. 

## Component (Package) Cohesion
Three Guiding Principles (They push and pull against each other)
1. CCP → Group things that are likely to change at the same time for same reason
2. CRP → split classes that will make callers depend on things they don't need
3. REP → granule of reuse is the same as granule of release

---

# data decisions
> Effective data models are not even slightly clever - Will Larson (Staff Engineer)

Are you focusing on transactions or analytics on your data?

When looking at your encoded data (data in transition, through network or saved to state like json, and xml) focus on evolvability. Is it backwards and fowards compatible?

Old application code can accidentally overwrite database properties it doesn't recognize if it just ignores them!!

## intrinsic vs extrinsic properties
when you think about data are properties intrinsic or extrinsic
is it core to the object or external

example
intrisic, car is red, couple, fast
extrinsic, car's owner, location

---

# Class

## SOLID Principles

Single Responsibility Principle - classes should change only because of one actor

Open Closed Principle - classes should be open to addition... not to modification

Liskov Substitution Principle - Things should be substituble without worry

Interface Segragation Principle - don't combine things people don't need

Dependency Inversion Principle
1. Don't rely on concrete implementations
2. Don't derive from concrete implementations
3. Don't override concrete functions
4. Don't mention name of anything concrete

---

# writing design documents

## general tips
- Emphasize clarity of thought and substance
- Avoid weasel words and passive action (use active verbs instead) 
  - [[allow-yourself-to-be-vulnerable]] and assert yourself
- Lead w/ proposal and then lead through journey
- Visualizations are great like sequence diagrams

## sample six pager
Use Cases → Tech Requirements → Key Tech Decisions → Approaches → Trade offs

1. Purpose 
    1. Use to narrow scope
    2. Emphasize BRD
    3. Create functional requirements (intrinsic requirements)
    4. Additional Constraints including current state of world
2. Tenants 
    1. used to guide decision points
3. Situation
4. Recommendation
5. Implementation Plan
6. Appendices