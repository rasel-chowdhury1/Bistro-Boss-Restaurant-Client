import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useCustom from '../../../CustomHook/useCustom';
import FullMenu from '../../../Shared/FullMenu/FullMenu';


const OfferSection = () => {
    
    const [menu] = useCustom();
    const offer = menu.filter(item => item.category === "offered");

    return (
        <section className='mb-12 w-4/5 mx-auto'>
            <SectionTitle
              heading={"today's offer"}
              subHeading={"Don't miss"}
            ></SectionTitle>
            <FullMenu
              data = {offer}
              title={"offer"}
              btnName={"Order Your Favourite Food"}
            ></FullMenu>
        </section>
    );
};

export default OfferSection;