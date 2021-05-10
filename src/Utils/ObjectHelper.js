export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
    items.map(u => {
        if (items[objPropName] === itemId) {
            return {...u, ...newObjProps};
        }
        return u
    })
}