// Import stylesheets
import './style.css';

import './bst.ts'
import BinarySearchTree from './bst';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

var bst = new BinarySearchTree({id:5,rank:4})

bst.insert({id:6, rank:2});
bst.insert({id:7, rank:3});
bst.insert({id:3, rank:4});
bst.insert({id:4, rank:1});
bst.insert({id:2, rank:4});
bst.insert({id:8, rank:2});


appDiv.innerHTML = bst.countRank(2).toString()