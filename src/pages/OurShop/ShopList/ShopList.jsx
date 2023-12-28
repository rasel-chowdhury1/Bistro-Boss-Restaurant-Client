import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useCustom from '../../../CustomHook/useCustom';
import CardList from '../../../Shared/CardList/CardList';
import { useParams } from 'react-router-dom';

const ShopList = () => {
    const categoryList = ["salad","pizza","soup","dessert","drinks"]
    
    const {category} = useParams();

    const currentIndex = categoryList.indexOf(category) || 0;
    console.log(currentIndex)

    const [menu] = useCustom();

    const salad = menu.filter(item => item.category === "salad");
    const pizza = menu.filter(item => item.category === "pizza");
    const soup = menu.filter(item => item.category === "soup");
    const dessert = menu.filter(item => item.category === "dessert");
    const drinks = menu.filter(item => item.category === "drinks");

    const [tabIndex,setTabIndex] = useState(currentIndex)
    
    return (
        <div className='w-4/5 mx-auto text-center mt-10'>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>
            
                
                <TabPanel>
                   <CardList 
                        data={salad}
                        btnName={"Add to Cart"}
                   ></CardList>
                </TabPanel>
                <TabPanel>
                   <CardList 
                    data={pizza}
                    btnName={"Add to Cart"}
                   ></CardList>
                </TabPanel>
                <TabPanel>
                   <CardList 
                    data={soup}
                    btnName={"Add to Cart"}
                   ></CardList>
                </TabPanel>
                <TabPanel>
                   <CardList 
                     data={dessert}
                     btnName={"Add to Cart"}
                    ></CardList>
                </TabPanel>
                <TabPanel>
                    <CardList
                     data={drinks}
                     btnName={"Add to Cart"}
                     ></CardList>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopList;