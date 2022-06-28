import store from 'store2'
export const storeDB = store.namespace('db')
export const findOne = (collection, id) => {
    const found = storeDB.local.get(collection)
    if(found.length > 0) {
        return found.find(item => item.id === id)
    }
    return null
}
export const deleteOne = (collection, id) => {
    const found = findOne(collection, id)
    if(found) {
        const newArr = storeDB.local.get(collection).filter(item => item.id !== id)
        storeDB.local.set(collection, newArr)
        return true
    }
    return false
}
export const create = (collection, data) => {
    const found = findOne(collection, data.id)
    if (!found) {
        return storeDB.local.set(collection, [...storeDB.local.get(collection), data])
    }
}

