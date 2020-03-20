import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <ul className={s.dialogsList}>
                <li>Vasya</li>
                <li>Petya</li>
                <li>Andrei</li>
            </ul>
        </div>
    );
};

export default Dialogs;
