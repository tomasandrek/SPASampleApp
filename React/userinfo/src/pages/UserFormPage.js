import React from 'react';
import {InputText} from 'primereact/inputtext';

function UserFormPage(props){
    return(
        <div className="p-fluid">
            <div className="p-field">
                <label htmlFor="firstName">Firstname</label>
                <InputText id="firstName" type="text"/>
            </div>
            <div className="p-field">
                <label htmlFor="lastName">Lastname</label>
                <InputText id="lastName" type="text"/>
            </div>
        </div>
    );
};

export default UserFormPage;