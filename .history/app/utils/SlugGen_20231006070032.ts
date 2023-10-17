

const SlugGen = (scientific_name: string) => {
    let slug = scientific_name.replace(/ /g, "-").toLowerCase();
    return slug
}

export default SlugGen