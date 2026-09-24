const base_api = "https://dummyjson.com";

const get_api = (end_point) => {
    return base_api + end_point;
}

const request = async (url) => {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch {
        return null;
    }
}

const getAllRecipes = async () => {
    const api = get_api("/recipes?skip=&limit=4")
    const response = await request(api)
    return response.recipes;
}