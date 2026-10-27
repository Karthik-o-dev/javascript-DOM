const base_api: string = "https://dummyjson.com";

type Recipe = {
    id: number;
    name: string;
    image: string;
    rating?: number;
    cuisine?: string;
    [key: string]: unknown;
}

type RecipesResponse = {
    recipes: Recipe[];
    total: number;
    skip: number;
    limit: number;
};

const get_api = (end_point: string) => {
    return base_api + end_point;
}

const request = async (url: string): Promise<unknown | null> => {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log(error)
        return null;
    }
};

const getAllRecipes = async (): Promise<Recipe[]> => {
    const api = get_api("/recipes?skip=&limit=0")
    const response = await request(api)

    if (
        typeof response === "object" &&
        response !== null &&
        "recipes" in response &&
        Array.isArray(response.recipes)
    ) {
        return response.recipes as Recipe[];
    }

    return [];
}