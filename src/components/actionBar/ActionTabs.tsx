import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import findIndex from 'lodash/findIndex';

interface ActionTabsProps {
    actionTabs: {
        value: string,
        label: string
    }[],
    activeTab?: string,
    onValueChange: (value: string) => void
}

function ActionTabs ({actionTabs, activeTab, onValueChange}: ActionTabsProps) {

    const activeTabIndex = findIndex(actionTabs, ['value', activeTab]);
    const activeTabValue = actionTabs[activeTabIndex].value;

    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
        onValueChange(newValue);
        
    }
    return <>
        <Tabs className="actionTabs" value={activeTabValue} onChange={handleChange}>
            {
                actionTabs.map(({value, label})=> <Tab
                    key={value}
                    value={value}
                    label={label}
                />)
            }
        </Tabs>

    </>
}

export default ActionTabs;