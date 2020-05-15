import Axios from 'axios';

export default Axios.create({
    baseURL: 'https://api.unsplash.com',
    headers : {
        Authorization : 'Client-ID ab0d67e6686a6fcd660eab789207ef2cf03fdba03e7f79ef13475e5340fbd942'
    }
});

