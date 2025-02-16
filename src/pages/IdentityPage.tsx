import Header from "@/components/header/Header";
import ActionBar from "@/components/actionBar/ActionBar";
import IdentityList from "@/components/identity/IdentityList";
import { identityTabs } from '@/constants/actionBarTabs';
import { useState } from "react";
import { useOutletContext } from "react-router-dom"
import { BaseAppData } from "@/App";
import NewIdentityModal from "@/components/identity/NewIdentityModal";
import { addNewUser } from "@/services/firestore.service";


function IdentityPage (){

    // action bar tab configuration
    const actionBarTabs = identityTabs;
    const [activeTab, setActiveTab] = useState(actionBarTabs[0].value);
    const handleTabChange = (value: string) => {
        setActiveTab(value)
    }

    const { identityCount } = useOutletContext<BaseAppData>();

    // action bar button configurations
    const [newIdentityOpen, setNewIdentityOpen] = useState(false);
    const openNewIdentityModal = () =>{
        setNewIdentityOpen(true);
    }
    const closeNewIdentityModal = () => {
        setNewIdentityOpen(false);
    }

    // const firebaseTest = async () => {

    //     // const newUserId = await addNewUser();
    //     // console.log(newUserId);
    //     console.log(docSnap.data());
    // }



    return(
        <>
            <Header title='Identity' />
            <ActionBar 
                showTabs = { true } 
                showButtons = { true }
                actionTabs = { actionBarTabs }
                activeTab = { activeTab }
                onTabChange = { handleTabChange }
                onNewClick = { openNewIdentityModal }
            />
            <IdentityList identityCount = { identityCount }   />
            <NewIdentityModal open={ newIdentityOpen } onClose={ closeNewIdentityModal }/>
        </>
    )

}

export default IdentityPage;