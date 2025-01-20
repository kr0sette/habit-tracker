import Header from "@/components/header/Header";
import ActionBar from "@/components/actionBar/ActionBar";
import IdentityList from "@/components/identity/IdentityList";
import { identityTabs } from '@/constants/actionBarTabs';
import { useState } from "react";
import { useOutletContext } from "react-router-dom"
import { BaseAppData } from "@/App";


function IdentityPage (){
    const actionBarTabs = identityTabs;
    const [activeTab, setActiveTab] = useState(actionBarTabs[0].value);
    const handleTabChange = (value: string) => {
        setActiveTab(value)
    }

    const { identityCount } = useOutletContext<BaseAppData>();


    return(
        <>
            <Header title='Identity' />
            <ActionBar 
                showTabs = { true } 
                showButtons = { true }
                actionTabs = { actionBarTabs }
                activeTab = { activeTab }
                onTabChange = { handleTabChange }
            />
            <IdentityList identityCount = { identityCount }   />
        </>
    )

}

export default IdentityPage;