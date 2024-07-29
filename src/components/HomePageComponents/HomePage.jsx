import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <Link to="/blog">
                <button className='btn btn-neutral m-10'>Blog Page</button>
            </Link>
            <Link to="/shop">
                <button className='btn btn-neutral m-10'>Shop Page</button>
            </Link>
            <Link to="/about">
                <button className='btn btn-neutral m-10'>About</button>
            </Link>
        </div>
    )
}

export default HomePage