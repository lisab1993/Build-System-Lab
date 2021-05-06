// const Hello = require('./hello')
import Hello from './hello'
// const yo = require('yo-yo')
import yo from 'yo-yo'

const container = document.getElementById('app-container')

const el = Hello("Lisa Brown")

// mount component to the DOM
container.appendChild(el)
