export function recentSearch(item) {
    const saveToLocal = localStorage.setItem("recent", JSON.stringify(item))
    return saveToLocal
}

export function grabRecent() {
    const grabItem = localStorage.getItem("recent")
    return JSON.parse(grabItem)
}

export function saveToLocal(name) {

    const saveItem = localStorage.setItem("save_location", JSON.stringify(name))
    return saveItem
}

export function grabSaves() {
    const savedItems = localStorage.getItem("save_location")
    return JSON.parse(savedItems)
}
