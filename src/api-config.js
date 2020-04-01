let backHost;

if(process.env.NODE_ENV === 'production'){
    backHost = 'https://prod.abc.com';
}else if(process.env.NODE_ENV === 'development'){
    backHost = 'http://localhost:8080';
}

export const ROOT_API = `${backHost}`;