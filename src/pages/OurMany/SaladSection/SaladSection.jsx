import React from 'react';
import BannerSection from '../../../Shared/BannerSection/BannerSection';
import useCustom from '../../../CustomHook/useCustom';
import FullMenu from '../../../Shared/FullMenu/FullMenu';

const SaladSection = ({img}) => {
    const [menu] = useCustom();
    const salad = menu.filter(item => item.category === "salad")
    return (
        <div>
            <BannerSection
              img = {img}
              heading={"Salad"}
              subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></BannerSection>
            <FullMenu
             data = {salad}
             btnName={"Order Your Fabourite Food"}
            ></FullMenu>
        </div>
    );
};

export default SaladSection;