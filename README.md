# Typescript Solid Principles

In software engineering, SOLID is a mnemonic acronym for five design principles intended to make object-oriented designs more understandable, flexible, and maintainable. The principles are a subset of many principles promoted by American software engineer and instructor Robert C. Martin, first introduced in his 2000 paper Design Principles and Design Patterns. 

The SOLID ideas are

1. The Single-responsibility principle: "There should never be more than one reason for a class to change. " In other words, every class should have only one responsibility.

2. The Open–closed principle: "Software entities ... should be open for extension, but closed for modification."

3. The Liskov substitution principle: "Functions that use pointers or references to base classes must be able to use objects of derived classes without knowing it."[8] See also design by contract.

4. The Interface segregation principle: "Clients should not be forced to depend upon interfaces that they do not use."

5. The Dependency inversion principle: "Depend upon abstractions,  concretions."


The SOLID acronym was introduced later, around 2004, by Michael Feathers.

Although the SOLID principles apply to any object-oriented design, they can also form a core philosophy for methodologies such as agile development or adaptive software development.

# Single-responsibility principle
The single-responsibility principle (SRP) is a computer programming principle that states that "A module should be responsible to one, and only one, actor."The term actor refers to a group (consisting of one or more stakeholders or users) that requires a change in the module.

Robert C. Martin, the originator of the term, expresses the principle as, "A class should have only one reason to change". Because of confusion around the word "reason" he has also clarified saying that the "principle is about people." In some of his talks, he also argues that the principle is, in particular, about roles or actors. For example, while they might be the same person, the role of an accountant is different from a database administrator. Hence, each module should be responsible for each role.