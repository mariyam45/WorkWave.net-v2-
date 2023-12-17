import React from "react";

const Blogs = () => {
  return (
    <div className="mt-10 w-4/6 mx-auto">
      <div className="collapse collapse-arrow bg-base-200 mb-5">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-xl font-medium">
          When should you use context API?
        </div>
        <div className="collapse-content">
          <p>
            The Context API in React is used to manage state at the application
            level and make it available to any component that needs it without
            passing it explicitly through props. You might consider using the
            Context API in the following scenarios:br <br /> 1. **Sharing State
            Across Components:** - When you have state that needs to be shared
            by multiple components at different levels of the component tree. -
            Avoiding prop drilling, where you would otherwise need to pass the
            state down through several layers of components.
            <br /> 2. **Global Settings or Themes:** - When you have global
            settings or themes that need to be accessed by various components.{" "}
            <br />
            3. **Authentication and User Data:** - When dealing with user
            authentication and user-related data that needs to be available
            throughout the application.
            <br /> 4. **Localization:** - When implementing localization and you
            need to provide language-related information to various parts of
            your application. <br />
            5. **Reducing Component Coupling:** - When you want to reduce the
            coupling between components and make them more independent of each
            other.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 mb-5">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          User What is a custom hook?
        </div>
        <div className="collapse-content">
          <p>
            A custom hook in React is a JavaScript function that allows you to
            extract and reuse stateful logic from a component. It enables you to
            encapsulate complex logic and share it across multiple components,
            promoting code reusability and maintainability. Custom hooks
            typically start with the prefix "use" to adhere to the convention.
            Here's a brief explanation of key aspects: Encapsulation of Logic:
            Custom hooks encapsulate logic related to state, side effects, or
            other behaviors within a function. Prefix "use": By convention,
            custom hooks should be named with the "use" prefix (e.g.,
            useCustomHook). Reuse Across Components: Custom hooks are designed
            to be easily reused across different components, promoting a modular
            and composable code structure. State and Side Effects: Custom hooks
            can manage local state, effect hooks, or any other React feature,
            allowing you to abstract and share complex functionality.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 mb-5">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          What is useRef?
        </div>
        <div className="collapse-content">
          <p>
            useRef is a Hook in React that provides a way to create mutable
            object properties that persist across renders without causing the
            component to re-render. It returns a mutable object called a "ref
            object" with a current property. The current property can be
            assigned any value, and it will persist between renders. Key points
            about useRef: Preserving Values Across Renders: useRef is commonly
            used to hold values that need to persist across renders without
            triggering a re-render. Imperative Access to DOM Elements: It is
            often used to gain imperative access to a DOM element. You can
            assign the ref attribute to a React element, and the current
            property of the useRef object will point to the underlying DOM
            element. Avoiding Re-renders: Unlike useState, changing the current
            property of a useRef object does not trigger a re-render of the
            component. Initialization: useRef can be initialized with an initial
            value, but its primary use is to hold mutable values that might
            change over time.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 mb-5">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          What is useMemo?
        </div>
        <div className="collapse-content">
          <p>
            useMemo is a React Hook used for memoization, a technique to
            optimize performance by memoizing the result of a function and
            returning the cached result when the inputs to that function have
            not changed. It is particularly useful for expensive calculations or
            computations that don't need to be recomputed on every render. Key
            points about useMemo: Memoization: useMemo memoizes the result of a
            function and returns the cached result when the inputs
            (dependencies) have not changed. Performance Optimization: It helps
            optimize the performance of a React application by preventing
            unnecessary recalculations of values during renders. Dependencies:
            useMemo takes two arguments: a function (the memoized function) and
            an array of dependencies. The memoized function is only re-executed
            when the dependencies change. Expensive Computations: It is commonly
            used for caching the results of expensive computations, preventing
            the recalculation of the same result on every render.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
