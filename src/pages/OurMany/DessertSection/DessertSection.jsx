import React from 'react';
import BannerSection from '../../../Shared/BannerSection/BannerSection';
import useCustom from '../../../CustomHook/useCustom';
import FullMenu from '../../../Shared/FullMenu/FullMenu';

const DessertSection = ({img}) => {
    const [menu] = useCustom()
    const dessert = menu.filter(item => item.category === "dessert")
    return (
        <div>
            <BannerSection
              img={img}
              heading={"DESSERTS"}
              subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></BannerSection>
            <FullMenu
             data = {dessert}
             btnName = {"Order Your Fabourite Food"}
            ></FullMenu>
        </div>
    );
};

export default DessertSection;