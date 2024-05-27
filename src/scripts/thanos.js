import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { getAllContacts } from './getAllContacts.js';

export const thanos = async () => {
    const condition = Math.random() >= 0.5;
    try {
        const contacts = await getAllContacts();
        for (let i = 0; i <= contacts.length; i += 1) {
            if (condition) {
                contacts.splice(i, 1);
            }
        }
        fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
    } catch (error) {
        console.log(error);
    }
};

await thanos();
