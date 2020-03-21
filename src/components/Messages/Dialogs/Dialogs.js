import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = () => {
    const dialogsData = [
        {
            id: 1,
            name: 'Vasya',
            new: 0
        },
        {
            id: 2,
            name: 'Petya',
            new: 3
        },
        {
            id: 3,
            name: 'Andrei',
            new: 0
        }
    ];

    let dialogsElements = dialogsData.map(
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
