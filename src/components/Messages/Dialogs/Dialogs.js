import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = ({store}) => {

    const dialogs = store.getState().messagesData.dialogs;

    let dialogsElements = dialogs.map(
        d => <li key={d.id} className={s.dialogsListItem}>{d.name} <b>({d.new})</b></li>
    );

    return (
        <div className={s.dialogs}>
            <ul className={s.dialogsList}>
                { dialogsElements }
            </ul>
        </div>
    );
};

export default Dialogs;
