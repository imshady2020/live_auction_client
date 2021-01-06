export function SaveUser(bool) {
    return {
        type: 'SAVE_USER',
        isLoading: bool
    };
}