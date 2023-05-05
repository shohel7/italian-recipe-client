import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Blog = () => {
  const pdfRef = useRef();

  const downloadPDF = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("invoice.pdf");
    });
  };
  return (
    <>
      <div className="px-10 md:px-28 py-8" ref={pdfRef}>
        <h1 className="text-gray-800 font-semibold text-2xl md:text-3xl text-center mb-16">
          Question and Answer
        </h1>
        <div>
          <h2 className="font-semibold text-xl mb-5">
            Tell us the differences between uncontrolled and controlled
            components.
          </h2>
          <p className="text-slate-600">
            <span className="text-gray-600 font-bold">Answer: </span>
            State management: In an uncontrolled component, the state is managed
            by the browser, while in a controlled component, the state is
            managed by React. This means that in a controlled component, you
            have more control over the state and can manage it using React's
            state management system. In contrast, in an uncontrolled component,
            the state is managed by the browser, which can make it harder to
            access and manage.
            <p className="mt-3">
              Handling user input: In an uncontrolled component, the browser
              handles user input and updates the component's state, while in a
              controlled component, the component is responsible for handling
              user input and updating its own state. This means that in a
              controlled component, you have more control over how user input is
              handled and can implement custom logic for validation and handling
              user actions. In contrast, in an uncontrolled component, the
              browser handles user input, which can make it harder to customize
              the behavior of the component.
            </p>
          </p>
        </div>
        <div className="my-10">
          <h2 className="font-semibold text-xl mb-5">
            How to validate React props using PropTypes
          </h2>
          <p className="text-slate-600">
            <span className="text-gray-600 font-bold">Answer: </span>
            Props and PropTypes are important mechanisms for passing read-only
            attributes between React components. We can use React props, short
            for properties, to send data from one component to another. If a
            component receives the wrong type of props, it can cause bugs and
            unexpected errors in your app.
            <p className="mt-3">
              PropTypes is a package in React that allows you to define and
              validate the types of props passed to a component. By defining the
              propTypes of a component, you can specify the expected data types
              of its props and ensure that they are passed correctly. PropTypes
              provides a set of built-in validators such as string, number,
              array, object, and more. You can also define custom validators to
              meet your specific needs. When a prop fails validation, React will
              generate a console warning with a helpful error message. Using
              PropTypes can make your code more robust and prevent bugs caused
              by passing the wrong data types to a component.
            </p>
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-xl mb-5">
            Tell us the difference between nodejs and express js.
          </h2>
          <p className="text-slate-600">
            <span className="text-gray-600 font-bold">Node.Js: </span>
            Node.js is an open source and cross-platform runtime environment for
            executing JavaScript code outside of a browser. You need to remember
            that NodeJS is not a framework and it’s not a programming language.
            Most of the people are confused and understand it’s a framework or a
            programming language. We often use Node.js for building back-end
            services like API.
            <p className="mt-3 mb-6">
              Actually Node.js is a platform for building the i/o applications
              which are server-side event-driven and made using JavaScript.
            </p>
          </p>
          <p className="text-slate-600">
            <span className="text-gray-600 font-bold">Express.Js: </span>
            Express is a small framework that sits on top of Node.js’s web
            server functionality to simplify its APIs and add helpful new
            features. It makes it easier to organize your application’s
            functionality with middle ware and routing.
            <p className="mt-3">
              Express.js is a framework based on Node.js which is used for
              building web-application using approaches and principles of
              Node.js event-driven architecture.
            </p>
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-xl mt-5">
            What is a custom hook, and why will you create a custom hook?
          </h2>
          <p className="text-slate-600">
            <span className="text-gray-600 font-bold">Answer: </span>
            React custom hooks are reusable functions that a React JS software
            developer can use to add special and unique functionality to the
            React applications.
            <p className="mt-3">
              React custom hooks offer three major benefits over standard
              library hooks: Reusability, readability, and testability.Custom
              React JS hooks can help developers save time, are reliable,
              reusable, and make the code clean. Creating custom React JS hooks
              is relatively easy
            </p>
          </p>
        </div>
      </div>
      <div className="text-center mt-10">
        <button
          onClick={downloadPDF}
          className="bg-lime-500 hover:bg-lime-600 transition-all duration-200 ease-in-out py-2 px-4 rounded-md text-white"
        >
          Download Blog
        </button>
      </div>
    </>
  );
};

export default Blog;
