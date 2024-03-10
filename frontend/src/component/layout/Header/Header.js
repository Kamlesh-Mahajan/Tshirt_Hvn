import React from "react";
import { ReactNavbar } from "overlay-navbar";
import Tshirt_Hvn from "../../../images/TshirtBlack.png";
import { CgProfile } from "react-icons/cg";
import { MdSearch } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";

const Header = () => {
  return (
    <ReactNavbar
      burgerColorHover="#eb4034"
      logo={Tshirt_Hvn}
      logoWidth="15vmax"
      navColor1="white"
      logoHoverSize="10px"
      logoHoverColor="#eb4034"
      link1Text="Home"
      link2Text="Products"
      link3Text="Contact"
      link4Text="About"
      link1Url="/"
      link2Url="/products"
      link3Url="/contact"
      link4Url="/about"
      link1Size="1.3vmax"
      link1Color="rgba(35, 35, 35,0.8)"
      nav1alignItems="center"
      nav1justifyContent="flex-end"
      nav2justifyContent="flex-end"
      nav3justifyContent="flex-start"
      nav4justifyContent="flex-start"
      link1ColorHover="#eb4034"
      link1Margin="1vmax"
      profileIconUrl="/login"
      profileIconColor="rgba(35, 35, 35,0.8)"
      searchIconColor="rgba(35, 35, 35,0.8)"
      cartIconColor="rgba(35, 35, 35,0.8)"
      profileIconColorHover="#eb4034"
      searchIconColorHover="#eb4034"
      cartIconColorHover="#eb4034"
      cartIconMargin="1vmax"
      profileIcon={true}
      ProfileIconElement={CgProfile}
      profileIconSize="2.2vmax"
      searchIcon={true}
      SearchIconElement={MdSearch}
      cartIcon={true}
      CartIconElement={MdOutlineShoppingCart}
    />
  );
};

export default Header;
