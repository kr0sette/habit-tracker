import Header from "@/components/header/Header";
import ActionBar from "@/components/actionBar/ActionBar";
import { useState } from "react";

function IdentityPage (){
    const actionBarTabs = [
        {
            value: 'active',
            label: 'Active'
        },
        {
            value: 'archive',
            label: 'Archive'
        }
    ];

    const [activeTab, setActiveTab] = useState(actionBarTabs[0].value);

    const handleTabChange = (value: string) => {
        setActiveTab(value)
    }

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
        </>
    )

}

export default IdentityPage;