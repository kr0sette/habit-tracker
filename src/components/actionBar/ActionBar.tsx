import ActionTabs from './ActionTabs';
import ActionButtons from './ActionButtons';
import styles from './actionBar.module.css'


interface BaseProps {
    showTabs?: boolean,
    showButtons?: boolean
}

interface TabsProps {
    actionTabs: {
        value: string,
        label: string
    }[],
    activeTab: string,
    onTabChange: (value: string) => void
}

interface ButtonProps {
    showButtons: true;
    onNewClick: () => void;
}


type ActionBarProps = BaseProps & (TabsProps | ButtonProps);

function ActionBar (props: ActionBarProps) {
    const { showTabs, showButtons } = props;


    //Make sure right props are available to render tabs and buttons
    const renderTabs = (showTabs === true) && 'actionTabs' in props && 'activeTab' in props && 'onTabChange' in props;
    const renderButtons = (showButtons === true) && 'onNewClick' in props;

    return <>
        <div className={styles.actionBar}>
            { renderTabs && <ActionTabs actionTabs={ props.actionTabs } activeTab={props.activeTab} onValueChange={ props.onTabChange } />}
            { renderButtons && <ActionButtons onNewClick={ props.onNewClick } />}
        </div>
    </>
}

export default ActionBar;