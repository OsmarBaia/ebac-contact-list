import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Contact {
    id: number;
    name: string;
    phone: string;
    email: string;
}

const initialState: Contact[] = [];

const contactSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        addContact: (state, action: PayloadAction<Contact>) => {
            state.push(action.payload); // Adiciona o novo contato ao estado
        },
        removeContact: (state, action: PayloadAction<number>) => {
            return state.filter(contact => contact.id !== action.payload); // Remove o contato
        },
        updateContact: (state, action: PayloadAction<Contact>) => {
            const index = state.findIndex(c => c.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload; // Atualiza o contato
            }
        },
    },
});

export const { addContact, removeContact, updateContact } = contactSlice.actions;

export default contactSlice.reducer;