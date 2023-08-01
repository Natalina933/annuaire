import React from "react";

const FicheLayout = ({ children }) => {
    return (
        <div>
            <h1>C'est l'entête fiche groupement</h1>
            {children}
        </div>
    );
};

export default FicheLayout;
