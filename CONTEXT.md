# Nature Immersive Svelte Components

A published npm component library providing Svelte UI components for building Nature immersive editorial articles.

## Language

**Component Library**:
A collection of Svelte components distributed as an npm package for use in consumer applications.
_Avoid_: design system, component kit

**Theme**:
A set of CSS custom properties applied via a separate compiled stylesheet (`light.css` / `dark.css`) that controls the visual appearance of all components.
_Avoid_: skin, colour scheme

**Consumer**:
An application or project that installs and uses this library as an npm dependency.
_Avoid_: user, client, host app

**Story**:
A Storybook entry that demonstrates a component in isolation with configurable props.
_Avoid_: example, demo

**Interactive Component**:
A component that manages its own internal state and responds to user input (e.g. `ImageSlider`, `SeriesArticleNav`).
_Avoid_: stateful component, smart component

**Layout Primitive**:
A component imported from `creditdesign-svelte-components` that handles spacing and layout (e.g. `Stack`, `Center`, `Cluster`).
_Avoid_: utility component, helper component

## Relationships

- A **Component Library** exposes components via a single `src/index.js` entry point
- Each **Component** may depend on one or more **Layout Primitives**
- **Themes** are shipped as separate CSS files (`static/css/`) alongside the component source
- Each **Component** should have at least one **Story**
- **Interactive Components** are a subset of components that own local state

## Example dialogue

> **Dev:** "Should we bundle the theme CSS into the component output?"
> **Domain expert:** "No — the **Theme** is a separate stylesheet that consumers include independently. This lets them swap between light and dark without re-importing components."

## Flagged ambiguities

- "sass" / "scss" used interchangeably in scripts — resolved: the files are `.scss`, the tool is `sass`.
