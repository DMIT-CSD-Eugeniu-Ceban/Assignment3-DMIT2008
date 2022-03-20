import React from "react";

import {
    IoGridOutline,
    IoChevronForward,
    IoPeopleSharp,
    IoPeopleCircleOutline,
    IoFileTrayStackedOutline,
    IoLibrarySharp,
    IoCart,
    IoStarHalf,
    IoPricetags,
    IoLogInOutline,
    IoCubeSharp,
    IoCopyOutline,
    IoChevronDownSharp,
    IoAddSharp,
    IoHandLeftSharp,
    IoGlassesOutline,
} from "react-icons/io5";

import { SideBarSection } from "./../../ui/sideBarButton";
import { SidebarContainer } from "./../../ui/sideContainer";
import { Sections, H3 } from "./styles";

import { Link } from "react-router-dom";

function SideBar(props) {
    return (
        <Sections>
            <SidebarContainer>
                <SideBarSection>
                    <div style={{ display: "flex" }}>
                        <IoGridOutline size="1.4rem" />
                        <Link
                            to="/dashboard"
                            style={{
                                color: "black",
                                paddingLeft: "0.5rem",
                            }}
                        >
                            DASHBOARD
                        </Link>
                    </div>
                    <div>
                        <IoChevronForward />
                    </div>
                </SideBarSection>
            </SidebarContainer>

            <SidebarContainer>
                <SideBarSection style={{ marginBottom: "1rem" }}>
                    <div style={{ display: "flex" }}>
                        <IoPeopleSharp size="1.4rem" />
                        <H3>VENDORS</H3>
                    </div>
                    <div>
                        <IoChevronForward />
                    </div>
                </SideBarSection>

                <SideBarSection>
                    <div style={{ display: "flex" }}>
                        <IoPeopleCircleOutline size="1.4rem" />
                        <H3>USERS</H3>
                    </div>
                    <div>
                        <IoChevronForward />
                    </div>
                </SideBarSection>
            </SidebarContainer>

            <SidebarContainer>
                <SideBarSection style={{ marginBottom: "1.5rem" }}>
                    <div style={{ display: "flex" }}>
                        <IoFileTrayStackedOutline size="1.4rem" />
                        <H3>CATEGORIES</H3>
                    </div>
                    <div>
                        <IoChevronForward />
                    </div>
                </SideBarSection>

                <SideBarSection style={{ marginBottom: "0.5rem" }}>
                    <div style={{ display: "flex", color: "blueviolet" }}>
                        <IoLibrarySharp size="1.4rem" />
                        <H3
                            style={{
                                textDecoration: "underline",
                                fontWeight: "650",
                            }}
                        >
                            PRODUCTS
                        </H3>
                    </div>
                    <div>
                        <IoChevronDownSharp />
                    </div>
                </SideBarSection>

                <div className="multiButton">
                    <button
                        className="button"
                        style={{
                            paddingLeft: "unset",
                            color: "green",
                            fontWeight: "600",
                        }}
                    >
                        <IoAddSharp />
                        &nbsp;Add New Product
                    </button>
                    <button
                        className="button"
                        style={{
                            paddingLeft: "unset",
                            color: "darkcyan",
                            fontWeight: "600",
                        }}
                    >
                        <IoHandLeftSharp />
                        &nbsp; Edit Product
                    </button>
                    <button
                        className="button"
                        style={{
                            paddingLeft: "unset",
                            color: "orangered",
                            fontWeight: "600",
                        }}
                    >
                        <IoGlassesOutline />
                        &nbsp;View All Products
                    </button>
                </div>

                <SideBarSection style={{ marginBottom: "1.5rem" }}>
                    <div style={{ display: "flex" }}>
                        <IoCart size="1.4rem" />
                        <H3>ORDERS</H3>
                    </div>
                    <div>
                        <IoChevronForward />
                    </div>
                </SideBarSection>

                <SideBarSection style={{ marginBottom: "1.5rem" }}>
                    <div style={{ display: "flex" }}>
                        <IoStarHalf size="1.4rem" />
                        <H3>REVIEWS</H3>
                    </div>
                    <div>
                        <IoChevronForward />
                    </div>
                </SideBarSection>

                <SideBarSection style={{ marginBottom: "1rem" }}>
                    <div style={{ display: "flex" }}>
                        <IoPricetags size="1.4rem" />
                        <H3>BRANDS</H3>
                    </div>
                    <div>
                        <IoChevronForward />
                    </div>
                </SideBarSection>
            </SidebarContainer>

            <SidebarContainer>
                <SideBarSection style={{ marginBottom: "1.5rem" }}>
                    <div style={{ display: "flex" }}>
                        <IoLogInOutline size="1.4rem" />
                        <Link
                            to="/"
                            style={{ color: "black", textDecoration: "none" }}
                        >
                            AUTHENTICATE
                        </Link>
                    </div>
                    <div>
                        <IoChevronForward />
                    </div>
                </SideBarSection>

                <SideBarSection style={{ marginBottom: "1.5rem" }}>
                    <div style={{ display: "flex" }}>
                        <IoCubeSharp size="1.4rem" />
                        <H3>ICONS</H3>
                    </div>
                    <div>
                        <IoChevronForward />
                    </div>
                </SideBarSection>

                <SideBarSection style={{ marginBottom: "1rem" }}>
                    <div style={{ display: "flex" }}>
                        <IoCopyOutline size="1.4rem" />
                        <H3>OTHER PAGES</H3>
                    </div>
                    <div>
                        <IoChevronForward />
                    </div>
                </SideBarSection>
            </SidebarContainer>

            <SidebarContainer style={{ borderBottomWidth: "0" }}>
                <SideBarSection
                    style={{ marginBottom: "1rem", marginTop: "0.8rem" }}
                >
                    <div style={{ display: "flex" }}>
                        <IoCopyOutline size="1.4rem" />
                        <H3>CONTACT US</H3>
                    </div>
                    <div>
                        <IoChevronForward />
                    </div>
                </SideBarSection>
            </SidebarContainer>
        </Sections>
    );
}

export default SideBar;
