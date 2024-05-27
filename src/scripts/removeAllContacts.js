import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
    try {
        const contacts = [];
        fs.writeFile(PATH_DB, JSON.stringify(contacts), 'utf-8');

    } catch (error) {
        console.log(error);
    }
};

await removeAllContacts();
