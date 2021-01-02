import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {getUsers} from "./api/userApi";

function GridUsers(){

    const [users, setUsers] = useState([]);

    useEffect( () => {
        async function fetchUsersFromApi() {
            try {
                let response = await getUsers()
                setUsers(response);
            } catch (e) {
                console.log(e.message)
            }
        };
        fetchUsersFromApi();
    }, [])

    return(
        <div className="card">
            <DataTable value={users}>
                <Column field="firstName" header="First Name"></Column>
                <Column field="lastName" header="Last Name"></Column>
            </DataTable>
        </div>
    )
}

export default GridUsers;