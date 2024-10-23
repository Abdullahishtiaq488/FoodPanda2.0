// utils/generateKey.js
export const generateKey = (name) => {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
};
