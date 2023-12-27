import React from 'react';
import BannerSection from '../../../Shared/BannerSection/BannerSection';
import FullMenu from '../../../Shared/FullMenu/FullMenu';
import useCustom from '../../../CustomHook/useCustom';

const SoupSection = ({img}) => {
    const [menu] = useCustom();

    const soups = menu.filter(item => item.category === "soup")

    return (
        <div>
            <BannerSection
             img = {img}
             heading={"Soups"}
              subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></BannerSection>
            <FullMenu
              data = {soups}
              title = {"soup"}
              btnName={"Order Your Fabourite Food"}
            ></FullMenu>
        </div>
    );
};

export default SoupSection;