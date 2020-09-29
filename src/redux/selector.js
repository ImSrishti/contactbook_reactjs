export const getdetails = (state) => {

    const temp = {}
    for (let a of state.Contacts.data) {
        temp[a.name] = a
    }
    return temp
};

export const getList = (state) => {
    
    let sortedArray = []

    if (state.Contacts.filter === 'ASC') {
        sortedArray = [...state.Contacts.data.sort((x, y) => {
            if (x.name > y.name) {
                return 1
            } else if (x.name < y.name) {
                return -1
            } else {
                return 0
            }
        })]
        
    } else {
        sortedArray = [...state.Contacts.data.sort((x, y) => {
            if (x.name > y.name) {
                return -1
            } else if (x.name < y.name) {
                return 1
            } else {
                return 0
            }
        })]
        
    }
    return sortedArray
}