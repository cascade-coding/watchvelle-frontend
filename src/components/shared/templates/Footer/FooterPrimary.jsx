import React, { useState } from "react";
import Brand from "../../../icons/Brand";
import Instagram from "../../../icons/Instagram";
import Calling from "../../../icons/Calling";
import Location from "../../../icons/Location";
import FooterColumnTitle from "./FooterColumnTitle";
import FooterLink from "./FooterLink";
import Button from "../../Button";
import Container from "../../Container";
import Pinterest from "../../../icons/Pinterest";
import XSocial from "../../../icons/XSocial";

const FooterPrimary = () => {
  const [subscribeEmail, onChangeSubscribeEmail] = useState("");

  return (
    <footer className="bg-white border-t border-border">
      <Container className="pt-16 md:pt-20">
        {/* Content */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-8 pb-10 lg:pb-30">
          {/* Brand + contact info */}
          <div className="flex flex-col gap-4 lg:max-w-xs pr-8 xl:pr-16 -mt-1.5">
            <div>
              <Brand />
            </div>

            <p className="text-base text-foreground max-w-50">
              Timeless watches for every style, every moment.
            </p>

            <div className="flex flex-row gap-3 items-center">
              <div>
                <Calling className="w-5.5 h-5.5" />
              </div>
              <a href="tel:+12025550147" className="text-base text-foreground">
                (202) 555-0147
              </a>
            </div>

            <div className="flex flex-row gap-3 items-start">
              <div>
                <Location />
              </div>

              <a
                href="#"
                className="text-base text-foreground block max-w-[200px]"
              >
                4726 Maplewood Ave. Austin, TX 78704
              </a>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-10 sm:flex-row sm:flex-wrap sm:gap-12 md:items-start xl:justify-between">
            {/* Links */}
            <div className="flex flex-col sm:flex-row gap-10 sm:gap-12 xl:gap-20">
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
            </div>
            {/* Links End */}

            {/* Newsletter + socials */}
            <div className="w-full sm:w-105 lg:shrink-0">
              <FooterColumnTitle>Stay in the Know</FooterColumnTitle>

              <form className="mt-6 w-full">
                <label htmlFor="user-email" className="sr-only">
                  Email
                </label>

                <div className="w-full flex flex-col min-[440px]:flex-row gap-4">
                  <input
                    id="user-email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    value={subscribeEmail}
                    onChange={(e) => onChangeSubscribeEmail(e.target.value)}
                    className="block w-full h-12 outline-none placeholder:text-muted text-foreground text-sm px-3 border border-border rounded-md"
                  />

                  <Button className="font-medium text-sm text-white border-transparent">
                    Subscribe
                  </Button>
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
                    <Pinterest />
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
                    <XSocial />
                  </a>
                </li>
              </ul>
            </div>
            {/* End Newsletter + socials */}
          </div>
        </div>

        {/* Copywrite & Links */}
        <div className="mt-8 border-t border-border pt-5 pb-10">
          <div className="flex flex-col gap-4 sm:gap-6 sm:flex-row sm:justify-between px-1">
            <p className="text-xs text-muted">© 2026 Watchvelle</p>

            <ul className="flex flex-wrap gap-4 text-xs sm:justify-end">
              <li>
                <a
                  href="#"
                  className="text-muted text-sm transition hover:opacity-75"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-muted text-sm transition hover:opacity-75"
                >
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-muted text-sm transition hover:opacity-75"
                >
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* End Copywrite & Links */}
      </Container>
    </footer>
  );
};

export default FooterPrimary;
