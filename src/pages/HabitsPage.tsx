import Header from "@/components/header/Header";
import ActionBar from "@/components/actionBar/ActionBar";
import HabitsList from "@/components/habits/habitsList";
import { useState } from "react";
import { habitsTabs } from '@/constants/actionBarTabs'
import { useOutletContext } from "react-router-dom";
import { BaseAppData } from "@/App";


function HabitsPage (){
    const actionBarTabs = habitsTabs;
    const [activeTab, setActiveTab] = useState(actionBarTabs[0].value);
    
        const handleTabChange = (value: string) => {
            setActiveTab(value)
        }

    const { identityCount, habitCount } = useOutletContext<BaseAppData>();

    return(
        <>
            <Header title='Habits' />
            <ActionBar 
                showTabs = { true } 
                showButtons = { true }
                actionTabs = { actionBarTabs }
                activeTab = { activeTab }
                onTabChange = { handleTabChange }
            />
            <HabitsList identityCount={ identityCount } habitCount={ habitCount }/>

        </>
    )

}

export default HabitsPage;