const BASE_LINK = "https://portfolioapi-tau.vercel.app";

const options = {
	method: 'GET',
	headers: {
		
	}
};

const fetcher = async (url) => {
    let response = [];
    try {
        const resp = await fetch(BASE_LINK + url, options);
        if (!resp.ok) {
            throw new Error("Error: " + resp.status);
        }
        response = await resp.json();
        return response;

    } catch (err) {
        console.log(err);
        return response;
    }

}

export const getProjects = async (page) => {
    const projects = await fetcher("/projects?page=" + page);
    return projects;
}

export const getHomeProjects = async () => {
    const projects = await fetcher("/projects/homepage");
    return projects;
}

export const getSocials = async () => {
    const socials = await fetcher("/socials");
    return socials;
}