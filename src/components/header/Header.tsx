import styles from './header.module.css';

interface HeaderProps {
    title: string;
}


function Header ({title}:HeaderProps){
    return(
        <>
            <h2 id='page_title' className={styles.title}>{title}</h2>
        </>
    )

}

export default Header;