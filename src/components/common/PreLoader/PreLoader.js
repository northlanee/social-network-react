import React from "react";
import LoaderImg from "../../../images/loader.gif";

const PreLoader = () => {
    return (
        <div>
            <img src={LoaderImg} alt="Loading..."/>
        </div>
    );
};

export default PreLoader;
