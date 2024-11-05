import React from 'react';

function Navbar() {
  return (
    <nav>
      <div className="navigation">
        <a href="/">Home</a>
        <a href="/men">Men</a>
        <a href="/women">Women</a>
        <a href="/kids">Kids</a>
      </div>
      <div className="logo">
        <p>Clothify</p>
      </div>
      <div className="icons">
            <a href=""><svg width="20px" height="20px" color="black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="search_svg__feather search_svg__feather-search everlane-icon"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path></svg></a>
            <a href="login.html"><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="user_svg__feather user_svg__feather-user everlane-icon" aria-hidden="true" color="black"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></a>
            <a href=""><svg width="20px" height="20px" color="black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="cart_svg__feather cart_svg__feather-shopping-cart everlane-icon" aria-hidden="true"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"></path></svg></a>
        </div>
    </nav>
  );
}

export default Navbar;
