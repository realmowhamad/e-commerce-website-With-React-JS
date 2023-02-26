import React from "react";

export default function tetst() {
    return <div className={`${isMobile && mobileMenu ? `${style.mobile__Navbar}` : `${isMobile && !mobileMenu ? "hidden" : `${style.navbar__ul} flex w-7/12 items-center h-full justify-around font-sfp_SemiBold text-neutral-700`}`}}></div>;
}
}
