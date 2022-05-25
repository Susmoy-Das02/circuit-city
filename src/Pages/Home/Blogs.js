import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-2xl text-cyan-500' >How will you improve the performance of a React Application?</h1>
            <p className='text-lg'>
                1.	Keeping component state local where necessary. <br />
                2.	Memoizing React components to prevent unnecessary re-renders. <br />
                3.	Code-splitting in React using dynamic import(). <br />
                4.	Windowing or list virtualization in React. <br />
                5.	Lazy loading images in React.

            </p>

            <div>
                <h1 className='text-2xl text-cyan-500'>What are the different ways to manage a state in a React application?</h1>

                <p className='text-lg'>

                    There are four main types of state you need to properly manage in your React apps: <br />
                    1.	Local state. <br />
                    2.	Global state. <br />
                    3.	Server state. <br />
                    4.	URL state.


                </p>
            </div>

            <div>
                <h1 className='text-2xl text-cyan-500'>How does prototypical inheritance work?</h1>

                <p className='text-lg'>
                    The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                </p>
            </div>

            <div>
                <h1 className='text-2xl text-cyan-500'>What is a unit test? Why should write unit tests?</h1>

                <p className='text-lg'>

                    Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.

                </p>


            </div>
        </div>

    );
};

export default Blogs;