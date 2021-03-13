const Config = {
    backend_base_url: (() => (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? "http://localhost:3001" : "https://api.colandria.com:3001")()
};

export default Config;