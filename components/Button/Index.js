import React from 'react'
import styles from "./Button.module.css"


const Button = ({ color = "primary", type = "filled", text , link}) => {
    const bgColor = {
        "primary": "#115D8C",
        "secondary": "#999ea3",
        "black": "#000F08",
        "accent": "#F45B69"
    }
    return (
            <div
                onClick={() => {
                    window.open(link, "_blank")
                }}
                style={{
                    backgroundColor: type === "stroked" ? "transparent" : bgColor[color],
                    border: type === "stroked" ? `1px solid ${bgColor[color]}` : 0,
                    borderRadius: type === "rounded" ? "3px" : 0,
                }}
                className={styles.btn}
            >
                {text}
            </div>
    )
}

export default Button
