import React from 'react';
import './404.css';

const NotFound = () => {
    return (
        <section id='not'>
            <div className="not-found card">
                <h1>404 - Page Not Found</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
                <a className=' transition-all ease-in-out delay-300 bg-slate-600 hover:bg-slate-900 px-6 py-3 rounded-xl hover:text-white hover:px-8 hover:py-4 hover:rounded-full' href="/">Go to Homepage</a>
            </div>
        </section>
    );
};

export default NotFound;
