import styles from "./Skills.module.css";
let Skills=()=>{
    return (
        <div className={styles.main}>
            <p className={styles.heading}>Technical Skills</p>
            <ul className={styles.list}>
                <li className={styles.listItem}>Html</li>
                <li className={styles.listItem}>CSS</li>
                <li className={styles.listItem}>JavaScript</li>
                <li className={styles.listItem}>React</li>
                <li className={styles.listItem}>Firebase</li>
            </ul>
            <p className={styles.heading}>Soft Skills</p>
            <ul className={styles.list}>
                <li className={styles.listItem}>Time Management</li>
                <li className={styles.listItem}>Proactive</li>
                <li className={styles.listItem}>Problem Solving Mindset</li>
                <li className={styles.listItem}>Good Communication</li>
                <li className={styles.listItem}>Positive Mindset</li>
            </ul>
        </div>
    )
}

export default Skills;