export const signup = (user) => (
    $.ajax({
        method: 'POST',
        url: 'api/users',
        data: { user }
    })
);
export const login = (user) => (
    $.ajax({
        method: 'GET',
        url: `api/users/${user.id}`,
        data: { user }
    })
);
export const logout = () => (
    $.ajax({
        method: 'DELETE',
        url: `api/session`
    })
);