import React from 'react';
import hearticon from '../../public/heart.png'

function Footer({year}) {
    return (
        <>
            <footer id="footer">
                <hr />
                <p>
                    <span>&copy; {year} </span>
                    Designed with <img src={hearticon} /> by Hom Dahal
                </p>
            </footer>
        </>
    );
}
export default Footer