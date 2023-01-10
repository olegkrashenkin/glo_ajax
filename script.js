'use strict'

const getData = (url) => {
    fetch(url)
        .then(res => {
            res.ok ? console.log('Получено') : console.log(`Ошибка получения! Статус: ${res.status}`)
            return res.json()
        })
        .then(data => {
            sendData({
                url: 'https://jsonplaceholder.typicode.com/posts',
                json: data
            })
        })
        .catch(err => console.log(err))
}

const sendData = ({ url, json }) => {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(json),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
        .then(res => {
            res.ok ? console.log('Отправлено') : console.log(`Ошибка отправки! Статус: ${res.status}`)
        })
}

getData('db.json')