import React from "react";

import Pagination from "./Pagination/Pagination";
import User from "./User/User";

const Users = ({users, pageSize, totalUsersCount, currentPage, pageClickHandler, follow, unfollow}) => {

    const usersList = users.map(user => {
        return <User key={user.id} user={user} follow={follow} unfollow={unfollow} />
    });

    return (
        <div>
            <Pagination
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                pageClickHandler={pageClickHandler}
            />
            {usersList}
        </div>
    );
};

export default Users;
