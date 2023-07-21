export function recentSearch(item) {
    const saveToLocal = localStorage.setItem("recent", JSON.stringify(item))
    return saveToLocal
}

export function grabRecent() {
    const grabItem = localStorage.getItem("recent")
    return JSON.parse(grabItem)
}