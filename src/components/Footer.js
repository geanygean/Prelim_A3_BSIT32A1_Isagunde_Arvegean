import React from 'react';

function Footer() {
    return (
        <footer className="text-center mt-4 p-3 bg-dark text-white">
            © {new Date().getFullYear()} LYCEUM. All Rights Reserved.
        </footer>
    );
}

export default Footer;
