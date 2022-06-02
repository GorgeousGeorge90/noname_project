import styles from './FormControls.module.css';


const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error: "")}>
            <textarea {...input} {...props}/>
            {hasError ?
                <span>{meta.error}</span> : undefined
            }
        </div>
    )
}

export default Textarea