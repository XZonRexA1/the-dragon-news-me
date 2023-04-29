import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea autem nostrum modi illum labore ab temporibus doloremque? Fugit, aliquid quos, autem inventore iste repellat quisquam deleniti eos, dolorem commodi ducimus.</p>
            <p>Go Back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;