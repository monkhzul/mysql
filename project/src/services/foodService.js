const getAllFood = async () => {
    return await fetch("https://dev-api.mstars.mn/api/foods", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        // body: JSON.stringify(credentials),
    });
};

const getSalad = async (credentials) => {
    return await fetch("https://dev-api.mstars.mn/admin/foods/salad", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    });
};

export const foodService = {
    getAllFood,
    getSalad,
};