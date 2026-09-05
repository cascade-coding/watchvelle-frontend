import React from "react";
import Brand from "../icons/Brand";
import Cart from "../icons/Cart";
import NavLinkPrimary from "./NavLInkPrimary";

const HeaderNav = () => {
  return (
    <div className="">
      <input type="checkbox" id="nav-toggle" class="peer sr-only" />

      <header class="">
        <div class="mx-auto flex h-16 max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <a class="block text-indigo-600" href="#">
            <span class="sr-only">Home</span>
            <Brand />
          </a>

          <div class="flex flex-1 items-center justify-end">
            <nav aria-label="Global" class="hidden md:block">
              <ul class="flex items-center gap-6 text-sm">
                <NavLinkPrimary to="/" isActive>Home</NavLinkPrimary>

                <NavLinkPrimary to="/about">Watches</NavLinkPrimary>

                <NavLinkPrimary to="/orders">Orders</NavLinkPrimary>

                <NavLinkPrimary>
                  <Cart />
                </NavLinkPrimary>

              </ul>
            </nav>

            <div class="flex items-center gap-4">
              <label
                for="nav-toggle"
                id="nav-toggle-label"
                aria-expanded="false"
                aria-controls="mobile-nav"
                class="block cursor-pointer rounded-sm bg-gray-100 p-2.5 text-gray-600 transition peer-focus-visible:ring-2 peer-focus-visible:ring-indigo-600 peer-focus-visible:ring-offset-2 hover:text-gray-600/75 md:hidden"
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
        class="max-h-0 overflow-hidden border-b border-gray-100 bg-white transition-all duration-300 ease-in-out peer-checked:max-h-[600px] md:hidden"
      >
        <ul class="space-y-1 px-4 py-4 text-sm">
          <li>
            <a
              href="#"
              class="block rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-50 transition duration-200"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#"
              class="block rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-50 transition duration-200"
            >
              Watches
            </a>
          </li>

          <li>
            <a
              href="#"
              class="block rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-50 transition duration-200"
            >
              Orders
            </a>
          </li>

          <li>
            <a
              href="#"
              class="block rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-50 transition duration-200"
            >
              Cart
            </a>
          </li>
        </ul>

        <div class="flex flex-col gap-2 border-t border-gray-100 px-4 py-4">
          <a
            href="#"
            class="rounded-md bg-indigo-600 px-5 py-2.5 text-center text-sm font-medium text-white transition hover:bg-indigo-700"
          >
            Start free trial
          </a>

          <a
            href="#"
            class="rounded-md bg-gray-100 px-5 py-2.5 text-center text-sm font-medium text-indigo-600 transition hover:text-indigo-600/75"
          >
            Sign in
          </a>
        </div>
      </nav>
    </div>
  );
};

export default HeaderNav;
