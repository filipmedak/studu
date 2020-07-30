// Simple Custom Hook that grabs users current browser url, cleans it and returns as string
const useUpdateUrl = () => {
    return window.location.pathname.slice(1)
}

export { useUpdateUrl as default }