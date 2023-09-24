/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable spaced-comment */
/* eslint-disable indent */

const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNotebyIdHandler, deleteNoteByIdHandler } = require("./handler");

/* eslint-disable linebreak-style */
const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHandler,
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNotebyIdHandler,
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler,
    },
];

module.exports = routes;
