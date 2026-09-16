import React from "react";
import Brand from "../../../icons/Brand";
import Instagram from "../../../icons/Instagram";
import Calling from "../../../icons/Calling";
import Location from "../../../icons/Location";
import FooterColumnTitle from "./FooterColumnTitle";
import FooterLink from "./FooterLink";

const FooterPrimary = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Top section — flex row on lg, column on mobile */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-8">
          {/* Brand + contact info */}
          <div className="flex flex-col gap-4 lg:max-w-xs pr-8">
            <div className="pb-3">
              <Brand />
            </div>

            <p className="text-base text-foreground max-w-[200px]">
              Timeless watches for every style, every moment.
            </p>

            <div className="flex flex-row gap-3 items-center">
              <Calling className="w-5.5 h-5.5" />
              <a href="tel:+12025550147" className="text-base text-foreground">
                (202) 555-0147
              </a>
            </div>

            <div className="flex flex-row gap-3 items-start">
              <Location />
              <a
                href="#"
                className="text-base text-foreground block max-w-[200px]"
              >
                4726 Maplewood Ave. Austin, TX 78704
              </a>
            </div>
          </div>

          {/* Links + Newsletter — wrap on mobile, spread on lg */}
          <div className="flex flex-1 flex-col gap-10 sm:flex-row sm:flex-wrap sm:gap-12  md:items-start">
            {/* SHOP */}
            <div className="w-full sm:w-auto">
              <FooterColumnTitle>SHOP</FooterColumnTitle>
              <ul className="mt-6.5 space-y-3.5 text-sm">
                <li>
                  <FooterLink to="/watches">All Watches</FooterLink>
                </li>
                <li>
                  <FooterLink to="#">Featured Watches</FooterLink>
                </li>
                <li>
                  <FooterLink to="#">Best Sellers</FooterLink>
                </li>
                <li>
                  <FooterLink to="#">Shop By Brands</FooterLink>
                </li>
              </ul>
            </div>

            {/* CUSTOMER CARE */}
            <div className="w-full sm:w-auto">
              <FooterColumnTitle>CUSTOMER CARE</FooterColumnTitle>
              <ul className="mt-6.5 space-y-3.5 text-sm">
                <li>
                  <FooterLink to="tel:+12025550147">Contact Us</FooterLink>
                </li>
                <li>
                  <FooterLink to="#">Shipping & Delivery</FooterLink>
                </li>
                <li>
                  <FooterLink to="#">Returns</FooterLink>
                </li>
                <li>
                  <FooterLink to="#">FAQ</FooterLink>
                </li>
              </ul>
            </div>

            {/* Newsletter + socials */}
            <div className="w-full sm:w-auto md:w-[420px] lg:shrink-0">
              <FooterColumnTitle>Stay in the Know</FooterColumnTitle>

              <form className="mt-6 w-full">
                <label htmlFor="UserEmail" className="sr-only">
                  Email
                </label>

                <div className="border border-gray-100 p-2 focus-within:ring-3 sm:flex sm:items-center sm:gap-4">
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="john@rhcp.com"
                    className="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm"
                  />

                  <button className="mt-1 w-full bg-teal-500 px-6 py-3 text-sm font-bold tracking-wide text-white uppercase transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0">
                    Sign Up
                  </button>
                </div>
              </form>
              <ul className="flex flex-row gap-4 pt-4">
                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">Instagram</span>
                    <Instagram />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">Instagram</span>
                    <Instagram />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">Instagram</span>
                    <Instagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-gray-100 pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
            <p className="text-xs text-gray-500">
              &copy; 2022. Company Name. All rights reserved.
            </p>

            <ul className="flex flex-wrap gap-4 text-xs sm:justify-end">
              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterPrimary;
