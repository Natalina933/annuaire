import React from "react";

const FicheLayout = ({ children }) => {
    return (
        <section>
            <h1>C'est l'entête fiche groupement</h1>
            {children}
        </section>
    );
};

export default FicheLayout;
