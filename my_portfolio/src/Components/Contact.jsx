import styles from "./Contact.module.css";
let Contact=()=>{
    return (
        <div className={styles.main}>
            <p className={styles.heading}>
                Contact Info
            </p>
            <p className={styles.contactNumber}>
                Contact Number : +918295918636
            </p>
            <p className={styles.contactNumber}>
                Email : sakshamverma798@gmail.com
            </p>
        </div>
    )
}

export default Contact;