const useUpdateUrl = () => {
    const url = window.location.pathname.slice(1)

    return url
}

export { useUpdateUrl as default }