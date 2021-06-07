---
title: Code Documentation
---
documentation is the act of sharing knowledge

# tenets
one diagram = one story
documentation should 
1. exploit authoritative sources (code base)
2. enrich authoritative sources (annotations as tags, standardized git commits)

# why is is documentation important?
## code tenure vs developer tenure
average developer tenure is 3 years
average code tenure is 13 years.
documentation is meant to bridge this gap

play the role of a curator. you are taking the infinite knowledge of development and your project and crafting a useful narrative for your team and stakeholders

software architect's goal is to minimize the human effort required to build and maintain software. thus you should foucs on the speed of delivery.
but not just for you and not just for right now. 
but for your coworkers and for the future

the actual act of writing code is easy. the difficulty of coding comes from continuous [[decision-making]]. backing those decisions is knowledge which is required to make informed decisions. thus the efficient storage and retrieval of knowledge is important. 

# documents in every code project
1. readme 
    1. installation instructions
    2. getting started
    3. how to contribute
2. glossary

# ideas
1. [[behavior-driven-development]]
2. annotations as generic documentation
    1. design patterns (@adapter that links to GoF pattern)
    2. callouts (@hack, @provider)
    3. tags (@provider find all dependencies)
3. decision log
    1. explains rationales
4. formalized git (semi formal)
    1. generate change log
    2. explains rationales
    3. allows command line tools exploitation