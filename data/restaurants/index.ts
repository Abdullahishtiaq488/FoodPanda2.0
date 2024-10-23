// data/restaurants/index.ts
export const restaurantMap: { [key: string]: () => Promise<any> } = {
    "subway-faisal-town": () => import("./subway-faisal-town"),
    "amaltaas-cant": () => import("./amaltaas-cant"),
    // Add more restaurant mappings here as needed
};
