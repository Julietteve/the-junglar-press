export const getTextExcerpt = (value, maxChr) => {
     return value.length > maxChr ? `${value.slice(0,maxChr)}...` : value; 
}

export const formatDate = (date) => {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

export const getCategoryId = (category) =>{

    const toLowerCategory = category.toLowerCase();

    switch(toLowerCategory){
            case 'politics':
                return 1;
            case 'international':
                return 2;
            case 'technology':
                return 3;
            case 'spectacles':
                return 4;
            case 'sports':
                return 5;
            case 'design':
                return 6;
            default:
                return 0;
        }
}

export const formatData = (article) =>(
    {
        id: article.news_id,
        url: article.url, 
        title: getTextExcerpt( article.title, 50 ), 
        img_url: article.img_url, 
        source_img: article.source_img, 
        source_name: article.source_name,
        date: article.date,
    }
)

export const getCategoryName = (category) =>{

    switch(category){
        case 1 :
            return 'Politica';
        case 2:
            return 'Internacional';
        case 3:
            return 'Tecnología';
        case 4:
            return 'Espectáculos';
        case 5 :
            return 'Deportes';
        case 6 :
            return 'Diseño';
        default:
            return undefined;
    }
}



