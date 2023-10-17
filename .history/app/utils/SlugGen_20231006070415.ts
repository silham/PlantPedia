const UrlGen = (scientific_name: string, type: string) => {
    let slug = scientific_name.replace(/ /g, "-").toLowerCase();
    let url = "/" + type.toLowerCase() + "/" + slug
    return url
}

export default UrlGen