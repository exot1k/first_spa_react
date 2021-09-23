export const updateObjectInArray = (items:any, itemId:any, objPropName:any, newObjProps:any) => {
    items.map((u:any) => {
        if (items[objPropName] === itemId) {
            return {...u, ...newObjProps};
        }
        return u
    })
}