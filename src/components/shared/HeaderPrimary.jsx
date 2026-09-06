import React from "react";
import Brand from "../icons/Brand";
import Cart from "../icons/Cart";
import NavLinkPrimary from "./NavLinkPrimary";
import NavLinkSecondary from "./NavLinkSecondary";

const HeaderPrimary = () => {
  return (
    <div className="">
      <input type="checkbox" id="nav-toggle" class="peer sr-only" />

      <header className="">
        <div class="flex h-19 items-center gap-8 w-full max-w-7xl lg:px-8 2xl:max-w-360 mx-auto px-4">
          <a class="block text-indigo-600" href="#">
            <span class="sr-only">Home</span>
            <Brand />
          </a>

          <div class="flex flex-1 items-center justify-end">
            <nav aria-label="Global" class="hidden md:block">
              <ul class="flex items-center gap-9.5 text-sm">
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

            <div class="flex items-center gap-3">
              {/* <div className="block md:hidden">
                <Cart />
              </div> */}

              <label
                for="nav-toggle"
                id="nav-toggle-label"
                aria-expanded="false"
                aria-controls="mobile-nav"
                class="block cursor-pointer rounded-sm p-2.5 text-brand transition peer-focus-visible:ring-2 peer-focus-visible:ring-indigo-600 peer-focus-visible:ring-offset-2 hover:text-gray-600/75 md:hidden"
              >
                <span class="sr-only">Toggle menu</span>
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </label>
            </div>
          </div>
        </div>
      </header>

      <nav
        id="mobile-nav"
        aria-label="Global Mobile"
        class="max-h-0 overflow-hidden border-b border-border bg-white transition-all duration-300 ease-in-out peer-checked:max-h-150 md:hidden"
      >
        <ul class="space-y-1 px-1.5 py-4 text-sm">
          <NavLinkSecondary to="/" isActive>Home</NavLinkSecondary>

          <NavLinkSecondary to="/watches">Watches</NavLinkSecondary>

          <NavLinkSecondary to="/orders">Orders</NavLinkSecondary>
        </ul>

        {/* <div class="flex flex-col gap-2 border-t border-gray-100 px-4 py-4">
          
          <a
            href="#"
            class="rounded-md bg-gray-100 px-5 py-2.5 text-center text-sm font-medium text-indigo-600 transition hover:text-indigo-600/75"
          >
            Sign in
          </a>


        </div> */}


      </nav>
    </div>
  );
};

export default HeaderPrimary;
