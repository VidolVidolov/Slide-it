export const convertLink = (link) => {
    const videoId = link.split('watch')[1].split('?v=')[1];
    const newLink = `${link.split('watch')[0]}embed/${videoId}`;
    return newLink;
};
