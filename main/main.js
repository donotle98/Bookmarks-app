"use strict";
import $ from 'jquery';
import api from './services/api';
import store from './manipulate-store/store';
import render from './render/render';
import event from './event-handler/events';

import './style.css';

function main() {
    render();
    event.eventBinder();

    api.getBookmarks()
        .then((bookmarks) => {
            console.log(bookmarks);
            bookmarks.forEach(element => {
                store.addBookmark(element);
                console.log(element);
            });
            render();
        })
}

$(main);