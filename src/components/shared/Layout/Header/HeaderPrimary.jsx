import React from "react";
import Brand from "../../../icons/Brand";
import Cart from "../../../icons/Cart";
import NavLinkPrimary from "./NavLinkPrimary";
import NavLinkSecondary from "./NavLinkSecondary";
import Container from "../../Container";

const HeaderPrimary = () => {
  return (
    <div className="">
      <input type="checkbox" id="nav-toggle" className="peer sr-only" />

      <header className="">
        <Container className="flex h-19 items-center gap-8">
          <a className="block text-indigo-600" href="#">
            <span className="sr-only">Home</span>
            <Brand />
          </a>

          <div className="flex flex-1 items-center justify-end">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-9.5 text-sm">
                <NavLinkPrimary to="/" isActive>
                  Home
                </NavLinkPrimary>

                <NavLinkPrimary to="/watches">Watches</NavLinkPrimary>

                <NavLinkPrimary to="/orders">Orders</NavLinkPrimary>

                <NavLinkPrimary>
                  <Cart />
                </NavLinkPrimary>
              </ul>
            </nav>

            <div className="flex items-center gap-3">
              {/* <div className="block md:hidden">
                <Cart />
              </div> */}

              <label
                htmlFor="nav-toggle"
                id="nav-toggle-label"
                aria-expanded="false"
                aria-controls="mobile-nav"
                className="block cursor-pointer rounded-sm p-2.5 text-brand transition peer-focus-visible:ring-2 peer-focus-visible:ring-indigo-600 peer-focus-visible:ring-offset-2 hover:text-gray-600/75 md:hidden"
              >
                <span className="sr-only">Toggle menu</span>
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </label>
            </div>
          </div>
        </Container>
      </header>

      <nav
        id="mobile-nav"
        aria-label="Global Mobile"
        className="max-h-0 overflow-hidden border-b border-border bg-white transition-all duration-300 ease-in-out peer-checked:max-h-150 md:hidden"
      >
        <ul className="space-y-1 px-1.5 py-4 text-sm">
          <NavLinkSecondary to="/" isActive>Home</NavLinkSecondary>

          <NavLinkSecondary to="/watches">Watches</NavLinkSecondary>

          <NavLinkSecondary to="/orders">Orders</NavLinkSecondary>
        </ul>

        {/* <div className="flex flex-col gap-2 border-t border-gray-100 px-4 py-4">
          
          <a
            href="#"
            className="rounded-md bg-gray-100 px-5 py-2.5 text-center text-sm font-medium text-indigo-600 transition hover:text-indigo-600/75"
          >
            Sign in
          </a>


        </div> */}


      </nav>
    </div>
  );
};

export default HeaderPrimary;
