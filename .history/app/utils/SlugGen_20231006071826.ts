const UrlGen = (common_name: string ,scientific_name: string, type: string) => {
    let slug = common_name.replace(/ /g, "-").toLowerCase() + scientific_name.replace(/ /g, "-").toLowerCase();
    let url = "/" + type.toLowerCase() + "/" + slug
    return url
}

export default UrlGen