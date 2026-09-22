import { useState } from "react";
import { cn } from "../../lib/utils";
import ProductDetails from "./ProductDetails";
import CustomersFeedbackSection from "./CustomersFeedbackSection";

const TABS = [
  { id: "details", label: "Product Details" },
  { id: "reviews", label: "Reviews" },
];

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("details");

  return (
    <>
      <div className="-mb-px border-b-3 border-[#E2E2E2]">
        <div role="tablist" className="flex">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                id={`tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "border-b-3 px-5.5 py-3.5 text-[13px] md:text-base font-semibold tracking-[1.4px] uppercase transition-colors -mb-0.75 hover:cursor-pointer",
                  isActive
                    ? "border-brand text-brand bg-[#F5F5F5]"
                    : "border-transparent text-muted hover:text-brand",
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab contents */}
      <div
        role="tabpanel"
        id={`panel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
      >
        {activeTab === "details" && (
          <div className="">
            <ProductDetails />
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="">
            <CustomersFeedbackSection />
          </div>
        )}
      </div>
    </>
  );
};

export default ProductTabs;
