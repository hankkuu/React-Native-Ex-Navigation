

const resources = {
    "pic1.jpg":require('../assets/pic1.jpg'),
    "pic2.jpg":require('../assets/pic2.jpg'),
    "pic3.jpg":require('../assets/pic3.jpg'),
    "pic4.jpg":require('../assets/pic4.jpg'),
}

export function getAssetByFilename(filename){
    if(resources.hasOwnProperty(filename)){
        return resources[filename];
    }
    return null;
}