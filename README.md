## React Components

A shared library of react components for surveillance one.

## Repository Definitions

Below are requirements that must be fulfilled by each type of component in this repository to maintain consistency and a clean SOC.

Presentation Component
---
- Can render html components and other react components
- Does not handle any logic or state except for UI centric state / logic
- Defines locally scoped classes / styles in component

Container Component
---
- Renders other react components, not html
- Handles data state management, delegates logic processing to controllers

Specialized Component
---
- Renders a Component with a style or feature that's re-used more that 1-2 times
- Follows rules of presentation or container depending on what it's composing

View Component
---
- Extends the definition of presentation component
- Composes Presentation and Container components into a structured view
- Does not handle logic, just the glue for other components

Controller
---
- Handles business logic and data processing
- No other dependencies, just pure javascript with dependency injection for using external libraries

Model
---
- Defines methods and their respective api methods to use and how to process the returned data for performing operations on server models
- Pure javascript modules with dependency injection

Api Module
---
- Defines the shape and type of http request for performing operations on a given resource
- Pure javascript function definitions
- Groups methods of the same resource into a single module
---

## 3rd Party Module Usage

If 3rd party modules are required, they must be abstracted into a custom module to keep the codebase as pure as possible.
